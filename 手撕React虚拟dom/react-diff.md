#### diff 策略

1. 在 web UI 中跨层级 dom 节点的移动操作极少，可以忽略不计
2. 相同类的两个组件会生成相似的树结构，不同类的两个组件会生成不同的树结构
3. 对同层级的子节点，可以通过添加唯一的标识进行区分

基于以上三种 diff 策略，react 分别对 tree diff， component diff， element diff 算法进行优化

1. tree diff：
   只针对同层级的节点进行比较，节点如果不存在，则直接删除该节点及其子节点，不会继续比较下去。
   如果出现将节点移动到其他层级下的操作，react 不会移动节点，而是会在对应层级下创建新节点，然后删除以前的节点
   尽量保持 DOM 结构稳定：如果需要频繁做显示隐藏，建议通过变量来控制样式
2. component diff：
   如果组件类型相同，则继续按原策略比较 dom tree
   如果组件类型不相同，则替换整个组件下的子节点
   针对相同类型的组件，react 提供了 shouldComponentUpdate 来判断是否需要对组件进行 diff
3. element diff：
   三种节点操作： INSETRT_MARKUP,MOVE_EXISTING,REMOVE_NODE
   针对节点相同，只是位置变了，react 的优化：为每个节点添加唯一的 key
   lastIndex = 0, index < lastIndex 时移动节点，否则节点不变
   尽量避免将末尾节点移到开头节点的位置，这样导致 lastIndex 很大，前面的每个节点都需要做移动
