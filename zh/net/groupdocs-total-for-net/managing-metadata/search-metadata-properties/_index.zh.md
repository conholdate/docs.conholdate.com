---
title: "搜索元数据属性"
description: "本文演示了如何在 .NET 解决方案中搜索元数据并从 PDF、DOCX、PPTX、XLSX、图像、音频、视频和许多其他不同类型的文件中提取所需的元数据属性"
keywords: "搜索元数据"
type: docs
url: /zh/net/search-metadata-properties/
weight: 30
---

您可以使用 GroupDocs.Metadata API 从 .NET 解决方案中的 PDF、DOCX、PPTX、XLSX、图像、音频、视频和许多其他不同类型的文件中轻松搜索元数据并提取所需的元数据属性。

GroupDocs.Metadata for .NET 支持多种文件格式。请参阅 [支持的文件格式](https://docs.groupdocs.com/metadata/net/supported-document-formats/) 文章中的完整列表。

## 使用标签查找最常见的元数据属性

使用标签，您可以通过几行代码搜索所需的属性，甚至不知道加载文件的确切格式。

在本文中，我们将演示如何从 PPTX Microsoft PowerPoint 演示文稿中搜索和提取元数据。使用相同的代码，您可以轻松搜索任何受支持文件格式的元数据属性。

以下步骤和 C# 代码示例展示了**如何在 .NET 解决方案中使用标签搜索特定的元数据属性**：

1. 加载文件进行检查。
2. 组成一个谓词检查一个特定的标签是否分配给一个属性
3.将谓词传递给[FindProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/findproperties)方法
4. 遍历找到的属性

**例子**

{{< gist "conholdate-docs-gists" "f00c0d1b85ac41622421ad1b083dab07" "search-metadata.cs" >}}

结果，我们获得了所有元数据属性，其中包含上次编辑文档的人的姓名以及存储上次编辑文档的日期/时间的所有属性。




