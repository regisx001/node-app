import { j as spread_props, k as slot, l as sanitize_props } from './index2-BJ1gMto1.js';
import { I as Icon } from './helpers-B0fsY9OK.js';
import { d as default_slot } from './index4-BLqsAhpD.js';

function Ellipsis($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ],
    [
      "circle",
      { "cx": "19", "cy": "12", "r": "1" }
    ],
    [
      "circle",
      { "cx": "5", "cy": "12", "r": "1" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "ellipsis" },
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

export { Ellipsis as E };
//# sourceMappingURL=ellipsis-0VBl8LKq.js.map
