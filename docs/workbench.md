::: raw

<div class="inclined-button">
    <span class="inclined-button-text">
        Lorem ipsum inclined button
    </span>
</div>

<div class="inclined-button double">
    <span class="inclined-button-text">
        Lorem ipsum inclined button
    </span>
</div>

<hr/>
<hr/>
<hr/>

<h2>
    <span class="trapezoid-title animate-on-hover double">double only</span>
</h2>

<h2>
    <span class="trapezoid-title animate-on-hover outline">outline only</span>
</h2>

<h2>
    <span class="trapezoid-title animate-on-hover big">big only</span>
</h2>

<h2>
    <span class="trapezoid-title animate-on-hover cross-on-active">cross only</span>
</h2>

<h2>
    <span class="trapezoid-title animate-on-hover double outline">double outline big</span>
</h2>

<h2>
    <span class="trapezoid-title animate-on-hover double cross-on-active">double cross</span>
</h2>

<h2>
    <span class="trapezoid-title animate-on-hover double outline big cross-on-active">double outline big cross</span>
</h2>



<div class="opening-hours-list">
  <ul>
    <li class="">
      <span class="label">Domenica</span>
      <span class="hours">9.00 - 23.30</span>
    </li>
    <li class="closed">
      <span class="label">Lunedì</span>
      <span class="hours">Chiuso</span>
    </li>
    <li class="">
      <span class="label">Martedì</span>
      <span class="hours">10.00 - 24.00</span>
    </li>
    <li class="">
      <span class="label">Mercoledì</span>
      <span class="hours">12.00 - 20.00</span>
    </li>
    <li class="">
      <span class="label">Giovedì</span>
      <span class="hours">10.00 - 24.00</span>
    </li>
    <li class="">
      <span class="label">Venerdì</span>
      <span class="hours">10.00 - 24.00</span>
    </li>
    <li class="today">
      <span class="label">Sabato</span>
      <span class="hours">10.00 - 12.00</span>
    </li>
  </ul>
</div>
:::

<style lang="scss">
@import "theme";

h2{
    font-size: 2.5em;
    padding: 12px 0 20px 0;
    &.double{
        padding: 24px 0 40px 0;
    }
}

@import "workbench";
</style>