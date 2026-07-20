/* ============================================================
   PLATES — small dense figures, one per paper and per research line.
   Ten types, assigned by what the work is actually about.
   Seeded from the title, so two papers of the same type differ,
   and any one paper looks the same on every visit.
   ============================================================ */

function prng(s) {
  return function () {
    s |= 0; s = s + 0x9E3779B9 | 0;
    var t = s ^ s >>> 16;
    t = Math.imul(t, 0x21f0aaad); t = t ^ t >>> 15;
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
  };
}

export function hash(str) {
  var h = 2166136261;
  for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

function rgba(hex, a) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  var n = parseInt(hex, 16);
  return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
}

function tok(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function fit(cv) {
  var r = Math.min(window.devicePixelRatio || 1, 2);
  var w = cv.clientWidth, h = cv.clientHeight;
  if (!w || !h) return null;
  cv.width = (w * r) | 0; cv.height = (h * r) | 0;
  var c = cv.getContext('2d');
  c.setTransform(r, 0, 0, r, 0, 0);
  return { c: c, w: w, h: h };
}

export function drawPlate(cv, kind, seed) {
  var f = fit(cv); if (!f) return;
  var c = f.c, W = f.w, H = f.h;
  var BG = tok('--plate-bg'), FM = tok('--plate-ink'), IC = tok('--plate-ice');
  var r = prng(seed);

  c.fillStyle = BG; c.fillRect(0, 0, W, H);
  var p = Math.max(2, W * 0.045), iw = W - 2 * p, ih = H - 2 * p;
  var U = W / 84; // unit: everything scales off the canonical 84px plate

  function seg(x0, y0, x1, y1, col, a, w) {
    c.strokeStyle = rgba(col, a); c.lineWidth = w || 1;
    c.beginPath(); c.moveTo(x0, y0); c.lineTo(x1, y1); c.stroke();
  }
  function dot(x, y, col, a, rad) {
    c.fillStyle = rgba(col, a); c.beginPath(); c.arc(x, y, rad, 0, 6.2832); c.fill();
  }

  switch (kind) {
    /* covariance / noise correlation / sliding-window correlation */
    case 'corr': {
      var n = 10, cw = iw / n, chh = ih / n;
      for (var i = 0; i < n; i++) for (var j = 0; j < n; j++) {
        var d = Math.abs(i - j) / n;
        var v = Math.max(0, 1 - d * 2.3) * (0.45 + r() * 0.55);
        if (i === j) v = 1;
        c.fillStyle = rgba((v > 0.55 && r() < 0.35) ? IC : FM, 0.07 + v * 0.58);
        c.fillRect(p + j * cw, p + i * chh, cw + 0.9, chh + 0.9);
      }
      break;
    }
    /* spiking, async/sync, population events */
    case 'raster': {
      var rows = 11, rh = ih / rows, ev = [0.34, 0.72];
      for (var i2 = 0; i2 < rows; i2++) {
        var y = p + i2 * rh + rh * 0.42;
        for (var x = p; x < p + iw; x += 2 * U) {
          var t = (x - p) / iw, pr = 0.12;
          for (var k = 0; k < ev.length; k++) pr += 0.66 * Math.exp(-Math.pow((t - ev[k]) / 0.035, 2));
          if (r() < pr) seg(x, y, x + 1.9 * U, y, FM, 0.62 + 0.35 * r(), Math.max(1, 0.9 * U));
        }
      }
      break;
    }
    /* dynamics, time series, engagement */
    case 'traces': {
      for (var L = 0; L < 4; L++) {
        var yb = p + ih * (L + 0.5) / 4, col = (L === 1) ? IC : FM;
        c.strokeStyle = rgba(col, 0.78); c.lineWidth = Math.max(1, 0.85 * U); c.beginPath();
        for (var x2 = p; x2 <= p + iw; x2 += 1.2 * U) {
          var yy = yb + Math.sin((x2 - p) * 0.30 / U + L * 1.9) * 2.1 * U + (r() - 0.5) * 1.5 * U;
          if (x2 === p) c.moveTo(x2, yy); else c.lineTo(x2, yy);
        }
        c.stroke();
      }
      break;
    }
    /* climate networks, inter-areal circuits, connectomes */
    case 'graph': {
      var nd = [];
      for (var q = 0; q < 9; q++) nd.push([p + iw * r(), p + ih * r()]);
      for (var a1 = 0; a1 < 9; a1++) for (var b1 = a1 + 1; b1 < 9; b1++)
        if (r() < 0.28) seg(nd[a1][0], nd[a1][1], nd[b1][0], nd[b1][1], r() < 0.2 ? IC : FM, 0.34, Math.max(1, 0.7 * U));
      for (var m = 0; m < 9; m++) dot(nd[m][0], nd[m][1], FM, 0.95, 1.6 * U);
      break;
    }
    /* Raven's matrices, abstract rule learning */
    case 'rules': {
      for (var i3 = 0; i3 < 3; i3++) for (var j3 = 0; j3 < 3; j3++) {
        var cx = p + iw * (j3 + 0.5) / 3, cy = p + ih * (i3 + 0.5) / 3;
        var sz = Math.min(iw, ih) / 3 * 0.46;
        if (i3 === 2 && j3 === 2) {           /* the cell to be inferred */
          for (var k4 = 0; k4 < 4; k4++)
            seg(cx - sz / 2, cy - sz / 2 + k4 * sz / 3, cx + sz / 2, cy - sz / 2 + k4 * sz / 3, IC, 0.6, Math.max(1, 0.7 * U));
          continue;
        }
        var md = (i3 + j3 + seed) % 3;
        if (md === 0) { c.fillStyle = rgba(FM, 0.88); c.fillRect(cx - sz / 2, cy - sz / 2, sz, sz); }
        else if (md === 1) {
          for (var a2 = 0; a2 < 360; a2 += 30)
            dot(cx + Math.cos(a2 * Math.PI / 180) * sz * 0.6, cy + Math.sin(a2 * Math.PI / 180) * sz * 0.6, FM, 0.88, 0.9 * U);
        } else {
          seg(cx - sz * 0.6, cy - sz * 0.6, cx + sz * 0.6, cy + sz * 0.6, FM, 0.88, Math.max(1, 0.9 * U));
          seg(cx - sz * 0.6, cy + sz * 0.6, cx + sz * 0.6, cy - sz * 0.6, FM, 0.88, Math.max(1, 0.9 * U));
        }
      }
      break;
    }
    /* i.i.d. sampling over union of joins, estimation */
    case 'sampling': {
      var pts = [];
      for (var s2 = 0; s2 < 46; s2++) pts.push([p + iw * r(), p + ih * r()]);
      for (var s3 = 0; s3 < pts.length; s3++) dot(pts[s3][0], pts[s3][1], FM, 0.42, 1.15 * U);
      for (var s4 = 0; s4 < 9; s4++) dot(pts[s4][0], pts[s4][1], IC, 0.98, 1.9 * U);
      break;
    }
    /* perceptual decision, threshold, psychometric function */
    case 'psycho': {
      seg(p, H - p, p + iw, H - p, FM, 0.38, 1);
      seg(p, p, p, H - p, FM, 0.38, 1);
      c.strokeStyle = rgba(IC, 0.92); c.lineWidth = Math.max(1, U); c.beginPath();
      for (var i5 = 0; i5 <= 40; i5++) {
        var t5 = i5 / 40, x5 = p + iw * t5, v5 = 1 / (1 + Math.exp(-(t5 - 0.5) * 11));
        var y5 = H - p - v5 * (ih - 1);
        if (!i5) c.moveTo(x5, y5); else c.lineTo(x5, y5);
      }
      c.stroke();
      for (var i6 = 0; i6 < 7; i6++) {
        var t6 = (i6 + 0.5) / 7, v6 = 1 / (1 + Math.exp(-(t6 - 0.5) * 11)) + (r() - 0.5) * 0.16;
        dot(p + iw * t6, H - p - Math.max(0, Math.min(1, v6)) * (ih - 1), FM, 0.92, 1.4 * U);
      }
      break;
    }
    /* whole-brain gradients, spatial maps, embeddings */
    case 'field': {
      var fx = p + iw * 0.5, fy = p + ih * 0.5;
      for (var k5 = 0; k5 < 6; k5++) {
        var u = (k5 + 1) / 6, rad = Math.min(iw, ih) * 0.46 * u;
        c.strokeStyle = rgba(k5 === 3 ? IC : FM, 0.30 + 0.5 * (1 - u));
        c.lineWidth = Math.max(1, 0.8 * U); c.beginPath();
        for (var a5 = 0; a5 <= 360; a5 += 8) {
          var th = a5 * Math.PI / 180;
          var rr = rad * (1 + 0.16 * u * Math.sin(3 * th + (seed % 7)) + 0.09 * u * Math.sin(5 * th + 1.1));
          var xx = fx + Math.cos(th) * rr, yy2 = fy + Math.sin(th) * rr * 0.82;
          if (!a5) c.moveTo(xx, yy2); else c.lineTo(xx, yy2);
        }
        c.stroke();
      }
      break;
    }
    /* attention, representational rotation onto a fixed readout */
    case 'rotation': {
      var ax = p + ih * 0.62, rcx = p + iw * 0.48, base = [];
      for (var b2 = 0; b2 < 26; b2++) base.push([(r() - 0.5) * 2 * iw * 0.40, (r() - 0.5) * 2 * 2.0 * U]);
      seg(p + iw * 0.06, ax, p + iw * 0.90, ax, IC, 0.88, Math.max(1, U));
      var gh = -42 * Math.PI / 180;
      for (var g1 = 0; g1 < base.length; g1++)
        dot(rcx + base[g1][0] * Math.cos(gh) - base[g1][1] * Math.sin(gh),
            ax + base[g1][0] * Math.sin(gh) + base[g1][1] * Math.cos(gh), FM, 0.24, 1.1 * U);
      for (var g2 = 0; g2 < base.length; g2++)
        dot(rcx + base[g2][0], ax + base[g2][1] - 3.4 * U, FM, 0.95, 1.3 * U);
      break;
    }
    /* Maieusis — questions branching; the ice tips are the answerable ones */
    case 'tree': {
      (function branch(x, y, ang, len, depth) {
        if (depth > 4 || len < 2) return;
        var x2b = x + Math.cos(ang) * len, y2b = y + Math.sin(ang) * len;
        seg(x, y, x2b, y2b, FM, 0.32 + depth * 0.10, Math.max(1, (5 - depth) * 0.35 * U));
        if (depth === 4) {
          if (r() < 0.42) dot(x2b, y2b, IC, 0.98, 1.8 * U);
          else dot(x2b, y2b, FM, 0.35, 1.0 * U);
          return;
        }
        branch(x2b, y2b, ang - (0.34 + r() * 0.34), len * (0.70 + r() * 0.12), depth + 1);
        branch(x2b, y2b, ang + (0.30 + r() * 0.34), len * (0.70 + r() * 0.12), depth + 1);
      })(p + iw * 0.12, H - p, -Math.PI / 2 + 0.34, ih * 0.40, 0);
      break;
    }
  }
}

/* ============================================================
   THE THRESHOLD FIELD — the site's one large mark, and the only
   canvas on the home page. It belongs to the identity sentence,
   not to any single project.

   Mark density across the boundary follows a cumulative Gaussian:
   read as art it is fog thinning toward a horizon, read as science
   it is a psychometric function with variability at the criterion.
   ============================================================ */
function erf(x) {
  var s = x < 0 ? -1 : 1; x = Math.abs(x);
  var a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741,
      a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  var t = 1 / (1 + p * x);
  return s * (1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x));
}
function gcdf(z) { return 0.5 * (1 + erf(z / Math.SQRT2)); }

export function drawThresholdField(cv) {
  var f = fit(cv); if (!f) return;
  var c = f.c, W = f.w, H = f.h;
  var INK = tok('--contour'), B = tok('--berlin');
  var r = prng(7717), y0 = H * 0.60, sigma = H * 0.13, drawn = 0;

  c.clearRect(0, 0, W, H);
  for (var gy = 6; gy < H - 6; gy += 8) {
    for (var gx = 8; gx < W - 8; gx += 10) {
      var p = gcdf((gy - y0) / sigma) * 0.62;
      if (r() < p && drawn < 130) {
        var jx = (r() - 0.5) * 4, jy = (r() - 0.5) * 4;
        var L = 3 + r() * 5, ang = (r() - 0.5) * 0.45;
        c.strokeStyle = rgba(INK, 0.05 + 0.13 * p); c.lineWidth = 1;
        c.beginPath(); c.moveTo(gx + jx, gy + jy);
        c.lineTo(gx + jx + Math.cos(ang) * L, gy + jy + Math.sin(ang) * L); c.stroke();
        drawn++;
      }
    }
  }
  c.strokeStyle = rgba(B, 0.55); c.lineWidth = 1;
  c.beginPath(); c.moveTo(0, y0 + 2); c.lineTo(W, y0 - 3); c.stroke();
}

export function paintAllPlates() {
  var list = document.querySelectorAll('canvas[data-plate]');
  for (var i = 0; i < list.length; i++) {
    var el = list[i];
    drawPlate(el, el.dataset.plate, hash(el.dataset.seed || el.dataset.plate) >>> 0);
  }
  var fields = document.querySelectorAll('canvas[data-field]');
  for (var j = 0; j < fields.length; j++) drawThresholdField(fields[j]);
}
