# hexo-absolute

[![GitHub](https://img.shields.io/github/license/uiolee/hexo-absolute?style=for-the-badge)](https://github.com/uiolee/hexo-absolute/blob/main/LICENSE)
[![Coveralls branch](https://img.shields.io/coverallsCoverage/github/uiolee/hexo-absolute?branch=main&style=for-the-badge)](https://coveralls.io/github/uiolee/hexo-absolute?branch=main)
[![CI](https://img.shields.io/github/actions/workflow/status/uiolee/hexo-absolute/ci.yml?style=for-the-badge&label=ci)](https://github.com/uiolee/hexo-absolute/actions/workflows/ci.yml)

Convert relative path to absolute URL for [hexo](https://github.com/hexojs/hexo)

**Only run when `hexo generate` or `deploy`**, won't run when `hexo server`.

## Install

[![npm](https://img.shields.io/npm/v/hexo-absolute?style=for-the-badge)](https://www.npmjs.com/package/hexo-absolute)
[![npm](https://img.shields.io/npm/dm/hexo-absolute?style=for-the-badge)](https://www.npmjs.com/package/hexo-absolute)
[![npm](https://img.shields.io/npm/dt/hexo-absolute?style=for-the-badge)](https://www.npmjs.com/package/hexo-absolute)

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
