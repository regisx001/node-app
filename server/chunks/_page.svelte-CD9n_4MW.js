import { B as Button } from './index4-BLqsAhpD.js';
import './index2-BJ1gMto1.js';
import 'clsx';
import 'tailwind-merge';
import 'tailwind-variants';
import './index-Ch5foWpM.js';

function _page($$payload) {
  $$payload.out += `<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6"><div class="flex items-center"><h1 class="text-lg font-semibold md:text-2xl">Inventory</h1></div> <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"><div class="flex flex-col items-center gap-1 text-center"><h3 class="text-2xl font-bold tracking-tight">You have no products</h3> <p class="text-sm text-muted-foreground">You can start selling as soon as you add a product.</p> <!--[-->`;
  Button($$payload, {
    class: "mt-4",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `Add Product`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!--]--></div></div></main>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CD9n_4MW.js.map
