(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{505:function(t,s,n){"use strict";n.r(s);var a=n(4),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("strong",[t._v("题目")]),t._v("：\n写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("F(0) = 0,   F(1) = 1\nF(N) = F(N - 1) + F(N - 2), 其中 N > 1.\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。")]),t._v(" "),n("p",[t._v("答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。")]),t._v(" "),n("p",[n("strong",[t._v("示例")]),t._v("：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入：n = 2\n输出：1\n\n输入：n = 5\n输出：5\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("限制："),n("code",[t._v("0 <= n <= 100")])]),t._v(" "),n("p",[t._v("解答：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} n\n * @return {number}\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fib")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fibList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      fibList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fibList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fibList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fibList"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("p",[t._v("解析：")]),t._v(" "),n("p",[t._v("斐波那契数列的定义是 f(n + 1) = f(n) + f(n - 1)f(n+1)=f(n)+f(n−1) ，生成第 nn 项的做法有以下几种：")]),t._v(" "),n("p",[t._v("递归法：")]),t._v(" "),n("p",[t._v("原理： 把 f(n)f(n) 问题的计算拆分成 f(n-1)f(n−1) 和 f(n-2)f(n−2) 两个子问题的计算，并递归，以 f(0)f(0) 和 f(1)f(1) 为终止条件。")]),t._v(" "),n("p",[t._v("缺点： 大量重复的递归计算，例如 f(n)f(n) 和 f(n - 1)f(n−1) 两者向下递归需要 各自计算 f(n - 2)f(n−2) 的值。")]),t._v(" "),n("p",[t._v("记忆化递归法：")]),t._v(" "),n("p",[t._v("原理： 在递归法的基础上，新建一个长度为 nn 的数组，用于在递归时存储 f(0)f(0) 至 f(n)f(n) 的数字值，重复遇到某数字则直接从数组取用，避免了重复的递归计算。")]),t._v(" "),n("p",[t._v("缺点： 记忆化存储需要使用 O(N)O(N) 的额外空间。")]),t._v(" "),n("p",[t._v("动态规划：")]),t._v(" "),n("p",[t._v("原理： 以斐波那契数列性质 f(n + 1) = f(n) + f(n - 1)f(n+1)=f(n)+f(n−1) 为转移方程。")]),t._v(" "),n("p",[t._v("从计算效率、空间复杂度上看，动态规划是本题的最佳解法。")]),t._v(" "),n("p",[t._v("动态规划解析：")]),t._v(" "),n("ul",[n("li",[t._v("状态定义： 设 dpdp 为一维数组，其中 dp[i]dp[i] 的值代表 斐波那契数列第 ii 个数字 。")]),t._v(" "),n("li",[t._v("转移方程： dp[i + 1] = dp[i] + dp[i - 1]dp[i+1]=dp[i]+dp[i−1] ，即对应数列定义 f(n + 1) = f(n) + f(n - 1)f(n+1)=f(n)+f(n−1) ；")]),t._v(" "),n("li",[t._v("初始状态： dp[0] = 0dp[0]=0, dp[1] = 1dp[1]=1 ，即初始化前两个数字；")]),t._v(" "),n("li",[t._v("返回值： dp[n]dp[n] ，即斐波那契数列的第 nn 个数字。")])]),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-jbnPaZ-Picture2.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-ZIXjom-Picture3.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-UHnEEL-Picture4.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-UHtjpA-Picture5.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-jXtHXx-Picture6.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-ppWbXc-Picture7.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-lyXbyd-Picture8.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-vhrJxv-Picture9.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-cIpqVP-Picture10.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-NmQlPg-Picture11.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-coycTs-Picture12.png"}}),t._v(" "),n("img",{attrs:{src:"https://pic.leetcode-cn.com/1599882883-FZVjJi-Picture13.png"}})])}),[],!1,null,null,null);s.default=e.exports}}]);