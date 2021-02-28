class MyPromise {
  constructor(fn) {
    this.status = "pending";
    this.value = undefined;
    this.tasks = [];
    function resolve(value) {
      this.status = "fulfilled";
      this.value = value;
      setTimeout(() =>
        this.tasks.forEach((task) => task.onRes && task.onRes(value))
      );
    }
    function reject(error) {
      this.status = "rejected";
      this.value = error;
      setTimeout(() =>
        this.tasks.forEach((task) => task.onRej && task.onRej(error))
      );
    }
    fn(resolve.bind(this), reject.bind(this));
  }
  then(onRes, onRej) {
    return new MyPromise((res, rej) => {
      const handle = (cb) => {
        const result = cb(this.value);
        if (result instanceof MyPromise) {
          // 返回一个promise
          result.then(res, rej);
        } else {
          res(result);
        }
      };
      this.tasks.push({
        onRes: () => handle(onRes),
        onRej: () => handle(onRej),
      });
    });
  }
  catch() {}
  finally() {}
}

const p = new MyPromise((res, rej) => {
  rej(222);
});

const p1 = p.then(
  (res) => {
    console.log("res1", res);
    return 1111;
    // return new MyPromise((res, rej) => {
    //   rej(222111);
    // });
  },
  (rej) => {
    console.log("rej1", rej);
    return 2222;
  }
);

console.log(p1);
