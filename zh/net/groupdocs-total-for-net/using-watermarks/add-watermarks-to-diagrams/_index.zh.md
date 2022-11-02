---
title: "向图表添加水印"
description: "使用 GroupDocs.Watermark 学习在 c# 中向图表文档（例如 .vsdx）添加水印的指南，该 GroupDocs.Watermark 是 Conholdate.Total for .NET 的一部分。"
keywords: "向图表添加水印，在 C# 中向图表文档添加水印"
type: docs
url: /zh/net/add-watermarks-to-diagrams/
weight: 80
---

## 为特定类型的所有页面添加水印

使用 GroupDocs.Watermark 是 Conholdate.Total for .NET 的一部分，允许您将水印添加到文档中特定类型的所有页面。它由以下步骤组成。

1. 加载文件
2. 创建并实例化水印对象
3.设置水印属性
4. 使用[DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions/properties/placementtype)指定页面类型添加水印apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions）
5. 保存文件

以下代码演示了如何将水印添加到特定类型的页面。

**AdvancedUsage.AddingWatermarks.AdWatermarksToDiagrams.DiagramAddWatermarkToAllPagesOfParticularType**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToAllPagesOfParticularType.cs" >}}

## 在单独的背景页面上添加水印

在某些情况下，您可能希望将水印放置在单独的新创建的背景页面上。在这种情况下，请使用以下代码。

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToSeparateBackgroundPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToSeparateBackgroundPage.cs" >}}

## 将水印添加到特定页面

GroupDocs.Watermark 允许您使用 [PageIndex](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions/properties/pageindex) 将水印添加到文档的特定页面DiagramPageWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions) 如下例所示。

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToParticularPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToParticularPage.cs" >}}

## 锁定水印

当您调用 [Watermaker](https://apireference.groupdocs.com) 的 [Add](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarker/add/methods/1) 方法时/net/watermark/groupdocs.watermark/watermarker) 为图表文档创建的对象，简单的形状被添加到文档中。添加的水印和用于创建图表的 Visio 形状之间没有区别。

GroupDocs.Watermark 允许您通过设置 [IsLocked](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramwatermarkoptions/properties/islocked) 的 [IsLocked] 属性来防止在 MS Visio 中编辑水印DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions)（如下例所示）。

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramLockWatermarkShape**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramLockWatermarkShape.cs" >}}

有关详细信息，请访问 [本文](https://docs.groupdocs.com/watermark/net/add-watermarks-to-diagram-documents/)。









