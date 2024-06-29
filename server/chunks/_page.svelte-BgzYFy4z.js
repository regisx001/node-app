import { P as Package_2, R as Root, S as Search, T as Trigger, a as Sheet_content, M as Menu, C as Circle_user } from './index3-ojNQwNs3.js';
import { B as Button, c as cn, d as default_slot, o as omit, m as makeElement, f as disabledAttr, e as executeCallbacks, a as addMeltEventListener, k as kbd, r as styleToString } from './index4-BLqsAhpD.js';
import { C as Card, a as Card_header, b as Card_content, c as Card_title, d as Card_description } from './card-title-D13NqLL6.js';
import { C as Card_footer } from './card-footer-DLXgQPb3.js';
import { o as rest_props, p as push, v as value_or_fallback, q as copy_payload, t as assign_payload, d as bind_props, b as pop, l as sanitize_props, j as spread_props, g as store_get, k as slot, w as spread_attributes, u as unsubscribe_stores, m as getContext, s as setContext } from './index2-BJ1gMto1.js';
import { c as createBitAttrs, r as removeUndefined, g as getOptionUpdater, t as toWritableStores, o as overridable } from './helpers-B0fsY9OK.js';
import { w as writable, d as derived } from './index-Ch5foWpM.js';
import { C as Check } from './Check-UweSlHf0.js';
import { R as Root$1, T as Trigger$1, D as Dropdown_menu_content, a as Dropdown_menu_label, b as Dropdown_menu_item } from './index6-DXX3gRSH.js';
import { I as Input } from './index7-D4139Xtz.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-uVwmGOaI.js';
import 'tailwind-variants';
import 'clsx';
import 'tailwind-merge';

const defaults = {
  disabled: false,
  required: false,
  name: void 0,
  value: "on",
  defaultChecked: false
};
function createCheckbox(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "checked", "defaultChecked"));
  const { disabled, name, required, value } = options;
  const checkedWritable = withDefaults.checked ?? writable(withDefaults.defaultChecked);
  const checked = overridable(checkedWritable, withDefaults?.onCheckedChange);
  const root = makeElement("checkbox", {
    stores: [checked, disabled, required],
    returned: ([$checked, $disabled, $required]) => {
      return {
        "data-disabled": disabledAttr($disabled),
        disabled: disabledAttr($disabled),
        "data-state": $checked === "indeterminate" ? "indeterminate" : $checked ? "checked" : "unchecked",
        type: "button",
        role: "checkbox",
        "aria-checked": $checked === "indeterminate" ? "mixed" : $checked,
        "aria-required": $required
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "keydown", (e) => {
        if (e.key === kbd.ENTER)
          e.preventDefault();
      }), addMeltEventListener(node, "click", () => {
        if (disabled.get())
          return;
        checked.update((value2) => {
          if (value2 === "indeterminate")
            return true;
          return !value2;
        });
      }));
      return {
        destroy: unsub
      };
    }
  });
  const input = makeElement("checkbox-input", {
    stores: [checked, name, value, required, disabled],
    returned: ([$checked, $name, $value, $required, $disabled]) => {
      return {
        type: "checkbox",
        "aria-hidden": true,
        hidden: true,
        tabindex: -1,
        name: $name,
        value: $value,
        checked: $checked === "indeterminate" ? false : $checked,
        required: $required,
        disabled: disabledAttr($disabled),
        style: styleToString({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)"
        })
      };
    }
  });
  const isIndeterminate = derived(checked, ($checked) => $checked === "indeterminate");
  const isChecked = derived(checked, ($checked) => $checked === true);
  return {
    elements: {
      root,
      input
    },
    states: {
      checked
    },
    helpers: {
      isIndeterminate,
      isChecked
    },
    options
  };
}
function getCheckboxData() {
  const NAME = "checkbox";
  const PARTS = ["root", "input", "indicator"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getCheckboxData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const checkbox = { ...createCheckbox(removeUndefined(props)), getAttrs };
  setContext(NAME, checkbox);
  return {
    ...checkbox,
    updateOption: getOptionUpdater(checkbox.options)
  };
}
function getCtx() {
  const { NAME } = getCheckboxData();
  return getContext(NAME);
}
function Checkbox$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "checked",
    "disabled",
    "name",
    "required",
    "value",
    "onCheckedChange",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let attrs, builder;
  let checked = value_or_fallback($$props["checked"], () => false);
  let disabled = value_or_fallback($$props["disabled"], () => void 0);
  let name = value_or_fallback($$props["name"], () => void 0);
  let required = value_or_fallback($$props["required"], () => void 0);
  let value = value_or_fallback($$props["value"], () => void 0);
  let onCheckedChange = value_or_fallback($$props["onCheckedChange"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    elements: { root },
    states: { checked: localChecked },
    updateOption,
    getAttrs
  } = setCtx({
    defaultChecked: checked,
    disabled,
    name,
    required,
    value,
    onCheckedChange: ({ next }) => {
      if (checked !== next) {
        onCheckedChange?.(next);
        checked = next;
      }
      return next;
    }
  });
  attrs = {
    ...getAttrs("root"),
    disabled: disabled ? true : void 0
  };
  checked !== void 0 && localChecked.set(checked);
  updateOption("disabled", disabled);
  updateOption("name", name);
  updateOption("required", required);
  updateOption("value", value);
  builder = store_get($$store_subs ??= {}, "$root", root);
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
    $$payload.out += `<button${spread_attributes({ ...builder, type: "button", ...$$restProps })}><!--[-->`;
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
    $$payload.out += `<!--]--></button>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    checked,
    disabled,
    name,
    required,
    value,
    onCheckedChange,
    asChild,
    el
  });
  pop();
}
function Checkbox_indicator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let attrs;
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    helpers: { isChecked, isIndeterminate },
    states: { checked },
    getAttrs
  } = getCtx();
  function getStateAttr(state) {
    if (state === "indeterminate") return "indeterminate";
    if (state) return "checked";
    return "unchecked";
  }
  attrs = {
    ...getAttrs("indicator"),
    "data-state": getStateAttr(store_get($$store_subs ??= {}, "$checked", checked))
  };
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        get attrs() {
          return attrs;
        },
        get isChecked() {
          return store_get($$store_subs ??= {}, "$isChecked", isChecked);
        },
        get isIndeterminate() {
          return store_get($$store_subs ??= {}, "$isIndeterminate", isIndeterminate);
        }
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div${spread_attributes({ ...$$restProps, ...attrs })}><!--[-->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        get attrs() {
          return attrs;
        },
        get isChecked() {
          return store_get($$store_subs ??= {}, "$isChecked", isChecked);
        },
        get isIndeterminate() {
          return store_get($$store_subs ??= {}, "$isIndeterminate", isIndeterminate);
        }
      },
      null
    );
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Minus($$payload, $$props) {
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
  let ariaLabel = value_or_fallback($$props["ariaLabel"], () => "minus,");
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
    )}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor"></path></svg>`;
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
    )}><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z" fill="currentColor"></path></svg>`;
    $$payload.out += "<!--]!-->";
  }
  bind_props($$props, { size, role, color, ariaLabel, withEvents });
  pop();
}
function Checkbox($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "checked"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let checked = value_or_fallback($$props["checked"], () => false);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    Checkbox$1($$payload2, spread_props([
      {
        class: cn("peer box-content h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[disabled=true]:opacity-50", className),
        get checked() {
          return checked;
        },
        set checked($$value) {
          checked = $$value;
          $$settled = false;
        }
      },
      $$restProps,
      {
        children: ($$payload3, $$slotProps) => {
          $$payload3.out += `<!--[-->`;
          Checkbox_indicator($$payload3, {
            class: cn("flex h-4 w-4 items-center justify-center text-current"),
            children: ($$payload4, $$slotProps2) => {
              const isChecked = $$slotProps2.isChecked;
              const isIndeterminate = $$slotProps2.isIndeterminate;
              $$payload4.out += `<!--[-->`;
              if (isIndeterminate) {
                $$payload4.out += `<!--[-->`;
                Minus($$payload4, { class: "h-3.5 w-3.5" });
                $$payload4.out += `<!--]-->`;
                $$payload4.out += "<!--]-->";
              } else {
                $$payload4.out += `<!--[-->`;
                Check($$payload4, {
                  class: cn("h-3.5 w-3.5", !isChecked && "text-transparent")
                });
                $$payload4.out += `<!--]-->`;
                $$payload4.out += "<!--]!-->";
              }
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      }
    ]));
    $$payload2.out += `<!--]-->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { class: className, checked });
  pop();
}
function _page($$payload) {
  $$payload.out += `<div class="flex min-h-screen w-full flex-col"><header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"><nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"><a href="##" class="flex items-center gap-2 text-lg font-semibold md:text-base"><!--[-->`;
  Package_2($$payload, { class: "h-6 w-6" });
  $$payload.out += `<!--]--> <span class="sr-only">Acme Inc</span></a> <a href="##" class="text-muted-foreground transition-colors hover:text-foreground">Dashboard</a> <a href="##" class="text-muted-foreground transition-colors hover:text-foreground">Orders</a> <a href="##" class="text-muted-foreground transition-colors hover:text-foreground">Products</a> <a href="##" class="text-muted-foreground transition-colors hover:text-foreground">Customers</a> <a href="##" class="text-foreground transition-colors hover:text-foreground">Settings</a></nav> <!--[-->`;
  Root($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Trigger($$payload2, {
        asChild: true,
        children: ($$payload3, $$slotProps2) => {
          const builder = $$slotProps2.builder;
          $$payload3.out += `<!--[-->`;
          Button($$payload3, {
            variant: "outline",
            size: "icon",
            class: "shrink-0 md:hidden",
            builders: [builder],
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Menu($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!--]--> <span class="sr-only">Toggle navigation menu</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Sheet_content($$payload2, {
        side: "left",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<nav class="grid gap-6 text-lg font-medium"><a href="##" class="flex items-center gap-2 text-lg font-semibold"><!--[-->`;
          Package_2($$payload3, { class: "h-6 w-6" });
          $$payload3.out += `<!--]--> <span class="sr-only">Acme Inc</span></a> <a href="##" class="text-muted-foreground hover:text-foreground">Dashboard</a> <a href="##" class="text-muted-foreground hover:text-foreground">Orders</a> <a href="##" class="text-muted-foreground hover:text-foreground">Products</a> <a href="##" class="text-muted-foreground hover:text-foreground">Customers</a> <a href="##" class="hover:text-foreground">Settings</a></nav>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"><form class="ml-auto flex-1 sm:flex-initial"><div class="relative"><!--[-->`;
  Search($$payload, {
    class: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Input($$payload, {
    type: "search",
    placeholder: "Search products...",
    class: "pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
  });
  $$payload.out += `<!--]--></div></form> <!--[-->`;
  Root$1($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Trigger$1($$payload2, {
        asChild: true,
        children: ($$payload3, $$slotProps2) => {
          const builder = $$slotProps2.builder;
          $$payload3.out += `<!--[-->`;
          Button($$payload3, {
            builders: [builder],
            variant: "secondary",
            size: "icon",
            class: "rounded-full",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Circle_user($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!--]--> <span class="sr-only">Toggle user menu</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Dropdown_menu_content($$payload2, {
        align: "end",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Dropdown_menu_label($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `My Account`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Dropdown_menu_separator($$payload3, {});
          $$payload3.out += `<!--]--> <!--[-->`;
          Dropdown_menu_item($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Settings`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Dropdown_menu_item($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Support`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Dropdown_menu_separator($$payload3, {});
          $$payload3.out += `<!--]--> <!--[-->`;
          Dropdown_menu_item($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Logout`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div></header> <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10"><div class="mx-auto grid w-full max-w-6xl gap-2"><h1 class="text-3xl font-semibold">Settings</h1></div> <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]"><nav class="grid gap-4 text-sm text-muted-foreground" data-x-chunk-container="chunk-container after:right-0"><a href="##" class="font-semibold text-primary">General</a> <a href="##">Security</a> <a href="##">Integrations</a> <a href="##">Support</a> <a href="##">Organizations</a> <a href="##">Advanced</a></nav> <div class="grid gap-6"><!--[-->`;
  Card($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Store Name`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Used to identify your store in the marketplace.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_content($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<form><!--[-->`;
          Input($$payload3, { placeholder: "Store Name" });
          $$payload3.out += `<!--]--></form>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_footer($$payload2, {
        class: "border-t px-6 py-4",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Button($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Save`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Card($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Plugins Directory`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `The directory within your project, in which your plugins are located.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_content($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<form class="flex flex-col gap-4"><!--[-->`;
          Input($$payload3, {
            placeholder: "Project Name",
            value: "/content/plugins"
          });
          $$payload3.out += `<!--]--> <div class="flex items-center space-x-2"><!--[-->`;
          Checkbox($$payload3, { id: "include", checked: true });
          $$payload3.out += `<!--]--> <label for="include" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Allow administrators to change the directory.</label></div></form>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_footer($$payload2, {
        class: "border-t px-6 py-4",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Button($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Save`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div></div></main></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BgzYFy4z.js.map
