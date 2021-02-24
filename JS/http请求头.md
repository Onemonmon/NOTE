## Request Headers

1. Accept 客户端期望服务端返回的媒体格式
2. Accept-Charset 客户端期望服务端返回的内容的编码格式
3. Accept-Language 客户端期望服务端返回的内容的语言

## Response Headers

1. Content-Type 服务端对客户端 Accept、Accept-Charset 的统一应答：Content-Type: text/html; charset=utf8
2. Content-Language 服务端对客户端 Accept-Language 的应答
3. Date 服务端没缓存：响应的即时生成时间；服务端有缓存：响应被缓存时的时间
4. Age 响应的已被缓存的时间
5. Expires 资源失效时间，等于 Date 则表示已失效
6. Allow 服务端对客户端提供的访问资源的 Method
7. Connection Connection:close 表示当前请求结束后关闭连接
8. Referer 指定请求从哪个跳转页来的

## general Headers

1. Referrer Policy 用于过滤 Referer 中的信息
   no-referrer 不传递 Referrer 值
   no-referrer-when-downgrade https => http 时，不传递 Referrer 值
   same-origin 同源时传递
   origin 过滤掉参数和路径，将协议、域名、端口号当作 Referrer
   strict-origin 同 origin，但不能降级
   origin-when-cross-origin 跨域时同 origin，否则用全路径作 Referrer
   unsafe-url 永远用全路径作 Referrer
