---
title: "Водяные знаки в PDF"
description: "Руководство, чтобы узнать, сколько способов добавить водяные знаки в PDF с помощью GroupDocs.Watermark, который является частью Conholdate.Total для .NET."
keywords: "Добавление водяного знака, водяных знаков в PDF"
type: docs
url: /ru/watermarks-in-pdf/
weight: 70
---

Groupdocs.Watermark, являющийся частью Conholdate.Total для .NET, может добавлять водяные знаки в документы PDF, выбрав один из следующих способов.

## XObjects

Когда *[Добавить](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/add)* метод *[Водяной маркер](https://apireference.groupdocs.com/net/ watermark/groupdocs.watermark/watermarker)*, простой XObject добавляется в документ PDF.

Image XObject и Form XObject используются API GroupDocs.Watermark для добавления [ImageWatermark] (https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarks/imagewatermark) и [TextWatermark] (https://apireference .groupdocs.com/net/watermark/groupdocs.watermark.watermarks/textwatermark) соответственно. Объекты XObject считаются реальным содержимым страницы, поэтому они не удаляются Adobe Acrobat во время очистки документа.

## Артефакты

Водяной знак может быть представлен артефактом в документе PDF. В следующем примере показано, как артефактный водяной знак можно добавить в документ с GroupDocs.Watermark с помощью [PdfArtifactWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfartifactwatermarkoptions).

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddArtifactWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddArtifactWatermark.cs" >}}

## Аннотации

{{< alert style="info" >}}
**Ссылка в формате PDF 1.7**
Аннотация связывает объект, такой как заметка, звук или фильм, с местоположением на странице документа PDF или предоставляет способ взаимодействия с пользователем с помощью мыши и клавиатуры. PDF включает в себя множество стандартных типов аннотаций.
Аннотация водяного знака (PDF 1.6) используется для представления графики, которая должна быть напечатана с фиксированным размером и положением на странице, независимо от размеров печатной страницы.
{{< /alert >}}

Аннотация — это третий тип объектов PDF, с помощью которых может быть представлен водяной знак. Используйте следующий фрагмент кода, чтобы добавить аннотацию водяного знака в документ PDF с помощью [PdfAnnotationWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions).

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddAnnotationWatermark.cs" >}}

## Аннотации только для печати

Вы также можете добавить водяной знак только для печати в параметр документа [PrintOnly](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions/properties/printonly) свойства [PdfAnnotationWatermarkOptions]( https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.pdf/pdfannotationwatermarkoptions). Следующий код демонстрирует этот подход.

**AdvancedUsage.AddingWatermarks.AddWatermarksToPdf.PdfAddPrintOnlyAnnotationWatermark**

{{< gist "conholdate-docs-gists" "07fa3962d7184541a3a822a1e1273eba" "PdfAddPrintOnlyAnnotationWatermark.cs" >}}


Для получения дополнительной информации посетите [эту статью] (https://docs.groupdocs.com/watermark/net/watermarks-in-pdf-document/).









