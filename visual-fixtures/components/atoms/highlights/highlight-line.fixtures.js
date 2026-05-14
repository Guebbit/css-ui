import { createDocsScenario } from '../../_helpers.js';

export const highlightLineScenarios = [
    createDocsScenario("afar-default", `
<!-- #region full -->
<div class="highlight-line full-highlight from-afar-highlight highlight-line-on-hover">Full</div>
<div class="highlight-line full-highlight from-start-highlight from-afar-highlight highlight-line-on-hover">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover left-highlight">Left</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover left-highlight">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover right-highlight">Right</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover right-highlight">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover bottom-highlight">Bottom</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover bottom-highlight">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover top-highlight">Top</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover top-highlight">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover middle-highlight">Middle</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover middle-highlight">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("afar-primary", `
<!-- #region full -->
<div class="highlight-line full-highlight from-afar-highlight highlight-line-on-hover use-primary">Full</div>
<div class="highlight-line full-highlight from-start-highlight from-afar-highlight highlight-line-on-hover use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover left-highlight use-primary">Left</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover right-highlight use-primary">Right</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover top-highlight use-primary">Top</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-afar-highlight highlight-line-on-hover middle-highlight use-primary">Middle</div>
<div class="highlight-line from-start-highlight from-afar-highlight highlight-line-on-hover middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("default", `
<!-- #region full -->
<div class="highlight-line highlight-line-on-hover full-highlight">Full</div>
<div class="highlight-line highlight-line-active full-highlight">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line highlight-line-on-hover left-highlight">Left</div>
<div class="highlight-line highlight-line-active left-highlight">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line highlight-line-on-hover right-highlight">Right</div>
<div class="highlight-line highlight-line-active right-highlight">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line highlight-line-on-hover bottom-highlight">Bottom</div>
<div class="highlight-line highlight-line-active bottom-highlight">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line highlight-line-on-hover top-highlight">Top</div>
<div class="highlight-line highlight-line-active top-highlight">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line highlight-line-on-hover middle-highlight">Middle</div>
<div class="highlight-line highlight-line-active middle-highlight">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("primary", `
<!-- #region full -->
<div class="highlight-line highlight-line-on-hover full-highlight use-primary">Full</div>
<div class="highlight-line highlight-line-active full-highlight use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line highlight-line-on-hover left-highlight use-primary">Left</div>
<div class="highlight-line highlight-line-active left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line highlight-line-on-hover right-highlight use-primary">Right</div>
<div class="highlight-line highlight-line-active right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<div class="highlight-line highlight-line-active bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line highlight-line-on-hover top-highlight use-primary">Top</div>
<div class="highlight-line highlight-line-active top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line highlight-line-on-hover middle-highlight use-primary">Middle</div>
<div class="highlight-line highlight-line-active middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("start-default", `
<!-- #region full -->
<div class="highlight-line from-start-highlight highlight-line-on-hover full-highlight">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-start-highlight highlight-line-on-hover left-highlight">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-start-highlight highlight-line-on-hover right-highlight">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-start-highlight highlight-line-on-hover bottom-highlight">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-start-highlight highlight-line-on-hover top-highlight">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-start-highlight highlight-line-on-hover middle-highlight">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("start-primary", `
<!-- #region full -->
<div class="highlight-line from-start-highlight highlight-line-on-hover full-highlight use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line from-start-highlight highlight-line-on-hover left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line from-start-highlight highlight-line-on-hover right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line from-start-highlight highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line from-start-highlight highlight-line-on-hover top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line from-start-highlight highlight-line-on-hover middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
    createDocsScenario("default-2", `
<!-- #region full -->
<div class="highlight-line highlight-line-on-hover full-highlight use-primary">Full</div>
<div class="highlight-line highlight-line-active full-highlight use-primary">Full</div>
<!-- #endregion full -->
<!-- #region left -->
<div class="highlight-line highlight-line-on-hover left-highlight use-primary">Left</div>
<div class="highlight-line highlight-line-active left-highlight use-primary">Left</div>
<!-- #endregion left -->
<!-- #region right -->
<div class="highlight-line highlight-line-on-hover right-highlight use-primary">Right</div>
<div class="highlight-line highlight-line-active right-highlight use-primary">Right</div>
<!-- #endregion right -->
<!-- #region bottom -->
<div class="highlight-line highlight-line-on-hover bottom-highlight use-primary">Bottom</div>
<div class="highlight-line highlight-line-active bottom-highlight use-primary">Bottom</div>
<!-- #endregion bottom -->
<!-- #region top -->
<div class="highlight-line highlight-line-on-hover top-highlight use-primary">Top</div>
<div class="highlight-line highlight-line-active top-highlight use-primary">Top</div>
<!-- #endregion top -->
<!-- #region middle -->
<div class="highlight-line highlight-line-on-hover middle-highlight use-primary">Middle</div>
<div class="highlight-line highlight-line-active middle-highlight use-primary">Middle</div>
<!-- #endregion middle -->
    `),
];
