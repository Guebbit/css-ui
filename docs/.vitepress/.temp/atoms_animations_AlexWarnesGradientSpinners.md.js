import { resolveComponent, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { V as VPTeamMembers } from "./VPTeamMembers.ae54a828.js";
import "./plugin-vue_export-helper.cc2b3d55.js";
import "./Content.f2e2552b.js";
import "@vueuse/core";
import "body-scroll-lock";
const AlexWarnesGradientSpinners_md_vue_type_style_index_0_lang = "";
const __pageData = JSON.parse(`{"title":"Alex Warnes's Gradient Spinners","description":"","frontmatter":{},"headers":[{"level":3,"title":"Codepen","slug":"codepen","link":"#codepen","children":[]},{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"SCSS variables","slug":"scss-variables","link":"#scss-variables","children":[]},{"level":2,"title":"Authors","slug":"authors","link":"#authors","children":[]}],"relativePath":"atoms/animations/AlexWarnesGradientSpinners.md"}`);
const __default__ = { name: "atoms/animations/AlexWarnesGradientSpinners.md" };
const _sfc_main = Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const Authors = [
      {
        avatar: "https://placekitten.com/100/100",
        name: "Alex Warnes",
        title: "Creator",
        links: [
          {
            icon: "github",
            link: "#"
          },
          {
            icon: "slack",
            link: "https://alexwarnes.com/"
          },
          {
            icon: "slack",
            link: "https://codepen.io/AlexWarnes"
          }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Badge = resolveComponent("Badge");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alex-warnes-s-gradient-spinners" tabindex="-1">Alex Warnes&#39;s Gradient Spinners <a class="header-anchor" href="#alex-warnes-s-gradient-spinners" aria-hidden="true">#</a></h1>`);
      _push(ssrRenderComponent(_component_Badge, { type: "tip" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Atom`);
          } else {
            return [
              createTextVNode("Atom")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` `);
      _push(ssrRenderComponent(_component_Badge, { type: "info" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Animation`);
          } else {
            return [
              createTextVNode("Animation")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` `);
      _push(ssrRenderComponent(_component_Badge, { type: "info" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Progression`);
          } else {
            return [
              createTextVNode("Progression")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h3 id="codepen" tabindex="-1"><a href="https://codepen.io/AlexWarnes/pen/jXYYKL" target="_blank" rel="noreferrer">Codepen</a> <a class="header-anchor" href="#codepen" aria-hidden="true">#</a></h3><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="dev-section"><div class="alex-warnes-progressions gradient-spinner"><div></div></div></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-cZ_gn" id="tab-MKYHlzW" checked="checked"><label for="tab-MKYHlzW">AlexWarnesGradientSpinners.html</label><input type="radio" name="group-cZ_gn" id="tab-LzS3L4Y"><label for="tab-LzS3L4Y">AlexWarnesGradientSpinners.scss</label></div><div class="blocks"><div class="language-html active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}"> </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">class</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">=</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">alex-warnes-progressions gradient-spinner</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&lt;/</span><span style="${ssrRenderStyle({ "color": "#F07178" })}">div</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&gt;</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">@import</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C3E88D" })}">./AlexWarnesProgressionCore</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">alex-warnes-progressions</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">&amp;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">.</span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">gradient-spinner</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">padding</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> $alex-warnes-progressions-border-size</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">background</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> $alex-warnes-progressions-secondary</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">background</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">linear-gradient</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0deg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">rgba</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">$alex-warnes-progressions-secondary</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0.1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">33%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">rgba</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">$alex-warnes-progressions-secondary</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">,</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">1</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">)</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">animation</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> alex-warnes-progressions-spin </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">.8s</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> linear infinite</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">&amp;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">::</span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">after</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">            </span><span style="${ssrRenderStyle({ "color": "#FFCB6B" })}">content</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">&#39;&#39;</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">            </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">width</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">            </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">height</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">100%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">            </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">border-radius</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">50%</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">            </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">background-color</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> $alex-warnes-progressions-background</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF", "font-style": "italic" })}">@keyframes</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">alex-warnes-progressions-spin</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">from</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">rotate</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">0</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#C792EA" })}">to</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">        </span><span style="${ssrRenderStyle({ "color": "#B2CCD6" })}">transform</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">:</span><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}"> </span><span style="${ssrRenderStyle({ "color": "#82AAFF" })}">rotate</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">(</span><span style="${ssrRenderStyle({ "color": "#F78C6C" })}">359deg</span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#A6ACCD" })}">    </span><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#89DDFF" })}">}</span></span></code></pre></div></div></div><h2 id="scss-variables" tabindex="-1">SCSS variables <a class="header-anchor" href="#scss-variables" aria-hidden="true">#</a></h2><table><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Variable</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Accepted Values</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Default</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>$alex-warnes-progressions-size</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Main size</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>size</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>200</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>$alex-warnes-progressions-border-size</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Border size</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>size</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>5px</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>$alex-warnes-progressions-secondary</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Secondary color</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>color</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>#fb5b53</code></td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>$alex-warnes-progressions-background</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}">Background color</td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>color</code></td><td style="${ssrRenderStyle({ "text-align": "left" })}"><code>#1d2630</code></td></tr></tbody></table><h2 id="authors" tabindex="-1">Authors <a class="header-anchor" href="#authors" aria-hidden="true">#</a></h2>`);
      _push(ssrRenderComponent(unref(VPTeamMembers), {
        size: "small",
        members: Authors
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("atoms/animations/AlexWarnesGradientSpinners.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
