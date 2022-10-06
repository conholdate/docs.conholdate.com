---
title: "Wasserzeichen im PDF-Format"
description: "Eine Anleitung, um zu erfahren, wie viele Möglichkeiten es gibt, Wasserzeichen in PDF mit GroupDocs.Watermark hinzuzufügen, das Teil von Conholdate.Total für .NET ist."
keywords: "Hinzufügen von Wasserzeichen, Wasserzeichen in PDF"
type: docs
url: /de/watermarks-in-pdf/
weight: 70
---

Groupdocs.Watermark, das Teil von Conholdate.Total für .NET ist, kann Wasserzeichen in PDF-Dokumente einfügen, indem Sie eine der folgenden Methoden auswählen.

## XObjects

Wenn *[Add](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/add)* Methode von *[Watermarker](https://apireference.groupdocs.com/net/ watermark/groupdocs.watermark/watermarker)* Klasse aufgerufen wird, wird einem PDF-Dokument ein einfaches XObject hinzugefügt.

Image XObject und Form XObject werden von der GroupDocs.Watermark-API verwendet, um [ImageWatermark](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarks/imagewatermark) und [TextWatermark](https://apireference .groupdocs.com/net/watermark/groupdocs.watermark.watermarks/textwatermark). XObjects werden als echter Seiteninhalt betrachtet, daher werden sie von Adobe Acrobat während der Dokumentbereinigung nicht entfernt.

## Artefakte

Das Wasserzeichen kann durch ein Artefakt in einem PDF-Dokument dargestellt werden. Das folgende Beispiel zeigt, wie einem Dokument mit GroupDocs.Watermark unter Verwendung von [PdfArtifactWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfartifactwatermarkoptions) ein Artefaktwasserzeichen hinzugefügt werden kann.

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddArtifactWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddArtifactWatermark.cs" >}}

## Anmerkungen

{{< alert style="info" >}}
**PDF-Referenz 1.7**
Eine Anmerkung verknüpft ein Objekt wie eine Notiz, einen Ton oder einen Film mit einer Position auf einer Seite eines PDF-Dokuments oder bietet eine Möglichkeit, mit dem Benutzer über Maus und Tastatur zu interagieren. PDF enthält eine Vielzahl von Standardanmerkungstypen.
Eine Wasserzeichenanmerkung (PDF 1.6) wird verwendet, um Grafiken darzustellen, die in einer festen Größe und Position auf einer Seite gedruckt werden sollen, unabhängig von den Abmessungen der gedruckten Seite.
{{< /Alarm >}}

Anmerkungen sind die dritte Art von PDF-Entitäten, durch die ein Wasserzeichen dargestellt werden kann. Verwenden Sie das folgende Code-Snippet, um einem PDF-Dokument mit [PdfAnnotationWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions) Wasserzeichenanmerkungen hinzuzufügen.

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddAnnotationWatermark.cs" >}}

## Nur-Druck-Anmerkungen

Sie können der Eigenschaft [PrintOnly](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions/properties/printonly) von [PdfAnnotationWatermarkOptions]( https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions). Der folgende Code demonstriert diesen Ansatz.

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddPrintOnlyAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddPrintOnlyAnnotationWatermark.cs" >}}


Weitere Einzelheiten finden Sie in [diesem Artikel](https://docs.groupdocs.com/watermark/net/watermarks-in-pdf-document/).









