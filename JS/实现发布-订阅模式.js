class Event {
  constructor() {
    this.list = [];
  }
  listen(name, fn) {
    this.list.push({ name, fn });
  }
  trigger(name, ...args) {
    for (let i = 0; i < this.list.length; i++) {
      this.list[i].name === name && this.list[i].fn.apply(this, args);
    }
  }
  cancelListen(name) {
    this.list = this.list.filter((n) => n.name !== name);
  }
}

const E = new Event();

E.listen("问题", (name) => {
  console.log("这是什么？");
});

E.listen("回答", (name) => {
  console.log("这是" + name);
});

E.trigger("回答", "卡卡卡卡");
