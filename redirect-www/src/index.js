/* www.dracoxu.com -> dracoxu.com
 *
 * This lives in its own Worker rather than in the site Worker on purpose.
 * The site is served straight off Cloudflare's static-asset path, which never
 * invokes JavaScript; folding a hostname check into it would mean running a
 * script on every request to the real site just to serve the handful that
 * arrive at www. So www gets its own Worker, and the site keeps the fast path.
 *
 * The path and query string are carried across, so a stale link to
 * www.dracoxu.com/publications/?x=1 lands on the right page, not the homepage.
 * 301 is permanent: search engines fold www into the apex and stop asking.
 */
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'dracoxu.com';
    url.protocol = 'https:';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  },
};
