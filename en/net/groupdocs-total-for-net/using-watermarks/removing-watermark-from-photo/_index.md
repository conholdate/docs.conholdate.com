---
title: "Removing Watermark from Photo"
description: "A guide to learn removing watermark from photo in c# using GroupDocs.Watermark which is a part of Conholdate.Total for .NET."
keywords: removing watermark from photo, remove watermark, watermark, remove watermark from photo in c#
type: docs
url: /removing-watermark-from-photo/
weight: 30
---
## Remove watermark

GroupDocs.Watermark API which is a part of Conholdate.Total for .NET, enables you to easily [find](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/search) and remove a particular [watermark](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/possiblewatermark) from photo or any other document. Following code serves this purpose.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermark**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermark.cs" >}}

## Remove watermark with particular text formatting

Watermarking API also enables you to search and remove the watermarks on the basis of some particular [text formatting](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria). You can provide a search criterion containing [font name](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/fontname), size, [color](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/foregroundcolorrange) etc and the API will find the watermarks with matching properties. Following code snippet shows how to search and remove watermarks with a particular text formatting.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermarkWithParticularTextFormatting**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermarkWithParticularTextFormatting.cs" >}}

## Remove hyperlink watermarks

Watermarking API allows you to search and remove [hyperlinks](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/hyperlinkpossiblewatermark) in a document of any supported format. Following code sample shows how to find and remove hyperlinks with a particular URL from a document.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveHyperlinksWithParticularUrl**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveHyperlinksWithParticularUrl.cs" >}}








