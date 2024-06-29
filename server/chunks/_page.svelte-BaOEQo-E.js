import { n as ensure_array_like } from './index2-BJ1gMto1.js';
import './stores-YH2kuO2K.js';
import { B as Button } from './index4-BLqsAhpD.js';
import { B as Badge } from './index5-vhLr_Hvi.js';
import 'clsx';
import { R as Root, T as Trigger, D as Dropdown_menu_content, a as Dropdown_menu_label, b as Dropdown_menu_item } from './index6-DXX3gRSH.js';
import { T as Table, a as Table_header, b as Table_body, c as Table_row, d as Table_head, e as Table_cell } from './table-row-DWhlj0ny.js';
import { E as Ellipsis } from './ellipsis-0VBl8LKq.js';
import './index-Ch5foWpM.js';
import 'tailwind-merge';
import 'tailwind-variants';
import './helpers-B0fsY9OK.js';

function _page($$payload) {
  $$payload.out += `<!--[-->`;
  Table($$payload, {
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      Table_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          $$payload3.out += `<!--[-->`;
          Table_row($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `<!--[-->`;
              Table_head($$payload4, {
                class: "hidden w-[100px] sm:table-cell",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<span class="sr-only">Image</span>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Table_head($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Name`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Table_head($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Status`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Table_head($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Price`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Table_head($$payload4, {
                class: "hidden md:table-cell",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Total Sales`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Table_head($$payload4, {
                class: "hidden md:table-cell",
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `Created at`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!--]--> <!--[-->`;
              Table_head($$payload4, {
                children: ($$payload5, $$slotProps4) => {
                  $$payload5.out += `<span class="sr-only">Actions</span>`;
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
      Table_body($$payload2, {
        class: "h-10 overflow-scroll",
        children: ($$payload3, $$slotProps2) => {
          const each_array = ensure_array_like(Array(10));
          $$payload3.out += `<!--[-->`;
          if (each_array.length !== 0) {
            for (let $$index = 0; $$index < each_array.length; $$index++) {
              each_array[$$index];
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<!--[-->`;
              Table_row($$payload3, {
                children: ($$payload4, $$slotProps3) => {
                  $$payload4.out += `<!--[-->`;
                  Table_cell($$payload4, {
                    class: "hidden sm:table-cell",
                    children: ($$payload5, $$slotProps4) => {
                      $$payload5.out += `<img alt="Product example" class="aspect-square rounded-md object-cover" height="64" src="/images/placeholder.svg" width="64">`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!--]--> <!--[-->`;
                  Table_cell($$payload4, {
                    class: "font-medium",
                    children: ($$payload5, $$slotProps4) => {
                      $$payload5.out += `Laser Lemonade Machine`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!--]--> <!--[-->`;
                  Table_cell($$payload4, {
                    children: ($$payload5, $$slotProps4) => {
                      $$payload5.out += `<!--[-->`;
                      Badge($$payload5, {
                        variant: "outline",
                        children: ($$payload6, $$slotProps5) => {
                          $$payload6.out += `Draft`;
                        },
                        $$slots: { default: true }
                      });
                      $$payload5.out += `<!--]-->`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!--]--> <!--[-->`;
                  Table_cell($$payload4, {
                    children: ($$payload5, $$slotProps4) => {
                      $$payload5.out += `$499.99`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!--]--> <!--[-->`;
                  Table_cell($$payload4, {
                    class: "hidden md:table-cell",
                    children: ($$payload5, $$slotProps4) => {
                      $$payload5.out += `25`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!--]--> <!--[-->`;
                  Table_cell($$payload4, {
                    class: "hidden md:table-cell",
                    children: ($$payload5, $$slotProps4) => {
                      $$payload5.out += `2023-07-12 10:42 AM`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!--]--> <!--[-->`;
                  Table_cell($$payload4, {
                    children: ($$payload5, $$slotProps4) => {
                      $$payload5.out += `<!--[-->`;
                      Root($$payload5, {
                        children: ($$payload6, $$slotProps5) => {
                          $$payload6.out += `<!--[-->`;
                          Trigger($$payload6, {
                            asChild: true,
                            children: ($$payload7, $$slotProps6) => {
                              const builder = $$slotProps6.builder;
                              $$payload7.out += `<!--[-->`;
                              Button($$payload7, {
                                "aria-haspopup": "true",
                                size: "icon",
                                variant: "ghost",
                                builders: [builder],
                                children: ($$payload8, $$slotProps7) => {
                                  $$payload8.out += `<!--[-->`;
                                  Ellipsis($$payload8, { class: "h-4 w-4" });
                                  $$payload8.out += `<!--]--> <span class="sr-only">Toggle menu</span>`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload7.out += `<!--]-->`;
                            },
                            $$slots: { default: true }
                          });
                          $$payload6.out += `<!--]--> <!--[-->`;
                          Dropdown_menu_content($$payload6, {
                            align: "end",
                            children: ($$payload7, $$slotProps6) => {
                              $$payload7.out += `<!--[-->`;
                              Dropdown_menu_label($$payload7, {
                                children: ($$payload8, $$slotProps7) => {
                                  $$payload8.out += `Actions`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload7.out += `<!--]--> <!--[-->`;
                              Dropdown_menu_item($$payload7, {
                                children: ($$payload8, $$slotProps7) => {
                                  $$payload8.out += `Edit`;
                                },
                                $$slots: { default: true }
                              });
                              $$payload7.out += `<!--]--> <!--[-->`;
                              Dropdown_menu_item($$payload7, {
                                children: ($$payload8, $$slotProps7) => {
                                  $$payload8.out += `Delete`;
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
              $$payload3.out += "<!--]-->";
            }
            $$payload3.out += "<!--]-->";
          } else {
            $$payload3.out += `Loading`;
            $$payload3.out += "<!--]!-->";
          }
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]-->`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BaOEQo-E.js.map
