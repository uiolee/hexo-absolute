"use strict";

const { load } = require("cheerio");

function convert(path, host) {
  let ans;

  // todo: combine more Protocol
  // todo: force http to https
  if (
    path.startsWith("http") ||
    path.startsWith("ftp") ||
    path.startsWith("mailto")
  ) {
    ans = path;
  } else if (path.startsWith("#")) {
    ans = host + path;
  } else if (path.startsWith("/")) {
    ans = host + path.replace("/", "");
  }
  return ans;
}

function filterFn(data, locals) {
  const $ = load(data);
  const { url, absolute } = locals.config;
  const { tagName, attribute } = absolute;
  const obj = {};
  let host = url;
  host = host.endsWith("/") ? host : host + "/";

  // todo: less iteration
  tagName.forEach((t) => {
    attribute.forEach((a) => {
      $(t).each(function () {
        let ans;
        const res = $(this).attr(a);
        if (res) {
          if (obj[res]) {
            ans = obj[res];
          } else {
            ans = convert(res, host);
            obj[res] = ans;
          }
          $(this).attr(a, ans);
        }
      });
    });
  });

  data = $.html();
  return data;
}

module.exports = filterFn;
