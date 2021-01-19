(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{534:function(t,a,e){"use strict";e.r(a);var _=e(4),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_6-1-web的中间实体"}},[t._v("6.1 Web的中间实体")]),e("ul",[e("li",[e("a",{attrs:{href:"#_6-1-1-私有和共享代理"}},[t._v("6.1.1 私有和共享代理")])]),e("li",[e("a",{attrs:{href:"#_6-1-2-代理与网关的对比"}},[t._v("6.1.2 代理与网关的对比")])])])]),e("li",[e("a",{attrs:{href:"#_6-2-为什么使用代理"}},[t._v("6.2 为什么使用代理")])]),e("li",[e("a",{attrs:{href:"#_6-3-代理会去往何处"}},[t._v("6.3 代理会去往何处")]),e("ul",[e("li",[e("a",{attrs:{href:"#_6-3-1-代理服务器的部署"}},[t._v("6.3.1 代理服务器的部署")])]),e("li",[e("a",{attrs:{href:"#_6-3-2-代理的层次结构"}},[t._v("6.3.2 代理的层次结构")])]),e("li",[e("a",{attrs:{href:"#_6-3-3-代理是如何获取流量的"}},[t._v("6.3.3 代理是如何获取流量的")])])])]),e("li",[e("a",{attrs:{href:"#_6-4-客户端的代理设置"}},[t._v("6.4 客户端的代理设置")])]),e("li",[e("a",{attrs:{href:"#_6-5-与代理请求有关的一些棘手问题"}},[t._v("6.5 与代理请求有关的一些棘手问题")]),e("ul",[e("li",[e("a",{attrs:{href:"#_6-5-1-代理uri与服务器uri的不同"}},[t._v("6.5.1 代理URI与服务器URI的不同")])]),e("li",[e("a",{attrs:{href:"#_6-5-2-与虚拟主机一样的问题"}},[t._v("6.5.2 与虚拟主机一样的问题")])]),e("li",[e("a",{attrs:{href:"#_6-5-3-拦截代理会收到部分uri"}},[t._v("6.5.3 拦截代理会收到部分URI")])])])])])]),e("p"),t._v(" "),e("p",[t._v("Web 代理(proxy)服务器是网络的中间实体。代理位于客户端和服务器之间，扮演 “中间人”的角色，在各端点之间来回传送 HTTP 报文。\n本章主要内容如下:")]),t._v(" "),e("ul",[e("li",[t._v("对 HTTP 代理进行解释，将其与 Web 网关进行对比，并说明如何部署代理;")]),t._v(" "),e("li",[t._v("给出一些代理所能提供的帮助;")]),t._v(" "),e("li",[t._v("说明在现实网络中是怎样部署代理以及如何将网络流量导向代理服务器;")]),t._v(" "),e("li",[t._v("说明如何配置浏览器来使用代理;")]),t._v(" "),e("li",[t._v("展示 HTTP 的代理请求，说明它们与服务器请求的区别，以及代理是如何微妙地 改变浏览器行为的;")]),t._v(" "),e("li",[t._v("解释如何通过 Via 首部和 TRACE 方法来记录报文传输路径上的代理服务器链;")]),t._v(" "),e("li",[t._v("描述基于代理的 HTTP 访问控制方法;")]),t._v(" "),e("li",[t._v("解释代理如何与客户端和服务器进行交互，每个客户端和服务器支持的特性和使用的版本都可能有所不同。")])]),t._v(" "),e("h2",{attrs:{id:"_6-1-web的中间实体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-web的中间实体"}},[t._v("#")]),t._v(" 6.1 Web的中间实体")]),t._v(" "),e("p",[t._v("Web 上的代理服务器是代表客户端完成事务处理的中间人。\nHTTP 的代理服务器既是 Web 服务器又是 Web 客户端。")]),t._v(" "),e("h3",{attrs:{id:"_6-1-1-私有和共享代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-私有和共享代理"}},[t._v("#")]),t._v(" 6.1.1 私有和共享代理")]),t._v(" "),e("p",[t._v("代理服务器可以是某个客户端专用的，也可以是很多客户端共享的。单个客户端专用的代理被称为私有代理。众多客户端共享的代理被称为公共代理。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("公共代理")])])]),t._v(" "),e("p",[t._v("大多数代理都是公共的共享代理。集中式代理的成本效率更高，更容易管理。某些代理应用，比如高速缓存代理服务器，会利用用户间共同的请求，这样的话，汇 入同一个代理服务器的用户越多，它就越有用。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("私有代理")])])]),t._v(" "),e("p",[t._v("专用的私有代理并不常见，但它们确实存在，尤其是直接运行在客户端计算机上 的时候。有些浏览器辅助产品，以及一些 ISP 服务，会在用户的 PC 上直接运行一些小型的代理，以便扩展浏览器特性，提高性能，或为免费 ISP 服务提供主机 广告。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c7b131ba7a4431ba42ccb7e5babb6df~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_6-1-2-代理与网关的对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-代理与网关的对比"}},[t._v("#")]),t._v(" 6.1.2 代理与网关的对比")]),t._v(" "),e("p",[t._v("严格来说，代理连接的是两个或多个使用相同协议的应用程序，而网关连接的则是 两个或多个使用不同协议的端点。网关扮演的是“协议转换器”的角色，即使客户 端和服务器使用的是不同的协议，客户端也可以通过它完成与服务器之间的事务 处理。")]),t._v(" "),e("ul",[e("li",[t._v("图a 中的中间设备是一个 HTTP 代理，因为代理与客户端和服务器之间使用 的都是 HTTP 协议。")]),t._v(" "),e("li",[t._v("图b 中的中间设备是一个 HTTP/POP 网关，因为它把 HTTP 的前台与 POP E-mail 的后端连接了起来。网关将 Web 事务转换成适当的 POP 事务，这样用户 就可以通过 HTTP 读取 E-mail 了。基于 Web 的 E-mail 程序，比如 Yahoo! 邮件 和 MSN Hotmail 都是 HTTP E-mail 网关。\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa4c4f2989594a00a55ca6b2247d5e19~tplv-k3u1fbpfcp-watermark.image",alt:""}})])]),t._v(" "),e("p",[t._v("商业化的代理服务器也会实现网关 的功能来支持 SSL 安全协议、SOCKS 防火墙、FTP 访问，以及基于 Web 的应用程序。")]),t._v(" "),e("h2",{attrs:{id:"_6-2-为什么使用代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-为什么使用代理"}},[t._v("#")]),t._v(" 6.2 为什么使用代理")]),t._v(" "),e("p",[t._v("代理服务器可以实现很多有用的功能。它们可以改善安全性，提高性能，节省费用。\n代理服务器可以看到并接触到所有流过的 HTTP 流量，所以代理可以监视 流量并对其进行修改，以实现很多有用的增值 Web 服务。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("儿童过滤器")])])]),t._v(" "),e("p",[t._v("小学在为教育站点提供无阻碍访问的同时，可以利用过滤器代理来阻止学生访问 成人内容。\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bed89c5d36ce459a84e1dbd2a2e09460~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("文档访问控制")])])]),t._v(" "),e("p",[t._v("可以用代理服务器在大量 Web 服务器和 Web 资源之间实现统一的访问控制策 略，创建审核跟踪机制。这在大型企业环境或其他分布式机构中是很有用的。\n在集中式代理服务器上可以对所有访问控制功能进行配置，而无需在众多由 不同组织管理、不同厂商制造、使用不同模式的 Web 服务器上进行经常性的访问控制升级。\n"),e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6fe680877ab47d4adc4376d089313cb~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("安全防火墙")])])]),t._v(" "),e("p",[t._v("网络安全工程师通常会使用代理服务器来提高安全性。\n代理服务器会在网络中的单一安全节点上限制哪些应用层协议的数据可以流入或流出一个组织。还可以提供用来消除病毒的 Web 和 E-mail 代理使用的那种挂钩程序，以便对流量进行详细的检查。\n"),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f3107c600ca40619b013307bae5aee2~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Web缓存")])])]),t._v(" "),e("p",[t._v("代理缓存维护了常用文档的本地副本，并将它们按需提供，以减少缓慢且昂贵的 因特网通信。\n在下图中，客户端 1 和客户端 2 会去访问附近 Web 缓存上的对象 A，而客户 端 3 和客户端 4 访问的则是原始服务器上的文档。\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8f7418d53eaa48f9af261b857bb8223f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("反向代理")])])]),t._v(" "),e("p",[t._v("代理可以假扮 Web 服务器。这些被称为替代物(surrogate)或反向代理(re- verse proxy)的代理接收发给 Web 服务器的真实请求，但与 Web 服务器不同的 是，它们可以发起与其他服务器的通信，以便按需定位所请求的内容。\n可以用这些反向代理来提高访问慢速 Web 服务器上公共内容时的性能。在这种 配置中，通常将这些反向代理称为服务器加速器(server accelerator)(参见图 6-7)。还可以将替代物与内容路由功能配合使用，以创建按需复制内容的分布式 网络。\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b28c9f193d48476abf7e2319e740fa86~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("内容路由器")])])]),t._v(" "),e("p",[t._v("代理服务器可以作为“内容路由器”使用，根据因特网流量状况以及内容类型将 请求导向特定的 Web 服务器。\n内容路由器也可以用来实现各种服务级的请求。比如，如果用户或内容提供者付 费要求提供更高的性能，内容路由器可以将请求转发到附近的复制缓存，或者如果用户申请了过滤服务，还可以通过过滤代理来转发 HTTP 请求。 可以用自适应内容路由代理来构建很多有趣的服务。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("转码器")])])]),t._v(" "),e("p",[t._v("代理服务器在将内容发送给客户端之前，可以修改内容的主体格式。在这些数据表示法之间进行的透明转换被称为转码(transcoding)。\n转码代理可以在传输 GIF 图片时，将其转换成 JPEG 图片，以减小尺寸。也可以 对图片进行压缩，或降低颜色的色彩饱和度以便在电视上观看。同样，可以对文 本文件进行压缩，并为能够使用因特网的呼机和智能手机生成小型的文本摘要 Web 页面。代理甚至可以在传输文档的过程中将其转换成外语。\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c43a783ce3844c7ac939dbd7c5e1d1d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("p",[t._v("显示了一个转码代理，这个代理可以将英语文本转换成西班牙语文本，将HTML 页面重新格式化为较简单的文本，以便显示在手机的小屏幕上\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a52a42462ae423caa507009aae2639c~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("匿名者")])])]),t._v(" "),e("p",[t._v("代理会主动从 HTTP 报文中删除身份特性(比如客户端 IP 地址、From 首部、Referer 首部、cookie、URI 的会话 ID)，从而提供高度的私密性和匿名性。")]),t._v(" "),e("p",[t._v("匿名代理会对用户报文进行下列修改以增加私密性。")]),t._v(" "),e("ul",[e("li",[t._v("从 User-Agent 首部删除用户的计算机与 OS 类型。")]),t._v(" "),e("li",[t._v("删除 From 首部以保护用户的 E-mail 地址。")]),t._v(" "),e("li",[t._v("删除 Referer 首部来掩盖用户访问过的其他站点。")]),t._v(" "),e("li",[t._v("删除 Cookie 首部以剔除概要信息和身份的数据。\n"),e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f61fe6f6d5084720bc488ca328718751~tplv-k3u1fbpfcp-watermark.image",alt:""}})])]),t._v(" "),e("h2",{attrs:{id:"_6-3-代理会去往何处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-代理会去往何处"}},[t._v("#")]),t._v(" 6.3 代理会去往何处")]),t._v(" "),e("h3",{attrs:{id:"_6-3-1-代理服务器的部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-1-代理服务器的部署"}},[t._v("#")]),t._v(" 6.3.1 代理服务器的部署")]),t._v(" "),e("p",[t._v("可以根据其目标用途，将代理放在任意位置。以下给出了部署代理服务器的几种方式。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("出口代理")])])]),t._v(" "),e("p",[t._v("可以将代理固定在本地网络的出口点，以便控制本地网络与大型因特网之间的流 量。可以在公司网络中使用出口代理，提供针对公司外部恶意黑客的防火墙保护，或降低带宽费用，提高因特网流量的性能。小学可能会使用过 滤出口代理来防止早熟的学生浏览不恰当的内容。\n"),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/303c9a5fb5b64031bd34c83aeb16988a~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("访问(入口)代理")])])]),t._v(" "),e("p",[t._v("代理常被放在 ISP 访问点上，用以处理来自客户的聚合请求。ISP 使用缓存代理 来存储常用文档的副本，以提高用户(尤其是高速连接用户)的下载速度，降低 因特网带宽耗费。\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/84fea41374014ca08692555c15e2e0b2~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("反向代理")])])]),t._v(" "),e("p",[t._v("代理通常会被部署在网络边缘，在 Web 服务器之前，作为替代物(也常被称为 反向代理）使用，在那里它们可以处理所有传送给 Web 服务器 的请求，并只在必要时向 Web 服务器请求资源。替代物可以提高 Web 服务器的 安全特性，或者将快速的 Web 服务器缓存放在较慢的服务器之前，以提高性能。 反向代理通常会直接冒用 Web 服务器的名字和 IP 地址，这样所有的请求就会被 发送给代理而不是服务器了。\n"),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77b7a2658dda4e56ab723c6ccba2fa31~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("网络交换代理")])])]),t._v(" "),e("p",[t._v("可以将具有足够处理能力的代理放在网络之间的因特网对等交换点上，通过缓存 来减轻因特网节点的拥塞，并对流量进行监视。\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b454969c359455ea1df2507771d511d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_6-3-2-代理的层次结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-代理的层次结构"}},[t._v("#")]),t._v(" 6.3.2 代理的层次结构")]),t._v(" "),e("p",[t._v("可以通过代理层次结构(proxy hierarchy)将代理级联起来。在代理的层次结构中，会将报文从一个代理传给另一个代理，直到最终抵达原始服务器为止(然后通过代理传回给客户端)。\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5aca638658e4cf98b1ce35d014e4000~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("p",[t._v("Proxy 层次结构中的代理服务器被赋予了父(parent)和子(child)的关系。下一个入口(inbound)代理(靠近服务器)被称为父代理，下一个出口(outbound)代理 (靠近客户端)被称为子代理。上图，代理 1 是代理 2 的子代理。同样，代理 2 是代理 3 的子代理，代理 3 是代理 2 的父代理。")]),t._v(" "),e("p",[e("strong",[t._v("代理层次结构的内容路由")])]),t._v(" "),e("p",[t._v("上图中的代理层次结构是静态的——代理 1 总是会将报文转发给代理 2，代理 2 总是会将报文转发给代理 3。但是，层次不一定非得是静态的。代理服务器可以根据众多因素，将报文转发给一个不断变化的代理服务器和原始服务器集。")]),t._v(" "),e("p",[t._v("访问代理会根据不同的情况将报文转发给父代理或原始服务器。\n"),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c68e3bcbf7c54a31ab48e767e36afa87~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("如果所请求的对象属于一个付费使用内容分发服务的 Web 服务器，代理就会将 请求发送给附近的一个缓存服务器，这个服务器会返回已缓存对象，或者如果它 那儿没有的话，它会去取回内容。")]),t._v(" "),e("li",[t._v("如果请求的是特定类型的图片，访问代理会将请求转发给一个特定的压缩代理， 这个代理会去获取图片，然后对其进行压缩，这样通过到客户端的慢速 Modem 下载时，速度会更快一些。")])]),t._v(" "),e("p",[t._v("还有几个动态选择父代理的例子。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("负载均衡")])])]),t._v(" "),e("p",[t._v("子代理可能会根据当前父代理上的工作负载级别来决定如何选择一个父代理，以 均衡负载。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("地理位置附近的路由")])])]),t._v(" "),e("p",[t._v("子代理可能会选择负责原始服务器所在物理区域的父代理。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("协议 / 类型路由")])])]),t._v(" "),e("p",[t._v("子代理可能会根据 URI 将报文转发到不同的父代理和原始服务器上去。某些特 定类型的 URI 可能要通过一些特殊的代理服务器转发请求，以便进行特殊的协 议处理。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("基于订购的路由")])])]),t._v(" "),e("p",[t._v("如果发布者为高性能服务额外付费了，它们的 URI 就会被转发到大型缓存或压 缩引擎上去，以提高性能。")]),t._v(" "),e("h3",{attrs:{id:"_6-3-3-代理是如何获取流量的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-3-代理是如何获取流量的"}},[t._v("#")]),t._v(" 6.3.3 代理是如何获取流量的")]),t._v(" "),e("p",[t._v("客户端通常会直接与 Web 服务器进行通信，所以我们要解释清楚 HTTP 流量怎样才能首先流向代理。有四种常见方式可以使客户端流量流向代理。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("修改客户端")])])]),t._v(" "),e("p",[t._v("很多 Web 客户端，都支持手工和自动的代理配置。 如果将客户端配置为使用代理服务器，客户端就会将 HTTP 请求有意地直接发送给代理，而不是原始服务器。（下图a）")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("修改网络")])])]),t._v(" "),e("p",[t._v("网络基础设施可以通过若干种技术手段，在客户端不知道，或没有参与的情况 下，拦截网络流量并将其导入代理。这种拦截通常都依赖于监视 HTTP 流量的交 换设备及路由设备，在客户端毫不知情的情况下，对其进行拦截，并将流量导入 一个代理。这种代理被称为拦截(intercepting)代理。(下图b)")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("修改 DNS 的命名空间")])])]),t._v(" "),e("p",[t._v("放在 Web 服务器之前的代理服务器——替代物，会直接假扮 Web 服务器的名 字和 IP 地址，这样，所有的请求就会发送给这些替代物，而不是服务器了。要实现这一点，可以手工编辑 DNS 名称列表，或者用特殊的动态 DNS 服务器根据需要来确定适当的代理或服务器。有时在安装过程中，真实服 务器的 IP 地址和名称被修改了，替代物得到的会是之前的地址和名称。(下图c)")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("修改 Web 服务器")])])]),t._v(" "),e("p",[t._v("也可以将某些 Web 服务器配置为向客户端发送一条 HTTP 重定向命令(响应码 305)，将客户端请求重定向到一个代理上去。收到重定向命令后，客户端会与代 理进行通信(下图d)")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78786e3ea0424f15b21f328586a92e83~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_6-4-客户端的代理设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-客户端的代理设置"}},[t._v("#")]),t._v(" 6.4 客户端的代理设置")]),t._v(" "),e("p",[t._v("内容主要涉及浏览器操作，不多解释")]),t._v(" "),e("h2",{attrs:{id:"_6-5-与代理请求有关的一些棘手问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-与代理请求有关的一些棘手问题"}},[t._v("#")]),t._v(" 6.5 与代理请求有关的一些棘手问题")]),t._v(" "),e("h3",{attrs:{id:"_6-5-1-代理uri与服务器uri的不同"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-1-代理uri与服务器uri的不同"}},[t._v("#")]),t._v(" 6.5.1 代理URI与服务器URI的不同")]),t._v(" "),e("p",[t._v("除了一点之外，Web 服务器报文和 Web 代理报文的语法是一样的。客户端向服务器而不是代理发送请求时，HTTP 请求报文中的 URI 会有所不同。")]),t._v(" "),e("p",[t._v("客户端向 Web 服务器发送请求时，请求行中只包含部分 URI(没有方案、主机或端 口)，如下例所示:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET /index.html HTTP/1.0 \nUser-Agent: SuperBrowser v1.3\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("但当客户端向代理发送请求时，请求行中则包含完整的 URI。例如:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("GET http://www.marys-antiques.com/index.html HTTP/1.0\nUser-Agent: SuperBrowser v1.3\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("为什么会有两种不同的请求格式，一种用于代理，另一种用于服务器呢?在原始的 HTTP 设计中，客户端会直接与单个服务器进行对话。不存在虚拟主机，也没有为 代理制定什么规则。单个的服务器都知道自己的主机名和端口，所以，为了避免发 送冗余信息，客户端只需发送部分 URI 即可，无需发送方案和主机(以及端口)。")]),t._v(" "),e("p",[t._v("代理出现之后，使用部分 URI 就有问题了。代理需要知道目标服务器的名称，这样它们才能建立自己与服务器的连接。基于代理的网关要知道 URI 的方案才能连接到 FTP 资源和其他方案上去。HTTP/1.0 要求代理请求发送完整的 URI，解决了这个问 题，但它为服务器请求保留部分 URI 的形式(已经有相当多的服务器都改为支持完\n整 URI 了)。")]),t._v(" "),e("p",[t._v("因此，我们要将部分 URI 发送给服务器，将完整 URI 发送给代理。在显式地配置客户端代理设置的情况下，客户端就知道要发布哪种类型的请求了。")]),t._v(" "),e("ul",[e("li",[t._v("没有设置客户端使用代理时，它会发送部分 URI(参见下图a)。")]),t._v(" "),e("li",[t._v("设置客户端使用代理时，它会发送完整 URI(参见下图b)。\n"),e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/714c38c13628476297f6b34843bd259f~tplv-k3u1fbpfcp-watermark.image",alt:""}})])]),t._v(" "),e("h3",{attrs:{id:"_6-5-2-与虚拟主机一样的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-2-与虚拟主机一样的问题"}},[t._v("#")]),t._v(" 6.5.2 与虚拟主机一样的问题")]),t._v(" "),e("p",[t._v("代理“缺少方案 / 主机 / 端口”的问题与虚拟主机 Web 服务器面临的问题相同。虚 拟主机 Web 服务器会在很多 Web 站点间共享同一个物理 Web 服务器。包含部分 URI(比如 /index.html)的请求到达时，虚拟主机 Web 服务器需要知道目的 Web 站 点的主机名（后面章节介绍）。")]),t._v(" "),e("p",[t._v("尽管它们出现的问题相似，但解决方法却有所不同:")]),t._v(" "),e("ul",[e("li",[t._v("显式的代理要求在请求报文中使用完整 URI 来解决这个问题;")]),t._v(" "),e("li",[t._v("虚拟主机 Web 服务器要求使用 Host 首部来承载主机和端口信息。")])]),t._v(" "),e("h3",{attrs:{id:"_6-5-3-拦截代理会收到部分uri"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-3-拦截代理会收到部分uri"}},[t._v("#")]),t._v(" 6.5.3 拦截代理会收到部分URI")]),t._v(" "),e("p",[t._v("只要客户端正确地实现了 HTTP，它们就会在请求中包含完整的 URI，发送给经过 显式配置的代理。这样解决了部分问题，但还有一个问题:客户端并不总是知道它 是在和代理进行对话，因为有些代理对客户端可能是不可见的。即使没有将客户端 配置为使用代理，客户端的流量也可能会经过替代物或拦截代理。在这两种情况下， 客户端都会认为它在与 Web 服务器进行对话，不会发送完整的 URI。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("如前所述，反向代理是一个用来取代原始服务器的代理服务器，它通常会通过假 扮服务器的主机名或 IP 地址来做到这一点。它会收到 Web 服务器请求，可能会 向真正的服务器提供缓存的响应或者代理请求。客户端无法区分反向代理和 Web 服务器，因此它会发送部分 URI(参见下图c)。")])]),t._v(" "),e("li",[e("p",[t._v("拦截代理是网络流量中的代理服务器，它会拦截从客户端发往服务器的请求，并 提供一个缓存响应，或对其进行转发。由于拦截代理拦截了从客户端到服务器的 流量，所以它会收到发送给 Web 服务器的部分 URI(参见下图d)。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d67447cc932749ff99e695a5d6cce42e~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])}),[],!1,null,null,null);a.default=v.exports}}]);