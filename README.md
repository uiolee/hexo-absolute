# hexo-absolute
convert relative path to absolute URL for hexo

## Bugs

- The plugin will running in `hexo serve` (it means you can't preview your website local.)

## Install

```bash
npm i hexo-absolute
```
or
```bash
npm i git@github.com:uiolee/hexo-absolute.git
```

## Config

### Website Configuration

```yaml
# If your website is in a subdirectory (such as http://example.org/blog) set url to http://example.org/blog and set root to /blog/.
url: http://example.org/blog
```
[Docs: Hexo/Configuration#URL](https://hexo.io/docs/configuration#URL)

### Plugin default config

```yaml
absolute:
  tagName: ['a', 'link', 'img', 'script']
  attribute: ['href', 'src']
  priority: 20
  disable: 0
```

- `tagName`

    html tag name

- `attribute`

    html tag attribute

- `priority`

    >[You can define the priority. Lower priority means that it will be executed first. The default priority is 10.](https://hexo.io/api/filter.html#Synopsis)

- `disable`

    boolean, set `1` to disable this plugin.

## Example (default config)

### before

```html
<a href="#top">top</a>
<link rel="stylesheet" href="/css/style.css" />
<img src="/images/hexo.png"/>
<script src="/js/jquery-2.2.4.min.js"></script>
```

### after

```html
<a href="https://example.org/#top">top</a>
<link rel="stylesheet" href="https://example.org/css/style.css" />
<img src="https://example.org/images/hexo.png"/>
<script src="https://example.org/js/jquery-2.2.4.min.js"></script>
```

## Uninstall

```bash
npm uninstall hexo-absolute
```

## TODO

see [./lib/filter.js](./lib/filter.js) comment for more.
