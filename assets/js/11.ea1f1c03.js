(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{494:function(t,v,_){"use strict";_.r(v);var e=_(4),l=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("当用户点击网站页面上的内容URL，经过本地DNS系统解析，DNS系统会最终将域名的解析权交给CNAME指向的CDN专用的DNS服务器。")]),t._v(" "),_("p",[t._v("CDN的DNS服务器将CDN的全局负载均衡设备IP地址返回用户")]),t._v(" "),_("p",[t._v("用户向CDN的全局负载均衡设备发起内容URL访问请求。")]),t._v(" "),_("p",[t._v("CDN全局负载均衡设备根据用户IP地址，以及用户请求的内容URL，选择一台用户所属区域的区域负载均衡设备，告诉用户向这台设备发起请求。")]),t._v(" "),_("p",[t._v("基于以下这些条件的综合分析之后，区域负载均衡设备会向全局负载均衡设备返回一台缓存服务器的IP地址：")]),t._v(" "),_("ul",[_("li",[t._v("根据用户IP地址，判断哪一台服务器距离用户最近。")]),t._v(" "),_("li",[t._v("根据用户所请求的URL中携带的内容名称，判断哪一台服务器上由用户所需内容")]),t._v(" "),_("li",[t._v("查询各个服务器当前的负载情况，判断哪一台服务器上有服务能力。")])]),t._v(" "),_("p",[t._v("全局负载均衡设备，把服务器的IP地址返回给用户")]),t._v(" "),_("p",[t._v("用户向缓存服务器发起请求，缓存服务器响应用户请求，将用户所需内容传送的客户端。如果这台缓存服务器上并没有用户想要的内容，而区域均衡设备依然将它分配给了用户，那么这台服务器要想它的上一级缓存服务器请求内容，直至追溯到网站的源服务器将内容拉到本地。")])])}),[],!1,null,null,null);v.default=l.exports}}]);