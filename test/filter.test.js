"use strict";

const { load } = require("cheerio");
const absoluteFn = require("../lib/filter");

const defaultCfg = {
  enable: true,
  tagName: ["a", "link", "img", "script"],
  attribute: ["href", "src"],
  priority: 20,
};

const fullHtml = (str, head = false) => {
  if (!head) {
    return load(`<html><head></head><body>${str}</body></html>`).html();
  } else {
    return load(`<html><head>${str}</head><body></body></html>`).html();
  }
};

describe("hexo-absolute", () => {
  let config;
  let locals;
  beforeEach(() => {
    config = { url: "https://absolute.example.com", absolute: defaultCfg };
    locals = { config };
  });

  test("default - single", () => {
    const html = fullHtml(`<link rel="stylesheet" href="/css/style.css" />`);
    const res = absoluteFn(html, locals);
    expect(res).toBe(
      '<html><head></head><body><link rel="stylesheet" href="https://absolute.example.com/css/style.css"></body></html>',
    );
  });
  test("default - example", () => {
    const html = `<a href="#top">top</a>
<link rel="stylesheet" href="/css/style.css" />
<img src="/images/hexo.png" />
<script src="/js/jquery-2.2.4.min.js"></script>`;
    const res = absoluteFn(html, locals);
    expect(res)
      .toBe(`<html><head></head><body><a href="https://absolute.example.com/#top">top</a>
<link rel="stylesheet" href="https://absolute.example.com/css/style.css">
<img src="https://absolute.example.com/images/hexo.png">
<script src="https://absolute.example.com/js/jquery-2.2.4.min.js"></script></body></html>`);
  });
  test("default - empty", () => {
    const html = ``;
    const res = absoluteFn(html, locals);
    expect(res).toBe("<html><head></head><body></body></html>");
  });
  test("default - fulfill", () => {
    const html = `<img src="http://absolute.example.com/images/hexo.png" />`;
    const res = absoluteFn(html, locals);
    expect(res).toBe(
      fullHtml(`<img src="http://absolute.example.com/images/hexo.png"/>`),
    );
  });
  test("default - cache", () => {
    const html = `<a href="#top">top</a><a href="#top">top</a>`;
    const res = absoluteFn(html, locals);
    expect(res).toBe(
      fullHtml(
        `<a href="https://absolute.example.com/#top">top</a><a href="https://absolute.example.com/#top">top</a>`,
      ),
    );
  });
  test("default - wrong website config", () => {
    const html = `<a href="#top">top</a>`;
    locals.config.url = "https://absolute.example.com/";
    const res = absoluteFn(html, locals);
    expect(res).toBe(
      fullHtml(`<a href="https://absolute.example.com/#top">top</a>`),
    );
  });
});
