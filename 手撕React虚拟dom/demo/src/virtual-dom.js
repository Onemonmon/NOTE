class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}

function setAttr(node, key, value) {
  switch (key) {
    case "value":
      if (
        node.tagName.toUpperCase() === "INPUT" ||
        node.tagName.toUpperCase() === "TEXTAREA"
      ) {
        node.value = value;
      } else {
        node.setAttribute(key, value);
      }
      break;
    case "style":
      node.style.cssText = value;
    default:
      node.setAttribute(key, value);
      break;
  }
}

// 将虚拟dom转化成真实dom
function render(element) {
  const dom = document.createElement(element.type);
  // 设置属性
  for (const key in element.props) {
    setAttr(dom, key, element.props[key]);
  }
  // 递归转换子节点
  element.children.forEach((child) => {
    child =
      child instanceof Element ? render(child) : document.createTextNode(child);
    dom.appendChild(child);
  });
  return dom;
}

// 渲染真实dom
function renderDom(element, target) {
  target.appendChild(render(element));
}

export { createElement, render, renderDom };
