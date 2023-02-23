import{_ as n,r as o,o as c,c as d,a as s,w as a,b as t,d as l,e as p}from"./app.eb0aac19.js";const x=JSON.parse('{"title":"Advancing Moon","description":"","frontmatter":{},"headers":[{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"Classes","slug":"classes","link":"#classes","children":[]},{"level":2,"title":"SCSS variables","slug":"scss-variables","link":"#scss-variables","children":[]}],"relativePath":"atoms/animations/AdvancingMoon.md"}'),i={name:"atoms/animations/AdvancingMoon.md"},r=l("h1",{id:"advancing-moon",tabindex:"-1"},[t("Advancing Moon "),l("a",{class:"header-anchor",href:"#advancing-moon","aria-hidden":"true"},"#")],-1),y=p(`<p>Use the SCSS or CSS variables to do what you want with this special fade-in or fade-out animation</p><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="dev-section"><img class="advancing-moon-reveal" src="http://placekitten.com/400/400" style="--advancing-moon-reveal-opacity-start:1;--advancing-moon-reveal-scale-end:1.5;"><img class="advancing-moon-reveal to-left" src="http://placekitten.com/400/400"></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">advancing-moon-reveal</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://placekitten.com/400/400</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">--advancing-moon-reveal-opacity-start: 1; --advancing-moon-reveal-scale-end: 1.5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">advancing-moon-reveal to-left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://placekitten.com/400/400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><div class="dev-section"><img class="advancing-moon-reveal fade-out" src="http://placekitten.com/400/400"><img class="advancing-moon-reveal fade-out to-left" src="http://placekitten.com/400/400"></div><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">advancing-moon-reveal fade-out</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://placekitten.com/400/400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">advancing-moon-reveal fade-out to-left</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://placekitten.com/400/400</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>active</code></td><td style="text-align:left;">Animation is :hover or .active triggered</td></tr><tr><td style="text-align:left;"><code>fade-out</code></td><td style="text-align:left;">fade-out (reverse behaviour)</td></tr><tr><td style="text-align:left;"><code>to-left</code></td><td style="text-align:left;">Left orientation</td></tr></tbody></table><h2 id="scss-variables" tabindex="-1">SCSS variables <a class="header-anchor" href="#scss-variables" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>BONUS: CSS variables too</p></div><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Description</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$advancing-moon-reveal-speed</code></td><td style="text-align:left;">Speed of transition</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>#000000</code></td></tr><tr><td style="text-align:left;"><code>$advancing-moon-reveal-blur</code></td><td style="text-align:left;">Blur intensity</td><td style="text-align:left;"><code>size</code></td><td style="text-align:left;"><code>0.5em</code></td></tr><tr><td style="text-align:left;"><code>$advancing-moon-reveal-opacity-start</code></td><td style="text-align:left;">Starting opacity intensity</td><td style="text-align:left;"><code>size</code></td><td style="text-align:left;"><code>2em</code></td></tr><tr><td style="text-align:left;"><code>$advancing-moon-reveal-opacity-end</code></td><td style="text-align:left;">Starting opacity intensity</td><td style="text-align:left;"><code>size</code></td><td style="text-align:left;"><code>2em</code></td></tr><tr><td style="text-align:left;"><code>$advancing-moon-reveal-scale-start</code></td><td style="text-align:left;">Starting scale (g</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>3s</code></td></tr><tr><td style="text-align:left;"><code>$advancing-moon-reveal-scale-end</code></td><td style="text-align:left;">Starting scale (g</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>3s</code></td></tr><tr><td style="text-align:left;"><code>$advancing-moon-reveal-slide</code></td><td style="text-align:left;">Arrow speed</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>3s</code></td></tr></tbody></table>`,11);function D(g,F,v,f,h,m){const e=o("Badge");return c(),d("div",null,[r,s(e,{type:"tip"},{default:a(()=>[t("Atom")]),_:1}),t(),s(e,{type:"info"},{default:a(()=>[t("Animation")]),_:1}),t(),s(e,{type:"info"},{default:a(()=>[t("reveal")]),_:1}),y])}const C=n(i,[["render",D]]);export{x as __pageData,C as default};
