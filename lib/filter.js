'use strict';
const cheerio = require('cheerio');

module.exports = function(str, data) {
  const $ = cheerio.load(str);
  const { url, absolute } = data.config;
  const { tagName, attribute } = absolute;
  const obj = {};
  let host = url;
  host = host.endsWith('/') ? host : host + '/';

  // todo: less iteration
  tagName.forEach(t => {
    attribute.forEach(a => {
      $(t).each(function() {
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

  str = $.html();
  return str;
};

function convert(path, host) {
  let ans;

  // todo: combine more Protocol
  // todo: force http to https
  if (path.startsWith('http') || path.startsWith('ftp') || path.startsWith('mailto')) {
    ans = path;
  } else if (path.startsWith('#')) {
    ans = host + path;
  } else if (path.startsWith('/')) {
    ans = host + path.replace('/', '');
  }
  return ans;
}
