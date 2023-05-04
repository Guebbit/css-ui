||||

::: raw
<div class="simple-card hover-info-card animate-on-hover">
    <div class="card-content">
        <svg class="card-icon main-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <h5>Lorem Ipsum</h5>
    </div>
</div>

<br /><br /><br /><br /><br />

<div class="simple-card hover-info-card animate-on-hover">
    <div class="card-content">
        <svg class="card-icon main-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <h5>Lorem Ipsum</h5>
    </div>
    <div class="card-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis repellat quo vitae tempora.</p>
    </div>
</div>
:::

||||

<style lang="scss">
@import "theme";

$simple-card-background: #f0f;
$simple-card-active-background: #00f;
$simple-card-active-shadow-color: #ff0;
$simple-card-shadow:
        0 8px 10px -5px rgba($simple-card-active-shadow-color, .2),
        0 16px 24px 2px rgba($simple-card-active-shadow-color, .14),
        0 6px 30px 5px rgba($simple-card-active-shadow-color, .12);

@import "workbench";
</style>