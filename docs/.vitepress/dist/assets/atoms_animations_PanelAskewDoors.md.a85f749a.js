import{_ as p,r as e,o as t,c,a as n,w as l,b as s,d as o,e as r}from"./app.53947250.js";const m=JSON.parse('{"title":"Book Side Load","description":"","frontmatter":{},"headers":[{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"Classes","slug":"classes","link":"#classes","children":[]},{"level":2,"title":"SCSS variables","slug":"scss-variables","link":"#scss-variables","children":[]}],"relativePath":"atoms/animations/PanelAskewDoors.md"}'),D={name:"atoms/animations/PanelAskewDoors.md"},y=o("h1",{id:"book-side-load",tabindex:"-1"},[s("Book Side Load "),o("a",{class:"header-anchor",href:"#book-side-load","aria-hidden":"true"},"#")],-1),F=r(`<h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="dev-section"><section class="panel-askew-doors" style="height:300px;"></section><section class="panel-askew-doors open-on-hover" style="height:300px;"></section><section class="panel-askew-doors open-on-hover mode-open-vertical" style="height:300px;"></section></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Dr2Ya" id="tab-gIPZLaf" checked="checked"><label for="tab-gIPZLaf">PanelAskewDoors.html</label><input type="radio" name="group-Dr2Ya" id="tab-IYydUew"><label for="tab-IYydUew">PanelAskewDoors.scss</label></div><div class="blocks"><div class="language-html active"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">panel-askew-doors</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:300px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">panel-askew-doors open-on-hover</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:300px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">panel-askew-doors open-on-hover mode-open-vertical</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">height:300px;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">$panel-askew-doors-duration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5s</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$panel-askew-doors-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000 </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$panel-askew-doors-left-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $panel-askew-doors-color </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$panel-askew-doors-right-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $panel-askew-doors-color </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">$panel-askew-doors-opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">panel-askew-doors</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#B2CCD6;">transform</span><span style="color:#A6ACCD;"> $panel-askew-doors-duration, </span><span style="color:#B2CCD6;">opacity</span><span style="color:#A6ACCD;"> $panel-askew-doors-duration*</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $panel-askew-doors-opacity</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $panel-askew-doors-left-color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-103%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-25%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-15deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> $panel-askew-doors-right-color</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-103%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-25%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">-15deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">active</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">15deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">panel-askew-doors-active</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">open-on-active</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">active</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">open-on-hover</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-20%</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20%</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">mode-open-vertical</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-100%</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">90deg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></div></div><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>open-on-hover</code></td><td style="text-align:left;">Animation triggered on hover</td></tr><tr><td style="text-align:left;"><code>open-on-active</code></td><td style="text-align:left;">Animation triggered on active</td></tr><tr><td style="text-align:left;"><code>panel-askew-doors-active</code></td><td style="text-align:left;">Active state</td></tr><tr><td style="text-align:left;"><code>mode-open-vertical</code></td><td style="text-align:left;">Vertical mode</td></tr></tbody></table><h2 id="scss-variables" tabindex="-1">SCSS variables <a class="header-anchor" href="#scss-variables" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Description</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$panel-askew-doors-color</code></td><td style="text-align:left;">Main color</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>#000</code></td></tr><tr><td style="text-align:left;"><code>$panel-askew-doors-left-color</code></td><td style="text-align:left;">Left door color</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>as color</code></td></tr><tr><td style="text-align:left;"><code>$panel-askew-doors-right-color</code></td><td style="text-align:left;">Right door color</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>as color</code></td></tr><tr><td style="text-align:left;"><code>$panel-askew-doors-opacity</code></td><td style="text-align:left;">Animation speed</td><td style="text-align:left;"><code>percentage</code></td><td style="text-align:left;"><code>0.5</code></td></tr><tr><td style="text-align:left;"><code>$panel-askew-doors-duration</code></td><td style="text-align:left;">Duration</td><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>0.5s</code></td></tr></tbody></table>`,7);function C(i,A,d,h,f,g){const a=e("Badge");return t(),c("div",null,[y,n(a,{type:"tip"},{default:l(()=>[s("Atom")]),_:1}),s(),n(a,{type:"info"},{default:l(()=>[s("Animation")]),_:1}),s(),n(a,{type:"info"},{default:l(()=>[s("Presentation")]),_:1}),F])}const u=p(D,[["render",C]]);export{m as __pageData,u as default};
