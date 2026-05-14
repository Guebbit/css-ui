import { createDocsScenario } from '../../_helpers.js';

export const simpleCardScenarios = [
    createDocsScenario("alert", `
<!-- #region left-icon -->
<div class="simple-card card-direction-row animate-on-hover">
    <div class="card-header">
        <div class="card-actions">
            <img alt="" class="card-icon card-icon-lg" src="https://placedog.net/400/400" />
        </div>
    </div>
    <div>
        <div class="card-header">
            <h2 class="card-title">Title of Left Icon</h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion left-icon -->
<!-- #region right-icon -->
<div class="simple-card card-direction-row-reverse animate-on-hover" style="--background: darkred; --on-background: white;">
    <div class="card-header">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of Right (and red!) Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion right-icon -->
<!-- #region right-icon-centered -->
<div class="simple-card card-direction-row animate-on-hover">
    <div class="card-header card-section-start card-section-center">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of Center Right Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion right-icon-centered -->
<!-- #region top-center-icon -->
<div class="simple-card animate-on-hover">
    <div class="card-header card-section-center">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" style="font-size:7em;" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of Top Center Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion top-center-icon -->
<!-- #region bottom-right-icon -->
<div class="simple-card animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Bottom Right Icon</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
    <div class="card-footer card-section-end">
        <div class="card-actions">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
</div>
<!-- #endregion bottom-right-icon -->
<!-- #region background -->
<div class="simple-card card-direction-row card-overlay animate-on-hover">
    <div class="card-header">
        <div class="card-actions card-section-left card-section-center">
            <svg class="card-icon card-icon-lg"  viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <img alt="" class="card-background" src="https://placedog.net/1000/600" />
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
</div>
<!-- #endregion background -->
<!-- #region some-customization -->
<div class="simple-card alert-center card-flat animate-on-hover" style="--background: transparent; --active-on-background: white">
    <div class="card-header card-section-center">
        <div class="card-actions">
            <svg class="card-icon" style="font-size:7em;" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-content" style="text-align: center">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion some-customization -->
    `),
    createDocsScenario("borders", `
<!-- #region right -->
<div class="simple-card card-transparent animate-on-hover border-left-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion right -->
<!-- #region full -->
<div class="simple-card card-transparent animate-on-hover border-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion full -->
<!-- #region top-bottom -->
<div class="simple-card card-transparent animate-on-hover border-top-active border-bottom-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion top-bottom -->
<!-- #region left-right -->
<div class="simple-card card-transparent animate-on-hover border-left-active border-right-active">
    <div class="card-header">
        Lorem Ipsum
    </div>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
    </div>
    <div class="card-footer">
        Lorem Ipsum
    </div>
</div>
<!-- #endregion left-right -->
    `),
    createDocsScenario("icons", `
<!-- #region icons -->
<div class="simple-card animate-on-hover">
    <div class="card-header">
        <img alt="" class="card-icon" src="https://placedog.net/400/400" />
        <span class="card-title">Lorem Ipsum</span>
    </div>
    <div class="card-content">
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-footer">
        <div class="card-actions">
            <button class="simple-button animate-on-hover">lorem</button>
            <button class="simple-button animate-on-hover">ipsum</button>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-actions card-section-absolute">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
<!-- #endregion icons -->
<!-- #region icons2 -->
<div class="simple-card animate-on-hover">
    <div class="card-header">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="card-title">Lorem Ipsum</span>
    </div>
    <div class="card-content">
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
    <div class="card-actions card-section-absolute card-section-column">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
<!-- #endregion icons2 -->
<!-- #region icons3 -->
<div class="simple-card animate-on-hover">
    <div class="card-header">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <span class="card-title">Lorem Ipsum</span>
    </div>
    <div class="card-content">
        <small>Ut enim ad minim veniam</small>
        <small>Jan 1997 - Mar 2000</small>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="card-actions card-section-end">
            <button class="simple-button animate-on-hover">lorem</button>
            <button class="simple-button animate-on-hover">ipsum</button>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
        </div>
    </div>
    <div class="card-footer">
        <div class="card-actions">
            <button class="simple-button animate-on-hover">lorem</button>
            <button class="simple-button animate-on-hover">ipsum</button>
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
            <img alt="" class="card-icon" src="https://placedog.net/400/400" />
        </div>
    </div>
    <div class="card-actions card-section-absolute">
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
        <svg class="card-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
        </svg>
    </div>
</div>
<!-- #endregion icons3 -->
    `),
    createDocsScenario("media", `
<!-- #region default -->
<div class="simple-card shadow-on-hover animate-on-hover" style="--image-aspect-ratio: 3 / 1">
    <img class="card-media" alt="" src="https://placedog.net/1000/1000" />
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion default -->
<!-- #region default-bottom -->
<div class="simple-card shadow-on-hover animate-on-hover" style="--image-aspect-ratio: 33%">
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
    <div class="card-media">
        <img alt="" src="https://placedog.net/1000/1000" />
    </div>
</div>
<!-- #endregion default-bottom -->
<!-- #region background -->
<div class="simple-card card-flat card-overlay animate-on-hover">
    <img class="card-background" alt="" src="https://placedog.net/1000/1000" />
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion background -->
<!-- #region left-image -->
<div class="simple-card card-media-left animate-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/1000" />
    <div>
        <div class="card-header">
            <h2 class="card-title">Title of lorem ipsum <span class="card-subtitle">Subtitle of lorem ipsum</span></h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion left-image -->
<!-- #region right-image -->
<div class="simple-card card-media-right animate-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/1000" />
    <div>
        <div class="card-header">
            <h2 class="card-title">Title of lorem ipsum <span class="card-subtitle">Subtitle of lorem ipsum</span></h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion right-image -->
<!-- #region background-hover -->
<div class="simple-card card-flat card-overlay animate-on-hover">
    <img class="card-background" alt="" src="https://placedog.net/1000/1000" />
    <img class="card-background show-on-active" alt="" src="https://placedog.net/800/800" />
    <div class="card-content">
        <h2 class="card-title">Hover me to change the image</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion background-hover -->
<!-- #region image-hover -->
<div class="simple-card card-media-left animate-on-hover">
    <div class="card-media">
        <img alt="" src="https://placedog.net/1000/1000" />
        <img class="show-on-active" alt="" src="https://placedog.net/800/800" />
    </div>
    <div>
        <div class="card-header">
            <h2 class="card-title">Hover me to change the image <span class="card-subtitle">Subtitle of lorem ipsum</span></h2>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion image-hover -->
<!-- #region video -->
<div class="simple-card shadow-on-hover animate-on-hover">
    <video class="card-media" preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="">
        <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
    </video>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion video -->
<!-- #region video-background -->
<div class="simple-card card-overlay shadow-on-hover animate-on-hover">
    <video class="card-background" preload="metadata" playsinline="" loop="" autoplay="" alt="" title="" muted="">
        <source src="http://assets.guebbit.com/guebbit/video/normal.mp4" type="video/mp4">
    </video>
    <div class="card-content">
        <h2 class="card-title">Title of lorem ipsum</h2>
        <h5 class="card-subtitle">Subtitle of lorem ipsum</h5>
        <hr class="card-divider" />
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion video-background -->
<!-- #region mix -->
<div class="simple-card border-active card-overlay animate-on-hover">
    <img class="card-media" alt="" src="https://placedog.net/1000/600" />
    <div class="card-container">
        <img class="card-background" alt="" src="https://placedog.net/800/400" />
        <div class="card-header">
            <svg class="card-icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </svg>
            <span class="card-title">Lorem Ipsum</span>
            <div class="card-actions">
                <svg class="card-icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>
        </div>
        <div class="card-content">
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
        <div class="card-footer">
            Footer
        </div>
    </div>
</div>
<!-- #endregion mix -->
    `),
    createDocsScenario("default", `
<!-- #region outlined -->
<div class="simple-card card-outlined animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Outlined</h2>
        <h5 class="card-subtitle">Subtitle of Outlined</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion outlined -->
<!-- #region flat -->
<div class="simple-card card-flat animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Flat</h2>
        <h5 class="card-subtitle">Subtitle of Flat</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion flat -->
<!-- #region plain -->
<div class="simple-card card-plain animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Plain</h2>
        <h5 class="card-subtitle">Subtitle of Plain</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion plain -->
<!-- #region plain-flat -->
<div class="simple-card card-plain card-flat animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Plain and Flat</h2>
        <h5 class="card-subtitle">Subtitle of Plain and Flat</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion plain-flat -->
<!-- #region elevated -->
<div class="simple-card card-elevated animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Elevated</h2>
        <h5 class="card-subtitle">Subtitle of Elevated</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion elevated -->
<!-- #region rounded -->
<div class="simple-card card-rounded animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title of Rounded</h2>
        <h5 class="card-subtitle">Subtitle of Rounded</h5>
        <br/>
        <p>
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
        </p>
    </div>
</div>
<!-- #endregion rounded -->
<!-- #region blurred -->
<div style="padding: 50px; background-image: url(http://placedog.net/500/500);">
    <div class="simple-card card-transparent card-blurred animate-on-hover">
        <div class="card-content">
            <h2 class="card-title">Title of Blurred</h2>
            <h5 class="card-subtitle">Subtitle of Blurred</h5>
            <br/>
            <p>
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
                lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor lorem ipsum sit dolor
            </p>
        </div>
    </div>
</div>
<!-- #endregion blurred -->
<!-- #region monoline -->
<div class="simple-card animate-on-hover">
    <div class="card-content">
        <h2 class="card-title">Title only</h2>
    </div>
</div>
<!-- #endregion monoline -->
    `),
];
