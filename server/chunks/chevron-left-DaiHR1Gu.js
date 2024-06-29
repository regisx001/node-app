import { j as spread_props, k as slot, l as sanitize_props } from './index2-BJ1gMto1.js';
import { I as Icon } from './helpers-B0fsY9OK.js';
import { d as default_slot } from './index4-BLqsAhpD.js';

function Chevron_left($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "chevron-left" },
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

export { Chevron_left as C };
//# sourceMappingURL=chevron-left-DaiHR1Gu.js.map
