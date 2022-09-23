---
title: "比较 Powerpoint 文件"
description: "本文介绍了使用 GroupDocs.Comparison API（它是 Conholdate.Total for .NET 的一部分）来比较 powerpoint 文件。"
keywords: "比较 Powerpoint 文件，比较 C# 中的 Powerpoint 文件"
type: docs
url: /compare-powerpoint-files/
weight: 50
---

## 比较 C# 中的 Powerpoint 文件

使用第三方工具比较 PowerPoint 文件显然是不够的。 **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)**（它是 Conholdate.Total for .NET 的一部分）为您提供了许多用于比较各种 [支持的文件格式](https://docs.groupdocs.com/comparison/net/supported-document-formats/)，包括 PowerPoint 演示文稿格式。

## 案例分析
让我们考虑一个用例，您在不同时间进行了演示，但幻灯片上的元素与最初的位置不同。要了解幻灯片的不同之处，您可以使用 **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** 比较 PPTX 格式的两个文件以及有助于发现风格的变化。

| |演讲 |
| --- | --- |
|原创 | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_1.png)|
|修改 | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_2.png)|

[**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/net) 提供了比较 PPTX 格式（或任何其他 [支持的文件格式](https://docs. groupdocs.com/comparison/net/supported-document-formats/))

以下是比较两个 PPTX 文件的步骤。

* 使用源文档路径或流实例化 [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) 对象；
* 使用所需参数实例化 [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions) 对象；
* 调用 [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) 方法并通过 [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison) .options/compareoptions) 对象到方法；

## 代码示例
以下代码示例演示了如何比较两个 PPTX 文件。

{{< gist "conholdate-docs-gists" "f2fdd8fd59740ba13ef67ddd8356e094" "compare-powerpoint-files.cs" >}}

结果，我们得到一个 PPTX 文件，其中删除的元素标记为<font color="red">**red**</font> ，添加的 - 标记为<font color="blue">**blue**</font> ，修改的 - 标记为<font color="green">**green**</font>

|结果幻灯片 |
| --- |
| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_3.png))






