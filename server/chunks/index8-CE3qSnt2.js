import { o as rest_props, p as push, v as value_or_fallback, g as store_get, k as slot, w as spread_attributes, u as unsubscribe_stores, d as bind_props, b as pop, j as spread_props, s as setContext, l as sanitize_props, q as copy_payload, t as assign_payload, m as getContext } from './index2-BJ1gMto1.js';
import { I as Icon, c as createBitAttrs, r as removeUndefined, g as getOptionUpdater, t as toWritableStores, o as overridable, n as next, p as prev, l as last } from './helpers-B0fsY9OK.js';
import { d as default_slot, c as cn, o as omit, m as makeElement, b as createElHelpers, f as disabledAttr, e as executeCallbacks, a as addMeltEventListener, g as isBrowser, i as isHTMLElement, h as getDirectionalKeys, k as kbd } from './index4-BLqsAhpD.js';
import { s as setCheckboxItem, g as getCheckboxIndicator, d as getCtx$1 } from './index6-DXX3gRSH.js';
import { C as Check } from './Check-UweSlHf0.js';
import { g as getElemDirection } from './locale-B3ZXOAGS.js';
import { w as writable } from './index-Ch5foWpM.js';
import 'clsx';

function File($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "file" },
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
function List_filter($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M7 12h10" }],
    ["path", { "d": "M10 18h4" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "list-filter" },
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
const defaults = {
  orientation: "horizontal",
  activateOnFocus: true,
  loop: true,
  autoSet: true
};
const { name, selector } = createElHelpers("tabs");
function createTabs(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "defaultValue", "value", "onValueChange", "autoSet"));
  const { orientation, activateOnFocus, loop } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  let ssrValue = withDefaults.defaultValue ?? value.get();
  const root = makeElement(name(), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        "data-orientation": $orientation
      };
    }
  });
  const list = makeElement(name("list"), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        role: "tablist",
        "aria-orientation": $orientation,
        "data-orientation": $orientation
      };
    }
  });
  const parseTriggerProps = (props2) => {
    if (typeof props2 === "string") {
      return { value: props2 };
    } else {
      return props2;
    }
  };
  const trigger = makeElement(name("trigger"), {
    stores: [value, orientation],
    returned: ([$value, $orientation]) => {
      return (props2) => {
        const { value: tabValue, disabled } = parseTriggerProps(props2);
        if (!$value && !ssrValue && withDefaults.autoSet) {
          ssrValue = tabValue;
          $value = tabValue;
          value.set(tabValue);
        }
        const sourceOfTruth = isBrowser ? $value : ssrValue;
        const isActive = sourceOfTruth === tabValue;
        return {
          type: "button",
          role: "tab",
          "data-state": isActive ? "active" : "inactive",
          tabindex: isActive ? 0 : -1,
          "data-value": tabValue,
          "data-orientation": $orientation,
          "data-disabled": disabledAttr(disabled),
          disabled: disabledAttr(disabled)
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "focus", () => {
        const disabled = node.dataset.disabled === "true";
        const tabValue = node.dataset.value;
        if (activateOnFocus.get() && !disabled && tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "click", (e) => {
        node.focus();
        e.preventDefault();
        const disabled = node.dataset.disabled === "true";
        if (disabled)
          return;
        const tabValue = node.dataset.value;
        node.focus();
        if (tabValue !== void 0) {
          value.set(tabValue);
        }
      }), addMeltEventListener(node, "keydown", (e) => {
        const tabValue = node.dataset.value;
        if (!tabValue)
          return;
        const el = e.currentTarget;
        if (!isHTMLElement(el))
          return;
        const rootEl = el.closest(selector());
        if (!isHTMLElement(rootEl))
          return;
        const $loop = loop.get();
        const triggers = Array.from(rootEl.querySelectorAll('[role="tab"]')).filter((trigger2) => isHTMLElement(trigger2));
        const enabledTriggers = triggers.filter((el2) => !el2.hasAttribute("data-disabled"));
        const triggerIdx = enabledTriggers.findIndex((el2) => el2 === e.target);
        const dir = getElemDirection(rootEl);
        const { nextKey, prevKey } = getDirectionalKeys(dir, orientation.get());
        if (e.key === nextKey) {
          e.preventDefault();
          const nextEl = next(enabledTriggers, triggerIdx, $loop);
          nextEl.focus();
        } else if (e.key === prevKey) {
          e.preventDefault();
          const prevEl = prev(enabledTriggers, triggerIdx, $loop);
          prevEl.focus();
        } else if (e.key === kbd.ENTER || e.key === kbd.SPACE) {
          e.preventDefault();
          value.set(tabValue);
        } else if (e.key === kbd.HOME) {
          e.preventDefault();
          const firstTrigger = enabledTriggers[0];
          firstTrigger.focus();
        } else if (e.key === kbd.END) {
          e.preventDefault();
          const lastTrigger = last(enabledTriggers);
          lastTrigger.focus();
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const content = makeElement(name("content"), {
    stores: value,
    returned: ($value) => {
      return (tabValue) => {
        return {
          role: "tabpanel",
          // TODO: improve
          "aria-labelledby": tabValue,
          hidden: isBrowser ? $value === tabValue ? void 0 : true : ssrValue === tabValue ? void 0 : true,
          tabindex: 0
        };
      };
    }
  });
  return {
    elements: {
      root,
      list,
      trigger,
      content
    },
    states: {
      value
    },
    options
  };
}
function Menu_checkbox_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "checked",
    "onCheckedChange",
    "disabled",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let checked = value_or_fallback($$props["checked"], () => void 0);
  let onCheckedChange = value_or_fallback($$props["onCheckedChange"], () => void 0);
  let disabled = value_or_fallback($$props["disabled"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    elements: { checkboxItem },
    states: { checked: localChecked },
    updateOption,
    getAttrs
  } = setCheckboxItem({
    disabled,
    defaultChecked: checked,
    onCheckedChange: ({ next: next2 }) => {
      if (checked !== next2) {
        onCheckedChange?.(next2);
        checked = next2;
      }
      return next2;
    }
  });
  const attrs = getAttrs("checkbox-item");
  checked !== void 0 && localChecked.set(checked);
  updateOption("disabled", disabled);
  builder = store_get($$store_subs ??= {}, "$checkboxItem", checkboxItem);
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
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}><!--[-->`;
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
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    checked,
    onCheckedChange,
    disabled,
    asChild,
    el
  });
  pop();
}
function Menu_checkbox_indicator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const checked = getCheckboxIndicator();
  const { getAttrs } = getCtx$1();
  const attrs = getAttrs("checkbox-indicator");
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        attrs,
        get checked() {
          return store_get($$store_subs ??= {}, "$checked", checked);
        }
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div${spread_attributes({ ...$$restProps, ...attrs })}><!--[-->`;
    if (store_get($$store_subs ??= {}, "$checked", checked)) {
      $$payload.out += `<!--[-->`;
      slot(
        $$payload,
        default_slot($$props),
        {
          attrs,
          get checked() {
            return store_get($$store_subs ??= {}, "$checked", checked);
          }
        },
        null
      );
      $$payload.out += `<!--]-->`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function getTabsData() {
  const NAME = "tabs";
  const PARTS = ["root", "content", "list", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getTabsData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const tabs = { ...createTabs(removeUndefined(props)), getAttrs };
  setContext(NAME, tabs);
  return {
    ...tabs,
    updateOption: getOptionUpdater(tabs.options)
  };
}
function getCtx() {
  const { NAME } = getTabsData();
  return getContext(NAME);
}
function Tabs($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "activateOnFocus",
    "loop",
    "autoSet",
    "value",
    "onValueChange",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let orientation = value_or_fallback($$props["orientation"], () => void 0);
  let activateOnFocus = value_or_fallback($$props["activateOnFocus"], () => void 0);
  let loop = value_or_fallback($$props["loop"], () => void 0);
  let autoSet = value_or_fallback($$props["autoSet"], () => void 0);
  let value = value_or_fallback($$props["value"], () => void 0);
  let onValueChange = value_or_fallback($$props["onValueChange"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    elements: { root },
    states: { value: localValue },
    updateOption,
    getAttrs
  } = setCtx({
    orientation,
    activateOnFocus,
    loop,
    autoSet,
    defaultValue: value,
    onValueChange: ({ next: next2 }) => {
      if (value !== next2) {
        onValueChange?.(next2);
        value = next2;
      }
      return next2;
    }
  });
  const attrs = getAttrs("root");
  value !== void 0 && localValue.set(value);
  updateOption("orientation", orientation);
  updateOption("activateOnFocus", activateOnFocus);
  updateOption("loop", loop);
  updateOption("autoSet", autoSet);
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
        },
        get value() {
          return store_get($$store_subs ??= {}, "$localValue", localValue);
        }
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}><!--[-->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        get builder() {
          return builder;
        },
        get value() {
          return store_get($$store_subs ??= {}, "$localValue", localValue);
        }
      },
      null
    );
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    orientation,
    activateOnFocus,
    loop,
    autoSet,
    value,
    onValueChange,
    asChild,
    el
  });
  pop();
}
function Tabs_content$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let value = $$props["value"];
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { content }, getAttrs } = getCtx();
  const attrs = getAttrs("content");
  builder = store_get($$store_subs ??= {}, "$content", content)(value);
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
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}><!--[-->`;
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
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { value, asChild, el });
  pop();
}
function Tabs_list$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { list }, getAttrs } = getCtx();
  const attrs = getAttrs("list");
  builder = store_get($$store_subs ??= {}, "$list", list);
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
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}><!--[-->`;
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
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Tabs_trigger$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "disabled", "asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let value = $$props["value"];
  let disabled = value_or_fallback($$props["disabled"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { trigger }, getAttrs } = getCtx();
  const attrs = getAttrs("trigger");
  builder = store_get($$store_subs ??= {}, "$trigger", trigger)({ value, disabled });
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
  bind_props($$props, { value, disabled, asChild, el });
  pop();
}
function Dropdown_menu_checkbox_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "checked"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let checked = value_or_fallback($$props["checked"], () => void 0);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    Menu_checkbox_item($$payload2, spread_props([
      {
        get checked() {
          return checked;
        },
        set checked($$value) {
          checked = $$value;
          $$settled = false;
        },
        class: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className)
      },
      $$restProps,
      {
        children: ($$payload3, $$slotProps) => {
          $$payload3.out += `<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"><!--[-->`;
          Menu_checkbox_indicator($$payload3, {
            children: ($$payload4, $$slotProps2) => {
              $$payload4.out += `<!--[-->`;
              Check($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--></span> <!--[-->`;
          slot($$payload3, default_slot($$props), {}, null);
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
function Tabs_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let value = $$props["value"];
  $$payload.out += `<!--[-->`;
  Tabs_content$1($$payload, spread_props([
    {
      class: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
      value
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, default_slot($$props), {}, null);
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, value });
  pop();
}
function Tabs_list($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<!--[-->`;
  Tabs_list$1($$payload, spread_props([
    {
      class: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className)
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, default_slot($$props), {}, null);
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className });
  pop();
}
function Tabs_trigger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let value = $$props["value"];
  $$payload.out += `<!--[-->`;
  Tabs_trigger$1($$payload, spread_props([
    {
      class: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
      value
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, default_slot($$props), {}, null);
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, value });
  pop();
}
const Root = Tabs;

export { Dropdown_menu_checkbox_item as D, File as F, List_filter as L, Root as R, Tabs_list as T, Tabs_content as a, Tabs_trigger as b };
//# sourceMappingURL=index8-CE3qSnt2.js.map
