import{_ as s,o as a,c as l,e as n}from"./app.e27bbdd4.js";const i=JSON.parse('{"title":"Shadows","description":"","frontmatter":{},"headers":[{"level":2,"title":"guebbit-builder-shadow","slug":"guebbit-builder-shadow","link":"#guebbit-builder-shadow","children":[]},{"level":2,"title":"guebbit-builder-textshadow","slug":"guebbit-builder-textshadow","link":"#guebbit-builder-textshadow","children":[]}],"relativePath":"global/builders/shadows.md"}'),o={name:"global/builders/shadows.md"},p=n(`<h1 id="shadows" tabindex="-1">Shadows <a class="header-anchor" href="#shadows" aria-hidden="true">#</a></h1><h2 id="guebbit-builder-shadow" tabindex="-1">guebbit-builder-shadow <a class="header-anchor" href="#guebbit-builder-shadow" aria-hidden="true">#</a></h2><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">guebbit-builder-shadow</span><span style="color:#89DDFF;">(#</span><span style="color:#A6ACCD;">000, </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@mixin</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">guebbit-builder-shadow</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color,$intensity</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@if</span><span style="color:#A6ACCD;"> $intensity </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.14</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-2px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.14</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-2px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@else if</span><span style="color:#A6ACCD;"> $intensity </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">17px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.14</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-3px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">17px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.14</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-3px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@else if</span><span style="color:#A6ACCD;"> $intensity </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">38px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.14</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">46px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-7px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">24px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">38px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.14</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">46px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.12</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">, </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-7px</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Description</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$color</code></td><td style="text-align:left;">Color of shadow</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>none</code></td></tr><tr><td style="text-align:left;"><code>$intensity</code></td><td style="text-align:left;">Intensity of shadow</td><td style="text-align:left;"><code>integer</code></td><td style="text-align:left;"><code>1</code></td></tr></tbody></table><h2 id="guebbit-builder-textshadow" tabindex="-1">guebbit-builder-textshadow <a class="header-anchor" href="#guebbit-builder-textshadow" aria-hidden="true">#</a></h2><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">guebbit-builder-shadow</span><span style="color:#89DDFF;">(#</span><span style="color:#A6ACCD;">000, </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@mixin</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">guebbit-builder-textshadow</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color,$intensity</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@if</span><span style="color:#A6ACCD;"> $intensity </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@else if</span><span style="color:#A6ACCD;"> $intensity </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@else if</span><span style="color:#A6ACCD;"> $intensity </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$color</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th style="text-align:left;">Variable</th><th style="text-align:left;">Description</th><th style="text-align:left;">Accepted Values</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;"><code>$color</code></td><td style="text-align:left;">Color of shadow</td><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>none</code></td></tr><tr><td style="text-align:left;"><code>$intensity</code></td><td style="text-align:left;">Intensity of shadow</td><td style="text-align:left;"><code>integer</code></td><td style="text-align:left;"><code>1</code></td></tr></tbody></table>`,9),t=[p];function e(C,c,r,y,D,A){return a(),l("div",null,t)}const d=s(o,[["render",e]]);export{i as __pageData,d as default};