import { o as rest_props, v as value_or_fallback, x as element, d as bind_props, b as pop, p as push, k as slot, w as spread_attributes, l as sanitize_props } from './index2-BJ1gMto1.js';
import { d as default_slot, c as cn } from './index4-BLqsAhpD.js';
import { tv } from 'tailwind-variants';
import 'clsx';

function Badge($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "href", "variant"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let href = value_or_fallback($$props["href"], () => void 0);
  let variant = value_or_fallback($$props["variant"], () => "default");
  const $$tag = href ? "a" : "span";
  if ($$tag) element(
    $$payload,
    $$tag,
    () => {
      $$payload.out += `${spread_attributes({
        href,
        class: cn(badgeVariants({ variant, className })),
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
  bind_props($$props, { class: className, href, variant });
  pop();
}
const badgeVariants = tv({
  base: "inline-flex select-none items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export { Badge as B };
//# sourceMappingURL=index5-vhLr_Hvi.js.map
