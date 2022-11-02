---
title: "比较两个 Word 文档的差异"
description: "本文将解释如何使用 GroupDocs.Comparison API 比较两个 word 文档的差异，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "比较两个 Word 文档的差异，比较两个 Word 文档的 C# 差异"
type: docs
url: /zh/net/compare-two-word-documents-for-differences/
weight: 20
---
## 在 C# 中比较两个 word 文档的差异

在您需要比较彼此相似但有细微差异的大型 word 文件的情况下，您想了解这些情况。因此，手动查找这些更改是一个非常耗时的过程。
**[GroupDocs.Comparison for .NET](https://products.groupdocs.com/comparison/net)**（它是 Conholdate.Total for .NET 的一部分）为您提供了许多选项来比较各种[支持的文件格式](https://docs.groupdocs.com/comparison/net/supported-document-formats/)。

比较两个 Word 文件后，您将得到一个结果文档，其中的更改以三种不同的颜色突出显示：

* 插入第一个文件的元素。 – <font color="blue">**蓝色**</font> ，默认情况下
* 从第一个文件中删除的元素 - <font color="red">**red**</font> ，默认情况下
* 更改了样式（字体、颜色等）的元素 – <font color="green">**green**</font> ，默认情况下

|源/目标/结果词文件|
| --- | --- |
|来源 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-word-1.png) |
|目标 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-word-2.png)|
|结果 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-word-3.png)|

## 比较两个word文档示例

{{< gist "conholdate-docs-gists" "73111e0960857a7f0091f3fc5011ab0d" "compare-two-word-documents-for-differences.cs" >}}









