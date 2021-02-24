## Mounting 挂载阶段

1. constructor
2. getDerivedStateFromProps
3. render
4. componentDidMount 这里 setState 会重新执行 render，但是会在屏幕刷新前执行，所以用户不会感知

## Update 更新阶段

1. getDerivedStateFromProps
2. componentShouldUpdate
3. render
4. getSnapShotBeforeUpdate
5. componentDidUpdate
