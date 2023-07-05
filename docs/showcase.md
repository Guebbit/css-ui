::: danger WORK IN PROGRESS
:::

<div id="htmlContainer"></div>

<script setup>
import { useData } from "vitepress";

const { site, theme } = useData();
const { sidebar: categories = [] } = site.value?.themeConfig || {}; 

// TODO iterate object\array\etc in @guebbit/javascript
function iterateThroughLibrary(obj) {
    for(let len = obj.length, i = 0; len > i; i++){
        if(obj[i].link && obj[i].showcase)
            loadLibraryItem(obj[i].text, obj[i].link.slice(0, -3) + ".html");
        if (obj[i].items && Array.isArray(obj[i].items))
            // Recurse into children
            iterateThroughLibrary(obj[i].items);
    }
}

/**
 * NON funzionano i <video> tag
 * NON visualizza gli iframe
 * Fonde alcuni SPAN (?) (tipo status-circle)
 */
function loadLibraryItem(name, link){
    fetch("/components-html" + link).then((response) =>
        response.text().then((html) => {
            const container = document.getElementById("htmlContainer");
            const newDiv = document.createElement("div");
            newDiv.innerHTML = html;
            const anchor = document.createElement("a");
            anchor.innerHTML = name;
            anchor.href = window.location.origin + link;
            container.append(anchor);
            container.append(newDiv);
        })
    )
}

iterateThroughLibrary(categories);

</script>
<style lang="scss">
@import "../library.scss";

#htmlContainer{
    & > div {
        margin: 48px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    & > a {
        display: block;
        font-size: 3em;
        position: relative;
        line-height: 1.5;
        margin: 100px 0;
        &:after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background-color: var(--vp-c-brand);
        }
    }
}
</style>