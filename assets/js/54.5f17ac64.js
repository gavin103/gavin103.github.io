(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{533:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-报文流"}},[t._v("3.1 报文流")])]),s("li",[s("a",{attrs:{href:"#_3-2-报文的组成"}},[t._v("3.2 报文的组成")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-2-1-报文的语法"}},[t._v("3.2.1 报文的语法")])]),s("li",[s("a",{attrs:{href:"#_3-2-2-起始行"}},[t._v("3.2.2 起始行")])]),s("li",[s("a",{attrs:{href:"#_3-2-3-首部"}},[t._v("3.2.3 首部")])]),s("li",[s("a",{attrs:{href:"#_3-2-4-实体的主体部分"}},[t._v("3.2.4 实体的主体部分")])])])]),s("li",[s("a",{attrs:{href:"#_3-3-方法"}},[t._v("3.3 方法")])]),s("li",[s("a",{attrs:{href:"#_3-4-状态码"}},[t._v("3.4 状态码")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-4-1-100-199-信息性状态码"}},[t._v("3.4.1 100~199——信息性状态码")])]),s("li",[s("a",{attrs:{href:"#_200-299-成功状态码"}},[t._v("200~299——成功状态码")])]),s("li",[s("a",{attrs:{href:"#_300-399-重定向状态码"}},[t._v("300~399——重定向状态码")])]),s("li",[s("a",{attrs:{href:"#_3-4-4-400-499-客户端错误状态码"}},[t._v("3.4.4 400~499——客户端错误状态码")])]),s("li",[s("a",{attrs:{href:"#_3-4-5-500-599-服务器错误状态码"}},[t._v("3.4.5 500~599——服务器错误状态码")])])])]),s("li",[s("a",{attrs:{href:"#_3-5-首部"}},[t._v("3.5 首部")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-5-1-通用首部"}},[t._v("3.5.1 通用首部")])]),s("li",[s("a",{attrs:{href:"#_3-5-2-请求首部"}},[t._v("3.5.2 请求首部")])]),s("li",[s("a",{attrs:{href:"#_3-5-3-响应首部"}},[t._v("3.5.3 响应首部")])]),s("li",[s("a",{attrs:{href:"#_3-5-4-实体首部"}},[t._v("3.5.4 实体首部")])])])])])]),s("p"),t._v(" "),s("p",[t._v("本章内容主要帮助大家理解HTTP报文，具体来说，你会理解 下列概念:")]),t._v(" "),s("ul",[s("li",[t._v("报文是如何流动的;")]),t._v(" "),s("li",[t._v("HTTP报文的三个组成部分(起始行、首部和实体的主体部分);")]),t._v(" "),s("li",[t._v("请求和响应报文之间的区别;")]),t._v(" "),s("li",[t._v("请求报文支持的各种功能(方法);")]),t._v(" "),s("li",[t._v("和响应报文一起返回的各种状态码;")]),t._v(" "),s("li",[t._v("各种各样的 HTTP 首部都是用来做什么的。")])]),t._v(" "),s("h2",{attrs:{id:"_3-1-报文流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-报文流"}},[t._v("#")]),t._v(" 3.1 报文流")]),t._v(" "),s("p",[t._v("HTTP 使用术语流入(inbound)和流出(outbound)来描述事务处理(transaction)的方向。\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5ea52b4eb7a14c4897e3200293e1f0b3~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_3-2-报文的组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-报文的组成"}},[t._v("#")]),t._v(" 3.2 报文的组成")]),t._v(" "),s("p",[t._v("HTTP 报文是简单的格式化数据块。看一下图给出的例子。每条报文都包含一 条来自客户端的请求，或者一条来自服务器的响应。它们由三个部分组成:对报文 进行描述的起始行(start line)、包含属性的首部(header)块，以及可选的、包含 数据的主体(body)部分。\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54b3abfb0c9d4516b9d2869799f69820~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[t._v("实体的主体或报文的主体(或者就称为主体)是一个可选的数据块。主体中可以包含文本或二进制数据，也可以为空。\n首部给出了一些与主体有关的信息。Content-Type 行说明了主体是什么。Content-Length 行说明了主体有多大，上图中只有19个字节。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-1-报文的语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-报文的语法"}},[t._v("#")]),t._v(" 3.2.1 报文的语法")]),t._v(" "),s("p",[t._v("HTTP 报文都可以分为两类:请求报文(request message)和响应报文 (response message)。\n请求报文会向 Web 服务器请求一个动作。响应报文会将请求 的结果返回给客户端。请求和响应报文的基本报文结构相同。\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7c326e7da3e44b7898e88a28a9dbb76~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这是请求报文的格式:  --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("request-URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("entity-body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这是响应报文的格式(注意，只有起始行的语法有所不同) --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("reason-phrase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("headers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("entity-body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("下面是对各部分的简要描述。")]),t._v(" "),s("ul",[s("li",[t._v("方法(method)")])]),t._v(" "),s("blockquote",[s("p",[t._v("客户端希望服务器对资源执行的动作。是一个单独的词，比如 GET、HEAD 或 POST。")])]),t._v(" "),s("ul",[s("li",[t._v("请求 URL(request-URL)")])]),t._v(" "),s("blockquote",[s("p",[t._v("命名了所请求资源，或者 URL 路径组件的完整 URL。如果直接与服务器进行对话，只要 URL 的路径组件是资源的绝对路径，通常就不会有什么问题——服务器可以假定自己是 URL 的主机 / 端口。")])]),t._v(" "),s("ul",[s("li",[t._v("版本(version)")])]),t._v(" "),s("blockquote",[s("p",[t._v("报文所使用的 HTTP 版本，其格式看起来是这样的:"),s("code",[t._v("HTTP/<major>.<minor>")]),t._v("\n其中主要版本号(major)和次要版本号(minor)都是整数。本章稍后会详细说 明 HTTP 的版本问题。")])]),t._v(" "),s("ul",[s("li",[t._v("状态码(status-code)")])]),t._v(" "),s("blockquote",[s("p",[t._v("这三位数字描述了请求过程中所发生的情况。每个状态码的第一位数字都用于描 述状态的一般类别(“成功”、“出错”等)。")])]),t._v(" "),s("ul",[s("li",[t._v("原因短语(reason-phrase)")])]),t._v(" "),s("blockquote",[s("p",[t._v("数字状态码的可读版本，包含行终止序列之前的所有文本。原因短语只对人类有意义，因此，比如说，尽管响应行 HTTP/1.0 200 NOT OK 和 HTTP/1.0 200 OK 中原因短语的含义不同，但同样都会被当作成功指示处理。")])]),t._v(" "),s("ul",[s("li",[t._v("首部(header)")])]),t._v(" "),s("blockquote",[s("p",[t._v("可以有零个或多个首部，每个首部都包含一个名字，后面跟着一个冒号(😃，然后是一个可选的空格，接着是一个值，最后是一个 CRLF。首部是由一个空行(CRLF)结束的，表示了首部列表的结束和实体主体部分的开始。有些 HTTP 版 本，比如 HTTP/1.1，要求有效的请求或响应报文中必须包含特定的首部。")])]),t._v(" "),s("ul",[s("li",[t._v("实体的主体部分(entity-body)")])]),t._v(" "),s("blockquote",[s("p",[t._v("实体的主体部分包含一个由任意数据组成的数据块。并不是所有的报文都包含实 体的主体部分，有时，报文只是以一个 CRLF 结束。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/48f27b6341a94aeba43d6a4a37c2e099~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-2-起始行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-起始行"}},[t._v("#")]),t._v(" 3.2.2 起始行")]),t._v(" "),s("p",[t._v("HTTP 报文都以一个起始行作为开始。请求报文的起始行说明了要做些什么。响应报文的起始行说明发生了什么。")]),t._v(" "),s("p",[t._v("请求报文请求服务器对资源进行一些操作。请求报文的起始行，包含了一个方法和一个请求 URL，请求行中还包含 HTTP 的版本，用来告知服务 器，客户端使用的是哪种 HTTP。所有这些字段都由空格符分隔。")]),t._v(" "),s("p",[t._v("响应报文承载了状态信息和操作产生的所有结果数据，将其返回给客户端。响应报 文的起始行，包含了响应报文使用的 HTTP 版本、数字状态码，以及描述操作状态的文本形式的原因短语。所有这些字段都由空格符进行分隔。")]),t._v(" "),s("p",[t._v("常用HTTP方法\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/33b9ef49339a451d920cb7430ca051aa~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[t._v("方法是用来告诉服务器做什么事情的，状态码则用来告诉客户端，发生了什么事情。")]),t._v(" "),s("p",[t._v("状态码是在每条响应报文的起始行中返回的。会返回一个数字状态和一个可读的状态。数字码便于程序进行差错处理，而原因短语则更便于人们理解。\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a89917d587e44af789acf487bb5e7d5f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[t._v("原因短语是响应起始行中的最后一个组件。它为状态码提供了文本形式的解释。")]),t._v(" "),s("p",[t._v("版本号会以 HTTP/x.y 的形式出现在请求和响应报文的起始行中。为 HTTP 应用程序提供了一种将自己所遵循的协议版本告知对方的方式。\n在与使用 HTTP 1.1 的应用程序进行通信的 HTTP 1.2 应用程序应 该知道，它不能使用任何新的 1.2 特性，因为使用老版本协议的应用程序很可能无 法实现这些特性。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-3-首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-3-首部"}},[t._v("#")]),t._v(" 3.2.3 首部")]),t._v(" "),s("p",[t._v("跟在起始行后面的就是零个、一个或多个 HTTP 首部字段。\n本质上来说，它们只是一些名 / 值对的列表。\n分类：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("通用首部")]),t._v(" 既可以出现在请求报文中，也可以出现在响应报文中。")]),t._v(" "),s("li",[s("strong",[t._v("请求首部")]),t._v(" 提供更多有关请求的信息。")]),t._v(" "),s("li",[s("strong",[t._v("响应首部")]),t._v(" 提供更多有关响应的信息。")]),t._v(" "),s("li",[s("strong",[t._v("实体首部")]),t._v(" 描述主体的长度和内容，或者资源自身。")]),t._v(" "),s("li",[s("strong",[t._v("扩展首部")]),t._v(" 规范中没有定义的新首部。")])]),t._v(" "),s("p",[t._v("将长的首部行分为多行可以提高可读性，多出来的每行前面至少要有一个空格或制表符(tab)。")]),t._v(" "),s("h3",{attrs:{id:"_3-2-4-实体的主体部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-4-实体的主体部分"}},[t._v("#")]),t._v(" 3.2.4 实体的主体部分")]),t._v(" "),s("p",[t._v("实体的主体是 HTTP 报文的负荷。 就是 HTTP 要传输的内容。")]),t._v(" "),s("h2",{attrs:{id:"_3-3-方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-方法"}},[t._v("#")]),t._v(" 3.3 方法")]),t._v(" "),s("p",[t._v("HTTP 定义了一组被称为安全方法的方法。GET 方法和 HEAD 方法都被认为是安全的，这就意味着使用 GET 或 HEAD 方法的 HTTP 请求都不会产生什么动作。即 HTTP 请求不会在服务器上产生什么结果。")]),t._v(" "),s("p",[s("strong",[t._v("GET")]),t._v(" 是最常用的方法。通常用于请求服务器发送某个资源。HTTP/1.1 要求服务器实现此方法。")]),t._v(" "),s("p",[s("strong",[t._v("HEAD")]),t._v(" 方法与 GET 方法的行为很类似，但服务器在响应中只返回首部。不会返回实体的主体部分。\n服务器开发者必须确保返回的首部与 GET 请求所返回的首部完全相同。\n这就允许客户端在未获取实际资源的情况下，对资源的首部进行检查。使用 HEAD，可以:")]),t._v(" "),s("ul",[s("li",[t._v("在不获取资源的情况下了解资源的情况(比如，判断其类型);")]),t._v(" "),s("li",[t._v("通过查看响应中的状态码，看看某个对象是否存在;")]),t._v(" "),s("li",[t._v("通过查看首部，测试资源是否被修改了。")])]),t._v(" "),s("p",[s("strong",[t._v("PUT")]),t._v(" 与 GET 从服务器读取文档相反，PUT 方法会向服务器写入文档。\nPUT 方法的语义就是让服务器用请求的主体部分来创建一个由所请求的 URL 命名的新文档，或者，如果那个 URL 已经存在的话，就用这个主体来替代它。\n因为 PUT 允许用户对内容进行修改，所以很多 Web 服务器都要求在执行 PUT 之前，用密码登录。")]),t._v(" "),s("p",[s("strong",[t._v("POST")]),t._v(" 方法起初是用来向服务器输入数据的。\n实际上，通常会用它来支持 HTML 的表单。\n表单中填好的数据通常会被送给服务器，然后由服务器将其发送到它要去的地方")]),t._v(" "),s("p",[s("strong",[t._v("TRACE")]),t._v(" 请求会在目的服务器端发起一个“环回”诊断。\n客户端发起一个请求时，这个请求可能要穿过防火墙、代理、网关或其他一些应用 程序。每个中间节点都可能会修改原始的 HTTP 请求。TRACE 方法允许客户端在 最终将请求发送给服务器时，看看它变成了什么样子。\nTRACE请求行程最后一站的服务器会弹回一条 TRACE 响应，并在响应主体中携带它收到的原始请求报文。这样客户端就可以查看在所有中间HTTP 应用程序组成的请求 / 响应链上，原始报文是否，以及如何被毁坏或修改过。\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c965d64d4d5a462abe39dce1783b2e37~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("OPTIONS")]),t._v(" 方法请求 Web 服务器告知其支持的各种功能。可以询问服务器通常支持哪些方法，或者对某些特殊资源支持哪些方法。\n(有些服务器可能只支持对一些特殊 类型的对象使用特定的操作)。\n这为客户端应用程序提供了一种手段，使其不用实际访问那些资源就能判定访问各种资源的最优方式。\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f40d745e31f46ff9cc5a4fc1abb89ba~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("DELETE")]),t._v(" 方法所做的事情就是请服务器删除请求 URL 所指定的资源。 但是，客户端应用程序无法保证删除操作一定会被执行。因为 HTTP 规范允许服务器在不通知客户端的情况下撤销请求。")]),t._v(" "),s("p",[t._v("还有一些没有在 HTTP/1.1 规范中定义的方法，被称为扩展方法。以下为示例：\n"),s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aeb0b647fcf1411bb46969d80dd86d9d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_3-4-状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-状态码"}},[t._v("#")]),t._v(" 3.4 状态码")]),t._v(" "),s("h3",{attrs:{id:"_3-4-1-100-199-信息性状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-1-100-199-信息性状态码"}},[t._v("#")]),t._v(" 3.4.1 100~199——信息性状态码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a832ec55f2940c9b0fbc18bf0e7ffdc~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_200-299-成功状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_200-299-成功状态码"}},[t._v("#")]),t._v(" 200~299——成功状态码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b2765897a3040509201807bddf8dcfb~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_300-399-重定向状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_300-399-重定向状态码"}},[t._v("#")]),t._v(" 300~399——重定向状态码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3ca121b560845d5a523b27d57d1229c~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("p",[t._v("重定向状态码要么告知客户端使用替代位置来访问他们所感兴趣的资源，要么就提供一个替代的响应而不是资源的内容。\n如果资源已被移动，可发送一个重定向状态码和一个可选的 Location 首部来告知客户端资源已被移走，以及现在可以在哪里 找到它(参见下图)。\n这样，浏览器就可以在不打扰使用者的情况下，透明地转入新的位置了。\n"),s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c84a84f500e44d3a16030ae91d936e4~tplv-k3u1fbpfcp-watermark.image",alt:""}}),t._v("\n可以通过某些重定向状态码对资源的应用程序本地副本与源端服务器上的资源进行验证。\n比如，HTTP 应用程序可以查看其资源的本地副本是否仍然是最新的，或者在源端服务器上资源是否被修改过。\n下图显示了一个这样的例子。客户端发送了 一个特殊的 If-Modified-Since 首部，说明只读取 1997 年 10 月之后修改过的文 档。\n这个日期之后，此文档并未被修改过，因此，服务器回送了一个 304 状态码， 而不是文档的内容。\n"),s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c0d64bfbb5054de89f1404c407b236b3~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-4-4-400-499-客户端错误状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-4-400-499-客户端错误状态码"}},[t._v("#")]),t._v(" 3.4.4 400~499——客户端错误状态码")]),t._v(" "),s("p",[t._v("很多客户端错误都是由浏览器来处理的，甚至不会打扰到你。只有少量错误，比如404，还是会穿过浏览器来到用户面前。\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df12446256884b5b806cc589e95d37f7~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-4-5-500-599-服务器错误状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-5-500-599-服务器错误状态码"}},[t._v("#")]),t._v(" 3.4.5 500~599——服务器错误状态码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5da36a7782841ad96035bc51cf89f65~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"_3-5-首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-首部"}},[t._v("#")]),t._v(" 3.5 首部")]),t._v(" "),s("p",[t._v("首部和方法配合工作，共同决定了客户端和服务器能做什么事情。")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("通用首部")]),t._v("\n这些是客户端和服务器都可以使用的通用首部。比如Date："),s("code",[t._v("Date: Tue, 3 Oct 1974 02:16:00 GMT")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("请求首部")]),t._v("\n请求首部是请求报文特有的。它们为服务器提供了一些额外信息，比如客户端希望接收什么类型的数据："),s("code",[t._v("Accept: */*")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("响应首部")]),t._v("\n响应报文有自己的首部集，以便为客户端提供信息。比如，客户端在与哪种类型的服务器进行交互："),s("code",[t._v("Server: Tiki-Hut/1.0")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("实体首部")]),t._v("\n实体首部指的是用于应对实体主体部分的首部。比如，可以用实体首部来说明实体主体部分的数据类型："),s("code",[t._v("Content-Type: text/html; charset=iso-latin-1")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("扩展首部")]),t._v("\n扩展首部是非标准的首部，由应用程序开发者创建，但还未添加到已批准的 HTTP 规范中去。\n即使不知道这些扩展首部的含义，HTTP 程序也要接受它们并 对其进行转发。")])])]),t._v(" "),s("h3",{attrs:{id:"_3-5-1-通用首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-1-通用首部"}},[t._v("#")]),t._v(" 3.5.1 通用首部")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/047e27f909304110afcafae7954788e2~tplv-k3u1fbpfcp-watermark.image",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c05ed774ea64001b6a49916b1ab9ec8~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-5-2-请求首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-2-请求首部"}},[t._v("#")]),t._v(" 3.5.2 请求首部")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11dc0d57e8844b0aaab63cafae9c51d2~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Accept首部")])])]),t._v(" "),s("p",[t._v("Accept 首部为客户端提供了一种将其喜好和能力告知服务器的方式，包括它们想要什么，可以使用什么，以及最重要的，它们不想要什么。\n这样，服务器就可以根据这些额外信息，对要发送的内容做出更明智的决定。\n"),s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/197af3ddb1774e9d8b1b7feab76d8114~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("条件请求首部")])])]),t._v(" "),s("p",[t._v("有时客户端希望为请求加上某些限制。\n比如，如果客户端已经有了一份文档副本， 就希望只在服务器上的文档与客户端拥有的副本有所区别时，才请求服务器传输文档。\n通过条件请求首部，客户端就可以为请求加上这种限制，要求服务器在对请求 进行响应之前，确保某个条件为真。\n"),s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96c1e01954c04ba8b63826e575c1fa4d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("安全请求首部")])])]),t._v(" "),s("p",[t._v("HTTP 本身就支持一种简单的机制，可以对请求进行质询 / 响应认证。\n这种机制要求客户端在获取特定的资源之前，先对自身进行认证，这样就可以使事务稍微安全一些。\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf0de153dae64b6a84207ee19f72004b~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("代理请求首部")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d918a8a81786434ea98f57024f05e66a~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-5-3-响应首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-3-响应首部"}},[t._v("#")]),t._v(" 3.5.3 响应首部")]),t._v(" "),s("p",[t._v("响应首部为客户端提供了一些额外信息，比如谁在 发送响应、响应者的功能，甚至与响应相关的一些特殊指令。\n这些首部有助于客户端处理响应，并在将来发起更好的请求。\n"),s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9aa8d6daba944d6d90d0dcfcdce4fac4~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("协商首部")])])]),t._v(" "),s("p",[t._v("如果资源有多种表示方法——比如，如果服务器上有某文档的法语和德语译稿， HTTP/1.1 可以为服务器和客户端提供对资源进行协商的能力。\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d97492c7a08343c389318de5e58643a4~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("安全响应首部")])])]),t._v(" "),s("p",[t._v("我们已经看到过安全请求首部了，本质上这里说的就是 HTTP 的质询 / 响应认证机制的响应侧。\n"),s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/973926fe6c854df5a91bdf55d47fac32~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-5-4-实体首部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-4-实体首部"}},[t._v("#")]),t._v(" 3.5.4 实体首部")]),t._v(" "),s("p",[t._v("实体首部提供了有关实体及其内容的大量信息，从有关对象类型的信息，到能够对资源使用的各种有效的请求方法。\n总之，实体首部可以告知报文的接收者它在对什么进行处理。\n"),s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d4788d4f1b2491182e504935e30d78d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("内容首部")])])]),t._v(" "),s("p",[t._v("内容首部提供了与实体内容有关的特定信息，说明了其类型、尺寸以及处理它所需的其他有用信息。\n比如，Web 浏览器可以通过查看返回的内容类型，得知如何显示对象。\n"),s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da6bbd4f28ce44199e0f4c10355ee3ee~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("实体缓存首部")])])]),t._v(" "),s("p",[t._v("通用的缓存首部说明了如何或什么时候进行缓存。\n实体的缓存首部提供了与被缓存 实体有关的信息。\n比如，验证已缓存的资源副本是否仍然有效所需的信息，以及 更好地估计已缓存资源何时失效所需的线索。\n"),s("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67f50f4113124655864e99a50db43859~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);