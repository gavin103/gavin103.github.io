(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{547:function(e,t,a){"use strict";a.r(t);var o=a(4),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#个性化接触"}},[e._v("个性化接触")]),a("ul",[a("li",[a("a",{attrs:{href:"#http首部"}},[e._v("HTTP首部")])]),a("li",[a("a",{attrs:{href:"#客户端ip地址"}},[e._v("客户端IP地址")])]),a("li",[a("a",{attrs:{href:"#用户登录"}},[e._v("用户登录")])]),a("li",[a("a",{attrs:{href:"#胖url"}},[e._v("胖URL")])])])]),a("li",[a("a",{attrs:{href:"#cookie"}},[e._v("cookie")]),a("ul",[a("li",[a("a",{attrs:{href:"#cookie的类型"}},[e._v("cookie的类型")])]),a("li",[a("a",{attrs:{href:"#cookie是如何工作的"}},[e._v("cookie是如何工作的")])]),a("li",[a("a",{attrs:{href:"#cookie罐-客户端的状态"}},[e._v("cookie罐:客户端的状态")])]),a("li",[a("a",{attrs:{href:"#不同站点使用不同的cookie"}},[e._v("不同站点使用不同的cookie")])]),a("li",[a("a",{attrs:{href:"#cookie成分"}},[e._v("cookie成分")])]),a("li",[a("a",{attrs:{href:"#cookie与缓存"}},[e._v("cookie与缓存")])]),a("li",[a("a",{attrs:{href:"#cookie、安全性和隐私"}},[e._v("cookie、安全性和隐私")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"个性化接触"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个性化接触"}},[e._v("#")]),e._v(" 个性化接触")]),e._v(" "),a("p",[e._v("Web 站点希望能够提供个性化的接触。它们希望对连接另一端的用户有更多 的了解，并且能在用户浏览页面时对其进行跟踪。很多网站可以通过以下几种方式实现站点的个性化：")]),e._v(" "),a("ul",[a("li",[e._v("个性化的问候")]),e._v(" "),a("li",[e._v("有的放矢的推荐")]),e._v(" "),a("li",[e._v("管理信息的存档")]),e._v(" "),a("li",[e._v("记录会话")])]),e._v(" "),a("p",[e._v("早期的 Web 站点设计者们都有自己的用户识别技术。每种技术都有其优势和劣势：")]),e._v(" "),a("ul",[a("li",[e._v("承载用户身份信息的 HTTP 首部。")]),e._v(" "),a("li",[e._v("客户端 IP 地址跟踪，通过用户的 IP 地址对其进行识别。")]),e._v(" "),a("li",[e._v("用户登录，用认证方式来识别用户。")]),e._v(" "),a("li",[e._v("胖 URL，一种在 URL 中嵌入识别信息的技术。")]),e._v(" "),a("li",[e._v("cookie，一种功能强大且高效的持久身份识别技术。")])]),e._v(" "),a("h3",{attrs:{id:"http首部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http首部"}},[e._v("#")]),e._v(" HTTP首部")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("首部名称")]),e._v(" "),a("th",[e._v("首部类型")]),e._v(" "),a("th",[e._v("描  述")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("From")]),e._v(" "),a("td",[e._v("请求")]),e._v(" "),a("td",[e._v("用户的 E-mail 地址")])]),e._v(" "),a("tr",[a("td",[e._v("User-Agent")]),e._v(" "),a("td",[e._v("请求")]),e._v(" "),a("td",[e._v("用户的浏览器软件")])]),e._v(" "),a("tr",[a("td",[e._v("Referer")]),e._v(" "),a("td",[e._v("请求")]),e._v(" "),a("td",[e._v("用户是从这个页面上依照链接跳转过来的")])]),e._v(" "),a("tr",[a("td",[e._v("Authorization")]),e._v(" "),a("td",[e._v("请求")]),e._v(" "),a("td",[e._v("用户名和密码(稍后讨论)")])]),e._v(" "),a("tr",[a("td",[e._v("Client-IP")]),e._v(" "),a("td",[e._v("扩展(请求)")]),e._v(" "),a("td",[e._v("客户端的 IP 地址(稍后讨论)")])]),e._v(" "),a("tr",[a("td",[e._v("X-Forwarded-For")]),e._v(" "),a("td",[e._v("扩展(请求)")]),e._v(" "),a("td",[e._v("客户端的 IP 地址(稍后讨论)")])]),e._v(" "),a("tr",[a("td",[e._v("Cookie")]),e._v(" "),a("td",[e._v("扩展(请求)")]),e._v(" "),a("td",[e._v("服务器产生的 ID 标签(稍后讨论)")])])])]),e._v(" "),a("h3",{attrs:{id:"客户端ip地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端ip地址"}},[e._v("#")]),e._v(" 客户端IP地址")]),e._v(" "),a("p",[e._v("通常 在 HTTP 首部并不提供客户端的 IP 地址，但 Web 服务器可以找到承载 HTTP 请求 的 TCP 连接另一端的 IP 地址。")]),e._v(" "),a("p",[e._v("使用客户端 IP 地址来识别用户存在着很多缺点：")]),e._v(" "),a("ul",[a("li",[e._v("客户端 IP 地址描述的是所用的机器，而不是用户。如果多个用户共享同一台计 算机，就无法对其进行区分了。")]),e._v(" "),a("li",[e._v("很多因特网服务提供商都会在用户登录时为其动态分配 IP 地址。用户每次登录 时，都会得到一个不同的地址，因此 Web 服务器不能假设 IP 地址可以在各登录 会话之间标识用户。")]),e._v(" "),a("li",[e._v("为了提高安全性，并对稀缺的地址资源进行管理，很多用户都是通过网络地址转 换(Network Address Translation，NAT)防火墙来浏览网络内容的。这些 NAT 设备隐藏了防火墙后面那些实际客户端的 IP 地址，将实际的客户端 IP 地址转换 成了一个共享的防火墙 IP 地址(和不同的端口号)。")]),e._v(" "),a("li",[e._v("HTTP 代理和网关通常会打开一些新的、到原始服务器的 TCP 连接。Web 服务 器看到的将是代理服务器的 IP 地址，而不是客户端的。有些代理为了绕过这个 问题会添加特殊的 Client-IP 或 X-Forwarded-For 扩展首部来保存原始的 IP 地址(参见图 11-1)。但并不是所有的代理都支持这种行为。")])]),e._v(" "),a("h3",{attrs:{id:"用户登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户登录"}},[e._v("#")]),e._v(" 用户登录")]),e._v(" "),a("p",[e._v("HTTP 中包含了一种内建机制，可以用 WWW- Authenticate 首部和 Authorization 首部向 Web 站点传送用户的相关信息。一 旦登录，浏览器就可以不断地在每条发往这个站点的请求中发送这个登录信息了， 这样，就总是有登录信息可用了。")]),e._v(" "),a("p",[e._v("如果服务器希望在为用户提供对站点的访问之前，先行登录，可以向浏览器回送一 条 HTTP 响应代码 401 Login Required。然后，浏览器会显示一个登录对话框，并 用 Authorization 首部在下一条对服务器的请求中提供这些信息。")]),e._v(" "),a("p",[e._v("登录多个 Web 站点是很繁琐的。从一个站点浏览到另一个站点的时候， 需要在每个站点上登录。")]),e._v(" "),a("h3",{attrs:{id:"胖url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#胖url"}},[e._v("#")]),e._v(" 胖URL")]),e._v(" "),a("p",[e._v("有些 Web 站点会为每个用户生成特定版本的 URL 来追踪用户的身份。通常，会对 真正的 URL 进行扩展，在 URL 路径开始或结束的地方添加一些状态信息。用户浏 览站点时，Web 服务器会动态生成一些超链，继续维护 URL 中的状态信息。")]),e._v(" "),a("p",[e._v("每个 URL 后面都附加了一个用户特有的标 识码(在这个例子中就是 002-1145265-8016838)，这个标识码有助于在用户浏览商 店内容时对其进行跟踪。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<a href="/exec/obidos/tg/browse/-/229220/ref=gr_gifts/002-1145265-\n8016838">All Gifts</a><br>\n<a href="/exec/obidos/wishlist/ref=gr_pl1_/002-1145265-8016838">Wish\nList</a><br> ...\n<a href="http://s1.amazon.com/exec/varzea/tg/armed-forces/-//ref=gr_ af_/002-1145265-8016838">Salute Our Troops</a><br>\n<a href="/exec/obidos/tg/browse/-/749188/ref=gr_p4_/002-1145265-8016838"\n>Free Shipping</a><br>\n<a href="/exec/obidos/tg/browse/-/468532/ref=gr_returns/002-1145265-8016838"\n>Easy Returns</a>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("改动后包含了用户状态信息的 URL 被称为胖 URL(fat URL);这种技术存在几个很严重的问题:")]),e._v(" "),a("ul",[a("li",[e._v("丑陋的 URL")]),e._v(" "),a("li",[e._v("无法共享 URL")]),e._v(" "),a("li",[e._v("破坏缓存：为每个 URL 生成用户特有的版本就意味着不再有可供公共访问的 URL 需要缓存了。")]),e._v(" "),a("li",[e._v("额外的服务器负荷：服务器需要重写 HTML 页面使 URL 变胖。")]),e._v(" "),a("li",[e._v("逃逸口：用户跳转到其他站点或者请求一个特定的 URL 时，就很容易在无意中“逃离” 胖 URL 会话。")]),e._v(" "),a("li",[e._v("在会话间是非持久的：除非用户收藏了特定的胖 URL，否则用户退出登录时，所有的信息都会丢失。")])]),e._v(" "),a("h2",{attrs:{id:"cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[e._v("#")]),e._v(" cookie")]),e._v(" "),a("h3",{attrs:{id:"cookie的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的类型"}},[e._v("#")]),e._v(" cookie的类型")]),e._v(" "),a("ul",[a("li",[e._v("会话 cookie ：会话 cookie 是一种 临时 cookie，它记录了用户访问站点时的设置和偏好。用户退出浏览器时，会话 cookie 就被删除了。")]),e._v(" "),a("li",[e._v("持久 cookie ：持久 cookie 的生存时间更长一些;它们存储在硬盘上，浏览器 退出，计算机重启时它们仍然存在。通常会用持久 cookie 维护某个用户会周期性访 问的站点的配置文件或登录名。")])]),e._v(" "),a("p",[e._v("会话 cookie 和持久 cookie 之间唯一的区别就是它们的过期时间。稍后我们会看到， 如果设置了 Discard 参数，或者没有设置 Expires 或 Max-Age 参数来说明扩展的过期时间，这个 cookie 就是一个会话 cookie。")]),e._v(" "),a("h3",{attrs:{id:"cookie是如何工作的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie是如何工作的"}},[e._v("#")]),e._v(" cookie是如何工作的")]),e._v(" "),a("p",[e._v("用户首次访问 Web 站点时，Web 服务器对用户一无所知。Web 服 务器希望这个用户会再次回来，所以想给这个用户“拍上”一个独有的 cookie，这 样以后它就可以识别出这个用户了。\n"),a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20fc11bc7437445890559125f521aeec~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"cookie罐-客户端的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie罐-客户端的状态"}},[e._v("#")]),e._v(" cookie罐:客户端的状态")]),e._v(" "),a("p",[e._v("cookie 的基本思想就是让浏览器积累一组服务器特有的信息，每次访问服务器时都将这些信息提供给它。因为浏览器要负责存储 cookie 信息，所以此系统被称为客户 端侧状态(client-side state)。这个 cookie 规范的正式名称为 HTTP 状态管理机制\n(HTTP state management mechanism)。")]),e._v(" "),a("h3",{attrs:{id:"不同站点使用不同的cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不同站点使用不同的cookie"}},[e._v("#")]),e._v(" 不同站点使用不同的cookie")]),e._v(" "),a("p",[e._v("浏览器内部的 cookie 罐中可以有成百上千个 cookie，但浏览器不会将每个 cookie 都发送给所有的站点。实际上，它们通常只向每个站点发送几个 cookie。原因 如下。")]),e._v(" "),a("ul",[a("li",[e._v("对所有这些 cookie 字节进行传输会严重降低性能。浏览器实际传输的 cookie 字 节数要比实际的内容字节数多!")]),e._v(" "),a("li",[e._v("cookie 中包含的是服务器特有的名值对，所以对大部分站点来说，大多数 cookie 都只是无法识别的无用数据。")]),e._v(" "),a("li",[e._v("将所有的 cookie 发送给所有站点会引发潜在的隐私问题，那些你并不信任的站 点也会获得你只想发给其他站点的信息。")])]),e._v(" "),a("p",[e._v("总之，浏览器只向服务器发送服务器产生的那些 cookie。")]),e._v(" "),a("p",[e._v("很多 Web 站点都会与第三方厂商达成协议，由其来管理广告。这些广告被做得像 Web 站点的一个组成部分，而且它们确实发送了持久 cookie。用户访问另一个由同 一广告公司提供服务的站点时，(由于域是匹配的)浏览器就会再次回送早先设置的 持久 cookie。营销公司可以将此技术与 Referer 首部结合，暗地里构建一个用户档 案和浏览习惯的详尽数据集。现代的浏览器都允许用户对隐私特性进行设置，以限 制第三方 cookie 的使用。")]),e._v(" "),a("p",[a("strong",[e._v("1. cookie的域属性")])]),e._v(" "),a("p",[e._v("Domain 属性控制哪些站点可以看到那个 cookie。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Set-cookie: user="mary17"; domain="airtravelbargains.com"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果用户访问的是 www.airtravelbargains.com、specials.airtravelbargains.com 或任意 以 .airtravelbargains.com 结尾的站点，"),a("code",[e._v('Cookie: user="mary17"')]),e._v("都会被发布出去:")]),e._v(" "),a("p",[a("strong",[e._v("2. cookie路径属性")])]),e._v(" "),a("p",[e._v("cookie 规范甚至允许用户将 cookie 与部分 Web 站点关联起来。可以通过 Path 属性来实现这一功能，在这个属性列出的 URL 路径前缀下所有 cookie 都是有效的。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('Set-cookie: pref=compact; domain="airtravelbargains.com"; path=/autos/\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("如果用户访问 http://www.airtravelbargains.com/specials.html，就只会获得这个 cookie: "),a("code",[e._v('Cookie: user="mary17"')]),e._v("\n但如果访问 http://www.airtravelbargains.com/autos/cheapo/index.html，就会获得这 两个 cookie:\n"),a("code",[e._v('Cookie: user="mary17"')]),e._v(", "),a("code",[e._v("Cookie: pref=compact")])]),e._v(" "),a("p",[e._v("cookie 就是由服务器贴到客户端上，由客户端维护的状态片段，只会回送给 那些合适的站点。")]),e._v(" "),a("h3",{attrs:{id:"cookie成分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie成分"}},[e._v("#")]),e._v(" cookie成分")]),e._v(" "),a("p",[e._v("有两个不同的版本:cookies 版本 0(有时被称为 Netscape cookies) 和 cookies 版 本 1(RFC 2965)。cookies 版 本 1 是 对 cookies 版 本 0 的 扩 展，应用不如后者广泛。")]),e._v(" "),a("p",[e._v("cookie 规范版本 0 和版本 1 都不是作为 HTTP/1.1 规范的一部分提供的。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/02acf20dd5c44850b6adf97e560dc497~tplv-k3u1fbpfcp-watermark.image",alt:""}}),e._v("\n（读者注：Chrome80增加了SameSite属性）")]),e._v(" "),a("p",[e._v("RFC 2965 cookie 的主要改动包括下列内容。")]),e._v(" "),a("ul",[a("li",[e._v("为每个 cookie 关联上解释性文本，对其目的进行解释。")]),e._v(" "),a("li",[e._v("允许在浏览器退出时，不考虑过期时间，将 cookie 强制销毁。")]),e._v(" "),a("li",[e._v("用相对秒数，而不是绝对日期来表示 cookie 的 Max-Age。")]),e._v(" "),a("li",[e._v("通过 URL 端口号，而不仅仅是域和路径来控制 cookie 的能力。")]),e._v(" "),a("li",[e._v("通过 Cookie 首部回送域、端口和路径过滤器(如果有的话)。")]),e._v(" "),a("li",[e._v("为实现互操作性使用的版本号。")]),e._v(" "),a("li",[e._v("在 Cookie 首部从名字中区分出附加关键字的 $ 前缀。")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/44ee31995596418bb4a0d2398576e8c2~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"cookie与缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie与缓存"}},[e._v("#")]),e._v(" cookie与缓存")]),e._v(" "),a("p",[e._v("cookie 和缓存的规则并没有很好地建立起来。下面是处理缓存时的一些指导性规则。")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("如果无法缓存文档，要将其标示出来")])])]),e._v(" "),a("p",[e._v('如果文档不可缓存，就显式地注 明——具体来说，如果除了 Set-Cookie 首部之外文档是可缓存的，就使用 Cache-Control:no-cache="Set-Cookie"。另一种更通用的做法是为可缓存 文档使用 Cache-Control:public，')]),e._v(" "),a("ul",[a("li",[e._v("缓存 Set-Cookie 首部时要小心")])]),e._v(" "),a("p",[e._v("缓存中有Set-Cookie 首部的响应，如果向多个用户发送了相同的 Set-Cookie 首部，可能会破坏用户的定位。\n强制缓存与原始服务器重新验证每条请 求，并将返回的所有 Set-Cookie 首部都合并到客户端的响应中去，就可以改 善这种状况。原始服务器可以通过向缓存的副本中添加这个首部来要求进行这种 再验证:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Cache-Control: must-revalidate, max-age=0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("小心处理带有 Cookie 首部的请求")])]),e._v(" "),a("p",[e._v("带有 Cookie 首部的请求到达时，就在提示我们，得到的结果可能是私有的。一 定要将私有内容标识为不可缓存的。")]),e._v(" "),a("h3",{attrs:{id:"cookie、安全性和隐私"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie、安全性和隐私"}},[e._v("#")]),e._v(" cookie、安全性和隐私")]),e._v(" "),a("p",[e._v("第三方 Web 站点使用持久 cookie 来跟踪用户就是一种最大的滥用。\n将这种做法与 IP 地址和 Referer 首部信息结合在一起，这些营销公司就可以构建 起相当精确的用户档案和浏览模式信息。")])])}),[],!1,null,null,null);t.default=i.exports}}]);