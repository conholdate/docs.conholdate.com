---
title: "比较 Excel 文件"
description: "本文介绍了如何使用 GroupDocs.Comparison API（它是 Conholdate.Total for .NET 的一部分）来比较 excel 文档。"
keywords: "比较 Excel 文件，比较 C# 中的 Excel 文件，比较两个 Excel 文件的代码示例"
type: docs
url: /compare-excel-files/
weight: 70
---

## 比较 C# 中的 Excel 文件

比较工作表可帮助您检测可能出现的问题，例如额外条目、不正确的表格、不一致的公式或不正确的格式。**[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** 为您提供用于比较各种 [支持的文件格式](https://docs.groupdocs.com/comparison/net/supported-document-formats/) 的许多选项，包括 Excel 格式。

比较后，生成的文件中有三种颜色突出显示了差异。您还可以自己指定颜色以识别下一个差异：

* 插入第一个文件的元素。 – <font color="blue">**蓝色**</font> ，默认情况下
* 从第一个文件中删除的元素 – <font color="red">**red**</font> , 默认情况下
* 更改了样式（字体、颜色等）的元素 – <font color="green">**green**</font> ，默认情况下

## 比较两个 Excel 文件的代码示例

{{< gist "conholdate-docs-gists" "05e9a0800d63d9d68047e17a88f86644" "compare-excel-files.cs" >}}

|源/目标/结果 Excel 文件 |
| --- | --- |
|来源 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-1.png) |
|目标 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-2.png)|
|结果 |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-3.png)|

结果，您有一个带有突出显示更改的 Excel 文件，其中删除的元素用字体<font color="red">**red**</font>标记，添加的 - 用<font color="blue">**blue**</font> ，修改的 - 用<font color="yellow">**green**</font> 。









