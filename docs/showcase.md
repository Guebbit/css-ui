<h1>TEST</h1>

<div id="htmlContainer"></div>

<pre>{{site}}</pre>
<h1>________________</h1>
<pre>{{theme}}</pre>

<script setup>
import { useData } from 'vitepress';

const { site, theme } = useData();
const { sidebar: categories = [] } = site.value?.themeConfig || {}; 



const test = site.value?.themeConfig?.sidebar[3]?.items[0]?.items[2];
console.log("XXXX", test, "/public/components-html" + test.link) 

// TODO iterate object\array\etc in @guebbot/javascript
function iterateThroughLibrary(obj) {
    for(let len = obj.length, i = 0; len > i; i++){
        if(obj[i].link)
            loadLibraryItem(obj[i].text, "/components-html" + obj[i].link.slice(0, -3) + ".html");
        if (obj[i].items && Array.isArray(obj[i].items))
            // Recurse into children
            iterateThroughLibrary(obj[i].items);
    }
}

function loadLibraryItem(name, link){
    fetch(link).then((response) =>
        response.text().then((html) => {
            const newDiv = document.createElement("div");
            newDiv.innerHTML = html;
             document.getElementById("htmlContainer").append(newDiv);
        })
    )
}

iterateThroughLibrary(categories);

/**
 * NON funzionano i <video> tag
 * NON visualizza gli iframe
 */
/*
window.onload = function() {
    setInterval(() => {
        const nodeList = document.querySelectorAll("[data-render]:not(.loaded)");
        for(let i = nodeList.length; i--; )
            fetch(nodeList[i].getAttribute("data-render")).then((response) =>
                response.text().then((html) => {
                    nodeList[i].innerHTML = html;
                    nodeList[i].classList.add("loaded");
                })
            )
    }, 1000);
};
*/
</script>
<style lang="scss">
@import "../library.scss";

#htmlContainer{
    & > * {
        margin: 48px 0;
    }
}
</style>