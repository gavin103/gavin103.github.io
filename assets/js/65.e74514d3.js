(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{547:function(t,p,v){"use strict";v.r(p);var e=v(4),a=Object(e.a)({},(function(){var t=this,p=t.$createElement,v=t._self._c||p;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#脚本位置"}},[t._v("脚本位置")])]),v("li",[v("a",{attrs:{href:"#组织脚本"}},[t._v("组织脚本")])])])]),v("p"),t._v(" "),v("p",[t._v("提高性能要从点滴做起。")]),t._v(" "),v("h2",{attrs:{id:"脚本位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#脚本位置"}},[t._v("#")]),t._v(" 脚本位置")]),t._v(" "),v("p",[t._v("提高性能的第一步就是页面的加载和JS的执行了。")]),t._v(" "),v("p",[t._v("JS加载和执行的过程，不只是阻塞了后面JS代码的执行，还阻塞了页面的渲染。\n这一特性无论外链文件还是内联脚本都适用。")]),t._v(" "),v("blockquote",[v("p",[v("em",[t._v("比如说我们在head标签中，写个script标签，其中写一个alert，这个页面一加载，就会有alert弹出，不点掉它，页面中的dom都不会加载出来。")]),t._v(" "),v("em",[t._v("说道实际应用中，如果我们的JS代码不小写出了个bug，控制台报了error，页面卡死了。如果恰好这个JS是在head中，那么惨了，页面要一直白屏，在大厂，这大概就是个A级故障了。")])])]),t._v(" "),v("p",[t._v("所以我们看到现在流行的打包工具，比如webpack等，都是把script标签放在body的闭合标签前面的位置。\n保证了页面的内容先加载出来，让用户看到内容。\nJS处理的部分，在后台运行。")]),t._v(" "),v("h2",{attrs:{id:"组织脚本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组织脚本"}},[t._v("#")]),t._v(" 组织脚本")]),t._v(" "),v("p",[t._v("随便打开一个站点，我们从控制台的network中看看资源加载顺序。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c2c8727f15542e2816514f10efe147a~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("上图从右侧的瀑布图中可以看到第一个发送的请求是html。\n加载之后，读了一段时间，继续加载第二个。\n因为html解释器遇到了css的外链引用。\n所以开始加载css文件，也就是发送了第二个请求。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa85f40570384d68985df63bbe24c74a~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("上图中红色箭头指向的这几个，\n大家可以看到这里白色的部分是同时开始的。\n这代表他们放进了请求队列中，逐个请求。\n鼠标hover上去可以看到如下的具体解释。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abc89cca479c4100b2dd9f0d643d05dc~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("分析各阶段耗时：")]),t._v(" "),v("ul",[v("li",[t._v("首先是在队列中等候的时间。")]),t._v(" "),v("li",[t._v("然后是建立连接的时间。")]),t._v(" "),v("li",[t._v("最后是请求和响应的时间。")])]),t._v(" "),v("p",[t._v("我们从这里看到建立连接也是很耗时的。\n每个script标签初始下载时都会阻塞页面渲染，\n所以现在的网站都尽量减少页面中的script标签（包括外链和内联）。")]),t._v(" "),v("p",[t._v("一方面减少队列中的请求数量：减少了请求，自然减少了建立http连接的个数，减少了建立连接的耗时；\n另一方面减小JS文件的体积：对于一个脚本来说，它的传输速度必然和大小成正相关，也就是脚本体积越大，代码越多，传输越久，同时JS引擎解释起来也就耗时越久。")]),t._v(" "),v("p",[t._v("所以在减少script标签个数的同时，还希望减小JS文件的体积。")]),t._v(" "),v("p",[t._v("但是这两件事往往是对立的！那么有什么办法解决呢？我们需要一个妥善的组织脚本的方式。")]),t._v(" "),v("p",[t._v("为了减少script标签，雅虎（书中提到了很多雅虎的黑科技，可能作者曾就职于雅虎）有一种合并处理器")]),t._v(" "),v("p",[t._v("就是如果你想请求两个文件yahoo-min.JS和event-min.JS可以这样写")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2016cafd7f174ef08747e825bcde683d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("cdn会将这两个脚本合并成一个文件下发")]),t._v(" "),v("p",[t._v("关于存在多个script标签的问题，html做了一些扩展")]),t._v(" "),v("p",[t._v("html规范允许我们在script标签上加某些属性")]),t._v(" "),v("p",[t._v("比如defer属性\n再比如async属性")]),t._v(" "),v("p",[t._v("https://segmentfault.com/a/1190000006778717")]),t._v(" "),v("p",[t._v("defer\n这个属性的用途是表明脚本在执行时不会影响页面的构造。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在script元素中设置defer属性，相当于告诉浏览器立即下载，但延迟执行。")]),t._v(" "),v("p",[t._v("HTML5规范要求脚本按照它们出现的先后顺序执行，因此第一个延迟脚本会先于第二个延迟脚本执行，而这两个脚本会先于DOMContentLoaded事件执行。在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在DOMContentLoad时间触发前执行，因此最好只包含一个延迟脚本。")]),t._v(" "),v("p",[t._v("async\n这个属性与defer类似，都用于改变处理脚本的行为。同样与defer类似，async只适用于外部脚本文件，并告诉浏览器立即下载文件。但与defer不同的是，标记为async的脚本并不保证按照它们的先后顺序执行。")]),t._v(" "),v("p",[t._v("第二个脚本文件可能会在第一个脚本文件之前执行。因此确保两者之间互不依赖非常重要。指定async属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。")]),t._v(" "),v("p",[t._v("为了减少html中script标签的个数，同时减少JS文件体积")]),t._v(" "),v("p",[t._v("前辈们想到的比较好的方法就是逐步加载JS文件")]),t._v(" "),v("p",[t._v("前面提到的defer和async，属于延时")]),t._v(" "),v("p",[t._v("显然它是有一定效果的")]),t._v(" "),v("p",[t._v("但是不是适合所有情景")]),t._v(" "),v("p",[t._v("并没有真正的减少script标签")]),t._v(" "),v("p",[t._v("还有一种方案就是动态脚本")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/863dcbc671ca4654b0ef0dd70a54124f~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("在script中可以加上这样一段代码")]),t._v(" "),v("p",[t._v("也就是说JS执行到这一步的时候，再下载一个新的JS文件，下载完就执行")]),t._v(" "),v("p",[t._v("当然上面的这一段代码还有问题")]),t._v(" "),v("p",[t._v("因为下载过程可能出错")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c9da0ec74924ed09015517af3f8f0e0~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("可以用script的onReadyStateChange属性，监听其响应状态\n控制它的执行\n熟悉原生XHR的同学，应该对onReadyStateChange不陌生\n接下来又遇到一个问题\n有些脚本定义的全局变量或方法，只有在脚本执行结束后才能使用")]),t._v(" "),v("p",[t._v("但是还有一种比较好的实践，就是在脚本加载之后，调用一个callback执行\n这里给出一个loadScript方法")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/356ec20c2de04c70b56973d8632363cd~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fb2137a1b274990a2a1aa632839c7bf~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("了解过CMD  AMD的同学，看上去是不是很熟悉")]),t._v(" "),v("p",[t._v("大家可以看看玉伯的这篇帖子\nhttps://www.zhihu.com/question/20351507/answer/14859415")]),t._v(" "),v("p",[t._v("上面是动态创建脚本元素，来实现无阻塞")]),t._v(" "),v("p",[t._v("同样是网络请求，除了用script标签还可以用xhr")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5858c2ed73c14577bf81a9319cc715c9~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("不过这种实现，受限于同源策略，使用场景比较少")]),t._v(" "),v("p",[t._v("当前端发展到backbone的时候，（backbone是什么，大家可以考古一下）")]),t._v(" "),v("p",[t._v("大家就可以经常在项目中见到类似这样的写法了")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e513d2eb9ce247ed9771a143ee3c1b3d~tplv-k3u1fbpfcp-watermark.image",alt:""}})]),t._v(" "),v("p",[t._v("html中会存在一个简单的script标签，它动态的引入一个脚本，并有一个回调函数，函数中是一个实例的初始化 app.init()")]),t._v(" "),v("p",[t._v("再后来呢，这些事情不用我们来操心了")]),t._v(" "),v("p",[t._v("因为有了webpack")]),t._v(" "),v("p",[t._v("webpack可以做代码拆分，拆分后的代码，形成一个个小的JS文件，\nJS中根据引入关系，动态加载其他JS")]),t._v(" "),v("p",[t._v("也就是import")]),t._v(" "),v("p",[t._v("到后来动态import已经写入了ES的提案")]),t._v(" "),v("p",[t._v("https://es6.ruanyifeng.com/?search=dynamic+import&x=0&y=0#docs/async#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%8C%89%E9%A1%BA%E5%BA%8F%E5%AE%8C%E6%88%90%E5%BC%82%E6%AD%A5%E6%93%8D%E4%BD%9C")])])}),[],!1,null,null,null);p.default=a.exports}}]);