import { shallowRef, inject, computed, ref, reactive, markRaw, readonly, nextTick, defineComponent, onUpdated, h } from "vue";
const siteData = JSON.parse(`{"lang":"en-US","dir":"ltr","title":"Guebbit Vue Library","description":"Guebbit's personal SCSS Library (MIT license, free to use)","base":"/","head":[],"appearance":true,"themeConfig":{"logo":"/logotype.svg","siteTitle":"SCSS Library","nav":[{"text":"Github","link":"https://github.com/Guebbit/scss-library"},{"text":"TODO absorb","items":[{"text":"Eclipse","link":"https://codepen.io/shshaw/pen/WyoozY"}]},{"text":"TODO separate projects / showcases","items":[{"text":"hyperSpace1","link":"https://guebbit.com/admin/view/399"},{"text":"Guebbit Intro","link":"https://guebbit.com/admin/view/442"},{"text":"Manga beats Intro","link":"https://guebbit.com/admin/view/441"}]},{"text":"Helper libraries","items":[{"text":"Animate CSS","link":"https://animate.style/"},{"text":"CSS Shake","link":"https://elrumordelaluz.github.io/csshake/"}]}],"sidebar":[{"text":"Workbench","link":"workbench.md"},{"text":"Showcase","link":"showcase.md"},{"text":"Global","collapsible":true,"collapsed":true,"items":[{"text":"Colors (TODO)","collapsible":true,"collapsed":false,"items":[{"text":"Brands","link":"/global/colors/brands.md"},{"text":"Customs","link":"/global/colors/customs.md"},{"text":"Gradients","link":"/global/colors/gradients.md"},{"text":"materialize","link":"/global/colors/materialize.md"}]},{"text":"Builders","collapsible":true,"collapsed":false,"items":[{"text":"Placeholder","link":"/global/builders/placeholder.md"},{"text":"Scrollbar","link":"/global/builders/scrollbar.md"},{"text":"Shadows","link":"/global/builders/shadows.md"}]},{"text":"Functions","collapsible":true,"collapsed":false,"items":[{"text":"Colors","link":"/global/functions/colors.md"},{"text":"Strings","link":"/global/functions/strings.md"}]},{"text":"Includers","collapsible":true,"collapsed":false,"items":[{"text":"Compatibility","link":"/global/includers/compatibility.md"},{"text":"Generic","link":"/global/includers/generic.md"},{"text":"Spacers","link":"/global/includers/spacers.md"}]}]},{"text":"Atoms","collapsible":true,"collapsed":false,"items":[{"text":"Badges","collapsible":true,"collapsed":false,"items":[]},{"text":"Buttons","collapsible":true,"collapsed":false,"items":[{"text":"Button Brand Icon","link":"/atoms/buttons/ButtonBrandIcon.md","showcase":true},{"text":"Button Parallelogram","link":"/atoms/buttons/ButtonParallelogram.md","showcase":true}]},{"text":"Cards","collapsible":true,"collapsed":false,"items":[{"text":"Great Blockquote","link":"/atoms/cards/BlockquoteGreat.md","showcase":true},{"text":"Simple Blockquote","link":"/atoms/cards/BlockquoteSimple.md","showcase":true}]},{"text":"Highlights","collapsible":true,"collapsed":false,"items":[{"text":"Hover Line Highlight","link":"/atoms/highlights/HoverLineHighlight.md","showcase":true}]},{"text":"Lists","collapsible":true,"collapsed":false,"items":[{"text":"Simple List","link":"/atoms/lists/SimpleList.md","showcase":true}]},{"text":"Animations","collapsible":true,"collapsed":false,"items":[{"text":"Wallpaper","collapsible":true,"collapsed":false,"items":[{"text":"Raindrop Concentric","link":"/atoms/animations/RaindropConcentric.md","showcase":true}]},{"text":"Reveal","collapsible":true,"collapsed":false,"items":[{"text":"Advancing Moon","link":"/atoms/animations/AdvancingMoon.md","showcase":true}]},{"text":"Pages scroll","collapsible":true,"collapsed":false,"items":[{"text":"Scroll Down Arrow","link":"/atoms/animations/ScrollDownArrow.md","showcase":true},{"text":"Scroll Down Mouse (TODO)","link":"/atoms/animations/ScrollDownMouse.md","showcase":true}]},{"text":"Map Pins","collapsible":true,"collapsed":false,"items":[{"text":"Pin pulse","link":"/atoms/animations/MapPinPulse.md","showcase":true}]},{"text":"Progression","collapsible":true,"collapsed":false,"items":[{"text":"Progression Alex Warnes","collapsible":true,"collapsed":true,"items":[{"text":"Gradient Circles","link":"/atoms/animations/AlexWarnesGradientCircles.md","showcase":true},{"text":"Gradient Spinners","link":"/atoms/animations/AlexWarnesGradientSpinners.md","showcase":true},{"text":"Rotating Squares","link":"/atoms/animations/AlexWarnesRotatingSquares.md","showcase":true},{"text":"Solar System","link":"/atoms/animations/AlexWarnesSolarSystem.md","showcase":true}]},{"text":"Book Front Load","link":"/atoms/animations/BookFrontLoad.md","showcase":true},{"text":"Book Side Load","link":"/atoms/animations/BookSideLoad.md","showcase":true},{"text":"Gear Load","link":"/atoms/animations/GearLoad.md","showcase":true},{"text":"Icon Showcase Load","link":"/atoms/animations/IconShowcaseLoad.md","showcase":true},{"text":"Solar System Load","link":"/atoms/animations/SolarSystemLoad.md","showcase":true},{"text":"Progression Vineeth.TR","collapsible":true,"collapsed":true,"items":[{"text":"(TODO) VineethTR","link":"/atoms/animations/VineethTRTODO.md"}]}]},{"text":"Panel Askew Doors","link":"/atoms/animations/PanelAskewDoors.md","showcase":true},{"text":"Status Circle","link":"/atoms/animations/StatusCircle.md","showcase":true}]},{"text":"Typography","collapsible":true,"collapsed":false,"items":[{"text":"Simple Icon Text","link":"/atoms/typography/SimpleTextIcon.md","showcase":true}]}]},{"text":"Molecules","collapsible":true,"collapsed":false,"items":[{"text":"Cards","collapsible":true,"collapsed":false,"items":[{"text":"Book Card","link":"/molecules/cards/BookCard.md","showcase":true},{"text":"Credit Card","link":"/molecules/cards/CreditCard.md","showcase":true},{"text":"Simple Card","link":"/molecules/cards/SimpleCard.md","showcase":true},{"text":"Simple User Card","link":"/molecules/cards/SimpleUserCard.md","showcase":true}]},{"text":"Panels","collapsible":true,"collapsed":false,"items":[{"text":"Typography Panel","link":"/molecules/panels/TypographyPanel.md","showcase":true},{"text":"HeroPanel","link":"/molecules/panels/HeroPanel.md","showcase":true},{"text":"ActionPanel","link":"/molecules/panels/ActionPanel.md","showcase":true}]}]}]},"locales":{},"scrollOffset":90,"cleanUrls":false}`);
const EXTERNAL_URL_RE = /^[a-z]+:/i;
const PATHNAME_PROTOCOL_RE = /^pathname:\/\//;
const APPEARANCE_KEY = "vitepress-theme-appearance";
const HASH_RE = /#.*$/;
const EXT_RE = /(index)?\.(md|html)$/;
const inBrowser = typeof document !== "undefined";
const notFoundPageData = {
  relativePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: false, layout: "page" },
  lastUpdated: 0
};
function isActive(currentPath, matchPath, asRegex = false) {
  if (matchPath === void 0) {
    return false;
  }
  currentPath = normalize(`/${currentPath}`);
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath);
  }
  if (normalize(matchPath) !== currentPath) {
    return false;
  }
  const hashMatch = matchPath.match(HASH_RE);
  if (hashMatch) {
    return (inBrowser ? location.hash : "") === hashMatch[0];
  }
  return true;
}
function normalize(path) {
  return decodeURI(path).replace(HASH_RE, "").replace(EXT_RE, "");
}
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function resolveSiteDataByRoute(siteData2, relativePath) {
  var _a, _b, _c, _d, _e, _f, _g;
  const localeIndex = Object.keys(siteData2.locales).find((key) => key !== "root" && !isExternal(key) && isActive(relativePath, `/${key}/`, true)) || "root";
  return Object.assign({}, siteData2, {
    localeIndex,
    lang: ((_a = siteData2.locales[localeIndex]) == null ? void 0 : _a.lang) ?? siteData2.lang,
    dir: ((_b = siteData2.locales[localeIndex]) == null ? void 0 : _b.dir) ?? siteData2.dir,
    title: ((_c = siteData2.locales[localeIndex]) == null ? void 0 : _c.title) ?? siteData2.title,
    titleTemplate: ((_d = siteData2.locales[localeIndex]) == null ? void 0 : _d.titleTemplate) ?? siteData2.titleTemplate,
    description: ((_e = siteData2.locales[localeIndex]) == null ? void 0 : _e.description) ?? siteData2.description,
    head: mergeHead(siteData2.head, ((_f = siteData2.locales[localeIndex]) == null ? void 0 : _f.head) ?? []),
    themeConfig: {
      ...siteData2.themeConfig,
      ...(_g = siteData2.locales[localeIndex]) == null ? void 0 : _g.themeConfig
    }
  });
}
function createTitle(siteData2, pageData) {
  const title = pageData.title || siteData2.title;
  const template = pageData.titleTemplate ?? siteData2.titleTemplate;
  if (typeof template === "string" && template.includes(":title")) {
    return template.replace(/:title/g, title);
  }
  const templateString = createTitleTemplate(siteData2.title, template);
  return `${title}${templateString}`;
}
function createTitleTemplate(siteTitle, template) {
  if (template === false) {
    return "";
  }
  if (template === true || template === void 0) {
    return ` | ${siteTitle}`;
  }
  if (siteTitle === template) {
    return "";
  }
  return ` | ${template}`;
}
function hasTag(head, tag) {
  const [tagType, tagAttrs] = tag;
  if (tagType !== "meta")
    return false;
  const keyAttr = Object.entries(tagAttrs)[0];
  if (keyAttr == null)
    return false;
  return head.some(([type, attrs]) => type === tagType && attrs[keyAttr[0]] === keyAttr[1]);
}
function mergeHead(prev, curr) {
  return [...prev.filter((tagAttrs) => !hasTag(curr, tagAttrs)), ...curr];
}
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
  const match = DRIVE_LETTER_REGEX.exec(name);
  const driveLetter = match ? match[0] : "";
  return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const dataSymbol = Symbol();
const siteDataRef = shallowRef(siteData);
function initData(route) {
  const site = computed(() => resolveSiteDataByRoute(siteDataRef.value, route.data.relativePath));
  return {
    site,
    theme: computed(() => site.value.themeConfig),
    page: computed(() => route.data),
    frontmatter: computed(() => route.data.frontmatter),
    lang: computed(() => site.value.lang),
    dir: computed(() => site.value.dir),
    localeIndex: computed(() => site.value.localeIndex || "root"),
    title: computed(() => {
      return createTitle(site.value, route.data);
    }),
    description: computed(() => {
      return route.data.description || site.value.description;
    }),
    isDark: ref(false)
  };
}
function useData() {
  const data = inject(dataSymbol);
  if (!data) {
    throw new Error("vitepress data not properly injected in app");
  }
  return data;
}
function joinPath(base, path) {
  return `${base}${path}`.replace(/\/+/g, "/");
}
function withBase(path) {
  return EXTERNAL_URL_RE.test(path) || path.startsWith(".") ? path : joinPath(siteDataRef.value.base, path);
}
function pathToFile(path) {
  let pagePath = path.replace(/\.html$/, "");
  pagePath = decodeURIComponent(pagePath);
  pagePath = pagePath.replace(/\/$/, "/index");
  {
    if (inBrowser) {
      const base = "/";
      pagePath = sanitizeFileName(pagePath.slice(base.length).replace(/\//g, "_") || "index") + ".md";
      let pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      if (!pageHash) {
        pagePath = pagePath.endsWith("_index.md") ? pagePath.slice(0, -9) + ".md" : pagePath.slice(0, -3) + "_index.md";
        pageHash = __VP_HASH_MAP__[pagePath.toLowerCase()];
      }
      pagePath = `${base}assets/${pagePath}.${pageHash}.js`;
    } else {
      pagePath = `./${sanitizeFileName(pagePath.slice(1).replace(/\//g, "_"))}.md.js`;
    }
  }
  return pagePath;
}
const RouterSymbol = Symbol();
const fakeHost = `http://a.com`;
const getDefaultRoute = () => ({
  path: "/",
  component: null,
  data: notFoundPageData
});
function createRouter(loadPageModule, fallbackComponent) {
  const route = reactive(getDefaultRoute());
  const router = {
    route,
    go
  };
  async function go(href = inBrowser ? location.href : "/") {
    var _a, _b;
    await ((_a = router.onBeforeRouteChange) == null ? void 0 : _a.call(router, href));
    const url = new URL(href, fakeHost);
    if (!siteDataRef.value.cleanUrls) {
      if (!url.pathname.endsWith("/") && !url.pathname.endsWith(".html")) {
        url.pathname += ".html";
        href = url.pathname + url.search + url.hash;
      }
    }
    if (inBrowser && href !== location.href) {
      history.replaceState({ scrollPosition: window.scrollY }, document.title);
      history.pushState(null, "", href);
    }
    await loadPage(href);
    await ((_b = router.onAfterRouteChanged) == null ? void 0 : _b.call(router, href));
  }
  let latestPendingPath = null;
  async function loadPage(href, scrollPosition = 0, isRetry = false) {
    const targetLoc = new URL(href, fakeHost);
    const pendingPath = latestPendingPath = targetLoc.pathname;
    try {
      let page = await loadPageModule(pendingPath);
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        const { default: comp, __pageData } = page;
        if (!comp) {
          throw new Error(`Invalid route component: ${comp}`);
        }
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = markRaw(comp);
        route.data = true ? markRaw(__pageData) : readonly(__pageData);
        if (inBrowser) {
          nextTick(() => {
            let actualPathname = siteDataRef.value.base + __pageData.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
            if (!siteDataRef.value.cleanUrls && !actualPathname.endsWith("/")) {
              actualPathname += ".html";
            }
            if (actualPathname !== targetLoc.pathname) {
              targetLoc.pathname = actualPathname;
              href = actualPathname + targetLoc.search + targetLoc.hash;
              history.replaceState(null, "", href);
            }
            if (targetLoc.hash && !scrollPosition) {
              let target = null;
              try {
                target = document.querySelector(decodeURIComponent(targetLoc.hash));
              } catch (e) {
                console.warn(e);
              }
              if (target) {
                scrollTo(target, targetLoc.hash);
                return;
              }
            }
            window.scrollTo(0, scrollPosition);
          });
        }
      }
    } catch (err) {
      if (!/fetch/.test(err.message) && !/^\/404(\.html|\/)?$/.test(href)) {
        console.error(err);
      }
      if (!isRetry) {
        try {
          const res = await fetch(siteDataRef.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await res.json();
          await loadPage(href, scrollPosition, true);
          return;
        } catch (e) {
        }
      }
      if (latestPendingPath === pendingPath) {
        latestPendingPath = null;
        route.path = inBrowser ? pendingPath : withBase(pendingPath);
        route.component = fallbackComponent ? markRaw(fallbackComponent) : null;
        route.data = notFoundPageData;
      }
    }
  }
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button)
        return;
      const link = e.target.closest("a");
      if (link && !link.closest(".vp-raw") && (link instanceof SVGElement || !link.download)) {
        const { target } = link;
        const { href, origin, pathname, hash, search } = new URL(link.href instanceof SVGAnimatedString ? link.href.animVal : link.href, link.baseURI);
        const currentUrl = window.location;
        const extMatch = pathname.match(/\.\w+$/);
        if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey && target !== `_blank` && origin === currentUrl.origin && // don't intercept if non-html extension is present
        !(extMatch && extMatch[0] !== ".html")) {
          e.preventDefault();
          if (pathname === currentUrl.pathname && search === currentUrl.search) {
            if (hash && hash !== currentUrl.hash) {
              history.pushState(null, "", hash);
              window.dispatchEvent(new Event("hashchange"));
              scrollTo(link, hash, link.classList.contains("header-anchor"));
            }
          } else {
            go(href);
          }
        }
      }
    }, { capture: true });
    window.addEventListener("popstate", (e) => {
      loadPage(location.href, e.state && e.state.scrollPosition || 0);
    });
    window.addEventListener("hashchange", (e) => {
      e.preventDefault();
    });
  }
  return router;
}
function useRouter() {
  const router = inject(RouterSymbol);
  if (!router) {
    throw new Error("useRouter() is called without provider.");
  }
  return router;
}
function useRoute() {
  return useRouter().route;
}
function scrollTo(el, hash, smooth = false) {
  let target = null;
  try {
    target = el.classList.contains("header-anchor") ? el : document.querySelector(decodeURIComponent(hash));
  } catch (e) {
    console.warn(e);
  }
  if (target) {
    let offset = siteDataRef.value.scrollOffset;
    if (typeof offset === "string") {
      offset = document.querySelector(offset).getBoundingClientRect().bottom + 24;
    }
    const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
    const targetTop = window.scrollY + target.getBoundingClientRect().top - offset + targetPadding;
    if (!smooth || Math.abs(targetTop - window.scrollY) > window.innerHeight) {
      window.scrollTo(0, targetTop);
    } else {
      window.scrollTo({
        left: 0,
        top: targetTop,
        behavior: "smooth"
      });
    }
  }
}
const Content = defineComponent({
  name: "VitePressContent",
  props: {
    onContentUpdated: Function
  },
  setup(props) {
    const route = useRoute();
    onUpdated(() => {
      var _a;
      (_a = props.onContentUpdated) == null ? void 0 : _a.call(props);
    });
    return () => h("div", { style: { position: "relative" } }, [
      route.component ? h(route.component) : null
    ]);
  }
});
export {
  APPEARANCE_KEY as A,
  Content as C,
  EXTERNAL_URL_RE as E,
  PATHNAME_PROTOCOL_RE as P,
  RouterSymbol as R,
  isActive as a,
  useRoute as b,
  inBrowser as c,
  createTitle as d,
  initData as e,
  dataSymbol as f,
  createRouter as g,
  isExternal as i,
  mergeHead as m,
  pathToFile as p,
  siteDataRef as s,
  useData as u,
  withBase as w
};