/* global hexo */

"use strict";

const filterFn = require("./lib/filter");

hexo.config.absolute = Object.assign(
  {
    enable: true,
    tagName: ["a", "link", "img", "script"],
    attribute: ["href", "src"],
    priority: 20,
  },
  hexo.config.absolute,
);

const absolute = hexo.config.absolute;

if (
  absolute.enable &&
  (hexo.env.cmd.startsWith("g") || hexo.env.cmd.startsWith("d"))
) {
  hexo.extend.filter.register("after_render:html", filterFn, absolute.priority);
}
