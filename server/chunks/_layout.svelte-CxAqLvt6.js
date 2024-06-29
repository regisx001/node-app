import { b as pop, v as value_or_fallback, h as head, d as bind_props, p as push, e as attr } from './index2-BJ1gMto1.js';
import { t as themeColors, d as disableTransitions } from './stores-YH2kuO2K.js';
import './index-Ch5foWpM.js';

function setInitialMode(defaultMode, themeColors2) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  rootEl.classList[light ? "remove" : "add"]("dark");
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
function Mode_watcher($$payload, $$props) {
  push();
  let track = value_or_fallback($$props["track"], () => true);
  let defaultMode = value_or_fallback($$props["defaultMode"], () => "system");
  let themeColors$1 = value_or_fallback($$props["themeColors"], () => void 0);
  let disableTransitions$1 = value_or_fallback($$props["disableTransitions"], () => true);
  themeColors.set(themeColors$1);
  disableTransitions.set(disableTransitions$1);
  const args = `"${defaultMode}"${themeColors$1 ? `, ${JSON.stringify(themeColors$1)}` : ""}`;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<!--[-->`;
    if (themeColors$1) {
      $$payload2.out += `<meta name="theme-color"${attr("content", themeColors$1.dark)}>`;
      $$payload2.out += "<!--]-->";
    } else {
      $$payload2.out += "<!--]!-->";
    }
    $$payload2.out += ` <!--[-->${`<script nonce="%sveltekit.nonce%">(` + setInitialMode.toString() + `)(` + args + `);<\/script>`}<!--]-->`;
  });
  bind_props($$props, {
    track,
    defaultMode,
    themeColors: themeColors$1,
    disableTransitions: disableTransitions$1
  });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<!--[-->`;
  Mode_watcher($$payload, {});
  $$payload.out += `<!--]--> <!--[-->`;
  children($$payload);
  $$payload.out += `<!--]-->`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CxAqLvt6.js.map
