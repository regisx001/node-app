import { o as rest_props, p as push, v as value_or_fallback, w as spread_attributes, k as slot, d as bind_props, b as pop, l as sanitize_props } from './index2-BJ1gMto1.js';
import { c as cn, d as default_slot } from './index4-BLqsAhpD.js';

function Card_footer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("flex items-center p-6 pt-0", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { class: className });
  pop();
}

export { Card_footer as C };
//# sourceMappingURL=card-footer-DLXgQPb3.js.map
