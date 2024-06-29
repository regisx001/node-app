import { B as Badge } from './index5-vhLr_Hvi.js';
import { B as Button, d as default_slot, c as cn, o as omit, m as makeElement, w as withGet, e as executeCallbacks, a as addMeltEventListener, b as createElHelpers, i as isHTMLElement, k as kbd } from './index4-BLqsAhpD.js';
import { C as Card, a as Card_header, b as Card_content, c as Card_title, d as Card_description } from './card-title-D13NqLL6.js';
import { C as Card_footer } from './card-footer-DLXgQPb3.js';
import { R as Root$1, T as Trigger, D as Dropdown_menu_content, a as Dropdown_menu_label, b as Dropdown_menu_item, c as createSeparator } from './index6-DXX3gRSH.js';
import { j as spread_props, k as slot, o as rest_props, p as push, v as value_or_fallback, q as copy_payload, t as assign_payload, d as bind_props, b as pop, e as attr, l as sanitize_props, g as store_get, w as spread_attributes, u as unsubscribe_stores, s as setContext } from './index2-BJ1gMto1.js';
import { I as Icon, c as createBitAttrs, r as removeUndefined, g as getOptionUpdater, t as toWritableStores, o as overridable } from './helpers-B0fsY9OK.js';
import { w as writable, d as derived, a as readonly } from './index-Ch5foWpM.js';
import 'clsx';
import { T as Table, a as Table_header, c as Table_row, d as Table_head, b as Table_body, e as Table_cell } from './table-row-DWhlj0ny.js';
import { R as Root, T as Tabs_list, F as File, a as Tabs_content, b as Tabs_trigger, D as Dropdown_menu_checkbox_item, L as List_filter } from './index8-CE3qSnt2.js';
import { C as Chevron_left } from './chevron-left-DaiHR1Gu.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-uVwmGOaI.js';
import 'tailwind-variants';
import 'tailwind-merge';
import './Check-UweSlHf0.js';
import './locale-B3ZXOAGS.js';

function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "chevron-right" },
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
function Copy($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "copy" },
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
function Credit_card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "14",
        "x": "2",
        "y": "5",
        "rx": "2"
      }
    ],
    [
      "line",
      {
        "x1": "2",
        "x2": "22",
        "y1": "10",
        "y2": "10"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "credit-card" },
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
function Ellipsis_vertical($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "1" }
    ],
    [
      "circle",
      { "cx": "12", "cy": "5", "r": "1" }
    ],
    [
      "circle",
      { "cx": "12", "cy": "19", "r": "1" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "ellipsis-vertical" },
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
function Truck($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
      }
    ],
    ["path", { "d": "M15 18H9" }],
    [
      "path",
      {
        "d": "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
      }
    ],
    [
      "circle",
      { "cx": "17", "cy": "18", "r": "2" }
    ],
    [
      "circle",
      { "cx": "7", "cy": "18", "r": "2" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "truck" },
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
function getPageItems({ page = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let p = 2; p <= totalPages - 1; p++) {
      pagesToShow.add(p);
    }
  } else if (page < firstItemWithSiblings) {
    for (let p = 2; p <= Math.min(firstItemWithSiblings, totalPages); p++) {
      pagesToShow.add(p);
    }
  } else if (page > lastItemWithSiblings) {
    for (let p = totalPages - 1; p >= Math.max(lastItemWithSiblings, 2); p--) {
      pagesToShow.add(p);
    }
  } else {
    for (let p = Math.max(page - siblingCount, 2); p <= Math.min(page + siblingCount, totalPages); p++) {
      pagesToShow.add(p);
    }
  }
  const addPage = (value) => {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  };
  const addEllipsis = () => {
    pageItems.push({ type: "ellipsis", key: `ellipsis-${pageItems.length}` });
  };
  let lastNumber = 0;
  for (const page2 of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (page2 - lastNumber > 1) {
      addEllipsis();
    }
    addPage(page2);
    lastNumber = page2;
  }
  return pageItems;
}
const defaults$1 = {
  perPage: 1,
  siblingCount: 1,
  defaultPage: 1
};
const { name: name$1, selector } = createElHelpers("pagination");
function createPagination(props) {
  const withDefaults = { ...defaults$1, ...props };
  const pageWritable = withDefaults.page ?? writable(withDefaults.defaultPage);
  const page = overridable(pageWritable, withDefaults?.onPageChange);
  const options = toWritableStores(omit(withDefaults, "page", "onPageChange", "defaultPage"));
  const { perPage, siblingCount, count } = options;
  const totalPages = withGet.derived([count, perPage], ([$count, $perPage]) => {
    return Math.ceil($count / $perPage);
  });
  const range = derived([page, perPage, count], ([$page, $perPage, $count]) => {
    const start = ($page - 1) * $perPage;
    const end = Math.min(start + $perPage, $count);
    return { start, end };
  });
  const root = makeElement(name$1(), {
    returned: () => ({
      "data-scope": "pagination"
    })
  });
  const pages = derived([page, totalPages, siblingCount], ([$page, $totalPages, $siblingCount]) => {
    return getPageItems({ page: $page, totalPages: $totalPages, siblingCount: $siblingCount });
  });
  const keydown = (e) => {
    const thisEl = e.target;
    if (!isHTMLElement(thisEl))
      return;
    const rootEl = thisEl.closest('[data-scope="pagination"]');
    if (!isHTMLElement(rootEl))
      return;
    const triggers = Array.from(rootEl.querySelectorAll(selector("page"))).filter((el) => isHTMLElement(el));
    const prevButton2 = rootEl.querySelector(selector("prev"));
    const nextButton2 = rootEl.querySelector(selector("next"));
    if (isHTMLElement(prevButton2)) {
      triggers.unshift(prevButton2);
    }
    if (isHTMLElement(nextButton2)) {
      triggers.push(nextButton2);
    }
    const index = triggers.indexOf(thisEl);
    if (e.key === kbd.ARROW_LEFT && index !== 0) {
      e.preventDefault();
      triggers[index - 1].focus();
    } else if (e.key === kbd.ARROW_RIGHT && index !== triggers.length - 1) {
      e.preventDefault();
      triggers[index + 1].focus();
    } else if (e.key === kbd.HOME) {
      e.preventDefault();
      triggers[0].focus();
    } else if (e.key === kbd.END) {
      e.preventDefault();
      triggers[triggers.length - 1].focus();
    }
  };
  const pageTrigger = makeElement(name$1("page"), {
    stores: page,
    returned: ($page) => {
      return (pageItem) => {
        return {
          "aria-label": `Page ${pageItem.value}`,
          "data-value": pageItem.value,
          "data-selected": pageItem.value === $page ? "" : void 0
        };
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const value = node.dataset.value;
        if (!value || Number.isNaN(+value))
          return;
        page.set(Number(value));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  const prevButton = makeElement(name$1("prev"), {
    stores: page,
    returned: ($page) => {
      return {
        "aria-label": "Previous",
        disabled: $page <= 1
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        page.update((p) => Math.max(p - 1, 1));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  const nextButton = makeElement(name$1("next"), {
    stores: [page, totalPages],
    returned: ([$page, $totalPages]) => {
      return {
        "aria-label": "Next",
        disabled: $page >= $totalPages
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        const $totalPages = totalPages.get();
        page.update((p) => Math.min(p + 1, $totalPages));
      }), addMeltEventListener(node, "keydown", keydown));
      return {
        destroy: unsub
      };
    }
  });
  return {
    elements: {
      root,
      pageTrigger,
      prevButton,
      nextButton
    },
    states: {
      range: readonly(range),
      page,
      pages: readonly(pages),
      totalPages: readonly(totalPages)
    },
    options
  };
}
const defaults = {
  defaultValue: 0,
  max: 100
};
const { name } = createElHelpers("progress");
const createProgress = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value"));
  const { max } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const root = makeElement(name(), {
    stores: [value, max],
    returned: ([$value, $max]) => {
      return {
        value: $value,
        max: $max,
        role: "meter",
        "aria-valuemin": 0,
        "aria-valuemax": $max,
        "aria-valuenow": $value,
        "data-value": $value,
        "data-state": $value === null ? "indeterminate" : $value === $max ? "complete" : "loading",
        "data-max": $max
      };
    }
  });
  return {
    elements: {
      root
    },
    states: {
      value
    },
    options
  };
};
function getSeparatorData() {
  const NAME = "separator";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx$2(props) {
  const { NAME, PARTS } = getSeparatorData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const separator = { ...createSeparator(removeUndefined(props)), getAttrs };
  return {
    ...separator,
    updateOption: getOptionUpdater(separator.options)
  };
}
function Separator$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "orientation",
    "decorative",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let orientation = value_or_fallback($$props["orientation"], () => "horizontal");
  let decorative = value_or_fallback($$props["decorative"], () => true);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const { elements: { root }, updateOption, getAttrs } = setCtx$2({ orientation, decorative });
  const attrs = getAttrs("root");
  updateOption("orientation", orientation);
  updateOption("decorative", decorative);
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
    $$payload.out += `<div${spread_attributes({ ...builder, ...$$restProps })}></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { orientation, decorative, asChild, el });
  pop();
}
function getPaginationData() {
  const NAME = "pagination";
  const PARTS = ["root", "prev-button", "next-button", "page"];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getPaginationData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const pagination = { ...createPagination(removeUndefined(props)), getAttrs };
  setContext(NAME, pagination);
  return {
    ...pagination,
    updateOption: getOptionUpdater(pagination.options)
  };
}
function Pagination$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "count",
    "page",
    "onPageChange",
    "perPage",
    "siblingCount",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let count = $$props["count"];
  let page = value_or_fallback($$props["page"], () => void 0);
  let onPageChange = value_or_fallback($$props["onPageChange"], () => void 0);
  let perPage = value_or_fallback($$props["perPage"], () => void 0);
  let siblingCount = value_or_fallback($$props["siblingCount"], () => void 0);
  let asChild = value_or_fallback($$props["asChild"], () => false);
  let el = value_or_fallback($$props["el"], () => void 0);
  const {
    elements: { root },
    states: { pages, range, page: localPage },
    getAttrs,
    updateOption
  } = setCtx$1({
    count,
    perPage,
    siblingCount,
    defaultPage: page,
    onPageChange: ({ next }) => {
      if (page !== next) {
        onPageChange?.(next);
        page = next;
      }
      return next;
    }
  });
  const attrs = getAttrs("root");
  page !== void 0 && localPage.set(page);
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  updateOption("count", count);
  updateOption("perPage", perPage);
  updateOption("siblingCount", siblingCount);
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
        get pages() {
          return store_get($$store_subs ??= {}, "$pages", pages);
        },
        get range() {
          return store_get($$store_subs ??= {}, "$range", range);
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
        get pages() {
          return store_get($$store_subs ??= {}, "$pages", pages);
        },
        get range() {
          return store_get($$store_subs ??= {}, "$range", range);
        }
      },
      null
    );
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    count,
    page,
    onPageChange,
    perPage,
    siblingCount,
    asChild,
    el
  });
  pop();
}
function getProgressData() {
  const NAME = "progress";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getProgressData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const progress = { ...createProgress(removeUndefined(props)), getAttrs };
  return {
    ...progress,
    updateOption: getOptionUpdater(progress.options)
  };
}
function Progress$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "max",
    "value",
    "onValueChange",
    "asChild",
    "el"
  ]);
  push();
  var $$store_subs;
  let builder;
  let max = value_or_fallback($$props["max"], () => void 0);
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
    max,
    defaultValue: value,
    onValueChange: ({ next }) => {
      onValueChange?.(next);
      value = next;
      return next;
    }
  });
  const attrs = getAttrs("root");
  value !== void 0 && localValue.set(value);
  updateOption("max", max);
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
  bind_props($$props, { max, value, onValueChange, asChild, el });
  pop();
}
function Pagination($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "count",
    "perPage",
    "page",
    "siblingCount"
  ]);
  push();
  let currentPage;
  let className = value_or_fallback($$props["class"], () => void 0);
  let count = value_or_fallback($$props["count"], () => 0);
  let perPage = value_or_fallback($$props["perPage"], () => 10);
  let page = value_or_fallback($$props["page"], () => 1);
  let siblingCount = value_or_fallback($$props["siblingCount"], () => 1);
  currentPage = page;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<!--[-->`;
    Pagination$1($$payload2, spread_props([
      {
        count,
        perPage,
        siblingCount,
        get page() {
          return page;
        },
        set page($$value) {
          page = $$value;
          $$settled = false;
        },
        asChild: true
      },
      $$restProps,
      {
        children: ($$payload3, $$slotProps) => {
          const builder = $$slotProps.builder;
          const pages = $$slotProps.pages;
          const range = $$slotProps.range;
          $$payload3.out += `<nav${spread_attributes({
            ...builder,
            class: cn("mx-auto flex w-full flex-col items-center", className)
          })}><!--[-->`;
          slot(
            $$payload3,
            default_slot($$props),
            {
              get pages() {
                return pages;
              },
              get range() {
                return range;
              },
              get currentPage() {
                return currentPage;
              }
            },
            null
          );
          $$payload3.out += `<!--]--></nav>`;
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
  bind_props($$props, {
    class: className,
    count,
    perPage,
    page,
    siblingCount
  });
  pop();
}
function Pagination_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<ul${spread_attributes({
    class: cn("flex flex-row items-center gap-1", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></ul>`;
  bind_props($$props, { class: className });
  pop();
}
function Pagination_item($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<li${spread_attributes({ class: cn("", className), ...$$restProps })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></li>`;
  bind_props($$props, { class: className });
  pop();
}
function Progress($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "max", "value"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let max = value_or_fallback($$props["max"], () => 100);
  let value = value_or_fallback($$props["value"], () => void 0);
  $$payload.out += `<!--[-->`;
  Progress$1($$payload, spread_props([
    {
      class: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<div class="h-full w-full flex-1 bg-primary transition-all"${attr("style", `transform: translateX(-${100 - 100 * (value ?? 0) / (max ?? 1)}%)`)}></div>`;
      },
      $$slots: { default: true }
    }
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, max, value });
  pop();
}
function Separator($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "orientation", "decorative"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  let orientation = value_or_fallback($$props["orientation"], () => "horizontal");
  let decorative = value_or_fallback($$props["decorative"], () => void 0);
  $$payload.out += `<!--[-->`;
  Separator$1($$payload, spread_props([
    {
      class: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
      orientation,
      decorative
    },
    $$restProps
  ]));
  $$payload.out += `<!--]-->`;
  bind_props($$props, { class: className, orientation, decorative });
  pop();
}
function _page($$payload) {
  $$payload.out += `<main class="grid flex-1 items-start gap-4 p-6 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"><div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2"><div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"><!--[-->`;
  Card($$payload, {
    class: "sm:col-span-2",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        class: "pb-3",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Your Orders`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            class: "max-w-lg text-balance leading-relaxed",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful
						Analysis.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_footer($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Button($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Create New Order`;
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
        class: "pb-2",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `This Week`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_title($$payload3, {
            class: "text-4xl",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `$1329`;
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
          $$payload3.out += `<div class="text-xs text-muted-foreground">+25% from last week</div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_footer($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Progress($$payload3, { value: 25, "aria-label": "25% increase" });
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
        class: "pb-2",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `This Month`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_title($$payload3, {
            class: "text-3xl",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `$5,329`;
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
          $$payload3.out += `<div class="text-xs text-muted-foreground">+10% from last month</div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_footer($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Progress($$payload3, { value: 12, "aria-label": "12% increase" });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div> <!--[-->`;
  Root($$payload, {
    value: "week",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<div class="flex items-center"><!--[-->`;
      Tabs_list($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Tabs_trigger($$payload3, {
            value: "week",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Week`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Tabs_trigger($$payload3, {
            value: "month",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Month`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Tabs_trigger($$payload3, {
            value: "year",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Year`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <div class="ml-auto flex items-center gap-2"><!--[-->`;
      Root$1($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Trigger($$payload3, {
            asChild: true,
            children: ($$payload4, $$slotProps3) => {
              const builder = $$slotProps3.builder;
              $$payload4.out += `<!--[-->`;
              Button($$payload4, {
                variant: "outline",
                size: "sm",
                class: "h-7 gap-1 text-sm",
                builders: [builder],
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  List_filter($$payload5, { class: "h-3.5 w-3.5" });
                  $$payload5.out += `<!--]--> <span class="sr-only sm:not-sr-only">Filter</span>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Dropdown_menu_content($$payload3, {
            align: "end",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Dropdown_menu_label($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Filter by`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Dropdown_menu_separator($$payload4, {});
              $$payload4.out += `<!--]--> <!--[-->`;
              Dropdown_menu_checkbox_item($$payload4, {
                checked: true,
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Fulfilled`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Dropdown_menu_checkbox_item($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Declined`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Dropdown_menu_checkbox_item($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Refunded`;
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
      Button($$payload2, {
        size: "sm",
        variant: "outline",
        class: "h-7 gap-1 text-sm",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          File($$payload3, { class: "h-3.5 w-3.5" });
          $$payload3.out += `<!--]--> <span class="sr-only sm:not-sr-only">Export</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--></div></div> <!--[-->`;
      Tabs_content($$payload2, {
        value: "week",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Card_header($$payload4, {
                class: "px-7",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Card_title($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Orders`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Card_description($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Recent orders from your store.`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Card_content($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Table($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Table_header($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_head($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Customer`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Type`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Status`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Date`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Amount`;
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
                      $$payload6.out += `<!--]--> <!--[-->`;
                      Table_body($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Table_row($$payload7, {
                            class: "bg-accent",
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Liam Johnson</div> <div class="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Sale`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "secondary",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Fulfilled`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-23`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$250.00`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Olivia Smith</div> <div class="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Refund`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "outline",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Declined`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-24`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$150.00`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Liam Johnson</div> <div class="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Sale`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "secondary",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Fulfilled`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-23`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$250.00`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Noah Williams</div> <div class="hidden text-sm text-muted-foreground md:inline">noah@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Subscription`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "secondary",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Fulfilled`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-25`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$350.00`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Emma Brown</div> <div class="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Subscription`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "secondary",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Fulfilled`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-26`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$450.00`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Liam Johnson</div> <div class="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Sale`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "secondary",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Fulfilled`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-23`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$250.00`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Olivia Smith</div> <div class="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Refund`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "outline",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Declined`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-24`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$150.00`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload7.out += `<!--]--> <!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_cell($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<div class="font-medium">Emma Brown</div> <div class="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Sale`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<!--[-->`;
                                  Badge($$payload9, {
                                    class: "text-xs",
                                    variant: "secondary",
                                    children: ($$payload10, $$slotProps9) => {
                                      $$payload10.out += `Fulfilled`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload9.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `2023-06-26`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_cell($$payload8, {
                                class: "text-right",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `$450.00`;
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
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div> <div><!--[-->`;
  Card($$payload, {
    class: "overflow-hidden",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        class: "flex flex-row items-start bg-muted/50",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<div class="grid gap-0.5"><!--[-->`;
          Card_title($$payload3, {
            class: "group flex items-center gap-2 text-lg",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Order Oe31b70H <!--[-->`;
              Button($$payload4, {
                size: "icon",
                variant: "outline",
                class: "h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Copy($$payload5, { class: "h-3 w-3" });
                  $$payload5.out += `<!--]--> <span class="sr-only">Copy Order ID</span>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Date: November 23, 2023`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--></div> <div class="ml-auto flex items-center gap-1"><!--[-->`;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            class: "h-8 gap-1",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Truck($$payload4, { class: "h-3.5 w-3.5" });
              $$payload4.out += `<!--]--> <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">Track Order</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Root$1($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Trigger($$payload4, {
                asChild: true,
                children: ($$payload5, $$slotProps4) => {
                  const builder = $$slotProps4.builder;
                  $$payload5.out += `<!--[-->`;
                  Button($$payload5, {
                    builders: [builder],
                    size: "icon",
                    variant: "outline",
                    class: "h-8 w-8",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Ellipsis_vertical($$payload6, { class: "h-3.5 w-3.5" });
                      $$payload6.out += `<!--]--> <span class="sr-only">More</span>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Dropdown_menu_content($$payload4, {
                align: "end",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Dropdown_menu_item($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Edit`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Dropdown_menu_item($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Export`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Dropdown_menu_separator($$payload5, {});
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Dropdown_menu_item($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Trash`;
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
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_content($$payload2, {
        class: "p-6 text-sm",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<div class="grid gap-3"><div class="font-semibold">Order Details</div> <ul class="grid gap-3"><li class="flex items-center justify-between"><span class="text-muted-foreground">Glimmer Lamps x <span>2</span></span> <span>$250.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Aqua Filters x <span>1</span></span> <span>$49.00</span></li></ul> <!--[-->`;
          Separator($$payload3, { class: "my-2" });
          $$payload3.out += `<!--]--> <ul class="grid gap-3"><li class="flex items-center justify-between"><span class="text-muted-foreground">Subtotal</span> <span>$299.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Shipping</span> <span>$5.00</span></li> <li class="flex items-center justify-between"><span class="text-muted-foreground">Tax</span> <span>$25.00</span></li> <li class="flex items-center justify-between font-semibold"><span class="text-muted-foreground">Total</span> <span>$329.00</span></li></ul></div> <!--[-->`;
          Separator($$payload3, { class: "my-4" });
          $$payload3.out += `<!--]--> <div class="grid grid-cols-2 gap-4"><div class="grid gap-3"><div class="font-semibold">Shipping Information</div> <address class="grid gap-0.5 not-italic text-muted-foreground"><span>Liam Johnson</span> <span>1234 Main St.</span> <span>Anytown, CA 12345</span></address></div> <div class="grid auto-rows-max gap-3"><div class="font-semibold">Billing Information</div> <div class="text-muted-foreground">Same as shipping address</div></div></div> <!--[-->`;
          Separator($$payload3, { class: "my-4" });
          $$payload3.out += `<!--]--> <div class="grid gap-3"><div class="font-semibold">Customer Information</div> <dl class="grid gap-3"><div class="flex items-center justify-between"><dt class="text-muted-foreground">Customer</dt> <dd>Liam Johnson</dd></div> <div class="flex items-center justify-between"><dt class="text-muted-foreground">Email</dt> <dd><a href="mailto:">liam@acme.com</a></dd></div> <div class="flex items-center justify-between"><dt class="text-muted-foreground">Phone</dt> <dd><a href="tel:">+1 234 567 890</a></dd></div></dl></div> <!--[-->`;
          Separator($$payload3, { class: "my-4" });
          $$payload3.out += `<!--]--> <div class="grid gap-3"><div class="font-semibold">Payment Information</div> <dl class="grid gap-3"><div class="flex items-center justify-between"><dt class="flex items-center gap-1 text-muted-foreground"><!--[-->`;
          Credit_card($$payload3, { class: "h-4 w-4" });
          $$payload3.out += `<!--]--> Visa</dt> <dd>**** **** **** 4532</dd></div></dl></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_footer($$payload2, {
        class: "flex flex-row items-center border-t bg-muted/50 px-6 py-3",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<div class="text-xs text-muted-foreground">Updated <time dateTime="2023-11-23">November 23, 2023</time></div> <!--[-->`;
          Pagination($$payload3, {
            count: 10,
            class: "ml-auto mr-0 w-auto",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Pagination_content($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Pagination_item($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Button($$payload6, {
                        size: "icon",
                        variant: "outline",
                        class: "h-6 w-6",
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Chevron_left($$payload7, { class: "h-3.5 w-3.5" });
                          $$payload7.out += `<!--]--> <span class="sr-only">Previous Order</span>`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload6.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Pagination_item($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Button($$payload6, {
                        size: "icon",
                        variant: "outline",
                        class: "h-6 w-6",
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Chevron_right($$payload7, { class: "h-3.5 w-3.5" });
                          $$payload7.out += `<!--]--> <span class="sr-only">Next Order</span>`;
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
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div></main>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CAZmv53U.js.map
