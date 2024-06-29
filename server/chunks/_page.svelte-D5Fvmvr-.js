import { C as Chevron_left } from './chevron-left-DaiHR1Gu.js';
import { C as Circle_plus } from './circle-plus-BWeO3o2z.js';
import { j as spread_props, k as slot, o as rest_props, p as push, v as value_or_fallback, d as bind_props, b as pop, w as spread_attributes, f as escape_html, l as sanitize_props, g as store_get, u as unsubscribe_stores, s as setContext, q as copy_payload, t as assign_payload, m as getContext } from './index2-BJ1gMto1.js';
import { I as Icon, c as createBitAttrs, r as removeUndefined, g as getOptionUpdater, o as overridable, t as toWritableStores, a as generateIds, b as createTypeaheadSearch, d as derivedVisible, l as last, e as back, f as forward, p as prev, n as next, u as usePopper, h as getPortalDestination, i as generateId, j as addHighlight, k as removeHighlight, m as removeScroll, q as getPositioningUpdater, s as toggle, v as handleRovingFocus } from './helpers-B0fsY9OK.js';
import { B as Button, d as default_slot, c as cn, m as makeElement, a as addMeltEventListener, j as flyAndScale, w as withGet, o as omit, b as createElHelpers, l as dequal, n as isObject, s as stripValues, f as disabledAttr, e as executeCallbacks, k as kbd, p as isHTMLButtonElement, t as tick, i as isHTMLElement, F as FIRST_LAST_KEYS, q as isElementDisabled, u as useEscapeKeydown, r as styleToString, v as effect, x as isElement, y as createHiddenInput, z as safeOnMount, g as isBrowser, A as getElementByMeltId, C as isHTMLLabelElement, D as isHTMLInputElement, E as noop } from './index4-BLqsAhpD.js';
import { B as Badge } from './index5-vhLr_Hvi.js';
import { C as Card, a as Card_header, b as Card_content, c as Card_title, d as Card_description } from './card-title-D13NqLL6.js';
import { C as Card_footer } from './card-footer-DLXgQPb3.js';
import { I as Input, s as scale } from './index7-D4139Xtz.js';
import { d as derived, w as writable, g as get, a as readonly } from './index-Ch5foWpM.js';
import 'clsx';
import { T as Table, a as Table_header, c as Table_row, b as Table_body, d as Table_head, e as Table_cell } from './table-row-DWhlj0ny.js';
import { g as getElemDirection } from './locale-B3ZXOAGS.js';
import { tv } from 'tailwind-variants';
import { C as Check } from './Check-UweSlHf0.js';
import 'tailwind-merge';

function Upload($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
      }
    ],
    ["polyline", { "points": "17 8 12 3 7 8" }],
    [
      "line",
      {
        "x1": "12",
        "x2": "12",
        "y1": "3",
        "y2": "15"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "upload" },
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
function getOptions(el) {
  return Array.from(el.querySelectorAll('[role="option"]:not([data-disabled])')).filter((el2) => isHTMLElement(el2));
}
function createClickOutsideIgnore(meltId) {
  return (e) => {
    const target = e.target;
    const triggerEl = getElementByMeltId(meltId);
    if (!triggerEl || !isElement(target))
      return false;
    const id = triggerEl.id;
    if (isHTMLLabelElement(target) && id === target.htmlFor) {
      return true;
    }
    if (target.closest(`label[for="${id}"]`)) {
      return true;
    }
    return false;
  };
}
function createLabel() {
  const root = makeElement("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}
const INTERACTION_KEYS = [kbd.ARROW_LEFT, kbd.ESCAPE, kbd.ARROW_RIGHT, kbd.SHIFT, kbd.CAPS_LOCK, kbd.CONTROL, kbd.ALT, kbd.META, kbd.ENTER, kbd.F1, kbd.F2, kbd.F3, kbd.F4, kbd.F5, kbd.F6, kbd.F7, kbd.F8, kbd.F9, kbd.F10, kbd.F11, kbd.F12];
const defaults$1 = {
  positioning: {
    placement: "bottom",
    sameWidth: true
  },
  scrollAlignment: "nearest",
  loop: true,
  defaultOpen: false,
  closeOnOutsideClick: true,
  preventScroll: true,
  closeOnEscape: true,
  forceVisible: false,
  portal: void 0,
  builder: "listbox",
  disabled: false,
  required: false,
  name: void 0,
  typeahead: true,
  highlightOnHover: true,
  onOutsideClick: void 0
};
const listboxIdParts = ["trigger", "menu", "label"];
function createListbox(props) {
  const withDefaults = { ...defaults$1, ...props };
  const activeTrigger = withGet(writable(null));
  const highlightedItem = withGet(writable(null));
  const selectedWritable = withDefaults.selected ?? writable(withDefaults.defaultSelected);
  const selected = overridable(selectedWritable, withDefaults?.onSelectedChange);
  const highlighted = derived(highlightedItem, ($highlightedItem) => $highlightedItem ? getOptionProps($highlightedItem) : void 0);
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const options = toWritableStores({
    ...omit(withDefaults, "open", "defaultOpen", "builder", "ids"),
    multiple: withDefaults.multiple ?? false
  });
  const { scrollAlignment, loop, closeOnOutsideClick, closeOnEscape, preventScroll, portal, forceVisible, positioning, multiple, arrowSize, disabled, required, typeahead, name: nameProp, highlightOnHover, onOutsideClick } = options;
  const { name: name2, selector: selector2 } = createElHelpers(withDefaults.builder);
  const ids = toWritableStores({ ...generateIds(listboxIdParts), ...withDefaults.ids });
  const { handleTypeaheadSearch } = createTypeaheadSearch({
    onMatch: (element) => {
      highlightedItem.set(element);
      element.scrollIntoView({ block: scrollAlignment.get() });
    },
    getCurrentItem() {
      return highlightedItem.get();
    }
  });
  function getOptionProps(el) {
    const value = el.getAttribute("data-value");
    const label2 = el.getAttribute("data-label");
    const disabled2 = el.hasAttribute("data-disabled");
    return {
      value: value ? JSON.parse(value) : value,
      label: label2 ?? el.textContent ?? void 0,
      disabled: disabled2 ? true : false
    };
  }
  const setOption = (newOption) => {
    selected.update(($option) => {
      const $multiple = multiple.get();
      if ($multiple) {
        const optionArr = Array.isArray($option) ? [...$option] : [];
        return toggle(newOption, optionArr, (itemA, itemB) => dequal(itemA.value, itemB.value));
      }
      return newOption;
    });
  };
  function selectItem(item) {
    const props2 = getOptionProps(item);
    setOption(props2);
  }
  async function openMenu() {
    open.set(true);
    const triggerEl = document.getElementById(ids.trigger.get());
    if (!triggerEl)
      return;
    if (triggerEl !== activeTrigger.get())
      activeTrigger.set(triggerEl);
    await tick();
    const menuElement = document.getElementById(ids.menu.get());
    if (!isHTMLElement(menuElement))
      return;
    const selectedItem = menuElement.querySelector("[aria-selected=true]");
    if (!isHTMLElement(selectedItem))
      return;
    highlightedItem.set(selectedItem);
  }
  function closeMenu() {
    open.set(false);
    highlightedItem.set(null);
  }
  const isVisible = derivedVisible({ open, forceVisible, activeTrigger });
  const isSelected = derived([selected], ([$selected]) => {
    return (value) => {
      if (Array.isArray($selected)) {
        return $selected.some((o) => dequal(o.value, value));
      }
      if (isObject(value)) {
        return dequal($selected?.value, stripValues(value, void 0));
      }
      return dequal($selected?.value, value);
    };
  });
  const isHighlighted = derived([highlighted], ([$value]) => {
    return (item) => {
      return dequal($value?.value, item);
    };
  });
  const trigger = makeElement(name2("trigger"), {
    stores: [open, highlightedItem, disabled, ids.menu, ids.trigger, ids.label],
    returned: ([$open, $highlightedItem, $disabled, $menuId, $triggerId, $labelId]) => {
      return {
        "aria-activedescendant": $highlightedItem?.id,
        "aria-autocomplete": "list",
        "aria-controls": $menuId,
        "aria-expanded": $open,
        "aria-labelledby": $labelId,
        // autocomplete: 'off',
        id: $triggerId,
        role: "combobox",
        disabled: disabledAttr($disabled),
        type: withDefaults.builder === "select" ? "button" : void 0
      };
    },
    action: (node) => {
      const isInput = isHTMLInputElement(node);
      const unsubscribe = executeCallbacks(
        addMeltEventListener(node, "click", () => {
          node.focus();
          const $open = open.get();
          if ($open) {
            closeMenu();
          } else {
            openMenu();
          }
        }),
        // Handle all input key events including typing, meta, and navigation.
        addMeltEventListener(node, "keydown", (e) => {
          const $open = open.get();
          if (!$open) {
            if (INTERACTION_KEYS.includes(e.key)) {
              return;
            }
            if (e.key === kbd.TAB) {
              return;
            }
            if (e.key === kbd.BACKSPACE && isInput && node.value === "") {
              return;
            }
            if (e.key === kbd.SPACE && isHTMLButtonElement(node)) {
              return;
            }
            openMenu();
            tick().then(() => {
              const $selectedItem = selected.get();
              if ($selectedItem)
                return;
              const menuEl = document.getElementById(ids.menu.get());
              if (!isHTMLElement(menuEl))
                return;
              const enabledItems = Array.from(menuEl.querySelectorAll(`${selector2("item")}:not([data-disabled]):not([data-hidden])`)).filter((item) => isHTMLElement(item));
              if (!enabledItems.length)
                return;
              if (e.key === kbd.ARROW_DOWN) {
                highlightedItem.set(enabledItems[0]);
                enabledItems[0].scrollIntoView({ block: scrollAlignment.get() });
              } else if (e.key === kbd.ARROW_UP) {
                highlightedItem.set(last(enabledItems));
                last(enabledItems).scrollIntoView({ block: scrollAlignment.get() });
              }
            });
          }
          if (e.key === kbd.TAB) {
            closeMenu();
            return;
          }
          if (e.key === kbd.ENTER && !e.isComposing || e.key === kbd.SPACE && isHTMLButtonElement(node)) {
            e.preventDefault();
            const $highlightedItem = highlightedItem.get();
            if ($highlightedItem) {
              selectItem($highlightedItem);
            }
            if (!multiple.get()) {
              closeMenu();
            }
          }
          if (e.key === kbd.ARROW_UP && e.altKey) {
            closeMenu();
          }
          if (FIRST_LAST_KEYS.includes(e.key)) {
            e.preventDefault();
            const menuElement = document.getElementById(ids.menu.get());
            if (!isHTMLElement(menuElement))
              return;
            const itemElements = getOptions(menuElement);
            if (!itemElements.length)
              return;
            const candidateNodes = itemElements.filter((opt) => !isElementDisabled(opt) && opt.dataset.hidden === void 0);
            const $currentItem = highlightedItem.get();
            const currentIndex = $currentItem ? candidateNodes.indexOf($currentItem) : -1;
            const $loop = loop.get();
            const $scrollAlignment = scrollAlignment.get();
            let nextItem;
            switch (e.key) {
              case kbd.ARROW_DOWN:
                nextItem = next(candidateNodes, currentIndex, $loop);
                break;
              case kbd.ARROW_UP:
                nextItem = prev(candidateNodes, currentIndex, $loop);
                break;
              case kbd.PAGE_DOWN:
                nextItem = forward(candidateNodes, currentIndex, 10, $loop);
                break;
              case kbd.PAGE_UP:
                nextItem = back(candidateNodes, currentIndex, 10, $loop);
                break;
              case kbd.HOME:
                nextItem = candidateNodes[0];
                break;
              case kbd.END:
                nextItem = last(candidateNodes);
                break;
              default:
                return;
            }
            highlightedItem.set(nextItem);
            nextItem?.scrollIntoView({ block: $scrollAlignment });
          } else if (typeahead.get()) {
            const menuEl = document.getElementById(ids.menu.get());
            if (!isHTMLElement(menuEl))
              return;
            handleTypeaheadSearch(e.key, getOptions(menuEl));
          }
        })
      );
      let unsubEscapeKeydown = noop;
      const escape = useEscapeKeydown(node, {
        handler: closeMenu,
        enabled: derived([open, closeOnEscape], ([$open, $closeOnEscape]) => {
          return $open && $closeOnEscape;
        })
      });
      if (escape && escape.destroy) {
        unsubEscapeKeydown = escape.destroy;
      }
      return {
        destroy() {
          unsubscribe();
          unsubEscapeKeydown();
        }
      };
    }
  });
  const menu = makeElement(name2("menu"), {
    stores: [isVisible, ids.menu],
    returned: ([$isVisible, $menuId]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        id: $menuId,
        role: "listbox",
        style: styleToString({ display: $isVisible ? void 0 : "none" })
      };
    },
    action: (node) => {
      let unsubPopper = noop;
      const unsubscribe = executeCallbacks(
        // Bind the popper portal to the input element.
        effect([isVisible, portal, closeOnOutsideClick, positioning, activeTrigger], ([$isVisible, $portal, $closeOnOutsideClick, $positioning, $activeTrigger]) => {
          unsubPopper();
          if (!$isVisible || !$activeTrigger)
            return;
          tick().then(() => {
            unsubPopper();
            const ignoreHandler = createClickOutsideIgnore(ids.trigger.get());
            unsubPopper = usePopper(node, {
              anchorElement: $activeTrigger,
              open,
              options: {
                floating: $positioning,
                focusTrap: null,
                modal: {
                  closeOnInteractOutside: $closeOnOutsideClick,
                  onClose: closeMenu,
                  open: $isVisible,
                  shouldCloseOnInteractOutside: (e) => {
                    onOutsideClick.get()?.(e);
                    if (e.defaultPrevented)
                      return false;
                    const target = e.target;
                    if (!isElement(target))
                      return false;
                    if (target === $activeTrigger || $activeTrigger.contains(target)) {
                      return false;
                    }
                    if (ignoreHandler(e))
                      return false;
                    return true;
                  }
                },
                escapeKeydown: null,
                portal: getPortalDestination(node, $portal)
              }
            }).destroy;
          });
        })
      );
      return {
        destroy: () => {
          unsubscribe();
          unsubPopper();
        }
      };
    }
  });
  const { elements: { root: labelBuilder } } = createLabel();
  const { action: labelAction } = get(labelBuilder);
  const label = makeElement(name2("label"), {
    stores: [ids.label, ids.trigger],
    returned: ([$labelId, $triggerId]) => {
      return {
        id: $labelId,
        for: $triggerId
      };
    },
    action: labelAction
  });
  const option = makeElement(name2("option"), {
    stores: [isSelected],
    returned: ([$isSelected]) => (props2) => {
      const selected2 = $isSelected(props2.value);
      return {
        "data-value": JSON.stringify(props2.value),
        "data-label": props2.label,
        "data-disabled": disabledAttr(props2.disabled),
        "aria-disabled": props2.disabled ? true : void 0,
        "aria-selected": selected2,
        "data-selected": selected2 ? "" : void 0,
        id: generateId(),
        role: "option"
      };
    },
    action: (node) => {
      const unsubscribe = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        if (isElementDisabled(node)) {
          e.preventDefault();
          return;
        }
        selectItem(node);
        if (!multiple.get()) {
          closeMenu();
        }
      }), effect(highlightOnHover, ($highlightOnHover) => {
        if (!$highlightOnHover)
          return;
        const unsub = executeCallbacks(addMeltEventListener(node, "mouseover", () => {
          highlightedItem.set(node);
        }), addMeltEventListener(node, "mouseleave", () => {
          highlightedItem.set(null);
        }));
        return unsub;
      }));
      return { destroy: unsubscribe };
    }
  });
  const group = makeElement(name2("group"), {
    returned: () => {
      return (groupId) => ({
        role: "group",
        "aria-labelledby": groupId
      });
    }
  });
  const groupLabel = makeElement(name2("group-label"), {
    returned: () => {
      return (groupId) => ({
        id: groupId
      });
    }
  });
  const hiddenInput = createHiddenInput({
    value: derived([selected], ([$selected]) => {
      const value = Array.isArray($selected) ? $selected.map((o) => o.value) : $selected?.value;
      return typeof value === "string" ? value : JSON.stringify(value);
    }),
    name: readonly(nameProp),
    required,
    prefix: withDefaults.builder
  });
  const arrow = makeElement(name2("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  safeOnMount(() => {
    if (!isBrowser)
      return;
    const menuEl = document.getElementById(ids.menu.get());
    const triggerEl = document.getElementById(ids.trigger.get());
    if (triggerEl) {
      activeTrigger.set(triggerEl);
    }
    if (!menuEl)
      return;
    const selectedEl = menuEl.querySelector("[data-selected]");
    if (!isHTMLElement(selectedEl))
      return;
  });
  effect([highlightedItem], ([$highlightedItem]) => {
    if (!isBrowser)
      return;
    const menuElement = document.getElementById(ids.menu.get());
    if (!isHTMLElement(menuElement))
      return;
    getOptions(menuElement).forEach((node) => {
      if (node === $highlightedItem) {
        addHighlight(node);
      } else {
        removeHighlight(node);
      }
    });
  });
  effect([open], ([$open]) => {
    if (!isBrowser)
      return;
    let unsubScroll = noop;
    if (preventScroll.get() && $open) {
      unsubScroll = removeScroll();
    }
    return () => {
      unsubScroll();
    };
  });
  return {
    ids,
    elements: {
      trigger,
      group,
      option,
      menu,
      groupLabel,
      label,
      hiddenInput,
      arrow
    },
    states: {
      open,
      selected,
      highlighted,
      highlightedItem
    },
    helpers: {
      isSelected,
      isHighlighted,
      closeMenu
    },
    options
  };
}
function createSelect(props) {
  const listbox = createListbox({ ...props, builder: "select" });
  const selectedLabel = derived(listbox.states.selected, ($selected) => {
    if (Array.isArray($selected)) {
      return $selected.map((o) => o.label).join(", ");
    }
    return $selected?.label ?? "";
  });
  return {
    ...listbox,
    elements: {
      ...listbox.elements
    },
    states: {
      ...listbox.states,
      selectedLabel
    }
  };
}
const defaults = {
  type: "single",
  orientation: "horizontal",
  loop: true,
  rovingFocus: true,
  disabled: false,
  defaultValue: ""
};
const { name, selector } = createElHelpers("toggle-group");
const createToggleGroup = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value"));
  const { type, orientation, loop, rovingFocus, disabled } = options;
  const defaultValue = withDefaults.defaultValue ? withDefaults.defaultValue : withDefaults.type === "single" ? void 0 : [];
  const valueWritable = withDefaults.value ?? writable(defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const root = makeElement(name(), {
    stores: orientation,
    returned: ($orientation) => {
      return {
        role: "group",
        "data-orientation": $orientation
      };
    }
  });
  const item = makeElement(name("item"), {
    stores: [value, disabled, orientation, type],
    returned: ([$value, $disabled, $orientation, $type]) => {
      return (props2) => {
        const itemValue = typeof props2 === "string" ? props2 : props2.value;
        const argDisabled = typeof props2 === "string" ? false : !!props2.disabled;
        const disabled2 = $disabled || argDisabled;
        const pressed = Array.isArray($value) ? $value.includes(itemValue) : $value === itemValue;
        const isSingle = $type === "single";
        const isMultiple = $type === "multiple" || $type === void 0;
        return {
          disabled: disabledAttr(disabled2),
          pressed,
          "data-orientation": $orientation,
          "data-disabled": disabledAttr(disabled2),
          "data-state": pressed ? "on" : "off",
          "data-value": itemValue,
          "aria-pressed": isMultiple ? pressed : void 0,
          "aria-checked": isSingle ? pressed : void 0,
          type: "button",
          role: isSingle ? "radio" : void 0,
          tabindex: pressed ? 0 : -1
        };
      };
    },
    action: (node) => {
      let unsub = noop;
      const parentGroup = node.closest(selector());
      if (!isHTMLElement(parentGroup))
        return {};
      const items = Array.from(parentGroup.querySelectorAll(selector("item")));
      const $value = value.get();
      const anyPressed = Array.isArray($value) ? $value.length > 0 : $value ? true : false;
      if (!anyPressed && items[0] === node) {
        node.tabIndex = 0;
      }
      function getNodeProps() {
        const itemValue = node.dataset.value;
        const disabled2 = node.dataset.disabled === "true";
        return { value: itemValue, disabled: disabled2 };
      }
      function handleValueUpdate() {
        const { value: itemValue, disabled: disabled2 } = getNodeProps();
        if (itemValue === void 0 || disabled2)
          return;
        value.update(($value2) => {
          if (Array.isArray($value2)) {
            if ($value2.includes(itemValue)) {
              return $value2.filter((i) => i !== itemValue);
            }
            return [...$value2, itemValue];
          }
          return $value2 === itemValue ? void 0 : itemValue;
        });
      }
      unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        handleValueUpdate();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key === kbd.SPACE || e.key === kbd.ENTER) {
          e.preventDefault();
          handleValueUpdate();
          return;
        }
        if (!rovingFocus.get())
          return;
        const el = e.currentTarget;
        if (!isHTMLElement(el))
          return;
        const root2 = el.closest(selector());
        if (!isHTMLElement(root2))
          return;
        const items2 = Array.from(root2.querySelectorAll(selector("item") + ":not([data-disabled])")).filter((item2) => isHTMLElement(item2));
        const currentIndex = items2.indexOf(el);
        const dir = getElemDirection(el);
        const $orientation = orientation.get();
        const nextKey = {
          horizontal: dir === "rtl" ? kbd.ARROW_LEFT : kbd.ARROW_RIGHT,
          vertical: kbd.ARROW_DOWN
        }[$orientation ?? "horizontal"];
        const prevKey = {
          horizontal: dir === "rtl" ? kbd.ARROW_RIGHT : kbd.ARROW_LEFT,
          vertical: kbd.ARROW_UP
        }[$orientation ?? "horizontal"];
        const $loop = loop.get();
        if (e.key === nextKey) {
          e.preventDefault();
          const nextIndex = currentIndex + 1;
          if (nextIndex >= items2.length && $loop) {
            handleRovingFocus(items2[0]);
          } else {
            handleRovingFocus(items2[nextIndex]);
          }
        } else if (e.key === prevKey) {
          e.preventDefault();
          const prevIndex = currentIndex - 1;
          if (prevIndex < 0 && $loop) {
            handleRovingFocus(items2[items2.length - 1]);
          } else {
            handleRovingFocus(items2[prevIndex]);
          }
        } else if (e.key === kbd.HOME) {
          e.preventDefault();
          handleRovingFocus(items2[0]);
        } else if (e.key === kbd.END) {
          e.preventDefault();
          handleRovingFocus(items2[items2.length - 1]);
        }
      }));
      return {
        destroy: unsub
      };
    }
  });
  const isPressed = derived(value, ($value) => {
    return (itemValue) => {
      return Array.isArray($value) ? $value.includes(itemValue) : $value === itemValue;
    };
  });
  return {
    elements: {
      root,
      item
    },
    states: {
      value
    },
    helpers: {
      isPressed
    },
    options
  };
};
function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}
function getLabelData() {
  const NAME = "label";
  const PARTS = ["root"];
  const getAttrs = createBitAttrs(NAME, PARTS);
  return {
    NAME,
    getAttrs
  };
}
function Label$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { root } } = createLabel();
  const { getAttrs } = getLabelData();
  const attrs = getAttrs("root");
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
    $$payload.out += `<label${spread_attributes({ ...builder, ...$$restProps })}><!--[-->`;
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
    $$payload.out += `<!--]--></label>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function getSelectData() {
  const NAME = "select";
  const GROUP_NAME = "select-group";
  const ITEM_NAME = "select-item";
  const PARTS = [
    "arrow",
    "content",
    "group",
    "item",
    "indicator",
    "input",
    "label",
    "trigger",
    "value"
  ];
  return {
    NAME,
    GROUP_NAME,
    ITEM_NAME,
    PARTS
  };
}
function getCtx$1() {
  const { NAME } = getSelectData();
  return getContext(NAME);
}
function setCtx$1(props) {
  const { NAME, PARTS } = getSelectData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const select = {
    ...createSelect({ ...removeUndefined(props), forceVisible: true }),
    getAttrs
  };
  setContext(NAME, select);
  return {
    ...select,
    updateOption: getOptionUpdater(select.options)
  };
}
function setItemCtx(value) {
  const { ITEM_NAME } = getSelectData();
  const select = getCtx$1();
  setContext(ITEM_NAME, value);
  return select;
}
function getItemIndicator() {
  const { ITEM_NAME } = getSelectData();
  const { helpers: { isSelected }, getAttrs } = getCtx$1();
  const value = getContext(ITEM_NAME);
  return {
    value,
    isSelected,
    getAttrs
  };
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "bottom",
    align: "center",
    sameWidth: true
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx$1();
  const updater = getPositioningUpdater(positioning);
  updater(withDefaults);
}
function Select($$payload, $$props) {
  push();
  var $$store_subs;
  let required = value_or_fallback($$props["required"], () => void 0);
  let disabled = value_or_fallback($$props["disabled"], () => void 0);
  let preventScroll = value_or_fallback($$props["preventScroll"], () => void 0);
  let loop = value_or_fallback($$props["loop"], () => void 0);
  let closeOnEscape = value_or_fallback($$props["closeOnEscape"], () => void 0);
  let closeOnOutsideClick = value_or_fallback($$props["closeOnOutsideClick"], () => void 0);
  let portal = value_or_fallback($$props["portal"], () => void 0);
  let name2 = value_or_fallback($$props["name"], () => void 0);
  let multiple = value_or_fallback($$props["multiple"], () => false);
  let selected = value_or_fallback($$props["selected"], () => void 0);
  let onSelectedChange = value_or_fallback($$props["onSelectedChange"], () => void 0);
  let open = value_or_fallback($$props["open"], () => void 0);
  let onOpenChange = value_or_fallback($$props["onOpenChange"], () => void 0);
  let items = value_or_fallback($$props["items"], () => []);
  let onOutsideClick = value_or_fallback($$props["onOutsideClick"], () => void 0);
  const {
    states: { open: localOpen, selected: localSelected },
    updateOption,
    ids
  } = setCtx$1({
    required,
    disabled,
    preventScroll,
    loop,
    closeOnEscape,
    closeOnOutsideClick,
    portal,
    name: name2,
    onOutsideClick,
    multiple,
    forceVisible: true,
    defaultSelected: Array.isArray(selected) ? [...selected] : selected,
    defaultOpen: open,
    onSelectedChange: ({ next: next2 }) => {
      if (Array.isArray(next2)) {
        if (!Array.isArray(selected) || !arraysAreEqual(selected, next2)) {
          onSelectedChange?.(next2);
          selected = next2;
          return next2;
        }
        return next2;
      }
      if (selected !== next2) {
        onSelectedChange?.(next2);
        selected = next2;
      }
      return next2;
    },
    onOpenChange: ({ next: next2 }) => {
      if (open !== next2) {
        onOpenChange?.(next2);
        open = next2;
      }
      return next2;
    },
    items
  });
  const idValues = derived([ids.menu, ids.trigger, ids.label], ([$menuId, $triggerId, $labelId]) => ({
    menu: $menuId,
    trigger: $triggerId,
    label: $labelId
  }));
  open !== void 0 && localOpen.set(open);
  selected !== void 0 && localSelected.set(Array.isArray(selected) ? [...selected] : selected);
  updateOption("required", required);
  updateOption("disabled", disabled);
  updateOption("preventScroll", preventScroll);
  updateOption("loop", loop);
  updateOption("closeOnEscape", closeOnEscape);
  updateOption("closeOnOutsideClick", closeOnOutsideClick);
  updateOption("portal", portal);
  updateOption("name", name2);
  updateOption("multiple", multiple);
  updateOption("onOutsideClick", onOutsideClick);
  $$payload.out += `<!--[-->`;
  slot(
    $$payload,
    default_slot($$props),
    {
      get ids() {
        return store_get($$store_subs ??= {}, "$idValues", idValues);
      }
    },
    null
  );
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    required,
    disabled,
    preventScroll,
    loop,
    closeOnEscape,
    closeOnOutsideClick,
    portal,
    name: name2,
    multiple,
    selected,
    onSelectedChange,
    open,
    onOpenChange,
    items,
    onOutsideClick
  });
  pop();
}
function Select_content$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let transition = value_or_fallback($$props["transition"], () => void 0);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], () => void 0);
  let inTransition = value_or_fallback($$props["inTransition"], () => void 0);
  let inTransitionConfig = value_or_fallback($$props["inTransitionConfig"], () => void 0);
  let outTransition = value_or_fallback($$props["outTransition"], () => void 0);
  let outTransitionConfig = value_or_fallback($$props["outTransitionConfig"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let id = value_or_fallback($$props["id"], () => void 0);
  let side = value_or_fallback($$props["side"], () => "bottom");
  let align = value_or_fallback($$props["align"], () => "center");
  let sideOffset = value_or_fallback($$props["sideOffset"], () => 0);
  let alignOffset = value_or_fallback($$props["alignOffset"], () => 0);
  let collisionPadding = value_or_fallback($$props["collisionPadding"], () => 8);
  let avoidCollisions = value_or_fallback($$props["avoidCollisions"], () => true);
  let collisionBoundary = value_or_fallback($$props["collisionBoundary"], () => void 0);
  let sameWidth = value_or_fallback($$props["sameWidth"], () => true);
  let fitViewport = value_or_fallback($$props["fitViewport"], () => false);
  let strategy = value_or_fallback($$props["strategy"], () => "absolute");
  let overlap = value_or_fallback($$props["overlap"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    elements: { menu },
    states: { open },
    ids,
    getAttrs
  } = getCtx$1();
  const attrs = getAttrs("content");
  if (id) {
    ids.menu.set(id);
  }
  builder = store_get($$store_subs ??= {}, "$menu", menu);
  Object.assign(builder, attrs);
  if (store_get($$store_subs ??= {}, "$open", open)) {
    updatePositioning({
      side,
      align,
      sideOffset,
      alignOffset,
      collisionPadding,
      avoidCollisions,
      collisionBoundary,
      sameWidth,
      fitViewport,
      strategy,
      overlap
    });
  }
  $$payload.out += `<!--[-->`;
  if (asChild && store_get($$store_subs ??= {}, "$open", open)) {
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
    $$payload.out += `<!--[-->`;
    if (transition && store_get($$store_subs ??= {}, "$open", open)) {
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
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<!--[-->`;
      if (inTransition && outTransition && store_get($$store_subs ??= {}, "$open", open)) {
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
        $$payload.out += "<!--]-->";
      } else {
        $$payload.out += `<!--[-->`;
        if (inTransition && store_get($$store_subs ??= {}, "$open", open)) {
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
          $$payload.out += "<!--]-->";
        } else {
          $$payload.out += `<!--[-->`;
          if (outTransition && store_get($$store_subs ??= {}, "$open", open)) {
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
            $$payload.out += "<!--]-->";
          } else {
            $$payload.out += `<!--[-->`;
            if (store_get($$store_subs ??= {}, "$open", open)) {
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
              $$payload.out += "<!--]-->";
            } else {
              $$payload.out += "<!--]!-->";
            }
            $$payload.out += "<!--]!-->";
          }
          $$payload.out += "<!--]!-->";
        }
        $$payload.out += "<!--]!-->";
      }
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    transition,
    transitionConfig,
    inTransition,
    inTransitionConfig,
    outTransition,
    outTransitionConfig,
    asChild,
    id,
    side,
    align,
    sideOffset,
    alignOffset,
    collisionPadding,
    avoidCollisions,
    collisionBoundary,
    sameWidth,
    fitViewport,
    strategy,
    overlap,
    el
  });
  pop();
}
function Select_item$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "value",
    "disabled",
    "label",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder, isSelected;
  let value = $$props["value"];
  let disabled = value_or_fallback($$props["disabled"], () => void 0);
  let label = value_or_fallback($$props["label"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    elements: { option: item },
    helpers: { isSelected: isSelectedStore },
    getAttrs
  } = setItemCtx(value);
  const attrs = getAttrs("item");
  builder = store_get($$store_subs ??= {}, "$item", item)({ value, disabled, label });
  Object.assign(builder, attrs);
  isSelected = store_get($$store_subs ??= {}, "$isSelectedStore", isSelectedStore)(value);
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
        get isSelected() {
          return isSelected;
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
        get isSelected() {
          return isSelected;
        }
      },
      () => {
        $$payload.out += `${escape_html(label || value)}`;
      }
    );
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { value, disabled, label, asChild, el });
  pop();
}
function Select_item_indicator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { isSelected, value, getAttrs } = getItemIndicator();
  const attrs = getAttrs("indicator");
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        attrs,
        get isSelected() {
          return store_get($$store_subs ??= {}, "$isSelected", isSelected)(value);
        }
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<div${spread_attributes({ ...$$restProps, ...attrs })}><!--[-->`;
    if (store_get($$store_subs ??= {}, "$isSelected", isSelected)(value)) {
      $$payload.out += `<!--[-->`;
      slot(
        $$payload,
        default_slot($$props),
        {
          attrs,
          get isSelected() {
            return store_get($$store_subs ??= {}, "$isSelected", isSelected)(value);
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
function Select_trigger$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "id", "el"]);
  push();
  var $$store_subs;
  let builder;
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let id = value_or_fallback($$props["id"], () => void 0);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { trigger }, ids, getAttrs } = getCtx$1();
  const attrs = getAttrs("trigger");
  if (id) {
    ids.trigger.set(id);
  }
  builder = store_get($$store_subs ??= {}, "$trigger", trigger);
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
  bind_props($$props, { asChild, id, el });
  pop();
}
function Select_value($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["placeholder", "asChild", "el"]);
  push();
  var $$store_subs;
  let label;
  let placeholder = value_or_fallback($$props["placeholder"], () => "");
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { states: { selectedLabel }, getAttrs } = getCtx$1();
  const attrs = getAttrs("value");
  label = store_get($$store_subs ??= {}, "$selectedLabel", selectedLabel);
  $$payload.out += `<!--[-->`;
  if (asChild) {
    $$payload.out += `<!--[-->`;
    slot(
      $$payload,
      default_slot($$props),
      {
        get label() {
          return label;
        },
        attrs
      },
      null
    );
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += `<span${spread_attributes({
      ...$$restProps,
      ...attrs,
      "data-placeholder": !label ? "" : void 0
    })}>${escape_html(label || placeholder)}</span>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { placeholder, asChild, el });
  pop();
}
function getToggleGroupData() {
  const NAME = "toggle-group";
  const PARTS = ["root", "item"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getToggleGroupData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const toggleGroup = { ...createToggleGroup(removeUndefined(props)), getAttrs };
  setContext(NAME, toggleGroup);
  return {
    ...toggleGroup,
    updateOption: getOptionUpdater(toggleGroup.options)
  };
}
function getCtx() {
  const { NAME } = getToggleGroupData();
  return getContext(NAME);
}
function Toggle_group$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "type",
    "disabled",
    "loop",
    "value",
    "orientation",
    "onValueChange",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let type = value_or_fallback($$props["type"], () => "single");
  let disabled = value_or_fallback($$props["disabled"], () => void 0);
  let loop = value_or_fallback($$props["loop"], () => void 0);
  let value = value_or_fallback($$props["value"], () => void 0);
  let orientation = value_or_fallback($$props["orientation"], () => void 0);
  let onValueChange = value_or_fallback($$props["onValueChange"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    elements: { root },
    states: { value: localValue },
    updateOption,
    getAttrs
  } = setCtx({
    disabled,
    type,
    defaultValue: value,
    loop,
    orientation,
    onValueChange: ({ next: next2 }) => {
      if (Array.isArray(next2)) {
        if (!Array.isArray(value) || !arraysAreEqual(value, next2)) {
          onValueChange?.(next2);
          value = next2;
          return next2;
        }
        return next2;
      }
      if (value !== next2) {
        onValueChange?.(next2);
        value = next2;
      }
      return next2;
    }
  });
  const attrs = getAttrs("root");
  value !== void 0 && localValue.set(Array.isArray(value) ? [...value] : value);
  updateOption("disabled", disabled);
  updateOption("loop", loop);
  updateOption("type", type);
  updateOption("orientation", orientation);
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
    type,
    disabled,
    loop,
    value,
    orientation,
    onValueChange,
    asChild,
    el
  });
  pop();
}
function Toggle_group_item$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["value", "disabled", "asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let value = $$props["value"];
  let disabled = value_or_fallback($$props["disabled"], () => false);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { item }, getAttrs } = getCtx();
  const attrs = getAttrs("item");
  builder = store_get($$store_subs ??= {}, "$item", item)({ value, disabled });
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
    $$payload.out += `<button${spread_attributes({ ...builder, ...$$restProps })}><!--[-->`;
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
function Label($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<!--[-->`;
  Label$1($$payload, spread_props([
    {
      class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
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
function Select_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "label", "disabled"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let value = $$props["value"];
  let label = value_or_fallback($$props["label"], () => void 0);
  let disabled = value_or_fallback($$props["disabled"], () => void 0);
  $$payload.out += `<!--[-->`;
  Select_item$1($$payload, spread_props([
    {
      value,
      disabled,
      label,
      class: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50", className)
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"><!--[-->`;
        Select_item_indicator($$payload2, {
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `<!--[-->`;
            Check($$payload3, { class: "h-4 w-4" });
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!--]--></span> <!--[-->`;
        slot($$payload2, default_slot($$props), {}, () => {
          $$payload2.out += `${escape_html(label || value)}`;
        });
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, value, label, disabled });
  pop();
}
function Select_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "sideOffset",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig"
  ]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let sideOffset = value_or_fallback($$props["sideOffset"], () => 4);
  let inTransition = value_or_fallback($$props["inTransition"], () => flyAndScale);
  let inTransitionConfig = value_or_fallback($$props["inTransitionConfig"], () => void 0);
  let outTransition = value_or_fallback($$props["outTransition"], () => scale);
  let outTransitionConfig = value_or_fallback($$props["outTransitionConfig"], () => ({ start: 0.95, opacity: 0, duration: 50 }));
  $$payload.out += `<!--[-->`;
  Select_content$1($$payload, spread_props([
    {
      inTransition,
      inTransitionConfig,
      outTransition,
      outTransitionConfig,
      sideOffset,
      class: cn("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none", className)
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<div class="w-full p-1"><!--[-->`;
        slot($$payload2, default_slot($$props), {}, null);
        $$payload2.out += `<!--]--></div>`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    class: className,
    sideOffset,
    inTransition,
    inTransitionConfig,
    outTransition,
    outTransitionConfig
  });
  pop();
}
function CaretSort($$payload, $$props) {
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
  let ariaLabel = value_or_fallback($$props["ariaLabel"], () => "caret sort,");
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
    )}><path fill-rule="evenodd" clip-rule="evenodd" d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor"></path></svg>`;
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
    )}><path fill-rule="evenodd" clip-rule="evenodd" d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor"></path></svg>`;
    $$payload.out += "<!--]!-->";
  }
  bind_props($$props, { size, role, color, ariaLabel, withEvents });
  pop();
}
function Select_trigger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<!--[-->`;
  Select_trigger$1($$payload, spread_props([
    {
      class: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid]:border-destructive [&>span]:line-clamp-1 data-[placeholder]:[&>span]:text-muted-foreground", className)
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, default_slot($$props), {}, null);
        $$payload2.out += `<!--]--> <div><!--[-->`;
        CaretSort($$payload2, { class: "h-4 w-4 opacity-50" });
        $$payload2.out += `<!--]--></div>`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className });
  pop();
}
const Root = Select;
const Value = Select_value;
function Textarea($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "readonly"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let value = value_or_fallback($$props["value"], () => void 0);
  let readonly2 = value_or_fallback($$props["readonly"], () => void 0);
  $$payload.out += `<textarea${spread_attributes({
    class: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
    readonly: readonly2,
    ...$$restProps
  })}>`;
  const $$body = escape_html(value);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea>`;
  bind_props($$props, { class: className, value, readonly: readonly2 });
  pop();
}
function Toggle_group($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "variant", "size", "value"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let variant = value_or_fallback($$props["variant"], () => "default");
  let size = value_or_fallback($$props["size"], () => "default");
  let value = value_or_fallback($$props["value"], () => void 0);
  setToggleGroupCtx({ variant, size });
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    Toggle_group$1($$payload2, spread_props([
      {
        class: cn("flex items-center justify-center gap-1", className),
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        }
      },
      $$restProps,
      {
        children: ($$payload3, $$slotProps) => {
          const builder = $$slotProps.builder;
          $$payload3.out += `<!--[-->`;
          slot(
            $$payload3,
            default_slot($$props),
            {
              get builder() {
                return builder;
              }
            },
            null
          );
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
  bind_props($$props, { class: className, variant, size, value });
  pop();
}
const toggleVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  variants: {
    variant: {
      default: "bg-transparent",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground"
    },
    size: {
      default: "h-9 px-3",
      sm: "h-8 px-2",
      lg: "h-10 px-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Toggle_group_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "variant", "size", "value"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let variant = value_or_fallback($$props["variant"], () => "default");
  let size = value_or_fallback($$props["size"], () => "default");
  let value = $$props["value"];
  const ctx = getToggleGroupCtx();
  $$payload.out += `<!--[-->`;
  Toggle_group_item$1($$payload, spread_props([
    {
      class: cn(
        toggleVariants({
          variant: ctx.variant || variant,
          size: ctx.size || size
        }),
        className
      ),
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
  bind_props($$props, { class: className, variant, size, value });
  pop();
}
function setToggleGroupCtx(props) {
  setContext("toggleGroup", props);
}
function getToggleGroupCtx() {
  return getContext("toggleGroup");
}
function _page($$payload) {
  $$payload.out += `<main class="grid h-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"><div class="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4"><div class="flex items-center gap-4"><!--[-->`;
  Button($$payload, {
    variant: "outline",
    size: "icon",
    class: "h-7 w-7",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Chevron_left($$payload2, { class: "h-4 w-4" });
      $$payload2.out += `<!--]--> <span class="sr-only">Back</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <h1 class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">Pro Controller</h1> <!--[-->`;
  Badge($$payload, {
    variant: "outline",
    class: "ml-auto sm:ml-0",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `In stock`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <div class="hidden items-center gap-2 md:ml-auto md:flex"><!--[-->`;
  Button($$payload, {
    variant: "outline",
    size: "sm",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Discard`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Button($$payload, {
    size: "sm",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Save Product`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div></div> <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8"><div class="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8"><!--[-->`;
  Card($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Product Details`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Lipsum dolor sit amet, consectetur adipiscing elit`;
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
          $$payload3.out += `<div class="grid gap-6"><div class="grid gap-3"><!--[-->`;
          Label($$payload3, {
            for: "name",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Name`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Input($$payload3, {
            id: "name",
            type: "text",
            class: "w-full",
            value: "Gamer Gear Pro Controller"
          });
          $$payload3.out += `<!--]--></div> <div class="grid gap-3"><!--[-->`;
          Label($$payload3, {
            for: "description",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Description`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Textarea($$payload3, {
            id: "description",
            value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
            class: "min-h-32"
          });
          $$payload3.out += `<!--]--></div></div>`;
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
              $$payload4.out += `Stock`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Lipsum dolor sit amet, consectetur adipiscing elit`;
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
          $$payload3.out += `<!--[-->`;
          Table($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Table_header($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Table_row($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Table_head($$payload6, {
                        class: "w-[100px]",
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `SKU`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_head($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `Stock`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_head($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `Price`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_head($$payload6, {
                        class: "w-[100px]",
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `Size`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Table_body($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Table_row($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Table_cell($$payload6, {
                        class: "font-semibold",
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `GGPC-001`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Label($$payload7, {
                            for: "stock-1",
                            class: "sr-only",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `Stock`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Input($$payload7, { id: "stock-1", type: "number", value: "100" });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Label($$payload7, {
                            for: "price-1",
                            class: "sr-only",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `Price`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Input($$payload7, {
                            id: "price-1",
                            type: "number",
                            value: "99.99"
                          });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Toggle_group($$payload7, {
                            type: "single",
                            value: "s",
                            variant: "outline",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "s",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `S`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "m",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `M`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "l",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `L`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Table_row($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Table_cell($$payload6, {
                        class: "font-semibold",
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `GGPC-002`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Label($$payload7, {
                            for: "stock-2",
                            class: "sr-only",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `Stock`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Input($$payload7, { id: "stock-2", type: "number", value: "143" });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Label($$payload7, {
                            for: "price-2",
                            class: "sr-only",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `Price`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Input($$payload7, {
                            id: "price-2",
                            type: "number",
                            value: "99.99"
                          });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Toggle_group($$payload7, {
                            type: "single",
                            value: "m",
                            variant: "outline",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "s",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `S`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "m",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `M`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "l",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `L`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Table_row($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Table_cell($$payload6, {
                        class: "font-semibold",
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `GGPC-003`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Label($$payload7, {
                            for: "stock-3",
                            class: "sr-only",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `Stock`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Input($$payload7, { id: "stock-3", type: "number", value: "32" });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Label($$payload7, {
                            for: "price-3",
                            class: "sr-only",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `Stock`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Input($$payload7, {
                            id: "price-3",
                            type: "number",
                            value: "99.99"
                          });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_cell($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Toggle_group($$payload7, {
                            type: "single",
                            value: "s",
                            variant: "outline",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "s",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `S`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "m",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `M`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Toggle_group_item($$payload8, {
                                value: "l",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `L`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]-->`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_footer($$payload2, {
        class: "justify-center border-t p-4",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Button($$payload3, {
            size: "sm",
            variant: "ghost",
            class: "gap-1",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Circle_plus($$payload4, { class: "h-3.5 w-3.5" });
              $$payload4.out += `<!--]--> Add Variant`;
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
              $$payload4.out += `Product Category`;
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
          $$payload3.out += `<div class="grid gap-6 sm:grid-cols-3"><div class="grid gap-3"><!--[-->`;
          Label($$payload3, {
            for: "category",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Category`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Root($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Select_trigger($$payload4, {
                id: "category",
                "aria-label": "Select category",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Value($$payload5, { placeholder: "Select category" });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Select_content($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Select_item($$payload5, {
                    value: "clothing",
                    label: "Clothing",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Clothing`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Select_item($$payload5, {
                    value: "electronics",
                    label: "Electronics",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Electronics`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Select_item($$payload5, {
                    value: "accessories",
                    label: "Accessories",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Accessories`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--></div> <div class="grid gap-3"><!--[-->`;
          Label($$payload3, {
            for: "subcategory",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Subcategory (optional)`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Root($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Select_trigger($$payload4, {
                id: "subcategory",
                "aria-label": "Select subcategory",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Value($$payload5, { placeholder: "Select subcategory" });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Select_content($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Select_item($$payload5, {
                    value: "t-shirts",
                    label: "T-Shirts",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `T-Shirts`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Select_item($$payload5, {
                    value: "hoodies",
                    label: "Hoodies",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Hoodies`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Select_item($$payload5, {
                    value: "sweatshirts",
                    label: "Sweatshirts",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Sweatshirts`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div> <div class="grid auto-rows-max items-start gap-4 lg:gap-8"><!--[-->`;
  Card($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Product Status`;
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
          $$payload3.out += `<div class="grid gap-6"><div class="grid gap-3"><!--[-->`;
          Label($$payload3, {
            for: "status",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Status`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Root($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Select_trigger($$payload4, {
                id: "status",
                "aria-label": "Select status",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Value($$payload5, { placeholder: "Select status" });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Select_content($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Select_item($$payload5, {
                    value: "draft",
                    label: "Draft",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Draft`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Select_item($$payload5, {
                    value: "published",
                    label: "Active",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Active`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Select_item($$payload5, {
                    value: "archived",
                    label: "Archived",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Archived`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Card($$payload, {
    class: "overflow-hidden",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Product Images`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Lipsum dolor sit amet, consectetur adipiscing elit`;
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
          $$payload3.out += `<div class="grid gap-2"><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="300" src="/images/placeholder.svg" width="300"> <div class="grid grid-cols-3 gap-2"><button><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="84" src="/images/placeholder.svg" width="84"></button> <button><img alt="Product" class="aspect-square w-full rounded-md object-cover" height="84" src="/images/placeholder.svg" width="84"></button> <button class="flex aspect-square w-full items-center justify-center rounded-md border border-dashed"><!--[-->`;
          Upload($$payload3, { class: "h-4 w-4 text-muted-foreground" });
          $$payload3.out += `<!--]--> <span class="sr-only">Upload</span></button></div></div>`;
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
              $$payload4.out += `Archive Product`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Lipsum dolor sit amet, consectetur adipiscing elit.`;
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
          $$payload3.out += `<div></div> <!--[-->`;
          Button($$payload3, {
            size: "sm",
            variant: "secondary",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Archive Product`;
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
  $$payload.out += `<!--]--></div></div> <div class="flex items-center justify-center gap-2 md:hidden"><!--[-->`;
  Button($$payload, {
    variant: "outline",
    size: "sm",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Discard`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Button($$payload, {
    size: "sm",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Save Product`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div></div></main>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D5Fvmvr-.js.map
