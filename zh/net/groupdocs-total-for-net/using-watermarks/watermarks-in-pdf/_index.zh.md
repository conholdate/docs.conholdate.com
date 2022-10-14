---
title: "PDF 中的水印"
description: "了解有多少种方法可以使用 GroupDocs.Watermark 在 PDF 中添加水印的指南，它是 Conholdate.Total for .NET 的一部分。"
keywords: "添加水印，PDF中的水印"
type: docs
url: /zh/watermarks-in-pdf/
weight: 70
---

Groupdocs.Watermark 是 Conholdate.Total for .NET 的一部分，可以通过选择以下方式之一在 PDF 文档中添加水印。

## 对象

当*[添加](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/add)*方法*[Watermarker](https://apireference.groupdocs.com/net/ watermark/groupdocs.watermark/watermarker)* 类被调用，简单的 XObject 被添加到 PDF 文档中。

GroupDocs.Watermark API 使用 Image XObject 和 Form XObject 添加 [ImageWatermark](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarks/imagewatermark) 和 [TextWatermark](https://apireference .groupdocs.com/net/watermark/groupdocs.watermark.watermarks/textwatermark）分别。 XObject 被视为页面真实内容，因此，Adobe Acrobat 在文档清理期间不会删除它们。

## 神器

水印可以由 PDF 文档中的工件表示。以下示例显示如何使用 [PdfArtifactWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfartifactwatermarkoptions) 使用 GroupDocs.Watermark 将工件水印添加到文档中。

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddArtifactWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddArtifactWatermark.cs" >}}

## 注释

{{<警报样式=“信息”>}}
**PDF 参考 1.7**
注释将注释、声音或电影等对象与 PDF 文档页面上的位置相关联，或提供一种通过鼠标和键盘与用户交互的方式。 PDF 包括多种标准注释类型。
水印注释 (PDF 1.6) 用于表示预期在页面上以固定尺寸和位置打印的图形，而与打印页面的尺寸无关。
{{< /警报 >}}

注释是可以表示水印的第三种 PDF 实体。使用以下代码片段通过 [PdfAnnotationWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions) 向 PDF 文档添加水印注释。

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddAnnotationWatermark.cs" >}}

## 仅打印注释

您还可以将仅打印注释水印添加到 [PdfAnnotationWatermarkOptions]( https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions）。下面的代码演示了这种方法。

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddPrintOnlyAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddPrintOnlyAnnotationWatermark.cs" >}}


有关详细信息，请访问 [本文](https://docs.groupdocs.com/watermark/net/watermarks-in-pdf-document/)。









