const p1 = new Promise((resolve, reject) => {
  console.log("内部同步代码会立即执行1");
  setTimeout(() => {
    resolve("res 20");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  console.log("内部同步代码会立即执行2");
  setTimeout(() => {
    reject("err 20");
  }, 1000);
});

const p11 = p1.then(
  (res) => {
    console.log("res1", res);
    return new Promise((res, rej) => {
      rej("then rej");
    });
  },
  (rej) => {
    console.log("rej1", rej);
  }
);
const p21 = p2.then(
  (res) => {
    console.log("res2", res);
    return res;
  },
  (rej) => {
    console.log("rej2", rej);
    return rej;
  }
);

console.log("外部同步代码");
console.log(p1);
console.log(p2);
console.log(p11);
console.log(p21);
