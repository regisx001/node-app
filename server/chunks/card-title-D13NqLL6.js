import { o as rest_props, v as value_or_fallback, w as spread_attributes, k as slot, d as bind_props, b as pop, p as push, l as sanitize_props, x as element } from './index2-BJ1gMto1.js';
import { c as cn, d as default_slot } from './index4-BLqsAhpD.js';

function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("rounded-xl border bg-card text-card-foreground shadow", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("p-6 pt-0", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_description($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<p${spread_attributes({
    class: cn("text-sm text-muted-foreground", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></p>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<div${spread_attributes({
    class: cn("flex flex-col space-y-1.5 p-6", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let tag = value_or_fallback($$props["tag"], () => "h3");
  if (tag) element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        class: cn("font-semibold leading-none tracking-tight", className),
        ...$$restProps
      })}`;
    },
    () => {
      $$payload.out += `<!--[-->`;
      slot($$payload, default_slot($$props), {}, null);
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!---->`;
  bind_props($$props, { class: className, tag });
  pop();
}

export { Card as C, Card_header as a, Card_content as b, Card_title as c, Card_description as d };
//# sourceMappingURL=card-title-D13NqLL6.js.map
