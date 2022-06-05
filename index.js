/* global hexo */
'use strict';

hexo.config.absolute = Object.assign({
  tagName: ['a', 'link', 'img', 'script'],
  attribute: ['href', 'src'],
  priority: 20,
  disable: false
}, hexo.config.absolute);

const absolute = hexo.config.absolute;

const filter = require('./lib/filter');

if (!absolute.disable) {
  hexo.extend.filter.register('after_render:html', filter, absolute.priority);
}
