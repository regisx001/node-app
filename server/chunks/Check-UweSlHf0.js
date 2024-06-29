import { o as rest_props, p as push, m as getContext, v as value_or_fallback, w as spread_attributes, d as bind_props, b as pop, l as sanitize_props } from './index2-BJ1gMto1.js';

function Check($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "role",
    "color",
    "ariaLabel",
    "withEvents"
  ]);
  push();
  const ctx = getContext("iconCtx") ?? {};
  let size = value_or_fallback($$props["size"], () => ctx.size || "24");
  let role = value_or_fallback($$props["role"], () => ctx.role || "img");
  let color = value_or_fallback($$props["color"], () => ctx.color || "currentColor");
  let ariaLabel = value_or_fallback($$props["ariaLabel"], () => "check,");
  let withEvents = value_or_fallback($$props["withEvents"], () => false);
  $$payload.out += `<!--[-->`;
  if (withEvents) {
    $$payload.out += `<svg${spread_attributes(
      {
        width: size,
        height: size,
        ...$$restProps,
        role,
        "aria-label": ariaLabel,
        viewBox: "0 0 15 15",
        fill: color,
        xmlns: "http://www.w3.org/2000/svg"
      },
      void 0,
      void 0,
      3
    )}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor"></path></svg>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<svg${spread_attributes(
      {
        width: size,
        height: size,
        ...$$restProps,
        role,
        "aria-label": ariaLabel,
        viewBox: "0 0 15 15",
        fill: color,
        xmlns: "http://www.w3.org/2000/svg"
      },
      void 0,
      void 0,
      3
    )}><path fill-rule="evenodd" clip-rule="evenodd" d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor"></path></svg>`;
    $$payload.out += "<!--]!-->";
  }
  bind_props($$props, { size, role, color, ariaLabel, withEvents });
  pop();
}

export { Check as C };
//# sourceMappingURL=Check-UweSlHf0.js.map
