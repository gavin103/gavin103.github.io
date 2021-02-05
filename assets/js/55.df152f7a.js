(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{535:function(e,t,a){"use strict";a.r(t);var _=a(4),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_4-1-tcp连接"}},[e._v("4.1 TCP连接")]),a("ul",[a("li",[a("a",{attrs:{href:"#_4-1-1-tcp的可靠数据管道"}},[e._v("4.1.1 TCP的可靠数据管道")])]),a("li",[a("a",{attrs:{href:"#_4-1-2-tcp流是分段的、由ip分组传送"}},[e._v("4.1.2 TCP流是分段的、由IP分组传送")])])])]),a("li",[a("a",{attrs:{href:"#_4-2-对tcp性能的考虑"}},[e._v("4.2 对TCP性能的考虑")]),a("ul",[a("li",[a("a",{attrs:{href:"#_4-2-1-http事务的时延"}},[e._v("4.2.1 HTTP事务的时延")])]),a("li",[a("a",{attrs:{href:"#_4-2-2-性能聚焦区域"}},[e._v("4.2.2 性能聚焦区域")])]),a("li",[a("a",{attrs:{href:"#_4-2-3-tcp连接的握手时延"}},[e._v("4.2.3 TCP连接的握手时延")])]),a("li",[a("a",{attrs:{href:"#_4-2-4-延迟确认"}},[e._v("4.2.4 延迟确认")])]),a("li",[a("a",{attrs:{href:"#_4-2-5-tcp慢启动"}},[e._v("4.2.5 TCP慢启动")])]),a("li",[a("a",{attrs:{href:"#_4-2-6-nagle算法与tcp-nodelay"}},[e._v("4.2.6 Nagle算法与TCP_NODELAY")])])])]),a("li",[a("a",{attrs:{href:"#_4-3-http连接的处理"}},[e._v("4.3 HTTP连接的处理")]),a("ul",[a("li",[a("a",{attrs:{href:"#_4-3-1-常被误解的connection首部"}},[e._v("4.3.1 常被误解的Connection首部")])]),a("li",[a("a",{attrs:{href:"#_4-3-2-串行事务处理时延"}},[e._v("4.3.2 串行事务处理时延")])])])]),a("li",[a("a",{attrs:{href:"#_4-4-并行连接"}},[e._v("4.4 并行连接")]),a("ul",[a("li",[a("a",{attrs:{href:"#_4-4-1-并行连接可能会提高页面的加载速度"}},[e._v("4.4.1 并行连接可能会提高页面的加载速度")])]),a("li",[a("a",{attrs:{href:"#_4-4-2-并行连接不一定更快-只是可能让人-感觉-更快一些"}},[e._v("4.4.2 并行连接不一定更快，只是可能让人“感觉”更快一些")])])])]),a("li",[a("a",{attrs:{href:"#_4-5-持久连接"}},[e._v("4.5 持久连接")]),a("ul",[a("li",[a("a",{attrs:{href:"#_4-5-1-持久以及并行连接"}},[e._v("4.5.1 持久以及并行连接")])]),a("li",[a("a",{attrs:{href:"#_4-5-2-http-1-0-keep-alive连接"}},[e._v("4.5.2 HTTP/1.0+ keep-alive连接")])]),a("li",[a("a",{attrs:{href:"#_4-5-3-keep-alive操作"}},[e._v("4.5.3 Keep-Alive操作")])]),a("li",[a("a",{attrs:{href:"#_4-5-4-keep-alive选项"}},[e._v("4.5.4 Keep-Alive选项")])]),a("li",[a("a",{attrs:{href:"#_4-5-5-keep-alive连接的限制和规则"}},[e._v("4.5.5 Keep-Alive连接的限制和规则")])]),a("li",[a("a",{attrs:{href:"#_4-5-6-keep-alive和哑代理"}},[e._v("4.5.6 Keep-Alive和哑代理")])]),a("li",[a("a",{attrs:{href:"#_4-5-8-http-1-1持久连接"}},[e._v("4.5.8 HTTP/1.1持久连接")])]),a("li",[a("a",{attrs:{href:"#_4-5-9-持久连接的限制和规则"}},[e._v("4.5.9 持久连接的限制和规则")])])])]),a("li",[a("a",{attrs:{href:"#_4-6-管道化连接"}},[e._v("4.6 管道化连接")])]),a("li",[a("a",{attrs:{href:"#_4-7-关闭连接的奥秘"}},[e._v("4.7 关闭连接的奥秘")]),a("ul",[a("li",[a("a",{attrs:{href:"#_4-7-1-任意-解除连接"}},[e._v("4.7.1 “任意”解除连接")])]),a("li",[a("a",{attrs:{href:"#_4-7-2-content-length及截尾操作"}},[e._v("4.7.2 Content-Length及截尾操作")])]),a("li",[a("a",{attrs:{href:"#_4-7-3-连接关闭容限、重试以及幂等性"}},[e._v("4.7.3 连接关闭容限、重试以及幂等性")])]),a("li",[a("a",{attrs:{href:"#_4-7-4-正常关闭连接"}},[e._v("4.7.4 正常关闭连接")])])])])])]),a("p"),e._v(" "),a("p",[e._v("HTTP 连 接是 HTTP 报文传输的关键通道。\n本章内容包含以下部分：")]),e._v(" "),a("ul",[a("li",[e._v("HTTP 是如何使用 TCP 连接的;")]),e._v(" "),a("li",[e._v("TCP 连接的时延、瓶颈以及存在的障碍;")]),e._v(" "),a("li",[e._v("HTTP 的优化，包括并行连接、keep-alive(持久连接)和管道化连接;")]),e._v(" "),a("li",[e._v("管理连接时应该以及不应该做的事情。")])]),e._v(" "),a("h2",{attrs:{id:"_4-1-tcp连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-tcp连接"}},[e._v("#")]),e._v(" 4.1 TCP连接")]),e._v(" "),a("h3",{attrs:{id:"_4-1-1-tcp的可靠数据管道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-tcp的可靠数据管道"}},[e._v("#")]),e._v(" 4.1.1 TCP的可靠数据管道")]),e._v(" "),a("p",[e._v("TCP 为 HTTP 提供了一条可靠的比特传输管道。\n从 TCP 连接一端填入的字节会从另 一端以原有的顺序、正确地传送出来。\n"),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4eef94231d1548c2ba53a8b3a38b9b52~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_4-1-2-tcp流是分段的、由ip分组传送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-tcp流是分段的、由ip分组传送"}},[e._v("#")]),e._v(" 4.1.2 TCP流是分段的、由IP分组传送")]),e._v(" "),a("p",[e._v("TCP 的数据是通过名为 IP 分组(或 IP 数据报)的小数据块来发送的。\nHTTP 就是“HTTP over TCP over IP”这个“协议栈”中的最顶层 了。\n其安全版本 HTTPS 就是在 HTTP 和 TCP 之间插入了一个(称为 TLS 或 SSL 的)密码加密层\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f62c05a7085e46b3829b03b4d624a3a4~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("p",[e._v("HTTP 要传送一条报文时，会以流的形式将报文数据的内容通过一条打开的 TCP 连接按序传输。\nTCP 收到数据流之后，会将数据流砍成被称作段的小数据块，并将段封装在 IP 分组中，通过因特网进行传输。\n所有这些工作都是由 TCP/ IP 软件来处理的，HTTP 程序员什么都看不到。")]),e._v(" "),a("p",[e._v("每个 IP 分组中都包括:")]),e._v(" "),a("ul",[a("li",[e._v("一个IP分组首部(通常为20字节)，IP 首部包含了源和目的 IP 地址、长度和其他一些标记。")]),e._v(" "),a("li",[e._v("一个 TCP 段首部(通常为 20 字节)，TCP 段的首部包含了 TCP 端口号、TCP 控制标记，以及用于数据排序和完整性检查的一些数字值。")]),e._v(" "),a("li",[e._v("一个 TCP 数据块(0 个或多个字节)。")])]),e._v(" "),a("p",[e._v("在任意时刻计算机都可以有几条 TCP 连接处于打开状态。TCP 是通过端口号来保持所有这些连接持续不断地运行。\n端口号和雇员使用的电话分机号很类似。就像公司的总机号码能将你接到前台，而 分机号可以将你接到正确的雇员位置一样，IP 地址可以将你连接到正确的计算机，而端口号则可以将你连接到正确的应用程序上去。TCP 连接是通过 4 个值来识别的:\n"),a("code",[e._v("< 源 IP 地址、源端口号、目的 IP 地址、目的端口号 >")]),e._v("\n这 4 个值一起唯一地定义了一条连接。\n"),a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69c4c57dcd3e4d3b94736c07d859f3f9~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("p",[e._v("下图显示了 Web 浏览器是如何用 HTTP 从 Joe 的五金商店下载 power-tools.html 页面的。\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db978d79df484735a553e112cc768dd5~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"_4-2-对tcp性能的考虑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-对tcp性能的考虑"}},[e._v("#")]),e._v(" 4.2 对TCP性能的考虑")]),e._v(" "),a("h3",{attrs:{id:"_4-2-1-http事务的时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-http事务的时延"}},[e._v("#")]),e._v(" 4.2.1 HTTP事务的时延")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/93e0bcc011a74efea9306a1034a96f43~tplv-k3u1fbpfcp-watermark.image",alt:""}}),e._v("\n上图为串行 HTTP 事务的时间线\n与建立 TCP 连接，以及传输请求和响应报文的时间相比，事务处理时间可能是很短的。\n也就是说， HTTP 时延就是由 TCP 网络时延构成的。")]),e._v(" "),a("p",[e._v("HTTP 事务的时延有以下几种主要原因：")]),e._v(" "),a("ol",[a("li",[e._v("客户端首先需要根据 URI 确定 Web 服务器的 IP 地址和端口号。\n如果最近没有对 URI 中的主机名进行访问，通过 DNS 解析系统将 URI 中的主机名转换成一个 IP 地址可能要花费数十秒的时间。")])]),e._v(" "),a("blockquote",[a("p",[e._v("大多数 HTTP 客户端都有一个小的 DNS 缓存，用来保存近期所访问站点的 IP 地址。如果 已经在本地“缓存”(记录)了 IP 地址，查询就可以立即完成。")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[e._v("接下来，客户端会向服务器发送一条 TCP 连接请求，并等待服务器回送一个请求接受应答。\n每条新的 TCP 连接都会有连接建立时延，这个值通常最多只有一两秒钟。\n但如果有数百个 HTTP 事务的话，这个值会快速地叠加上去。")])]),e._v(" "),a("li",[a("p",[e._v("因特网传输请求报文，以及服务器处理请求报文都需要时间。\n然后，Web 服务器会回送 HTTP 响应，这也需要花费时间。")])])]),e._v(" "),a("p",[e._v("这些 TCP 网络时延的大小取决于硬件速度、网络和服务器的负载，请求和响应报文的尺寸，以及客户端和服务器之间的距离。TCP 协议的技术复杂性也会对时延产生巨大的影响。")]),e._v(" "),a("h3",{attrs:{id:"_4-2-2-性能聚焦区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-性能聚焦区域"}},[e._v("#")]),e._v(" 4.2.2 性能聚焦区域")]),e._v(" "),a("p",[e._v("以下列出了一些会对 HTTP 程序员产生影响的、最常见的 TCP 相关时延，其中包括:")]),e._v(" "),a("ul",[a("li",[e._v("TCP 连接建立握手;")]),e._v(" "),a("li",[e._v("TCP 慢启动拥塞控制;")]),e._v(" "),a("li",[e._v("数据聚集的 Nagle 算法;")]),e._v(" "),a("li",[e._v("用于捎带确认的 TCP 延迟确认算法;")]),e._v(" "),a("li",[e._v("TIME_WAIT 时延和端口耗尽。")])]),e._v(" "),a("p",[e._v("如果要编写高性能的 HTTP 软件，就应该理解上面的每一个因素。")]),e._v(" "),a("h3",{attrs:{id:"_4-2-3-tcp连接的握手时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-tcp连接的握手时延"}},[e._v("#")]),e._v(" 4.2.3 TCP连接的握手时延")]),e._v(" "),a("p",[e._v("建立一条新的 TCP 连接时，甚至是在发送任意数据之前，TCP 软件之间会交换一系列的 IP 分组，对连接的有关参数进行沟通(如下图)。如果连接只用来传送少量数据，这些交换过程就会严重降低 HTTP 的性能。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/414d6b9cb3f1460b865380954d31e13b~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("p",[e._v("TCP 连接握手需要经过以下几个步骤：")]),e._v(" "),a("ol",[a("li",[e._v("请求新的 TCP 连接时，客户端要向服务器发送一个小的 TCP 分组(通常是 40 ~ 60 个字节)。这个分组中设置了一个特殊的 SYN 标记，说明这是一个连接请求。")]),e._v(" "),a("li",[e._v("如果服务器接受了连接，就会对一些连接参数进行计算，并向客户端回送一个 TCP 分组，这个分组中的 SYN 和 ACK 标记都被置位，说明连接请求已被接受。")]),e._v(" "),a("li",[e._v("最后，客户端向服务器回送一条确认信息，通知它连接已成功建立。现代的 TCP 栈都允许客户端在这个确认分组中发送数据。")])]),e._v(" "),a("p",[e._v("通常 HTTP 事务都不会交换太多数据，小的 HTTP 事务可能会在 TCP 建立上花费 50%，或更多的时间。\n为减小这种 TCP 建立时延所造成的影响的，HTTP 采用了重用现存连接的方式。")]),e._v(" "),a("h3",{attrs:{id:"_4-2-4-延迟确认"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-延迟确认"}},[e._v("#")]),e._v(" 4.2.4 延迟确认")]),e._v(" "),a("p",[e._v("由于因特网自身无法确保可靠的分组传输(因特网路由器超负荷的话，可以随意丢弃分组)，所以 TCP 实现了自己的确认机制来确保数据的成功传输。")]),e._v(" "),a("p",[e._v("每个 TCP 段都有一个序列号和数据完整性校验和。每个段的接收者收到完好的段时，都会向发送者回送小的确认分组。如果发送者没有在指定的窗口时间内收到确认信息，发送者就认为分组已被破坏或损毁，并重发数据。")]),e._v(" "),a("p",[e._v("由于确认报文很小，所以 TCP 允许在发往相同方向的输出数据分组中对其进行“捎带”。TCP 将返回的确认信息与输出的数据分组结合在一起，可以更有效地利用网络。为了增加确认报文找到同向传输数据分组的可能性，很多 TCP 栈都实现了一种“延迟确认”算法。延迟确认算法会在一个特定的窗口时间(通常是 100 ~ 200 毫秒)内将输出确认存放在缓冲区中，以寻找能够捎带它的输出数据分组。如果在那个时间段内没有输出数据分组，就将确认信息放在单独的分组中传送。")]),e._v(" "),a("p",[e._v("但是，HTTP 具有双峰特征的请求 - 应答行为降低了捎带信息的可能。当希望有相反方向回传分组的时候，偏偏没有那么多。通常，延迟确认算法会引入相当大的时延。根据所使用操作系统的不同，可以调整或禁止延迟确认算法。")]),e._v(" "),a("p",[e._v("在对 TCP 栈的任何参数进行修改之前，一定要对自己在做什么有清醒的认识。TCP 中引入这些算法的目的是防止设计欠佳的应用程序对因特网造成破坏。对 TCP 配置进行的任意修改，都要绝对确保应用程序不会引发这些算法所要避免的问题。")]),e._v(" "),a("h3",{attrs:{id:"_4-2-5-tcp慢启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-tcp慢启动"}},[e._v("#")]),e._v(" 4.2.5 TCP慢启动")]),e._v(" "),a("p",[e._v("TCP 数据传输的性能还取决于 TCP 连接的使用期(age)。TCP 连接会随着时间进行 自我“调谐”，起初会限制连接的最大速度，如果数据成功传输，会随着时间的推移 提高传输的速度。这种调谐被称为 TCP 慢启动(slow start)，用于防止因特网的突然过载和拥塞。")]),e._v(" "),a("p",[e._v("TCP 慢启动限制了一个 TCP 端点在任意时刻可以传输的分组数。简单来说，每成功接收一个分组，发送端就有了发送另外两个分组的权限。如果某个 HTTP 事务有大量数据要发送，是不能一次将所有分组都发送出去的。必须发送一个分组，等待确认;然后可以发送两个分组，每个分组都必须被确认，这样就可以发送四个分组了， 以此类推。这种方式被称为“打开拥塞窗口”。")]),e._v(" "),a("p",[e._v("由于存在这种拥塞控制特性，所以新连接的传输速度会比已经交换过一定量数据的、 “已调谐”连接慢一些。由于已调谐连接要更快一些，所以 HTTP 中有一些可以重用现存连接的工具。本章稍后会介绍这些 HTTP“持久连接”。")]),e._v(" "),a("h3",{attrs:{id:"_4-2-6-nagle算法与tcp-nodelay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-6-nagle算法与tcp-nodelay"}},[e._v("#")]),e._v(" 4.2.6 Nagle算法与TCP_NODELAY")]),e._v(" "),a("p",[e._v("TCP 有一个数据流接口，应用程序可以通过它将任意尺寸的数据放入 TCP 栈中 —— 即使一次只放一个字节也可以!但是，每个 TCP 段中都至少装载了 40 个字节的标记和首部，所以如果 TCP 发送了大量包含少量数据的分组，网络的性能就会严重下降。")]),e._v(" "),a("p",[e._v("Nagle 算法(根据其发明者 John Nagle 命名)试图在发送一个分组之前，将大量 TCP 数据绑定在一起，以提高网络效率。RFC 896“IP/TCP 互连网络中的拥塞控制”对此算法进行了描述。")]),e._v(" "),a("p",[e._v("Nagle 算法鼓励发送全尺寸(LAN 上最大尺寸的分组大约是 1500 字节，在因特网 上是几百字节)的段。只有当所有其他分组都被确认之后，Nagle 算法才允许发送 非全尺寸的分组。如果其他分组仍然在传输过程中，就将那部分数据缓存起来。只有当挂起分组被确认，或者缓存中积累了足够发送一个全尺寸分组的数据时，才会 将缓存的数据发送出去。")]),e._v(" "),a("p",[e._v("Nagle 算法会引发几种 HTTP 性能问题。首先，小的 HTTP 报文可能无法填满一个 分组，可能会因为等待那些永远不会到来的额外数据而产生时延。其次，Nagle 算法与延迟确认之间的交互存在问题——Nagle 算法会阻止数据的发送，直到有确认分组抵达为止，但确认分组自身会被延迟确认算法延迟 100 ~ 200 毫秒。")]),e._v(" "),a("p",[e._v("HTTP 应用程序常常会在自己的栈中设置参数 TCP_NODELAY，禁用 Nagle 算法，提高性能。\n如果要这么做的话，一定要确保会向 TCP 写入大块的数据，这样就不会产生一堆小分组了。")]),e._v(" "),a("h2",{attrs:{id:"_4-3-http连接的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-http连接的处理"}},[e._v("#")]),e._v(" 4.3 HTTP连接的处理")]),e._v(" "),a("h3",{attrs:{id:"_4-3-1-常被误解的connection首部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-常被误解的connection首部"}},[e._v("#")]),e._v(" 4.3.1 常被误解的Connection首部")]),e._v(" "),a("p",[e._v("HTTP 允许在客户端和最终的源端服务器之间存在一串 HTTP 中间实体(代理、高速缓存等)。可以从客户端开始，逐跳地将 HTTP 报文经过这些中间设备，转发到源端服务器上去(或者进行反向传输)。")]),e._v(" "),a("p",[e._v("在某些情况下，两个相邻的 HTTP 应用程序会为它们共享的连接应用一组选项。HTTP 的 Connection 首部字段中有一个由逗号分隔的连接标签列表，这些标签为此连接指定了一些不会传播到其他连接中去的选项。")]),e._v(" "),a("p",[e._v("如果 Connection 标签中包含了一个 HTTP 首部字段的名称，那么这个首部字段就包含了与一些连接有关的信息，不能将其转发出去。在将报文转发出去之前，必须删除 Connection 首部列出的所有首部字段。由于 Connection 首部可以防止无意中对 本地首部的转发，因此将逐跳首部名放入 Connection 首部被称为“对首部的保护”。\n"),a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/585f90bee366475ebc069292d6cacbc6~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("p",[e._v("Connection 首部可以承载 3 种不同类型的标签:")]),e._v(" "),a("ul",[a("li",[e._v("HTTP 首部字段名，列出了只与此连接有关的首部;")]),e._v(" "),a("li",[e._v("任意标签值，用于描述此连接的非标准选项;")]),e._v(" "),a("li",[e._v("值 close，说明操作完成之后（发送完下一条报文之后）需关闭这条持久连接。")])]),e._v(" "),a("h3",{attrs:{id:"_4-3-2-串行事务处理时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-串行事务处理时延"}},[e._v("#")]),e._v(" 4.3.2 串行事务处理时延")]),e._v(" "),a("p",[e._v("如果每个HTTP事务都需要(串行地建立)一条新的连接，那么连接时延和慢启动时延就会叠加起来。\n"),a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f5f31ed62c44e21a33ddc50e8247a0f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("p",[e._v("串行加载除了引入的实际时延外还会导致在加载了足够多的对象之前，无法在屏幕上显示任何内容，让用户面对一个空白的屏幕，对装载的进度一无所知。")]),e._v(" "),a("p",[e._v("提高 HTTP 的连接性能，现在多采用以下技术：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("并行连接")]),e._v("\n通过多条 TCP 连接发起并发的 HTTP 请求。")]),e._v(" "),a("li",[a("strong",[e._v("持久连接")]),e._v("\n重用 TCP 连接，以消除连接及关闭时延。")]),e._v(" "),a("li",[a("strong",[e._v("管道化连接")]),e._v("\n通过共享的 TCP 连接发起并发的 HTTP 请求。")]),e._v(" "),a("li",[a("strong",[e._v("复用的连接")]),e._v("\n交替传送请求和响应报文。")])]),e._v(" "),a("h2",{attrs:{id:"_4-4-并行连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-并行连接"}},[e._v("#")]),e._v(" 4.4 并行连接")]),e._v(" "),a("p",[e._v("浏览器可以先完整地请求原始的 HTML 页面，然后请求第一个嵌入对象，然后请求第二个嵌入对象等，以这种简单的方式对每个嵌入式对象进行串行处 理。但这样实在是太慢了!")]),e._v(" "),a("p",[e._v("HTTP 允许客户端打开多条连接，并行地执行多个 HTTP 事务。在下图例子中，并行加载了四幅嵌入式图片，每个事务都有自己的 TCP 连接。\n"),a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4212231bbd94f68a3c5bca2f8c2d3db~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_4-4-1-并行连接可能会提高页面的加载速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-并行连接可能会提高页面的加载速度"}},[e._v("#")]),e._v(" 4.4.1 并行连接可能会提高页面的加载速度")]),e._v(" "),a("p",[e._v("包含嵌入对象的组合页面如果能(通过并行连接)克服单条连接的空载时间和带宽限制，加载速度也会有所提高。时延可以重叠起来，而且如果单条连接没有充分利用客户端的因特网带宽，可以将未用带宽分配来装载其他对象。\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcd0f5c0c6f147e6ae984547aab7b488~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_4-4-2-并行连接不一定更快-只是可能让人-感觉-更快一些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-并行连接不一定更快-只是可能让人-感觉-更快一些"}},[e._v("#")]),e._v(" 4.4.2 并行连接不一定更快，只是可能让人“感觉”更快一些")]),e._v(" "),a("p",[e._v("即使并行连接的速度可能会更快，但并不一定总是更快。比如客户端的网络带宽不足时，大部分的时间可能都是用来传送数据的。如果并行加载多个对象，每个对象都会去竞争这有限的带宽，带来的性能提升就很小。\n而且，打开大量连接会消耗很多内存资源，从而引发性能问题。")]),e._v(" "),a("p",[e._v("实际上，浏览器确实使用了并行连接，但它们会将并行连接的总数限制为一个较小的值(不同浏览器不同版本各有差异，当前chrome是6个)。\n服务器可以随意关闭来自特定客户端的超量连接。")]),e._v(" "),a("p",[e._v("并行连接并没有加快页面的传输速度，但因为多个组件对象同时出现在屏幕上时，用户能够看到加载的进展。\n如果整个屏幕上有很多动作在进行，即使实际上秒表显示整个页面的下载时间更长，人们也会认为 Web 页面加载得更快一些。")]),e._v(" "),a("h2",{attrs:{id:"_4-5-持久连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-持久连接"}},[e._v("#")]),e._v(" 4.5 持久连接")]),e._v(" "),a("p",[e._v("一个 Web 页面上的大部分内容，通常都来自某几个 Web 站点，初始化了对某服务器 HTTP 请求的应用程序很可能会在不久的将来对那台服务器发起更多的请求。\n因此，HTTP/1.1(以及 HTTP/1.0 的各种增强版本)允许 HTTP 设备在事务处理结束之后将 TCP 连接保持在打开状态，以便为未来的 HTTP 请求重用现存的连接。\n在事务处理结束之后仍然保持在打开状态的 TCP 连接被称为持久连接。\n非持久连接会在 每个事务结束之后关闭。持久连接会在不同事务之间保持打开状态，直到客户端或服务器决定将其关闭为止。")]),e._v(" "),a("p",[e._v("重用已对目标服务器打开的空闲持久连接：")]),e._v(" "),a("ol",[a("li",[e._v("就可以避开缓慢的连接建立阶段；")]),e._v(" "),a("li",[e._v("已经打开的连接还可以避免慢启动的拥塞适应阶段，以便更快速地进行数据的传输。")])]),e._v(" "),a("h3",{attrs:{id:"_4-5-1-持久以及并行连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-1-持久以及并行连接"}},[e._v("#")]),e._v(" 4.5.1 持久以及并行连接")]),e._v(" "),a("p",[e._v("我们看到，并行连接可以提高复合页面的传输速度。但并行连接也有一些缺点。")]),e._v(" "),a("ul",[a("li",[e._v("每个事务都会打开 / 关闭一条新的连接，会耗费时间和带宽。")]),e._v(" "),a("li",[e._v("由于 TCP 慢启动特性的存在，每条新连接的性能都会有所降低。")]),e._v(" "),a("li",[e._v("可打开的并行连接数量实际上是有限的。")])]),e._v(" "),a("p",[e._v("持久连接有一些比并行连接更好的地方。\n持久连接降低了时延和连接建立的开销，将连接保持在已调谐状态，而且减少了打开连接的潜在数量。\n但是，管理持久连接时要特别小心，不然就会累积出大量的空闲连接，耗费本地以及远程客户端和服务器上的资源。")]),e._v(" "),a("p",[e._v("持久连接与并行连接配合使用可能是最高效的方式。\n现在，很多 Web 应用程序都会打开少量的并行连接，其中的每一个都是持久连接。持久连接有两种类型:\n比较老的 HTTP/1.0+“keep-alive”连接，以及现代的 HTTP/1.1“persistent”连接。\n在接下来的几节中我们将对这两种类型进行介绍。")]),e._v(" "),a("h3",{attrs:{id:"_4-5-2-http-1-0-keep-alive连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-2-http-1-0-keep-alive连接"}},[e._v("#")]),e._v(" 4.5.2 HTTP/1.0+ keep-alive连接")]),e._v(" "),a("p",[e._v("keep-alive 连接的一些性能优点，图中将在串行连接上实现 4 个 HTTP 事务的时间线与在一条持久连接上实现同样事务所需的时间线进行了比较。 由于去除了进行连接和关闭连接的开销，所以时间线有所缩减。\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a8cb46bc26341818c67a3f3fca4b381~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_4-5-3-keep-alive操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-3-keep-alive操作"}},[e._v("#")]),e._v(" 4.5.3 Keep-Alive操作")]),e._v(" "),a("p",[e._v("实现 HTTP/1.0 keep-alive 连接的客户端可以通过包含 Connection: Keep-Alive 首部请求将一条连接保持在打开状态。\n如果服务器愿意为下一条请求将连接保持在打开状态，就在响应中包含相同的首部。\n如果响应中没有 Connection: Keep-Alive 首部，客户端就认为服务器不支持 keep-alive，会在发回响应报文之后关闭连接。\n"),a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3737acde692046a7a09de966e05556f8~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"_4-5-4-keep-alive选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-4-keep-alive选项"}},[e._v("#")]),e._v(" 4.5.4 Keep-Alive选项")]),e._v(" "),a("p",[e._v("keep-Alive 首部只是请求将连接保持在活跃状态。\n发出 keep-alive 请求之后，客户端和服务器并不一定会同意进行 keep-alive 会话。\n它们可以在任意时刻关闭空闲的 keep-alive 连接，并可随意限制 keep-alive 连接所处理事务的数量。")]),e._v(" "),a("p",[e._v("可以用 Keep-Alive 通用首部中指定的、由逗号分隔的选项来调节 keep-alive 的行为。")]),e._v(" "),a("ul",[a("li",[e._v("参数 timeout 是在 Keep-Alive 响应首部发送的。它估计了服务器希望将连接 保持在活跃状态的时间。这并不是一个承诺值。")]),e._v(" "),a("li",[e._v("参数 max 是在 Keep-Alive 响应首部发送的。它估计了服务器还希望为多少个事务保持此连接的活跃状态。这并不是一个承诺值。")]),e._v(" "),a("li",[e._v("Keep-Alive首部还可支持任意未经处理的属性，这些属性主要用于诊断和调试。 语法为"),a("code",[e._v("name [=value]")]),e._v("。")])]),e._v(" "),a("p",[e._v("Keep-Alive 首部完全是可选的，但只有在提供 Connection: Keep-Alive 时才能 使用它。")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("Connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Keep"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Alive  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 启用持久连接")]),e._v("\nKeep"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Alive"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("120")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 服务器最多会为另外五个事务保持连接。或者保持2min")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4-5-5-keep-alive连接的限制和规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-5-keep-alive连接的限制和规则"}},[e._v("#")]),e._v(" 4.5.5 Keep-Alive连接的限制和规则")]),e._v(" "),a("p",[e._v("使用 keep-alive 连接时有一些限制和一些需要澄清的地方。")]),e._v(" "),a("ul",[a("li",[e._v("在HTTP/1.0中，keep-alive并不是默认使用的。客户端必须发送一个 Connection: Keep-Alive 请求首部来激活 keep-alive 连接。")]),e._v(" "),a("li",[e._v("Connection: Keep-Alive 首部必须随所有希望保持持久连接的报文一起发送。如果客户端没有发送 Connection: Keep-Alive 首部，服务器就会在那条请求 之后关闭连接。")]),e._v(" "),a("li",[e._v("通过检测响应中是否包含 Connection: Keep-Alive 响应首部，客户端可以判断服务器是否会在发出响应之后关闭连接。")]),e._v(" "),a("li",[e._v("只有在无需检测到连接的关闭即可确定报文实体主体部分长度的情况下，才能将连接保持在打开状态——也就是说实体的主体部分必须有正确的 Content-Length，有多部件媒体类型，或者用分块传输编码的方式进行了编码。在一条 keep-alive 信道中回送错误的 Content-Length 是很糟糕的事，这样的话，事务 处理的另一端就无法精确地检测出一条报文的结束和另一条报文的开始了。")]),e._v(" "),a("li",[e._v("代理和网关必须执行 Connection 首部的规则。代理或网关必须在将报文转发出 去或将其高速缓存之前，删除在 Connection 首部中命名的所有首部字段以及 Connection 首部自身。")]),e._v(" "),a("li",[e._v("严格来说，不应该与无法确定是否支持 Connection 首部的代理服务器建立 keep-alive 连接，以防止出现下面要介绍的哑代理问题。在实际应用中不是总能做到这一点的。")]),e._v(" "),a("li",[e._v("从技术上来讲，应该忽略所有来自 HTTP/1.0 设备的 Connection 首部字段(包括 Connection: Keep-Alive)，因为它们可能是由比较老的代理服务器误转发的。但实际上，尽管可能会有在老代理上挂起的危险，有些客户端和服务器还是 会违反这条规则。")]),e._v(" "),a("li",[e._v("除非重复发送请求会产生其他一些副作用，否则如果在客户端收到完整的响应之 前连接就关闭了，客户端就一定要做好重试请求的准备。")])]),e._v(" "),a("h3",{attrs:{id:"_4-5-6-keep-alive和哑代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-6-keep-alive和哑代理"}},[e._v("#")]),e._v(" 4.5.6 Keep-Alive和哑代理")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Connection首部和盲中继")])]),e._v(" "),a("p",[e._v("那些不理解 Connection 首部，而且不知道在沿着转发链路将其发送出去之前，应该将该首部删除的代理会成为盲中继(blind relay)，它们只是将字节从一个连接转发到另一个连接中去，不对 Connection 首部进行特殊的处理。\n"),a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd9862e8879a4568b745676572b620ae~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("p",[e._v("经过中继的 HTTP 请求抵达了 Web 服务器。当 Web 服务器收到 经过代理转发的 Connection: Keep-Alive 首部时，会误以为代理(对服务器 来说，这个代理看起来就和所有其他客户端一样)希望进行 keep-alive 对话!对 Web 服务器来说这没什么问题——它同意进行 keep-alive 对话，并在图 4-15c 中 回送了一个 Connection: Keep-Alive 响应首部。所以，此时 Web 服务器认为它在与代理进行 keep-alive 对话，会遵循 keep-alive 的规则。但代理却对 keep-alive 一无所知。")]),e._v(" "),a("p",[e._v("同理，此时客户端和服务器都认为 它们在进行 keep-alive 对话，但与它们进行对话的代理却对 keep-alive 一无所知。")]),e._v(" "),a("p",[e._v("由于代理对 keep-alive 一无所知，所以会将收到的所有数据都回送给客户端，然 后等待源端服务器关闭连接。但源端服务器会认为代理已经显式地请求它将连接 保持在打开状态了，所以不会去关闭连接。这样，代理就会挂在那里等待连接的关闭。")]),e._v(" "),a("p",[e._v("客户端在上图d线 中收到了回送的响应报文时，会立即转向下一条请求，在 keep-alive 连接上向代理发送另一条请求(参见上图e线)。而代理并不认为同一条连接上会有其他请求到来，请求被忽略，浏览器就在这里转圈，不会有任何进展了。")]),e._v(" "),a("p",[e._v("这种错误的通信方式会使浏览器一直处于挂起状态，直到客户端或服务器将连接 超时，并将其关闭为止。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("代理和逐跳首部")])]),e._v(" "),a("p",[e._v("为避免此类代理通信问题的发生，现代的代理都绝不能转发 Connection 首部 和所有名字出现在 Connection 值中的首部。因此，如果一个代理收到了一个 Connection: Keep-Alive 首部，是不应该转发 Connection 首部，或所有名为 Keep-Alive 的首部的。")]),e._v(" "),a("p",[e._v("另外，还有几个不能作为 Connection 首部值列出，也不能被代理转发或作为 缓 存 响 应 使 用 的 首 部。 其 中 包 括 Proxy-Authenticate、Proxy-Connection、 Transfer-Encoding 和 Upgrade。")]),e._v(" "),a("p",[e._v("浏览器会向代理发送非标准的 Proxy-Connection 扩展首部，而不是官方支持的著名的 Connection 首部。如果代理是盲中继，它会将无意 义的 Proxy-Connection 首部转发给 Web 服务器，服务器会忽略此首部，不会带 来任何问题。但如果代理是个聪明的代理(能够理解持久连接的握手动作)，就用一 个 Connection 首部取代无意义的 Proxy-Connection 首部，然后将其发送给服务器，以收到预期的效果。")]),e._v(" "),a("p",[e._v("在客户端和服务器之间只有一个代理时可以用这种方案来解决问题。如果在哑代理的任意一侧还有一个聪明的代理，这个问题就会再次露头了。")])])]),e._v(" "),a("h3",{attrs:{id:"_4-5-8-http-1-1持久连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-8-http-1-1持久连接"}},[e._v("#")]),e._v(" 4.5.8 HTTP/1.1持久连接")]),e._v(" "),a("p",[e._v("网络中出现“不可见”代理的情况现在变得很常见了，这些代理可以是防火 墙、拦截缓存，或者是反向代理服务器的加速器。这些设备对浏览器是不可见的， 所以浏览器不会向它们发送 Proxy-Connection 首部。透明的 Web 应用程序正确 地实现持久连接是非常重要的。")]),e._v(" "),a("p",[e._v("HTTP/1.1 逐渐停止了对 keep-alive 连接的支持，用一种名为持久连接(persistent connection)的改进型设计取代了它。持久连接的目的与 keep-alive 连接的目的相同，但工作机制更优一些。")]),e._v(" "),a("p",[e._v("HTTP/1.1 持久连接在默认情况下是激活 的。除非特别指明，否则 HTTP/1.1 假定所有连接都是持久的。要在事务处理结束 之后将连接关闭，HTTP/1.1 应用程序必须向报文中显式地添加一个 Connection: close 首部。")]),e._v(" "),a("p",[e._v("这是与以前的 HTTP 协议版本很重要的区别，在以前的版本中，keep- alive 连接要么是可选的，要么根本就不支持。")]),e._v(" "),a("p",[e._v("不发送 Connection: close 并不意味着服务器承诺永远将连接保持在打开状态。客户端和服务器仍然可以随时关闭空闲的连接。")]),e._v(" "),a("h3",{attrs:{id:"_4-5-9-持久连接的限制和规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-9-持久连接的限制和规则"}},[e._v("#")]),e._v(" 4.5.9 持久连接的限制和规则")]),e._v(" "),a("p",[e._v("• 发送了 Connection: close 请求首部之后，客户端就无法在那条连接上发送更 多的请求了。\n• 如果客户端不想在连接上发送其他请求了，就应该在最后一条请求中发送一个 Connection: close 请求首部。\n• 只有当连接上所有的报文都有正确的、自定义报文长度时——也就是说，实体主 体部分的长度都和相应的 Content-Length 一致，或者是用分块传输编码方式 编码的——连接才能持久保持。\n• HTTP/1.1 的代理必须能够分别管理与客户端和服务器的持久连接——每个持久 连接都只适用于一跳传输（读者注，请搜索 多跳通信，尝试理解一跳传输）。\n• (由于较老的代理会转发 Connection 首部，所以)HTTP/1.1 的代理服务器不应 该与 HTTP/1.0 客户端建立持久连接，除非它们了解客户端的处理能力。实际上， 这一点是很难做到的，很多厂商都违背了这一原则。\n• 尽管服务器不应该试图在传输报文的过程中关闭连接，而且在关闭连接之前至少 应该响应一条请求，但不管 Connection 首部取了什么值，HTTP/1.1 设备都可 以在任意时刻关闭连接。\n• HTTP/1.1 应用程序必须能够从异步的关闭中恢复出来。只要不存在可能会累积 起来的副作用，客户端都应该重试这条请求。\n• 除非重复发起请求会产生副作用，否则如果在客户端收到整条响应之前连接关闭了，客户端就必须要重新发起请求。\n• 一个用户客户端对任何服务器或代理最多只能维护两条持久连接，以防服务器过载。代理可能需要更多到服务器的连接来支持并发用户的通信，所以，如果有 N 个用户试图访问服务器的话，代理最多要维持 2N 条到任意服务器或父代理的连接。")]),e._v(" "),a("h2",{attrs:{id:"_4-6-管道化连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-管道化连接"}},[e._v("#")]),e._v(" 4.6 管道化连接")]),e._v(" "),a("p",[e._v("HTTP/1.1 允许在持久连接上可选地使用请求管道。这是相对于 keep-alive 连接的又 一性能优化。在响应到达之前，可以将多条请求放入队列。当第一条请求通过网络流向地球另一端的服务器时，第二条和第三条请求也可以开始发送了。在高时延网络条件下，这样做可以降低网络的环回时间，提高性能。\n"),a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d24b753d5af04eaa82facba3fcef41ca~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"_4-7-关闭连接的奥秘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-关闭连接的奥秘"}},[e._v("#")]),e._v(" 4.7 关闭连接的奥秘")]),e._v(" "),a("h3",{attrs:{id:"_4-7-1-任意-解除连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-1-任意-解除连接"}},[e._v("#")]),e._v(" 4.7.1 “任意”解除连接")]),e._v(" "),a("p",[e._v("所有 HTTP 客户端、服务器或代理都可以在任意时刻关闭一条 TCP 传输连接。通常会在一条报文结束时关闭连接，但出错的时候，也可能在首部行的中间，或其他奇怪的地方关闭连接。")]),e._v(" "),a("p",[e._v("对管道化持久连接来说，这种情形是很常见的。HTTP 应用程序可以在经过任意一段时间之后，关闭持久连接。比如，在持久连接空闲一段时间之后，服务器可能会决定将其关闭。")]),e._v(" "),a("p",[e._v("但是，服务器永远都无法确定在它关闭“空闲”连接的那一刻，在线路那一头的客户端有没有数据要发送。如果出现这种情况，客户端就会在写入半截请求报文时发现出现了连接错误。")]),e._v(" "),a("h3",{attrs:{id:"_4-7-2-content-length及截尾操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-2-content-length及截尾操作"}},[e._v("#")]),e._v(" 4.7.2 Content-Length及截尾操作")]),e._v(" "),a("p",[e._v("每条 HTTP 响应都应该有精确的 Content-Length 首部，用以描述响应主体的尺寸。一些老的 HTTP 服务器会省略 Content-Length 首部，或者包含错误的长度指示，这样就要依赖服务器发出的连接关闭来说明数据的真实末尾。")]),e._v(" "),a("p",[e._v("客户端或代理收到一条随连接关闭而结束的 HTTP 响应，且实际传输的实体长度与 Content-Length 并不匹配(或没有 Content-Length)时，接收端就应该质疑长度的正确性。")]),e._v(" "),a("p",[e._v("如果接收端是个缓存代理，接收端就不应该缓存这条响应(以降低今后将潜在的错误报文混合起来的可能)。代理应该将有问题的报文原封不动地转发出去，而不应该试图去“校正”Content-Length，以维护语义的透明性。")]),e._v(" "),a("h3",{attrs:{id:"_4-7-3-连接关闭容限、重试以及幂等性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-3-连接关闭容限、重试以及幂等性"}},[e._v("#")]),e._v(" 4.7.3 连接关闭容限、重试以及幂等性")]),e._v(" "),a("p",[e._v("即使在非错误情况下，连接也可以在任意时刻关闭。HTTP 应用程序要做好正确处理非预期关闭的准备。如果在客户端执行事务的过程中，传输连接关闭了，那么，除非事务处理会带来一些副作用，否则客户端就应该重新打开连接，并重试一次。对管道化连接来说，这种情况更加严重一些。客户端可以将大量请求放入队列中排队，但源端服务器可以关闭连接，这样就会留下大量未处理的请求，需要重新调度。")]),e._v(" "),a("p",[e._v("副作用是很重要的问题。如果在发送出一些请求数据之后，收到返回结果之前，连接关闭了，客户端就无法百分之百地确定服务器端实际激活了多少事务。有些事务， 比如 GET 一个静态的 HTML 页面，可以反复执行多次，也不会有什么变化。而其他一些事务，比如向一个在线书店 POST 一张订单，就不能重复执行，不然会有下 多张订单的危险。")]),e._v(" "),a("p",[e._v("如果一个事务，不管是执行一次还是很多次，得到的结果都相同，这个事务就是幂等的。实现者们可以认为 GET、HEAD、PUT、DELETE、TRACE 和 OPTIONS 方法都共享这一特性。客户端不应该以管道化方式传送非幂等请求(比如 POST)。 否则，传输连接的过早终止就会造成一些不确定的后果。要发送一条非幂等请求， 就需要等待来自前一条请求的响应状态。")]),e._v(" "),a("p",[e._v("尽管用户 Agent 代理可能会让操作员来选择是否对请求进行重试，但一定不能自动 重试非幂等方法或序列。比如，大多数浏览器都会在重载一个缓存的 POST 响应时 提供一个对话框，询问用户是否希望再次发起事务处理。")]),e._v(" "),a("h3",{attrs:{id:"_4-7-4-正常关闭连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-4-正常关闭连接"}},[e._v("#")]),e._v(" 4.7.4 正常关闭连接")]),e._v(" "),a("p",[e._v("TCP 连接的每一端都有一个输入队列和一个 输出队列，用于数据的读或写。\n应用程序可以关闭 TCP 输入和输出信道中的任意一个，或者将两者都关闭了。\nTCP 输入和输出信道都关闭了，被称作“完全关闭”。\n单独关闭输入或输出信道。被称为“半关闭”。\n"),a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e29dcfe4322141f7bd4795294f5f022e~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("p",[e._v("半关闭可以防止对等实体收到非预期的写入错误。")]),e._v(" "),a("p",[e._v("关闭连接的输出信道总是很安全的。连接另一端的对等实体会在从其缓冲区中读出所有数据之后收到一条通知，说明流结束了，这样它就知道你将连接关闭了。")]),e._v(" "),a("p",[e._v("关闭连接的输入信道比较危险，除非你知道另一端不打算再发送其他数据了。如果 另一端向你已关闭的输入信道发送数据，操作系统就会向另一端的机器回送一条 TCP“连接被对端重置”的报文，大部分操作系统都会将这种情况 作为很严重的错误来处理，删除对端还未读取的所有缓存数据。对管道化连接来说， 这是非常糟糕的事情。")]),e._v(" "),a("p",[e._v("比如你已经在一条持久连接上发送了 10 条管道式请求了，响应也已经收到了，正 在操作系统的缓冲区中存着呢(但应用程序还未将其读走)。现在，假设你发送了 第 11 条请求，但服务器认为你使用这条连接的时间已经够长了，决定将其关闭。那 么你的第 11 条请求就会被发送到一条已关闭的连接上去，并会向你回送一条重置信 息。这个重置信息会清空你的输入缓冲区。当你最终要去读取数据的时候，会得到一个连接被对端重置的错误，已缓存的未读 响应数据都丢失了，尽管其中的大部分都已经成功抵达你的机器了。")]),e._v(" "),a("p",[e._v("HTTP 规范建议，当客户端或服务器突然要关闭一条连接时，应该“正常地关闭传输连接”，但它并没有说明应该如何去做。")]),e._v(" "),a("p",[e._v("总之，实现正常关闭的应用程序首先应该关闭它们的输出信道，然后等待连接另一 端的对等实体关闭它的输出信道。当两端都告诉对方它们不会再发送任何数据(比 如关闭输出信道)之后，连接就会被完全关闭，而不会有重置的危险。")]),e._v(" "),a("p",[e._v("但不幸的是，无法确保对等实体会实现半关闭，或对其进行检查。因此，想要正常关闭连接的应用程序应该先半关闭其输出信道，然后周期性地检查其输入信道的状 态(查找数据，或流的末尾)。如果在一定的时间区间内对端没有关闭输入信道，应用程序可以强制关闭连接，以节省资源。")])])}),[],!1,null,null,null);t.default=v.exports}}]);