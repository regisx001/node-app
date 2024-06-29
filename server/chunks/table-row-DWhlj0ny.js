import { o as rest_props, v as value_or_fallback, w as spread_attributes, k as slot, d as bind_props, b as pop, p as push, l as sanitize_props } from './index2-BJ1gMto1.js';
import { c as cn, d as default_slot } from './index4-BLqsAhpD.js';

function Table($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<div class="relative w-full overflow-auto"><table${spread_attributes({
    class: cn("w-full caption-bottom text-sm", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></table></div>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_body($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<tbody${spread_attributes({
    class: cn("[&_tr:last-child]:border-0", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></tbody>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_cell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<td${spread_attributes({
    class: cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></td>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_head($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<th${spread_attributes({
    class: cn("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></th>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<thead${spread_attributes({
    class: cn("[&_tr]:border-b", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></thead>`;
  bind_props($$props, { class: className });
  pop();
}
function Table_row($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = value_or_fallback($$props["class"], () => void 0);
  $$payload.out += `<tr${spread_attributes({
    class: cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
    ...$$restProps
  })}><!--[-->`;
  slot($$payload, default_slot($$props), {}, null);
  $$payload.out += `<!--]--></tr>`;
  bind_props($$props, { class: className });
  pop();
}

export { Table as T, Table_header as a, Table_body as b, Table_row as c, Table_head as d, Table_cell as e };
//# sourceMappingURL=table-row-DWhlj0ny.js.map
