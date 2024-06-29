import { f as escape_html, g as store_get, u as unsubscribe_stores, b as pop, p as push } from './index2-BJ1gMto1.js';
import { p as page } from './stores2-y75fTyi1.js';
import './exports-BGi7-Rnc.js';

function Error($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<h1>${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p>${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</p>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Error as default };
//# sourceMappingURL=error.svelte-CrwMljP2.js.map
