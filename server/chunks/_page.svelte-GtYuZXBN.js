import { b as pop, p as push, n as ensure_array_like, e as attr, f as escape_html } from './index2-BJ1gMto1.js';
import { B as Badge } from './index5-vhLr_Hvi.js';
import { B as Button } from './index4-BLqsAhpD.js';
import { C as Card, a as Card_header, c as Card_title, d as Card_description, b as Card_content } from './card-title-D13NqLL6.js';
import 'clsx';
import { R as Root$1, T as Trigger, D as Dropdown_menu_content, a as Dropdown_menu_label, b as Dropdown_menu_item } from './index6-DXX3gRSH.js';
import { T as Table, a as Table_header, c as Table_row, d as Table_head, b as Table_body, e as Table_cell } from './table-row-DWhlj0ny.js';
import { R as Root, T as Tabs_list, F as File, a as Tabs_content, b as Tabs_trigger, D as Dropdown_menu_checkbox_item, L as List_filter } from './index8-CE3qSnt2.js';
import { D as Dropdown_menu_separator } from './dropdown-menu-separator-uVwmGOaI.js';
import { C as Circle_plus } from './circle-plus-BWeO3o2z.js';
import { E as Ellipsis } from './ellipsis-0VBl8LKq.js';
import 'tailwind-variants';
import 'tailwind-merge';
import './index-Ch5foWpM.js';
import './helpers-B0fsY9OK.js';
import './Check-UweSlHf0.js';
import './locale-B3ZXOAGS.js';

function _page($$payload, $$props) {
  push();
  let products = [];
  $$payload.out += `<div class="flex flex-col sm:gap-4 sm:py-4"><main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"><!--[-->`;
  Root($$payload, {
    class: "",
    value: "all",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<div class="flex items-center"><!--[-->`;
      Tabs_list($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Tabs_trigger($$payload3, {
            value: "all",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `All`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Tabs_trigger($$payload3, {
            value: "active",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Active`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Tabs_trigger($$payload3, {
            value: "draft",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Draft`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!--]--> <!--[-->`;
          Tabs_trigger($$payload3, {
            value: "archived",
            class: "hidden sm:flex",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Archived`;
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
                builders: [builder],
                variant: "outline",
                size: "sm",
                class: "h-7 gap-1",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  List_filter($$payload5, { class: "h-3.5 w-3.5" });
                  $$payload5.out += `<!--]--> <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>`;
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
                  $$payload5.out += `Active`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Dropdown_menu_checkbox_item($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Draft`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Dropdown_menu_checkbox_item($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Archived`;
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
        class: "h-7 gap-1",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          File($$payload3, { class: "h-3.5 w-3.5" });
          $$payload3.out += `<!--]--> <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--> <!--[-->`;
      Button($$payload2, {
        size: "sm",
        class: "h-7 gap-1",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Circle_plus($$payload3, { class: "h-3.5 w-3.5" });
          $$payload3.out += `<!--]--> <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]--></div></div> <!--[-->`;
      Tabs_content($$payload2, {
        class: "",
        value: "all",
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Card($$payload3, {
            class: "h-[80dvh] overflow-auto",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Card_header($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Card_title($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Products`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]--> <!--[-->`;
                  Card_description($$payload5, {
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `Manage your products and view their sales performance.`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Card_content($$payload4, {
                class: "",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<!--[-->`;
                  Table($$payload5, {
                    class: "",
                    children: ($$payload6, $$slotProps5) => {
                      $$payload6.out += `<!--[-->`;
                      Table_header($$payload6, {
                        children: ($$payload7, $$slotProps6) => {
                          $$payload7.out += `<!--[-->`;
                          Table_row($$payload7, {
                            children: ($$payload8, $$slotProps7) => {
                              $$payload8.out += `<!--[-->`;
                              Table_head($$payload8, {
                                class: "hidden w-[100px] sm:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<span class="sr-only">Image</span>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Name`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Status`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Price`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Total Sales`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                class: "hidden md:table-cell",
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `Created at`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload8.out += `<!--]--> <!--[-->`;
                              Table_head($$payload8, {
                                children: ($$payload9, $$slotProps8) => {
                                  $$payload9.out += `<span class="sr-only">Actions</span>`;
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
                        class: "",
                        children: ($$payload7, $$slotProps6) => {
                          const each_array = ensure_array_like(products);
                          $$payload7.out += `<!--[-->`;
                          if (each_array.length !== 0) {
                            for (let $$index = 0; $$index < each_array.length; $$index++) {
                              const product = each_array[$$index];
                              $$payload7.out += "<!--[-->";
                              $$payload7.out += `<!--[-->`;
                              Table_row($$payload7, {
                                children: ($$payload8, $$slotProps7) => {
                                  $$payload8.out += `<!--[-->`;
                                  Table_cell($$payload8, {
                                    class: "hidden sm:table-cell",
                                    children: ($$payload9, $$slotProps8) => {
                                      $$payload9.out += `<img alt="Product example" class="aspect-square rounded-md object-fill" height="64"${attr("src", product.image)} width="64">`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload8.out += `<!--]--> <!--[-->`;
                                  Table_cell($$payload8, {
                                    class: "font-medium",
                                    children: ($$payload9, $$slotProps8) => {
                                      $$payload9.out += `${escape_html(product.title)}`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload8.out += `<!--]--> <!--[-->`;
                                  Table_cell($$payload8, {
                                    children: ($$payload9, $$slotProps8) => {
                                      $$payload9.out += `<!--[-->`;
                                      Badge($$payload9, {
                                        variant: "secondary",
                                        children: ($$payload10, $$slotProps9) => {
                                          $$payload10.out += `Active`;
                                        },
                                        $$slots: { default: true }
                                      });
                                      $$payload9.out += `<!--]-->`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload8.out += `<!--]--> <!--[-->`;
                                  Table_cell($$payload8, {
                                    children: ($$payload9, $$slotProps8) => {
                                      $$payload9.out += `$${escape_html(product.price)}`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload8.out += `<!--]--> <!--[-->`;
                                  Table_cell($$payload8, {
                                    class: "hidden md:table-cell",
                                    children: ($$payload9, $$slotProps8) => {
                                      $$payload9.out += `${escape_html(Math.floor(Math.random() * 100))}`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload8.out += `<!--]--> <!--[-->`;
                                  Table_cell($$payload8, {
                                    class: "hidden md:table-cell",
                                    children: ($$payload9, $$slotProps8) => {
                                      $$payload9.out += `2023-07-12 10:42 AM`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload8.out += `<!--]--> <!--[-->`;
                                  Table_cell($$payload8, {
                                    children: ($$payload9, $$slotProps8) => {
                                      $$payload9.out += `<!--[-->`;
                                      Root$1($$payload9, {
                                        children: ($$payload10, $$slotProps9) => {
                                          $$payload10.out += `<!--[-->`;
                                          Trigger($$payload10, {
                                            asChild: true,
                                            children: ($$payload11, $$slotProps10) => {
                                              const builder = $$slotProps10.builder;
                                              $$payload11.out += `<!--[-->`;
                                              Button($$payload11, {
                                                "aria-haspopup": "true",
                                                size: "icon",
                                                variant: "ghost",
                                                builders: [builder],
                                                children: ($$payload12, $$slotProps11) => {
                                                  $$payload12.out += `<!--[-->`;
                                                  Ellipsis($$payload12, { class: "h-4 w-4" });
                                                  $$payload12.out += `<!--]--> <span class="sr-only">Toggle menu</span>`;
                                                },
                                                $$slots: { default: true }
                                              });
                                              $$payload11.out += `<!--]-->`;
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$payload10.out += `<!--]--> <!--[-->`;
                                          Dropdown_menu_content($$payload10, {
                                            align: "end",
                                            children: ($$payload11, $$slotProps10) => {
                                              $$payload11.out += `<!--[-->`;
                                              Dropdown_menu_label($$payload11, {
                                                children: ($$payload12, $$slotProps11) => {
                                                  $$payload12.out += `Actions`;
                                                },
                                                $$slots: { default: true }
                                              });
                                              $$payload11.out += `<!--]--> <!--[-->`;
                                              Dropdown_menu_item($$payload11, {
                                                children: ($$payload12, $$slotProps11) => {
                                                  $$payload12.out += `<a class="w-full" href="/admin/products/edit">Edit</a>`;
                                                },
                                                $$slots: { default: true }
                                              });
                                              $$payload11.out += `<!--]--> <!--[-->`;
                                              Dropdown_menu_item($$payload11, {
                                                children: ($$payload12, $$slotProps11) => {
                                                  $$payload12.out += `Delete`;
                                                },
                                                $$slots: { default: true }
                                              });
                                              $$payload11.out += `<!--]-->`;
                                            },
                                            $$slots: { default: true }
                                          });
                                          $$payload10.out += `<!--]-->`;
                                        },
                                        $$slots: { default: true }
                                      });
                                      $$payload9.out += `<!--]-->`;
                                    },
                                    $$slots: { default: true }
                                  });
                                  $$payload8.out += `<!--]-->`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload7.out += `<!--]-->`;
                              $$payload7.out += "<!--]-->";
                            }
                            $$payload7.out += "<!--]-->";
                          } else {
                            $$payload7.out += `Loading`;
                            $$payload7.out += "<!--]!-->";
                          }
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
  $$payload.out += `<!--]--></main></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-GtYuZXBN.js.map
