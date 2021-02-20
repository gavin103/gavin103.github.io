(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{546:function(t,a,_){"use strict";_.r(a);var r=_(4),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#_13-1-摘要认证的改进"}},[t._v("13.1 摘要认证的改进")]),_("ul",[_("li",[_("a",{attrs:{href:"#_13-1-1-用摘要保护密码"}},[t._v("13.1.1 用摘要保护密码")])]),_("li",[_("a",{attrs:{href:"#_13-1-2-单向摘要"}},[t._v("13.1.2 单向摘要")])])])])])]),_("p"),t._v(" "),_("h2",{attrs:{id:"_13-1-摘要认证的改进"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-摘要认证的改进"}},[t._v("#")]),t._v(" 13.1 摘要认证的改进")]),t._v(" "),_("p",[t._v("摘要认证是另一种 HTTP 认证协议，它试图修复基本认证协议的严重缺陷。具体来说，摘要认证进行了如下改进。")]),t._v(" "),_("ul",[_("li",[t._v("永远不会以明文方式在网络上发送密码。")]),t._v(" "),_("li",[t._v("可以防止恶意用户捕获并重放认证的握手过程。")]),t._v(" "),_("li",[t._v("可以有选择地防止对报文内容的篡改。")]),t._v(" "),_("li",[t._v("防范其他几种常见的攻击方式。")])]),t._v(" "),_("p",[t._v("摘要认证并不是最安全的协议。\n摘要认证并不能满足安全 HTTP 事务的很多需求。\n对这些需求来说，使用传输层安全(Transport Layer Security，TLS)和安全 HTTP(Secure HTTP，HTTPS)协议更为合适一些。")]),t._v(" "),_("h3",{attrs:{id:"_13-1-1-用摘要保护密码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-1-用摘要保护密码"}},[t._v("#")]),t._v(" 13.1.1 用摘要保护密码")]),t._v(" "),_("p",[t._v("摘要认证遵循的箴言是“绝不通过网络发送密码”。\n客户端不会发送密码，而是会发 送一个“指纹”或密码的“摘要”，这是密码的不可逆扰码。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3602b2b229864c9286f26737a7dd7fd4~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),_("ul",[_("li",[t._v("在图 13-1a 中，客户端请求了某个受保护文档。")]),t._v(" "),_("li",[t._v("在图 13-1b 中，在客户端能够证明其知道密码从而确认其身份之前，服务器拒绝提供文档。服务器向客户端发起质询，询问用户名和摘要形式的密码。")]),t._v(" "),_("li",[t._v("在图 13-1c 中，客户端传递了密码的摘要，证明它是知道密码的。服务器知道所 有用户的密码，因此可以将客户提供的摘要与服务器自己计算得到的摘要进行 比较，以验证用户是否知道密码。另一方在不知道密码的情况下，很难伪造出正确的摘要。")]),t._v(" "),_("li",[t._v("在图13-1d中，服务器将客户端提供的摘要与服务器内部计算出的摘要进行对比。如果匹配，就说明客户端知道密码(或者很幸运地猜中了!)。可以设置摘要函数，使其产生很多数字，让人不可能幸运地猜中摘要。服务器进行了匹配验证之 后，会将文档提供给客户端——整个过程都没有在网络上发送密码。")])]),t._v(" "),_("h3",{attrs:{id:"_13-1-2-单向摘要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-1-2-单向摘要"}},[t._v("#")]),t._v(" 13.1.2 单向摘要")])])}),[],!1,null,null,null);a.default=s.exports}}]);