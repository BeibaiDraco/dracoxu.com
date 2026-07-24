# 更新指南 · dracoxu.com

写给未来的自己。所有命令都可以直接复制粘贴到终端。

> **一条铁律**:推送到 `main` 就是发布。没有预览、没有"确定吗",大约 40 秒后全世界看到。所以每次改完先自己看一眼,再推。

命令都在这个目录里跑:

```bash
cd "/Users/minidraco/Library/Mobile Documents/com~apple~CloudDocs/websites/site"
```

---

## 一张表:我想改什么

| 我想改… | 改哪个文件 | 怎么发布 |
| --- | --- | --- |
| 加一条 News | `src/data/news.js` | `git add -A && git commit -m "news" && git push` |
| 加/改一个奖 | `src/data/site.js`（`awardsSelected`） | 同上 |
| 改项目描述、合作者、链接 | `src/data/projects.js` / `site.js` | 同上 |
| **加一篇论文** | `src/data/publications.js` **和** CV 两处 | 见下面「加论文」 |
| 只改 CV 文字 | 在 **Overleaf** 上改 | `npm run cv:update` |
| 改版式 / 字体 / 颜色 | `src/styles/hakumei.css` | `npm run build` 看一眼，再 push |
| 换照片 / 换 OG 卡片 | `public/` 里的图片 | push |

不确定改完什么样？本地开个预览，边改边看：

```bash
npm run dev        # 打开 http://localhost:4321
```

---

## 更新 CV

CV 在两个地方存在，**Overleaf 是正本**，网站上的 PDF 是它的副本。

### 平常：在 Overleaf 上改完，让网站跟上

在 [Overleaf 项目](https://www.overleaf.com/project/6239ef0843aa8ff57fbe9c64) 上照常写。改完，回到这台 Mac 跑**一条命令**：

```bash
npm run cv:update
```

它会：从 Overleaf 拉最新的 → 重新生成 PDF → 提交并推送。CV 一分钟后在 dracoxu.com/cv.pdf 更新。
如果 Overleaf 没有新改动，它会说 "nothing to do" 然后什么都不做，多跑几次也没关系。

### 其它几条 CV 命令（一般用不到）

```bash
npm run cv:sync    # 只看 Overleaf 和这边差在哪，不动任何东西
npm run cv:pull    # 拉下来 + 重编 PDF，但不提交（想先看看再决定时用）
npm run cv:push    # 反过来：把这边的改动送回 Overleaf
```

### 换了一台电脑怎么办

CV 需要 LaTeX 工具链，所以换机器要先装一次：

```bash
brew install tectonic
git clone https://git@git.overleaf.com/6239ef0843aa8ff57fbe9c64 ~/.overleaf-cv
```

`git clone` 会问 **Password** —— 粘贴 Overleaf 的 **Git 认证 token**（不是账号密码）。
Token 在 [overleaf.com/user/settings](https://www.overleaf.com/user/settings) → Git integration 里生成，一年过期。
（终端里粘贴密码不显示任何字符，是正常的，直接回车。）

---

## 加论文（唯一容易出错的操作）

一篇论文在**两个地方**各有一份，必须一起改，否则网站的 Publications 页和 CV 会对不上：

1. **CV**：在 Overleaf 上加，正常写。
2. **网站**：编辑 `src/data/publications.js`，照着已有条目的格式加一条（作者、年份、标题、期刊、DOI、链接）。

然后**两处一起提交**（这时候不要用 `npm run cv:update`，它会拦住你）：

```bash
npm run cv:pull                          # 拉 CV + 重编 PDF，先不提交
# 确认 publications.js 也改好了
git add -A && git commit -m "Add paper: <标题>" && git push
```

> 校对小抄：作者名逐字对（今天就查出过 Ermentrout / Yurong / Fatemeh 被拼错），期刊全称、年份、DOI 两边一致。

---

## 完全没有电脑的时候

任何落到 `main` 上的提交都会发布，所以**在 GitHub 网页上直接改文本文件是完全正当的做法**，手机也行：

1. 打开 [github.com/BeibaiDraco/dracoxu.com](https://github.com/BeibaiDraco/dracoxu.com)
2. 进 `src/data/news.js`（或别的数据文件），点铅笔图标
3. 改完点 **Commit changes**

加一条 News、改个链接，这样最快。只有 CV 改不了（需要 LaTeX）。

---

## 出问题了

- **改完网站没更新** → 去 [仓库的 Actions/构建页](https://github.com/BeibaiDraco/dracoxu.com) 看有没有红色的失败构建，把截图发给 Claude Code。构建失败不会弄坏线上版本，它会停在上一个好版本。
- **`npm run cv:update` 报 403** → Overleaf 的 token 过期了（一年一次），重新生成一个，再 `git -C ~/.overleaf-cv pull` 时粘进去。
- **想让 Claude 帮忙** → 在 claude.ai/code 开个会话连上这个仓库，说清楚要改什么。给 agent 的操作说明在 [`CLAUDE.md`](CLAUDE.md)。

---

## 这套东西长什么样（背景，可跳过）

- **框架**：Astro，静态站；源码在 `src/`，构建产物在 `dist/`（不进 git）。
- **托管**：Cloudflare，两个 Worker —— `dracoxu-com`（网站本体）和 `dracoxu-www-redirect`（把 www 跳到主域名）。
- **自动部署**：push 到 `main` → Cloudflare Workers Builds 自动构建部署。设置在 Cloudflare 后台，不在代码里。
- 更细的架构说明在 [`README.md`](README.md)。
