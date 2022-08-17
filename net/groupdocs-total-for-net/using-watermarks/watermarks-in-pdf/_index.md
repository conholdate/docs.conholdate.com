---
title: "Watermarks in PDF"
description: "A guide to learn how many ways are available to add watermarks in PDF using GroupDocs.Watermark which is part of Conholdate.Total for .NET."
keywords: Adding Watermark, watermarks in PDF
type: docs
url: /watermarks-in-pdf/
weight: 70
---

Groupdocs.Watermark which is part of Conholdate.Total for .NET, can add watermarks in PDF documents by choosing one of the following ways.

## XObjects

When *[Add](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/add)* method of *[Watermarker](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker)* class is called, simple XObject is added to a PDF document.

Image XObject and Form XObject are used by GroupDocs.Watermark API to add [ImageWatermark](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarks/imagewatermark) and [TextWatermark](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarks/textwatermark) respectively. XObjects are considered as a page real content, therefore, they are not removed by Adobe Acrobat during document sanitization.

## Artifacts

The watermark can be represented by an artifact in a PDF document. The following example shows how artifact watermark can be added to a document with GroupDocs.Watermark using [PdfArtifactWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfartifactwatermarkoptions).

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddArtifactWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddArtifactWatermark.cs" >}}

## Annotations

{{< alert style="info" >}}
**PDF Reference 1.7**
An annotation associates an object such as a note, sound, or movie with a location on a page of a PDF document, or provides a way to interact with the user by means of the mouse and keyboard. PDF includes a wide variety of standard annotation types.
A watermark annotation (PDF 1.6) is used to represent graphics that are expected to be printed at a fixed size and position on a page, regardless of the dimensions of the printed page.
{{< /alert >}}

Annotation is the third type of PDF entities by which a watermark can be represented. Use the following code snippet to add watermark annotation to a PDF document using [PdfAnnotationWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions).

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddAnnotationWatermark.cs" >}}

## Print-only annotations  

You can also add print only annotation watermark to the document setting [PrintOnly](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions/properties/printonly) property of [PdfAnnotationWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions). The following code demonstrates this approach.

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddPrintOnlyAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddPrintOnlyAnnotationWatermark.cs" >}}


For more details please visit [this article](https://docs.groupdocs.com/watermark/net/watermarks-in-pdf-document/).








