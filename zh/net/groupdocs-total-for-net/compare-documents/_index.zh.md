---
title: "比较文件"
description: "本节将指导您使用 GroupDocs.Comparison API，它是 Conholdate.Total for .NET 的一部分。下面的文章显示了如何简单地比较文档。"
keywords: "比较文件"
type: docs
url: /zh/net/compare-documents/
weight: 20
---
## 比较功能

**[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** 使用的更改检测算法的相关信息允许检测不同文档部分和块中的更改：

* 文本块 - 段落、单词和字符；
* 表格；
* 图片;
* 形状等
    

为了更好地分离检测到的更改，添加、修改或删除的文档部分以不同的颜色突出显示：

* 添加 - <font color="blue">**蓝色**</font>
* 修改 – <font color="green">**绿色**</font>
* 风格 – <font color="green">**绿色**</font>
* 已删除 – <font color="red">**红色**</font>

如果需要，可以自定义样式着色方案，更改的文本块可以用不同的格式标记 - 斜体、粗体、下划线、删除线等。

以下是比较两个文档的简单步骤：
* 使用源文档路径或流实例化 [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) 对象；
* 调用 [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) 方法并指定目标文档路径或流。
* 调用 [比较](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/compare/index) 方法。

以下代码示例显示了使用几行代码进行文档比较的最简单情况。

## 比较本地文件中的文档

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-documents.cs" >}}




## 比较流中的文档

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-document-from-stream.cs" >}}

有关详细信息，请访问 [本文](https://docs.groupdocs.com/watermark/net/adding-text-watermarks/)。




