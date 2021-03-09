(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{554:function(t,_,a){"use strict";a.r(_);var v=a(4),r=Object(v.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_13-1-摘要认证的改进"}},[t._v("13.1 摘要认证的改进")]),a("ul",[a("li",[a("a",{attrs:{href:"#_13-1-1-用摘要保护密码"}},[t._v("13.1.1 用摘要保护密码")])]),a("li",[a("a",{attrs:{href:"#_13-1-2-单向摘要"}},[t._v("13.1.2 单向摘要")])]),a("li",[a("a",{attrs:{href:"#_13-1-3-用随机数防止重放攻击"}},[t._v("13.1.3 用随机数防止重放攻击")])]),a("li",[a("a",{attrs:{href:"#_13-1-4-摘要认证的握手机制"}},[t._v("13.1.4 摘要认证的握手机制")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_13-1-摘要认证的改进"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-摘要认证的改进"}},[t._v("#")]),t._v(" 13.1 摘要认证的改进")]),t._v(" "),a("p",[t._v("摘要认证是另一种 HTTP 认证协议，它试图修复基本认证协议的严重缺陷。具体来说，摘要认证进行了如下改进。")]),t._v(" "),a("ul",[a("li",[t._v("永远不会以明文方式在网络上发送密码。")]),t._v(" "),a("li",[t._v("可以防止恶意用户捕获并重放认证的握手过程。")]),t._v(" "),a("li",[t._v("可以有选择地防止对报文内容的篡改。")]),t._v(" "),a("li",[t._v("防范其他几种常见的攻击方式。")])]),t._v(" "),a("p",[t._v("摘要认证并不是最安全的协议。\n摘要认证并不能满足安全 HTTP 事务的很多需求。\n对这些需求来说，使用传输层安全(Transport Layer Security，TLS)和安全 HTTP(Secure HTTP，HTTPS)协议更为合适一些。")]),t._v(" "),a("h3",{attrs:{id:"_13-1-1-用摘要保护密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-1-用摘要保护密码"}},[t._v("#")]),t._v(" 13.1.1 用摘要保护密码")]),t._v(" "),a("p",[t._v("摘要认证遵循的箴言是“绝不通过网络发送密码”。\n客户端不会发送密码，而是会发 送一个“指纹”或密码的“摘要”，这是密码的不可逆扰码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3602b2b229864c9286f26737a7dd7fd4~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("在图 13-1a 中，客户端请求了某个受保护文档。")]),t._v(" "),a("li",[t._v("在图 13-1b 中，在客户端能够证明其知道密码从而确认其身份之前，服务器拒绝提供文档。服务器向客户端发起质询，询问用户名和摘要形式的密码。")]),t._v(" "),a("li",[t._v("在图 13-1c 中，客户端传递了密码的摘要，证明它是知道密码的。服务器知道所 有用户的密码，因此可以将客户提供的摘要与服务器自己计算得到的摘要进行 比较，以验证用户是否知道密码。另一方在不知道密码的情况下，很难伪造出正确的摘要。")]),t._v(" "),a("li",[t._v("在图13-1d中，服务器将客户端提供的摘要与服务器内部计算出的摘要进行对比。如果匹配，就说明客户端知道密码(或者很幸运地猜中了!)。可以设置摘要函数，使其产生很多数字，让人不可能幸运地猜中摘要。服务器进行了匹配验证之 后，会将文档提供给客户端——整个过程都没有在网络上发送密码。")])]),t._v(" "),a("h3",{attrs:{id:"_13-1-2-单向摘要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-2-单向摘要"}},[t._v("#")]),t._v(" 13.1.2 单向摘要")]),t._v(" "),a("p",[t._v("常见的摘要函数 MD5，会将"),a("strong",[t._v("任意长度")]),t._v("的字节序列转换为 一个 128 位的摘要。")]),t._v(" "),a("p",[t._v("对这些摘要来说，最重要的是如果不知道密码的话，要想正确地猜出发送给服务器 的摘要将是非常困难的。同样，如果有摘要，想要判断出它是由无数输入值中的哪 一个产生的，也是非常困难的。")]),t._v(" "),a("h3",{attrs:{id:"_13-1-3-用随机数防止重放攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-3-用随机数防止重放攻击"}},[t._v("#")]),t._v(" 13.1.3 用随机数防止重放攻击")]),t._v(" "),a("p",[t._v("使用单向摘要就无需以明文形式发送密码了。")]),t._v(" "),a("p",[t._v("为防止重放攻击的发生，服务器可以向客户端发送一个称为随机数(nonce)的特殊令牌，这个数会经常发生变化(可能是每毫秒，或者是每次认证都变化)。客户端在计算摘要之前要先将这个随机数令牌附加到密码上去。")]),t._v(" "),a("p",[t._v("随机数是在 WWW-Authenticate 质询中从服务器传送给客户 端的。")]),t._v(" "),a("h3",{attrs:{id:"_13-1-4-摘要认证的握手机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-4-摘要认证的握手机制"}},[t._v("#")]),t._v(" 13.1.4 摘要认证的握手机制")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99e65f75731b4479a1056f9fae82c705~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("在第(1)步中，服务器会计算出一个随机数。在第(2)步中，服务器将这个随 机数放在 WWW-Authenticate 质询报文中，与服务器所支持的算法列表一同发 往客户端。")]),t._v(" "),a("li",[t._v("在第(3)步中，客户端选择一个算法，计算出密码和其他数据的摘要。在第(4) 步中，将摘要放在一条 Authorization 报文中发回服务器。如果客户端要对服 务器进行认证，可以发送客户端随机数。")]),t._v(" "),a("li",[t._v("在第(5)步中，服务器接收摘要、选中的算法以及支撑数据，计算出与客户端 相同的摘要。然后服务器将本地生成的摘要与网络传送过来的摘要进行比较，验证其是否匹配。如果客户端反过来用客户端随机数对服务器进行质询，就会创建 客户端摘要。服务器可以预先将下一个随机数计算出来，提前将其传递给客户端， 这样下一次客户端就可以预先发送正确的摘要了。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);