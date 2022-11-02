---
title: "缩小 HTML 以优化渲染"
description: "本文展示了在将文档呈现为 HTML 时如何缩小 HTML 和 CSS。"
keywords: "缩小html，渲染成html"
type: docs
url: /zh/net/minify-html-to-optimize-rendering/
weight: 30
---


## 缩小 HTML 以优化 C# 中 HTML 的呈现

几乎在所有情况下，缩小过程都提供了与所有浏览器中的原始内容相同的输出，但缩小的 HTML 内容没有通过严格的 HTML 验证。这是缩小过程背后的技术列表。

### HTML 缩小

* 注释（除非它们包含 IE 条件语句）被完全删除
* 条件注释被压缩
* 标签内和标签之间的空格和换行符被删除
* 文档类型声明被简化为`<!DOCTYPE html> ` 并且所有 HTML 标记属性都被删除
* 协议声明如 http:、https: 和 javascript: 已从路径值中删除
* 单词之间的多个空格（除非它们出现在 pre 或 textarea 标签内）被替换为单个空格
* 移除标记属性值周围的引号（内联事件除外）
* 删除了“script”、“style”和“link”标签的默认属性
* 布尔属性被简化，因此 `<input type="text" disabled="disabled"> `变成`<input type=text disabled> `

### CSS 缩小

当 *Minify* 设置打开时，嵌入的 CSS 内容会被缩小。

* 删除所有无关紧要的空白。
* 删除所有评论。
* 删除所有不必要的分号分隔符。
* 减少颜色值。
* 通过删除前导零和尾随零来减少整数表示。
* 从数字零值中删除单位说明符。

## 如何缩小 HTML 和 CSS

Viewer API 提供 *HtmlViewOptions* 类的 *Minify* 属性，可让您缩小输出内容。缩小在不破坏内容结构的情况下删除注释、多余的空格和其他不需要的字符。结果，页面变得更小并且加载更快。以下示例演示了如何在将 MS Word 文档呈现为 HTML 时缩小输出内容。

以下代码示例显示了如何启用缩小。

{{< gist "conholdate-docs-gists" "5746ab59a9c4a41e91c90e1704d50699" "minify-html.cs" >}}

{{< alert style="info" >}}此设置不会像使用 Gzip 压缩（应该从您的网络服务器启用和配置）那样显着压缩内容。但它仍然可能很有价值，可以与 Gzip 压缩结合使用作为额外的优化。 {{< /alert >}}







