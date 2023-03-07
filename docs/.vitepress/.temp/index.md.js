import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Guebbit SCSS Library","description":"","frontmatter":{},"headers":[],"relativePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="guebbit-scss-library" tabindex="-1">Guebbit SCSS Library <a class="header-anchor" href="#guebbit-scss-library" aria-hidden="true">#</a></h1><p>MIT License, free to use</p><p>This library plans to be a large container of very different SCSS components, divided using the <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noreferrer">Atomic Design Methodology</a></p><p>The best approach is not import the whole library but carefully choose the components that we want from it.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
