(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{546:function(t,a,e){"use strict";e.r(a);var r=e(4),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-webkit资源加载机制"}},[t._v("1. WebKit资源加载机制")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-1-资源"}},[t._v("1.1 资源")])]),e("li",[e("a",{attrs:{href:"#_1-2-资源缓存"}},[t._v("1.2 资源缓存")])]),e("li",[e("a",{attrs:{href:"#_1-3-资源加载器"}},[t._v("1.3 资源加载器")])]),e("li",[e("a",{attrs:{href:"#_1-4-过程"}},[t._v("1.4 过程")])]),e("li",[e("a",{attrs:{href:"#_1-5-资源的生命周期"}},[t._v("1.5 资源的生命周期")])]),e("li",[e("a",{attrs:{href:"#_1-6-实践-资源的缓存"}},[t._v("1.6 实践：资源的缓存")])])])]),e("li",[e("a",{attrs:{href:"#_2-chrome多进程资源加载"}},[t._v("2. Chrome多进程资源加载")]),e("ul",[e("li",[e("a",{attrs:{href:"#_2-1-多进程"}},[t._v("2.1 多进程")])]),e("li",[e("a",{attrs:{href:"#_2-2-工作方式和资源共享"}},[t._v("2.2 工作方式和资源共享")])])])]),e("li",[e("a",{attrs:{href:"#网络栈"}},[t._v("网络栈")]),e("ul",[e("li",[e("a",{attrs:{href:"#webkit的网络设施"}},[t._v("WebKit的网络设施")])]),e("li",[e("a",{attrs:{href:"#chromium网络栈"}},[t._v("Chromium网络栈")])]),e("li",[e("a",{attrs:{href:"#磁盘本地缓存"}},[t._v("磁盘本地缓存")])]),e("li",[e("a",{attrs:{href:"#cookie机制"}},[t._v("Cookie机制")])]),e("li",[e("a",{attrs:{href:"#安全机制"}},[t._v("安全机制")])]),e("li",[e("a",{attrs:{href:"#高性能网络栈"}},[t._v("高性能网络栈")])]),e("li",[e("a",{attrs:{href:"#实践-chromium网络工具和信息"}},[t._v("实践：Chromium网络工具和信息")])])])]),e("li",[e("a",{attrs:{href:"#高效的资源使用策略"}},[t._v("高效的资源使用策略")]),e("ul",[e("li",[e("a",{attrs:{href:"#dns和tcp连接"}},[t._v("DNS和TCP连接")])]),e("li",[e("a",{attrs:{href:"#资源的数量"}},[t._v("资源的数量")])]),e("li",[e("a",{attrs:{href:"#资源的数据量"}},[t._v("资源的数据量")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"_1-webkit资源加载机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-webkit资源加载机制"}},[t._v("#")]),t._v(" 1. WebKit资源加载机制")]),t._v(" "),e("h3",{attrs:{id:"_1-1-资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-资源"}},[t._v("#")]),t._v(" 1.1 资源")]),t._v(" "),e("p",[t._v("HTML支持的资源类型：\n"),e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e3434197eeda4dec89e94c0d34302088~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("p",[t._v("这些资源在WebKit中均有不同类来表示，它们的公共基类是CachedResource，下图列出各种资源类：\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e769a2be2010405488d74513cc26aab1~tplv-k3u1fbpfcp-watermark.image",alt:""}}),t._v("\nWebKit中HTML文本对应的资源类是MainResource类，与其对应的资源类型叫做CachedRawResource类。\n资源类都以Cached开头，是因为引入缓存机制以便提效，所有对资源的请求都会先获取缓存中的信息，以决定是否想服务器提出资源请求。")]),t._v(" "),e("h3",{attrs:{id:"_1-2-资源缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-资源缓存"}},[t._v("#")]),t._v(" 1.2 资源缓存")]),t._v(" "),e("p",[t._v("资源的缓存机制是提高资源使用效率的有效方法。其基本思想如下：")]),t._v(" "),e("ul",[e("li",[t._v("建立一个资源缓存池")]),t._v(" "),e("li",[t._v("当WebKit需要请求资源的时候，先从资源池中查找是否存在相应的资源")]),t._v(" "),e("li",[t._v("如果有，WebKit取出以便使用")]),t._v(" "),e("li",[t._v("如果没有，WebKit穿件一个新的CachedResource子类的对象，并发送真正的请求给服务")]),t._v(" "),e("li",[t._v("WebKit收到资源后将其设置到该资源类的对象中，以便于缓存后下次使用（内存缓存）\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5930bb4158bd4f1a843383b86a7e7d4a~tplv-k3u1fbpfcp-watermark.image",alt:""}})])]),t._v(" "),e("p",[t._v("WebKit从资源池中查找资源的关键字是URL。URL标记了资源唯一性的特征。")]),t._v(" "),e("h3",{attrs:{id:"_1-3-资源加载器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-资源加载器"}},[t._v("#")]),t._v(" 1.3 资源加载器")]),t._v(" "),e("p",[t._v("WebKit有三种类型的加载器：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("针对每种资源类型的特定加载器。特点：仅加载某一种资源。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("查看详情")]),t._v(" "),e("p",[t._v("以image这个HTML元素为例，\n该元素需要图片资源，对应的特定资源加载器是ImageLoader类。\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8ecf3ed1e915408d9d2b51d431b78361~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("https://github.com/WebKit/webkit/blob/master/Source/WebCore/loader/ImageLoader.cpp")])]),t._v(" "),e("p",[t._v("对于CSS自定义字体，它的特定资源加载器是FontLoader。")])]),t._v(" "),e("p",[t._v("这些资源加载器没有公共基类，起作用就是当需求请求资源时，由资源加载器负责加载并隐藏背后复杂的逻辑。")])]),t._v(" "),e("li",[e("p",[t._v("资源缓存机制的资源加载器。特点：所有特定加载器都共享它来查找并插入缓存资源——CachedResourceLoader类。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("查看详情")]),t._v(" "),e("p",[t._v("特定加载器先是通过缓存机制的资源加载器查找是否有缓存资源，它属于HTML的文档对象。\n"),e("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3dd9b2924e864f3dbd81d7ffd02b2904~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])]),t._v(" "),e("li",[e("p",[t._v("通用的资源加载器——ResourceLoader类，是在WebKit需要从网络或者文件系统获取资源的时候使用，该类只负责获得资源的数据，因此被所有特定资源加载器共享。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("查看详情")]),t._v(" "),e("p",[t._v("它属于CachedResource类，但它桶CachedResourceLoader类没有继承关系。\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75eded253377460c80a63d1cce6440aa~tplv-k3u1fbpfcp-watermark.image",alt:""}})])])])]),t._v(" "),e("h3",{attrs:{id:"_1-4-过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-过程"}},[t._v("#")]),t._v(" 1.4 过程")]),t._v(" "),e("p",[t._v("下图描述的是一个带有资源缓存机制的资源加载的全过程，包括资源已经在缓存和不在缓存中两种情况。")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("查看详情")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ea87329868aa4538aaa21a20d7fc096c~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("p",[t._v("假设现有一个img元素，其属性src值是一个有效的URL地址。\n那么当HTML解析器解析到该元素的该属性时，WebKit会创建一个ImageLoader对象来加载该资源，ImageLoader对象通过上图所示的过程创建一个加载资源的请求。")]),t._v(" "),e("p",[t._v("上图中最下面的ResourceHandleInternal类，它依赖于每个WebKit移植的实现策略，")])]),t._v(" "),e("p",[t._v("鉴于从网络获取资源过程非常耗时，通常资源加载是异步执行的，这样不会阻碍当前WebKit的渲染过程。（例如图片，CSS文件等）")]),t._v(" "),e("p",[t._v("某些特别的资源（如JavaScript代码文件）会阻碍主流程的渲染，这回影响WebKit下载资源的效率。WebKit如何解决这一问题呢？当前主线程被阻碍时，WebKit会启动另外一个线程去遍历后面的HTML网页，手机需要的资源URL然后发送请求，避免阻碍。同时WebKit还可以并发的下载这些资源（包含JavaScript代码）。")]),t._v(" "),e("h3",{attrs:{id:"_1-5-资源的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-资源的生命周期"}},[t._v("#")]),t._v(" 1.5 资源的生命周期")]),t._v(" "),e("p",[t._v("资源池的空间有限，所以资源池中的资源需要相应的机制替换，通常采用的机制就是LRU（Least Recent Used）算法。")]),t._v(" "),e("p",[t._v("另一方面，WebKit如何判断下次使用某资源的时候，是否需要更新该资源，从服务器重新请求呢？\n当我们刷新页面的时候，对于某些资源，WebKit需要直接重新发送请求，要去服务器端将内容重新发送过来。但是对于很多资源，WebKit则可以利用HTTP协议减少网络负载。在HTTP协议的规范中对此有规定，浏览器可以发送消息确认是否需要更新，如果有浏览器重新获取该资源，否则继续利用该资源。")]),t._v(" "),e("p",[t._v("综上：WebKit先判断资源是否在资源池中，如果是，就发一个HTTP请求给服务器，说明该资源在本地的一些信息（last-modified等）服务器则根据该信息判断，如果没有更新，服务器返回状态码304，表明无需更新，直接利用资源池中的资源；否则WebKit申请下载更新的资源。")]),t._v(" "),e("h3",{attrs:{id:"_1-6-实践-资源的缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-实践-资源的缓存"}},[t._v("#")]),t._v(" 1.6 实践：资源的缓存")]),t._v(" "),e("p",[t._v("下图分别为使用cache和不使用cache的两种情况下，请求信息：\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f179c02b1274fc5b45857d543b67164~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_2-chrome多进程资源加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-chrome多进程资源加载"}},[t._v("#")]),t._v(" 2. Chrome多进程资源加载")]),t._v(" "),e("h3",{attrs:{id:"_2-1-多进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-多进程"}},[t._v("#")]),t._v(" 2.1 多进程")]),t._v(" "),e("p",[t._v("Chromium采用多进程的资源加载机制。\n主要是多个Renderer进程和Browser进程之间的调用栈涉及的主要类。\n"),e("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4735f67e69b541b39b722a0f13edd946~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),e("p",[t._v("ResourceLoader类是Chromium浏览器实际的资源加载类，它负责管理向网络发起请求，从网络接收过来的认证请求，请求的回复管理等工作。")]),t._v(" "),e("p",[t._v("从网络或者本地文件读取信息的URLRequest类，实际上承担了建立网络连接，发送请求数据，接收回复数据的任务。")]),t._v(" "),e("h3",{attrs:{id:"_2-2-工作方式和资源共享"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-工作方式和资源共享"}},[t._v("#")]),t._v(" 2.2 工作方式和资源共享")]),t._v(" "),e("p",[t._v("该部分涉及到代码流程实现，不深入了解 。。。")]),t._v(" "),e("h2",{attrs:{id:"网络栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络栈"}},[t._v("#")]),t._v(" 网络栈")]),t._v(" "),e("h3",{attrs:{id:"webkit的网络设施"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webkit的网络设施"}},[t._v("#")]),t._v(" WebKit的网络设施")]),t._v(" "),e("h3",{attrs:{id:"chromium网络栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chromium网络栈"}},[t._v("#")]),t._v(" Chromium网络栈")]),t._v(" "),e("h3",{attrs:{id:"磁盘本地缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘本地缓存"}},[t._v("#")]),t._v(" 磁盘本地缓存")]),t._v(" "),e("h3",{attrs:{id:"cookie机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie机制"}},[t._v("#")]),t._v(" Cookie机制")]),t._v(" "),e("h3",{attrs:{id:"安全机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全机制"}},[t._v("#")]),t._v(" 安全机制")]),t._v(" "),e("h3",{attrs:{id:"高性能网络栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高性能网络栈"}},[t._v("#")]),t._v(" 高性能网络栈")]),t._v(" "),e("h3",{attrs:{id:"实践-chromium网络工具和信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实践-chromium网络工具和信息"}},[t._v("#")]),t._v(" 实践：Chromium网络工具和信息")]),t._v(" "),e("h2",{attrs:{id:"高效的资源使用策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高效的资源使用策略"}},[t._v("#")]),t._v(" 高效的资源使用策略")]),t._v(" "),e("h3",{attrs:{id:"dns和tcp连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns和tcp连接"}},[t._v("#")]),t._v(" DNS和TCP连接")]),t._v(" "),e("h3",{attrs:{id:"资源的数量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源的数量"}},[t._v("#")]),t._v(" 资源的数量")]),t._v(" "),e("h3",{attrs:{id:"资源的数据量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资源的数据量"}},[t._v("#")]),t._v(" 资源的数据量")])])}),[],!1,null,null,null);a.default=s.exports}}]);