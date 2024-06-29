import { e as attr, i as stringify, g as store_get, u as unsubscribe_stores, b as pop, j as spread_props, k as slot, p as push, l as sanitize_props } from './index2-BJ1gMto1.js';
import { P as Package_2, R as Root, S as Search, T as Trigger, a as Sheet_content, M as Menu, C as Circle_user } from './index3-ojNQwNs3.js';
import { I as Icon } from './helpers-B0fsY9OK.js';
import { B as Button, d as default_slot } from './index4-BLqsAhpD.js';
import { B as Badge } from './index5-vhLr_Hvi.js';
import { C as Card, a as Card_header, b as Card_content, c as Card_title, d as Card_description } from './card-title-D13NqLL6.js';
import 'clsx';
import { R as Root$1, T as Trigger$1, D as Dropdown_menu_content, a as Dropdown_menu_label, b as Dropdown_menu_item } from './index6-DXX3gRSH.js';
import { I as Input } from './index7-D4139Xtz.js';
import { p as page } from './stores2-y75fTyi1.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-uVwmGOaI.js';
import './index-Ch5foWpM.js';
import 'tailwind-variants';
import 'tailwind-merge';
import './exports-BGi7-Rnc.js';

function Line_chart($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 3v18h18" }],
    ["path", { "d": "m19 9-5 5-4-4-3 3" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "line-chart" },
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
function Package($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m7.5 4.27 9 5.15" }],
    [
      "path",
      {
        "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
      }
    ],
    ["path", { "d": "m3.3 7 8.7 5 8.7-5" }],
    ["path", { "d": "M12 22V12" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "package" },
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
function Bell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
      }
    ],
    [
      "path",
      { "d": "M10.3 21a1.94 1.94 0 0 0 3.4 0" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "bell" },
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
function House($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
      }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "house" },
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
function Settings($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
      }
    ],
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "3" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "settings" },
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
function Shopping_cart($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "circle",
      { "cx": "8", "cy": "21", "r": "1" }
    ],
    [
      "circle",
      { "cx": "19", "cy": "21", "r": "1" }
    ],
    [
      "path",
      {
        "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "shopping-cart" },
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
function Users($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      }
    ],
    [
      "circle",
      { "cx": "9", "cy": "7", "r": "4" }
    ],
    [
      "path",
      { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }
    ],
    [
      "path",
      { "d": "M16 3.13a4 4 0 0 1 0 7.75" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "users" },
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
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  $$payload.out += `<div class="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"><div class="hidden border-r bg-muted/40 md:flex"><div class="flex h-full max-h-screen flex-col gap-2"><div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6"><a href="/" class="flex items-center gap-2 font-semibold"><!--[-->`;
  Package_2($$payload, { class: "h-6 w-6" });
  $$payload.out += `<!--]--> <span>Acme Inc</span></a> <!--[-->`;
  Button($$payload, {
    variant: "outline",
    size: "icon",
    class: "ml-auto h-8 w-8",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Bell($$payload2, { class: "h-4 w-4" });
      $$payload2.out += `<!--]--> <span class="sr-only">Toggle notifications</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div> <div class="flex-1"><nav class="grid items-start px-2 text-sm font-medium lg:px-4"><a href="/admin"${attr("class", `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin" ? "text-primary" : "",
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin" ? "bg-muted" : ""
  ].filter(Boolean).join(" "))}`)}><!--[-->`;
  House($$payload, { class: "h-4 w-4" });
  $$payload.out += `<!--]--> Dashboard</a> <a href="/admin/orders"${attr("class", `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/orders" ? "text-primary" : "",
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/orders" ? "bg-muted" : ""
  ].filter(Boolean).join(" "))}`)}><!--[-->`;
  Shopping_cart($$payload, { class: "h-4 w-4" });
  $$payload.out += `<!--]--> Orders <!--[-->`;
  Badge($$payload, {
    class: "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `6`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></a> <a href="/admin/products"${attr("class", `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/products" ? "text-primary" : "",
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/products" ? "bg-muted" : ""
  ].filter(Boolean).join(" "))}`)}><!--[-->`;
  Package($$payload, { class: "h-4 w-4" });
  $$payload.out += `<!--]--> Products</a> <a href="##" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><!--[-->`;
  Users($$payload, { class: "h-4 w-4" });
  $$payload.out += `<!--]--> Customers</a> <a href="##" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"><!--[-->`;
  Line_chart($$payload, { class: "h-4 w-4" });
  $$payload.out += `<!--]--> Analytics</a> <a href="/admin/settings"${attr("class", `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${stringify([
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/settings" ? "text-primary" : "",
    store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/settings" ? "bg-muted" : ""
  ].filter(Boolean).join(" "))}`)}><!--[-->`;
  Settings($$payload, { class: "h-4 w-4" });
  $$payload.out += `<!--]--> Settings</a></nav></div> <div class="mt-auto p-4"><!--[-->`;
  Card($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Card_header($$payload2, {
        class: "p-2 pt-0 md:p-4",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Upgrade to Pro`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Unlock all features and get unlimited access to our support team.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Card_content($$payload2, {
        class: "p-2 pt-0 md:p-4 md:pt-0",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Button($$payload3, {
            size: "sm",
            class: "w-full",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Upgrade`;
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
  $$payload.out += `<!--]--></div></div></div> <div class="flex h-full flex-col overflow-scroll"><header class="flex h-14 items-center gap-4 border-b bg-muted/40 p-4 lg:h-[60px] lg:px-6"><!--[-->`;
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
        class: "flex flex-col",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<nav class="grid gap-2 text-lg font-medium"><a href="##" class="flex items-center gap-2 text-lg font-semibold"><!--[-->`;
          Package_2($$payload3, { class: "h-6 w-6" });
          $$payload3.out += `<!--]--> <span class="sr-only">Acme Inc</span></a> <a href="/admin"${attr("class", `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${stringify([
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin" ? "text-primary" : "",
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin" ? "bg-muted" : ""
          ].filter(Boolean).join(" "))}`)}><!--[-->`;
          House($$payload3, { class: "h-5 w-5" });
          $$payload3.out += `<!--]--> Dashboard</a> <a href="/admin/orders"${attr("class", `mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground ${stringify([
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/orders" ? "text-primary" : "",
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/orders" ? "bg-muted" : ""
          ].filter(Boolean).join(" "))}`)}><!--[-->`;
          Shopping_cart($$payload3, { class: "h-5 w-5" });
          $$payload3.out += `<!--]--> Orders <!--[-->`;
          Badge($$payload3, {
            class: "ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `6`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--></a> <a href="/admin/products"${attr("class", `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${stringify([
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/products" ? "text-primary" : "",
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/products" ? "bg-muted" : ""
          ].filter(Boolean).join(" "))}`)}><!--[-->`;
          Package($$payload3, { class: "h-5 w-5" });
          $$payload3.out += `<!--]--> Products</a> <a href="##" class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"><!--[-->`;
          Users($$payload3, { class: "h-5 w-5" });
          $$payload3.out += `<!--]--> Customers</a> <a href="/admin/settings"${attr("class", `mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${stringify([
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/settings" ? "text-primary" : "",
            store_get($$store_subs ??= {}, "$page", page).url.pathname == "/admin/settings" ? "bg-muted" : ""
          ].filter(Boolean).join(" "))}`)}><!--[-->`;
          Settings($$payload3, { class: "h-5 w-5" });
          $$payload3.out += `<!--]--> Settings</a></nav> <div class="mt-auto"><!--[-->`;
          Card($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Card_header($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Card_title($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Upgrade to Pro`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Card_description($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Unlock all features and get unlimited access to our support team.`;
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
                  Button($$payload5, {
                    size: "sm",
                    class: "w-full",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Upgrade`;
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
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--> <div class="w-full flex-1"><form><div class="relative"><!--[-->`;
  Search($$payload, {
    class: "absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Input($$payload, {
    type: "search",
    placeholder: "Search products...",
    class: "w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
  });
  $$payload.out += `<!--]--></div></form></div> <!--[-->`;
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
  $$payload.out += `<!--]--></header> <div class="max-h-full overflow-auto"><!--[-->`;
  children($$payload);
  $$payload.out += `<!--]--></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DDlAybeV.js.map
