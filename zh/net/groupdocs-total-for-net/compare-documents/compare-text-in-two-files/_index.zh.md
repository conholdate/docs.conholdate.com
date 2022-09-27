---
title: "比较两个文件中的文本"
description: "本文介绍了使用 GroupDocs.Comparison API（它是 .NET 的 Conholdate.Total 的一部分）来比较两个文件中的文本。"
keywords: "比较两个文件中的文本，使用 C# 比较两个文件中的文本"
type: docs
url: /zh/compare-text-in-two-files/
weight: 20
---
## 文件比较

GroupDocs.Comparison（它是 .NET 的 Conholdate.Total 的一部分）可以检测目标文件和源文件之间的差异，以发现单词、字符级别和段落的变化。它还可以识别样式和格式更改 - 例如粗体、斜体、下划线、罢工槽、字体类型等。

## 使用 C# 比较两个文件中的文本

以下示例将向您展示如何使用 C# 轻松地**比较两个文件中的文本**。
比较两个 Word 文件后，您将得到一个结果文档，其中的更改以三种不同的颜色突出显示：

- 从第一个文件中删除的元素 - **红色**。
- 插入第一个文件的元素。 - **蓝色的**。
- 改变了风格的元素——**绿色**。



## 两个文件比较示例

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-documents.cs" >}}


