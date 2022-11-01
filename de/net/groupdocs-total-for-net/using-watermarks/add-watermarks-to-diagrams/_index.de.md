---
title: "Wasserzeichen zu Diagrammen hinzufügen"
description: "Eine Anleitung zum Erlernen des Hinzufügens von Wasserzeichen zu Diagrammdokumenten (.vsdx) in C# mithilfe von GroupDocs.Watermark, das ein Teil von Conholdate.Total für .NET ist."
keywords: "Wasserzeichen zu Diagrammen hinzufügen, Wasserzeichen zu Diagrammdokumenten in C# hinzufügen"
type: docs
url: /de/net/add-watermarks-to-diagrams/
weight: 80
---

## Hinzufügen von Wasserzeichen zu allen Seiten eines bestimmten Typs

Mit GroupDocs.Watermark, das Teil von Conholdate.Total für .NET ist, können Sie allen Seiten eines bestimmten Typs in einem Dokument Wasserzeichen hinzufügen. Es besteht aus folgenden Schritten.

1. Legen Sie das Dokument ein
2. Wasserzeichenobjekt erstellen und instanziieren
3. Legen Sie die Wasserzeicheneigenschaften fest
4. Fügen Sie Wasserzeichen hinzu, indem Sie den Seitentyp mit [PlacementType](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions/properties/placementtype) von [DiagramShapeWatermarkOptions](https:// apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions)
5. Speichern Sie das Dokument

Der folgende Code zeigt, wie einem bestimmten Seitentyp ein Wasserzeichen hinzugefügt wird.

**AdvancedUsage.AddingWatermarks.AdWatermarksToDiagrams.DiagramAddWatermarkToAllPagesOfParticularType**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToAllPagesOfParticularType.cs" >}}

## Wasserzeichen auf separater Hintergrundseite hinzufügen

In einigen Fällen möchten Sie das Wasserzeichen möglicherweise auf separaten neu erstellten Hintergrundseiten platzieren. Verwenden Sie in diesem Fall den folgenden Code.

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToSeparateBackgroundPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToSeparateBackgroundPage.cs" >}}

## Wasserzeichen zu einer bestimmten Seite hinzufügen

Mit GroupDocs.Watermark können Sie einer bestimmten Seite des Dokuments Wasserzeichen hinzufügen, indem Sie [PageIndex](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions/properties/pageindex) von [ DiagramPageWatermarkOptions] (https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions), wie im folgenden Beispiel gezeigt.

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToParticularPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToParticularPage.cs" >}}

## Wasserzeichen sperren

Wenn Sie die Methode [Add](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarker/add/methods/1) von [Watermaker](https://apireference.groupdocs.com /net/watermark/groupdocs.watermark/watermarker) Objekt, das für das Diagrammdokument erstellt wurde, wird dem Dokument eine einfache Form hinzugefügt. Es gibt keinen Unterschied zwischen hinzugefügten Wasserzeichen und Visio-Formen, die zum Erstellen von Diagrammen verwendet werden.

Mit GroupDocs.Watermark können Sie Wasserzeichen vor der Bearbeitung in MS Visio schützen, indem Sie die Eigenschaft [IsLocked](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramwatermarkoptions/properties/islocked) von [ DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions) (wie im folgenden Beispiel gezeigt).

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramLockWatermarkShape**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramLockWatermarkShape.cs" >}}

Weitere Einzelheiten finden Sie in [diesem Artikel](https://docs.groupdocs.com/watermark/net/add-watermarks-to-diagram-documents/).









