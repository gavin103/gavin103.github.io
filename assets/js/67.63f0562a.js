(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{546:function(t,e,v){"use strict";v.r(e);var _=v(4),i=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#浏览器"}},[t._v("浏览器")])]),v("li",[v("a",{attrs:{href:"#浏览器内核及特性"}},[t._v("浏览器内核及特性")])]),v("li",[v("a",{attrs:{href:"#webkit内核"}},[t._v("WebKit内核")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"浏览器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器"}},[t._v("#")]),t._v(" 浏览器")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("浏览器功能包括：")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("网络")]),t._v("，浏览器要通过网络请求静态资源和服务端的数据")]),t._v(" "),v("li",[v("strong",[t._v("资源管理")]),t._v("，包含网络下载资源和本地资源，这些资源需要一个高效的管理机制，避免重复请求，实现浏览器的缓存机制")]),t._v(" "),v("li",[v("strong",[t._v("网页浏览")]),t._v("，这是我们使用浏览器的最主要目的，网页浏览包含有将静态资源渲染成可视化内容的一个过程")]),t._v(" "),v("li",[v("strong",[t._v("多页面管理")]),t._v("，多个tab标签打开的时候，如何解决多页面之间的相互影响和安全等问题")]),t._v(" "),v("li",[v("strong",[t._v("插件和扩展")]),t._v("，为浏览器提供附加功能")]),t._v(" "),v("li",[v("strong",[t._v("账户与同步")])]),t._v(" "),v("li",[v("strong",[t._v("安全机制")]),t._v("，避免用户信息被非法窃取等")]),t._v(" "),v("li",[v("strong",[t._v("开发者工具")])])])]),t._v(" "),v("li",[v("p",[t._v("HTML5类别和包含的各种规范")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("类别")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("具体规范")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("离线")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Application cache, Local storage, Indexed DB, 在线/离线事件")])]),t._v(" "),v("tr",[v("td",[t._v("存储")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Application cache, Local storage, Indexed DB 等")])]),t._v(" "),v("tr",[v("td",[t._v("连接")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Web Sockets, Server-sent 事件")])]),t._v(" "),v("tr",[v("td",[t._v("文件访问")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("File API, File System, FileWriter, ProgressEvents")])]),t._v(" "),v("tr",[v("td",[t._v("语义")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("各种新的元素，包含Media, structural, 国际化, Link relation, 属性, form类型, microdata等方面")])]),t._v(" "),v("tr",[v("td",[t._v("音频和视频")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Html5 Video, Web Audio, WebRTC, Video track等")])]),t._v(" "),v("tr",[v("td",[t._v("3D和图形")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Canvas 3D, 3D CSS变换, WebGL, SVG等")])]),t._v(" "),v("tr",[v("td",[t._v("展示")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("CSS3 2D/3D变换, 转换（transition）, WebFonts等")])]),t._v(" "),v("tr",[v("td",[t._v("性能")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Web Worker, HTTP caching等")])]),t._v(" "),v("tr",[v("td",[t._v("其他")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("触控和鼠标, shadow DOM, CSS masking等")])])])])]),t._v(" "),v("li",[v("p",[t._v("User Agent\n表明浏览器身份，服务端可以根据获取到的UA信息，进行区分处理。")])])]),t._v(" "),v("h2",{attrs:{id:"浏览器内核及特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核及特性"}},[t._v("#")]),t._v(" 浏览器内核及特性")]),t._v(" "),v("ol",[v("li",[t._v("浏览器中最重要的模块，就是浏览器内核。 它主要作用是将页面转化为可视化的图像呈现出来。\n因此浏览器内核也被称为渲染引擎。\n渲染的定义是这样的： 根据描述或者定义，构建数学模型，通过模型生成图像的过程")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e758417798e43e0b3446b037f8c937e~tplv-k3u1fbpfcp-watermark.image",alt:"渲染引擎"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("内核")]),t._v(" "),v("th",[t._v("Trident")]),t._v(" "),v("th",[t._v("Gecko")]),t._v(" "),v("th",[t._v("WebKit")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("浏览器")]),t._v(" "),v("td",[t._v("IE")]),t._v(" "),v("td",[t._v("Firefox")]),t._v(" "),v("td",[t._v("Safari,Chrome/Chromium,Andriod浏览器,ChromeOS,WebOS等")])])])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("p",[t._v("渲染引擎中的功能模块")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71ccd9192c194ff89a375f730a53dbc3~tplv-k3u1fbpfcp-watermark.image",alt:"模块"}})]),t._v(" "),v("p",[t._v("可以看到渲染引擎的主体包含四大模块，HTML解释器，CSS解释器，布局，JavaScript引擎，")]),t._v(" "),v("ul",[v("li",[t._v("HTML解释器，将html文本生成DOM树")]),t._v(" "),v("li",[t._v("CSS解释器，将css文本生成CSSOM树")]),t._v(" "),v("li",[t._v("布局，将两棵树结合起来，生成模型")]),t._v(" "),v("li",[t._v("JS引擎，运行JS代码实现交互，修改DOM和CSSOM")]),t._v(" "),v("li",[t._v("绘图，将布局生成的模型，绘制成图像")])])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c44f5f8a821e42a9ab26fcdc802a91af~tplv-k3u1fbpfcp-watermark.image",alt:""}}),t._v("\n上图中虚线箭头表示，每个阶段可能使用到的其他模块。")]),t._v(" "),v("p",[t._v("渲染完成后，用户可能需要跟渲染结果进行交互，或者网页本身有动画操作，这需要持续的重复渲染过程。")]),t._v(" "),v("h2",{attrs:{id:"webkit内核"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#webkit内核"}},[t._v("#")]),t._v(" WebKit内核")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("广义的WebKit指的是WebKit项目，狭义的WebKit指的是“WebKit嵌入式接口”\n"),v("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4082a48795684f76b04502308ea78254~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("上图中WebCore包含前面提到的html解释器，css解释器，和布局等模块。\n上面的WebKit嵌入式接口，就是封装好的API给各种浏览器调用。")]),t._v(" "),v("blockquote",[v("p",[t._v("webkit代码，可以在www.webkit.org获取\n还有chromium代码可以在www.chromium.org获取")])])]),t._v(" "),v("li",[v("p",[t._v("WebKit和WebKit2\n"),v("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/150f73466ed34be0be519bf70cb3e888~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("WebKit2 不是狭义WebKit的简单修改版，而是一组支持新架构的全新绑定和接口层。")]),t._v(" "),v("p",[t._v("WebKit2的进程结构模型可以看出，至少有两个进程：UI进程和Web进程")])]),t._v(" "),v("li",[v("p",[t._v("Blink是Chromium内核，基本上市WebKit的复制")])])])])}),[],!1,null,null,null);e.default=i.exports}}]);