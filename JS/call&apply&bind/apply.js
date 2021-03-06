function test(...args) {
  console.log("this => ", this);
  console.log("args => ", args);
}

const obj = {
  a: 0,
  b: 1,
};

test.apply(obj, [1, 2, 3]);

Function.prototype.myApply = function (...args) {
  const [context, restArgs] = args;
  console.log("要绑定的新this：", context);
  console.log("调用apply的函数：", this);
  console.log("函数形参：", restArgs);
  context.__proto__.xxx = this;
  context.xxx(restArgs);
  delete context.__proto__.xxx;
};

test.myApply(obj, [1, 2, 3]);
