# hexo-absolute

[![GitHub Tag](https://img.shields.io/github/v/tag/uiolee/hexo-absolute?logo=github)](https://github.com/uiolee/hexo-absolute/tags)
[![GitHub Release](https://img.shields.io/github/v/release/uiolee/hexo-absolute?logo=github)](https://github.com/uiolee/hexo-absolute/releases)
[![GitHub commits since latest release](https://img.shields.io/github/commits-since/uiolee/hexo-absolute/latest?include_prereleases&sort=semver&logo=github)](https://github.com/uiolee/hexo-absolute/compare/...main)
[![GitHub top language](https://img.shields.io/github/languages/top/uiolee/hexo-absolute?logo=github)](#hexo-absolute)
[![Coverage Status](https://coveralls.io/repos/github/uiolee/hexo-absolute/badge.svg?branch=main)](https://coveralls.io/github/uiolee/hexo-absolute?branch=main)
[![CI](https://github.com/uiolee/hexo-absolute/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/uiolee/hexo-absolute/actions/workflows/ci.yml)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/uiolee/hexo-absolute?logo=librariesdotio)](https://libraries.io/github/uiolee/hexo-absolute#dependencies)

Convert relative path to absolute URL for [hexo](https://github.com/hexojs/hexo)

Only run when `hexo generate` or `deploy`, won't run when `hexo server`.

## Install

[![NPM Version](https://img.shields.io/npm/v/hexo-absolute?logo=npm)](https://www.npmjs.com/package/hexo-absolute)
[![node-lts](https://img.shields.io/node/v-lts/hexo-absolute?logo=nodedotjs)](https://nodejs.org/)
[![NPM License](https://img.shields.io/npm/l/hexo-absolute)](./LICENSE)
[![NPM Downloads](https://img.shields.io/npm/dm/hexo-absolute?logo=npm)](#hexo-absolute)
[![NPM Downloads](https://img.shields.io/npm/dt/hexo-absolute?logo=npm)](#hexo-absolute)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/hexo-absolute?logo=librariesdotio)](https://libraries.io/npm/hexo-absolute/tree)

```bash
pnpm add hexo-absolute

# npm i hexo-absolute
```

## Configuration

### Website Configuration

```yaml
# If your website is in a subdirectory (such as http://example.org/blog) set url to http://example.org/blog and set root to /blog/.
url: http://example.org/blog
```

[**Hexo/Docs/Configuration#URL**](https://hexo.io/docs/configuration#URL)

### Plugin Configuration

```yaml
absolute:
  enable: true
  tagName: ["a", "link", "img", "script"]
  attribute: ["href", "src"]
  priority: 20
```

- `enable`

  boolean, set `false` to disable this plugin.

- `tagName`

  html tag name

- `attribute`

  html tag attribute

- `priority`

  define the priority of this plugin.

  > [**Hexo/API/Filter#Synopsis:**
  > You can define the priority. Lower priority means that it will be executed first. The default priority is 10.](https://hexo.io/api/filter.html#Synopsis)

## Example (default config)

### before

```html
<a href="#top">top</a>
<link rel="stylesheet" href="/css/style.css" />
<img src="/images/hexo.png" />
<script src="/js/jquery-2.2.4.min.js"></script>
```

### after

```html
<a href="https://example.org/#top">top</a>
<link rel="stylesheet" href="https://example.org/css/style.css" />
<img src="https://example.org/images/hexo.png" />
<script src="https://example.org/js/jquery-2.2.4.min.js"></script>
```

## Uninstall

```bash
pnpm rm hexo-absolute

# npm uninstall hexo-absolute
```
