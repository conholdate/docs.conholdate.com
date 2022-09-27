---
title: "比较两个 PDF 文档"
description: "本文将解释如何使用 GroupDocs.Comparison API 比较两个 pdf 文档，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "比较两个 PDF 文档，使用 C# 比较两个 PDF 文档"
type: docs
url: /zh/compare-two-pdf-documents/
weight: 20
---
## 使用 C# 比较两个 PDF 文档

很难找到其中一个版本的更改内容之间的差异，尤其是在处理大量 PDF 文档时。 **[GroupDocs.Comparison for .NET](https://products.groupdocs.com/comparison/net)**（它是 Conholdate.Total for .NET 的一部分）为您提供了多种比较广泛的选择[支持的文件格式](https://docs.groupdocs.com/comparison/net/supported-document-formats/)，包括 PDF 格式。

比较后，生成的文件中有三种颜色突出了差异。

* 插入第一个文件的元素。 – <font color="blue">**蓝色**</font> ，默认情况下
* 从第一个文件中删除的元素 – <font color="red">**red**</font> , 默认情况下
* 已更改样式（字体、颜色等）的元素 – <font color="green">**green**</font> ，默认情况下

|源/目标/结果 PDF 文件 |
| --- | --- |
|来源 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-1.png) |
|目标 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-2.png)|
|结果 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-3.png)|

## 比较两个 PDF 文档示例

{{< gist "conholdate-docs-gists" "d8a8f36405b2a0bec4cfc074e9e9c7ad" "compare-two-pdf-documents.cs" >}}









