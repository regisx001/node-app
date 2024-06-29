import { j as spread_props, k as slot, l as sanitize_props } from './index2-BJ1gMto1.js';
import { I as Icon } from './helpers-B0fsY9OK.js';
import { d as default_slot } from './index4-BLqsAhpD.js';

function Circle_plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["path", { "d": "M8 12h8" }],
    ["path", { "d": "M12 8v8" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "circle-plus" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, default_slot($$props), {}, null);
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
}

export { Circle_plus as C };
//# sourceMappingURL=circle-plus-BWeO3o2z.js.map
