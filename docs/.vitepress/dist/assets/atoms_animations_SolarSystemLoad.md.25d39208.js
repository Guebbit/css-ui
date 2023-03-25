import{_ as p,r as e,o as t,c,a as l,w as n,b as s,d as o,e as r}from"./app.53947250.js";const u=JSON.parse('{"title":"Solar System Load","description":"","frontmatter":{},"headers":[{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"SCSS variables","slug":"scss-variables","link":"#scss-variables","children":[]}],"relativePath":"atoms/animations/SolarSystemLoad.md"}'),y={name:"atoms/animations/SolarSystemLoad.md"},C=o("h1",{id:"solar-system-load",tabindex:"-1"},[s("Solar System Load "),o("a",{class:"header-anchor",href:"#solar-system-load","aria-hidden":"true"},"#")],-1),D=r(`<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="dev-section"><div class="solar-system-load"></div></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-5cy3J" id="tab-5CG2tA3" checked="checked"><label for="tab-5CG2tA3">SolarSystemLoad.html</label><input type="radio" name="group-5cy3J" id="tab-utwbSoF"><label for="tab-utwbSoF">SolarSystemLoad.scss</label></div><div class="blocks"><div class="language-html active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">solar-system-load</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$solar-system-load-central-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000 </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$solar-system-load-satellite-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000 </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$solar-system-load-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$solar-system-load-speed</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1s</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">solar-system-load</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $solar-system-load-central-color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $solar-system-load-width</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $solar-system-load-satellite-color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-0.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.5em</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solar-system-load-animation $solar-system-load-speed linear infinite</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-2.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1.5em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3em</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2em</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> solar-system-load-animation $solar-system-load-speed*</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> linear infinite</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@keyframes</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">solar-system-load-animation</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">0%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotateZ</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotateZ</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">360deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><h2 id="scss-variables" tabindex="-1">SCSS variables <a class="header-anchor" href="#scss-variables" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Description</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$solar-system-load-central-color</code></td><td style="text-align:left;">Center color</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>#000000</code></td></tr><tr><td style="text-align:left;"><code>$solar-system-load-satellite-color</code></td><td style="text-align:left;">Satellite color</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>#000000</code></td></tr><tr><td style="text-align:left;"><code>$solar-system-load-size</code></td><td style="text-align:left;">Pulsation color</td><td style="text-align:left;"><code>size</code></td><td style="text-align:left;"><code>24px</code></td></tr><tr><td style="text-align:left;"><code>$solar-system-load-speed</code></td><td style="text-align:left;">Pulsation speed</td><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>1s</code></td></tr></tbody></table>`,5);function F(i,A,d,m,f,h){const a=e("Badge");return t(),c("div",null,[C,l(a,{type:"tip"},{default:n(()=>[s("Atom")]),_:1}),s(),l(a,{type:"info"},{default:n(()=>[s("Animation")]),_:1}),s(),l(a,{type:"info"},{default:n(()=>[s("loading")]),_:1}),D])}const b=p(y,[["render",F]]);export{u as __pageData,b as default};