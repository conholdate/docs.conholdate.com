---
title: "从照片中去除水印"
description: "学习使用 GroupDocs.Watermark 从 C# 中的照片中删除水印的指南，它是 Conholdate.Total for .NET 的一部分。"
keywords: "从照片中去除水印，去除水印，水印，在c＃中从照片中去除水印"
type: docs
url: /zh/net/removing-watermark-from-photo/
weight: 30
---
## 去除水印

GroupDocs.Watermark API 是 Conholdate.Total for .NET 的一部分，使您能够轻松地 [查找](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/search) 并删除照片或任何其他文档中的特定 [水印](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/possiblewatermark)。以下代码用于此目的。

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermark**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermark.cs" >}}

## 删除具有特定文本格式的水印

Watermarking API 还使您能够根据某些特定的 [文本格式] (https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria) 搜索和删除水印。您可以提供包含[字体名称](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/fontname)、大小、[颜色](https:// /apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/foregroundcolorrange) 等，API 将找到具有匹配属性的水印。以下代码片段显示了如何搜索和删除具有特定文本格式的水印。

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermarkWithParticularTextFormatting**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermarkWithParticularTextFormatting.cs" >}}

## 去除超链接水印

Watermarking API 允许您在任何受支持格式的文档中搜索和删除[超链接](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/hyperlinkpossiblewatermark)。以下代码示例显示了如何从文档中查找和删除具有特定 URL 的超链接。

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveHyperlinksWithParticularUrl**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveHyperlinksWithParticularUrl.cs" >}}









