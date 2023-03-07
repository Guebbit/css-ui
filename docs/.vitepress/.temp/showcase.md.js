import { ssrRenderAttrs } from "vue/server-renderer";
import { u as useData } from "./Content.f2e2552b.js";
import { useSSRContext } from "vue";
const showcase_md_vue_type_style_index_0_lang = "";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"showcase.md"}');
const __default__ = { name: "showcase.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { site, theme } = useData();
    const { sidebar: categories = [] } = ((_a = site.value) == null ? void 0 : _a.themeConfig) || {};
    function iterateThroughLibrary(obj) {
      for (let len = obj.length, i = 0; len > i; i++) {
        if (obj[i].link && obj[i].showcase)
          loadLibraryItem(obj[i].text, obj[i].link.slice(0, -3) + ".html");
        if (obj[i].items && Array.isArray(obj[i].items))
          iterateThroughLibrary(obj[i].items);
      }
    }
    function loadLibraryItem(name, link) {
      fetch("/components-html" + link).then(
        (response) => response.text().then((html) => {
          const container = document.getElementById("htmlContainer");
          const newDiv = document.createElement("div");
          newDiv.innerHTML = html;
          const anchor = document.createElement("a");
          anchor.innerHTML = name;
          anchor.href = window.location.origin + link;
          container.append(anchor);
          container.append(newDiv);
        })
      );
    }
    iterateThroughLibrary(categories);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="htmlContainer"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("showcase.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
