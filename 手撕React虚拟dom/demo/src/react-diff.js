// 对比两棵树，返回两者差异的补丁包
const ATTRS = "ATTRS";
const REMOVE = "REMOVE";
const REPLACE = "REPLACE";
const TEXT = "TEXT";
/**
 * 1. 属性变化 => {type: 'ATTRS', attrs: {class: 'list-item-new'}}
 * 2. 新的dom节点不存在 => {type: 'REMOVE', index: xxx}
 * 3. 节点类型变化 => {type: 'REPLACE', newNode: xxx}
 * 4. 文本节点的内容变化 => {type: 'TEXT', newText: xxx}
 */
function diff(oldTree, newTree) {
  let patches = [];
  let index = 0;
  // 递归树 获取各个节点的补丁包
  walk(oldTree, newTree, index, patches);
  return patches;
}

function diffAttr(oldProps, newProps) {
  let patch = {};
  for (let key in oldProps) {
    // 属性变化
    if (newProps[key] !== oldProps[key]) {
      patch[key] = newProps[key];
    }
  }
  for (let key in newProps) {
    // 新增属性
    if (!oldProps.hasOwnProperty(key)) {
      patch[key] = newProps[key];
    }
  }
  return patch;
}

function diffChildren(oldChildren, newChildren, index, patches) {
  oldChildren.forEach((child, idx) => {
    walk(child, newChildren[idx], ++index, patches);
  });
}

function walk(oldNode, newNode, index, patches) {
  // 每个节点生成自己的补丁包
  let currentPatch = [];
  if (typeof oldNode === "string" && typeof newNode === "string") {
    // 比较文本内容是否相同
    if (oldNode !== newNode) {
      currentPatch.push({ type: TEXT, newText: newNode });
    }
  } else if (oldNode.type === newNode.type) {
    // 比较类型是否相同
    // 类型详情比较其属性的变化
    const attrs = diffAttr(oldNode.props, newNode.props);
    if (Object.keys(attrs).length) {
      currentPatch.push({ type: ATTRS, attrs });
    }
    // 如果有子节点
    if (oldNode.children && newNode.children) {
      diffChildren(oldNode.children, newNode.children, index, patches);
    }
  } else {
  }
  if (currentPatch.length) {
    patches[index] = currentPatch;
  }
}

export default diff;
