## 1. DNS 解析：将域名解析成 IP 地址

浏览器缓存 => 操作系统缓存 => 路由缓存 => ISP（互联网服务提供商）的 DNS 服务器 => 根服务器（递归）

## 2. 建立 TCP 连接 三次握手

    C => S: SYN = 1, Seq = X
    S => C: SYN = 1, Seq = Y, ACK = X+1
    C => S: ACK = Y+1, Seq = Z

## 3. 发送请求

## 4. 服务器处理请求并返回 http 响应报文

## 5. 浏览器解析渲染页面

    构建 dom 树
    构建 cssdom
    加载 js
    生成渲染树
    布局绘制：确定节点的宽高、位置，将其与屏幕的像素点对应
    回流：布局改变，从html节点递归重新布局绘制
    重绘：颜色等
