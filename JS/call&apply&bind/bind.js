function test(...args) {
  console.log("this => ", this);
  console.log("args => ", args);
}

const obj = {
  a: 0,
  b: 1,
};

test.bind(obj, 1, 2, 3)();

Function.prototype.myBind = function (...outerArgs) {
  const [context, ...restArgs] = outerArgs;
  console.log("要绑定的新this：", context);
  console.log("调用bind的函数：", this);
  console.log("函数形参：", restArgs);
  return (...innerArgs) => {
    this.call(context, ...restArgs, ...innerArgs);
  };
};

test.myBind(obj, 1, 2, 3)();
