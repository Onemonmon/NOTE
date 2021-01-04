import { createElement, render, renderDom } from "./virtual-dom";

const el = createElement("ul", { class: "list" }, [
  createElement("li", { class: "list-item" }, ["a"]),
  createElement("li", { class: "list-item" }, ["b"]),
  createElement("li", { class: "list-item" }, ["c"]),
]);

console.log(el);
console.log(render(el));

renderDom(el, document.getElementById("root"));
