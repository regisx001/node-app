import { o as rest_props, p as push, v as value_or_fallback, j as spread_props, d as bind_props, b as pop, g as store_get, k as slot, w as spread_attributes, u as unsubscribe_stores, l as sanitize_props } from './index2-BJ1gMto1.js';
import { c as cn, d as default_slot } from './index4-BLqsAhpD.js';
import { d as getCtx } from './index6-DXX3gRSH.js';

function Menu_separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { separator }, getAttrs } = getCtx();
  const attrs = getAttrs("separator");
  builder = store_get($$store_subs ??= {}, "$separator", separator);
  Object.assign(builder, attrs);
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        get builder() {
          return builder;
        }
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div${spread_attributes({
      ...store_get($$store_subs ??= {}, "$separator", separator),
      ...$$restProps
    })}></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Dropdown_menu_separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<!--[-->`;
  Menu_separator($$payload, spread_props([
    {
      class: cn("-mx-1 my-1 h-px bg-muted", className)
    },
    $$restProps
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className });
  pop();
}

export { Dropdown_menu_separator as D };
//# sourceMappingURL=dropdown-menu-separator-uVwmGOaI.js.map
