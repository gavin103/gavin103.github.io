(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{552:function(t,a,_){"use strict";_.r(a);var e=_(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#_12-1-认证"}},[t._v("12.1 认证")]),_("ul",[_("li",[_("a",{attrs:{href:"#_12-1-1-http的质询-响应认证框架"}},[t._v("12.1.1 HTTP的质询/响应认证框架")])]),_("li",[_("a",{attrs:{href:"#_12-1-2-认证协议与首部"}},[t._v("12.1.2 认证协议与首部")])]),_("li",[_("a",{attrs:{href:"#_12-1-3-安全域"}},[t._v("12.1.3 安全域")])])])]),_("li",[_("a",{attrs:{href:"#_12-2-基本认证"}},[t._v("\b12.2 基本认证")])]),_("li",[_("a",{attrs:{href:"#_12-3-基本认证的安全缺陷"}},[t._v("12.3 基本认证的安全缺陷")])])])]),_("p"),t._v(" "),_("p",[_("strong",[t._v("认证")]),t._v("：服务器需要通过某种方式来了解用户身份。一旦服务器知道了用户身份，就可以判 定用户可以访问的事务和资源了。")]),t._v(" "),_("h2",{attrs:{id:"_12-1-认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-认证"}},[t._v("#")]),t._v(" 12.1 认证")]),t._v(" "),_("h3",{attrs:{id:"_12-1-1-http的质询-响应认证框架"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-1-http的质询-响应认证框架"}},[t._v("#")]),t._v(" 12.1.1 HTTP的质询/响应认证框架")]),t._v(" "),_("p",[t._v("HTTP 提供了一个原生的质询 / 响应(challenge/response)框架，简化了对用户的认证过程。\n"),_("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1a14522df1a4771ab1d6e5d7fda8452~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_12-1-2-认证协议与首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-2-认证协议与首部"}},[t._v("#")]),t._v(" 12.1.2 认证协议与首部")]),t._v(" "),_("p",[t._v("HTTP 定义了两个官方的认证协议:基本认证和摘要认证。今后人们可以随意设计 一些使用 HTTP 质询 / 响应框架的新协议。\n"),_("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9cd015bf9b34d3798d1aa573dc1c926~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5edf57a514164b28975f3f0781100dc9~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_12-1-3-安全域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-1-3-安全域"}},[t._v("#")]),t._v(" 12.1.3 安全域")]),t._v(" "),_("p",[t._v("HTTP 是怎样允许服务器为不同的资源使用不同的访问权限的?")]),t._v(" "),_("p",[t._v("WWW- Authenticate 质询中包含了一个 realm 指令。Web 服务器会将受保护的文档组织 成一个安全域(security realm)。每个安全域都可以有不同的授权用户集。")]),t._v(" "),_("p",[t._v("比如，假设 Web 服务器建立了两个安全域:一个用于公司的财务信息，另一个用 于个人家庭文档(参见图 12-3)。不同的用户对各个安全域的访问权限是不同的。 公司的 CEO 应该能够访问销售额预测资料，但不应该允许他访问员工私人照片\n"),_("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/17052319380a4b7086a983ccbe650e4f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"_12-2-基本认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-2-基本认证"}},[t._v("#")]),t._v(" \b12.2 基本认证")]),t._v(" "),_("p",[t._v("几乎每个主要的客户端和服务器都实现了 基本认证机制。")]),t._v(" "),_("p",[t._v("在基本认证中，Web 服务器可以拒绝一个事务，质询客户端，请用户提供有效的用 户名和密码。服务器会返回 401 状态码，而不是 200 状态码来初始化认证质询，并用 WWW-Authenticate 响应首部指定要访问的安全域。浏览器收到质询时，会打开 一个对话框，请求用户输入这个域的用户名和密码。然后将用户名和密码稍加扰码， 再用 Authorization 请求首部回送给服务器。")]),t._v(" "),_("p",[t._v("HTTP 基本认证将(由冒号分隔的)用户名和密码打包在一起，并用 Base-64 编码 方式对其进行编码。\n"),_("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f1ca324752b403f9610abb1250fcbe3~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("代理认证")])]),t._v(" "),_("p",[t._v("中间的代理服务器也可以实现认证功能。有些组织会在用户访问服务器、LAN 或无 线网络之前，用代理服务器对其进行认证。可以在代理服务器上对访问策略进行集中 管理，因此，通过代理服务器提供对某组织内部资源的统一访问控制是一种很便捷的方式。这个过程的第一步就是通过代理认证(proxy authentication)来识别身份。")]),t._v(" "),_("p",[t._v("代理认证的步骤与 Web 服务器身份验证的步骤相同。但首部和状态码都有所不同。 下表列出了 Web 服务器和代理在认证中使用的状态码和首部的差异。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Web服务器")]),t._v(" "),_("th",[t._v("代理服务器")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Unauthorized status code: 401")]),t._v(" "),_("td",[t._v("Unauthorized status code: 407")])]),t._v(" "),_("tr",[_("td",[t._v("WWW-Authenticate")]),t._v(" "),_("td",[t._v("Proxy-Authenticate")])]),t._v(" "),_("tr",[_("td",[t._v("Authorization")]),t._v(" "),_("td",[t._v("Proxy-Authorization")])]),t._v(" "),_("tr",[_("td",[t._v("Authentication-Info")]),t._v(" "),_("td",[t._v("Proxy-Authentication-Info")])])])]),t._v(" "),_("h2",{attrs:{id:"_12-3-基本认证的安全缺陷"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-3-基本认证的安全缺陷"}},[t._v("#")]),t._v(" 12.3 基本认证的安全缺陷")]),t._v(" "),_("p",[t._v("基本认证简单便捷，但并不安全。只能用它来防止非恶意用户无意间进行的访问，或将其与 SSL 这样的加密技术配合使用。\n基本认证存在下列安全缺陷。")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("基本认证会通过网络发送用户名和密码，这些用户名和密码都是以一种很容易 解码的形式表示的。实际上，密码是以明文形式传输的，Base-64 编码的用户名和密码可以很轻易地 通过反向编码过程进行解码。\n有动机的第三方用 户有可能会去拦截基本认证发送的用户名和密码，就要通过 SSL 加密信道发送所有的 HTTP 事务，或者使用更安全的认证协议，比如摘要认证")])]),t._v(" "),_("li",[_("p",[t._v("即使密码是以更难解码的方式加密的，第三方用户仍然可以捕获被修改过的用户 名和密码，并将修改过的用户名和密码一次一次地重放给原始服务器，以获得对 服务器的访问权。没有什么措施可用来防止这些重放攻击。")])]),t._v(" "),_("li",[_("p",[t._v("即使将基本认证用于一些不太重要的应用程序，比如公司内部网络的访问控制或 个性化内容的访问，一些不良习惯也会让它变得很危险。")])]),t._v(" "),_("li",[_("p",[t._v("基本认证没有提供任何针对代理和作为中间人的中间节点的防护措施，它们没有 修改认证首部，但却修改了报文的其余部分，这样就严重地改变了事务的本质。")])]),t._v(" "),_("li",[_("p",[t._v("假冒服务器很容易骗过基本认证。如果在用户实际连接到一台恶意服务器或网关 的时候，能够让用户相信他连接的是一个受基本认证保护的合法主机，攻击者就 可以请求用户输入密码，将其存储起来以备未来使用，然后捏造一条错误信息传 送给用户。")])])]),t._v(" "),_("p",[t._v("将基本认证与加密数据传输(比如 SSL)配合使用，向恶意用户隐藏用户名和密码， 会使基本认证变得更加安全。这是一种常用的技巧。")])])}),[],!1,null,null,null);a.default=r.exports}}]);