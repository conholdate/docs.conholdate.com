---
title: "Add Watermarks to Diagrams"
description: "A guide to learn adding watermark to diagrams documents (such as .vsdx) in c# using GroupDocs.Watermark which is a part of Conholdate.Total for .NET."
keywords: Add Watermarks to Diagrams, adding watermark to diagrams documents in C#
type: docs
url: /add-watermarks-to-diagrams/
weight: 80
---

## Adding watermark to all pages of a particular type

Using GroupDocs.Watermark which is a part of Conholdate.Total for .NET, allows you to add watermark to all pages of a certain type in a document. It consists of following steps.

1. Load the document
2. Create and instantiate watermark object
3. Set watermark properties
4. Add watermark by specifying page type using [PlacementType](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions/properties/placementtype) of [DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions)
5. Save the document

Following code demonstrate how to add watermark to a particular type of the pages.

**AdvancedUsage.AddingWatermarks.AdWatermarksToDiagrams.DiagramAddWatermarkToAllPagesOfParticularType**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToAllPagesOfParticularType.cs" >}}

## Adding watermark on separate background page

In some cases, you may want to place the watermark on separate newly created background pages. In this case, use below code.

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToSeparateBackgroundPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToSeparateBackgroundPage.cs" >}}

## Add watermark to a particular page

GroupDocs.Watermark allows you to add watermark to a particular page of the document using [PageIndex](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions/properties/pageindex) of [DiagramPageWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions) as shown in below example.

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToParticularPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToParticularPage.cs" >}}

## Lock watermark

When you're calling [Add](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarker/add/methods/1) method of [Watermaker](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker) object created for the Diagram document, simple shape is added to the document. There is no difference between added watermark and Visio shapes that are used to create diagrams.

GroupDocs.Watermark allows you to protect watermark from editing in MS Visio by setting [IsLocked](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramwatermarkoptions/properties/islocked) property of [DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions) (as shown in the following example).

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramLockWatermarkShape**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramLockWatermarkShape.cs" >}}

For more details please visit [this article](https://docs.groupdocs.com/watermark/net/add-watermarks-to-diagram-documents/).








