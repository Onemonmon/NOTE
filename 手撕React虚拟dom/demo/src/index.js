import { createElement, render, renderDom } from "./virtual-dom";
import diff from "./react-diff";

const el1 = createElement("ul", { class: "list" }, [
  createElement("li", { class: "list-item" }, ["a"]),
  createElement("li", { class: "list-item" }, ["b"]),
  createElement("li", { class: "list-item" }, ["c"]),
]);
const el2 = createElement("ul", { class: "list-new" }, [
  createElement("li", { class: "list-item1" }, ["a"]),
  createElement("li", { class: "list-item2" }, ["b1"]),
  createElement("li", { class: "list-item" }, ["c1"]),
]);
const patches = diff(el1, el2);
console.log(patches);
// console.log(el);
// console.log(render(el));
// renderDom(el, document.getElementById("root"));
