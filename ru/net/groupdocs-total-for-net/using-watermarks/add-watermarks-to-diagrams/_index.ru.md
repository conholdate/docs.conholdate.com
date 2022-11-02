---
title: "Добавляйте водяные знаки к диаграммам"
description: "Руководство по добавлению водяных знаков в документы диаграмм (например, .vsdx) в C# с использованием GroupDocs.Watermark, который является частью Conholdate.Total для .NET."
keywords: "Добавление водяных знаков к диаграммам, добавление водяных знаков к документам диаграмм на C#"
type: docs
url: /ru/net/add-watermarks-to-diagrams/
weight: 80
---

## Добавление водяного знака на все страницы определенного типа

Использование GroupDocs.Watermark, входящего в состав Conholdate.Total для .NET, позволяет добавить водяной знак на все страницы документа определенного типа. Он состоит из следующих шагов.

1. Загрузите документ
2. Создайте и создайте экземпляр объекта водяного знака
3. Установите свойства водяного знака
4. Добавьте водяной знак, указав тип страницы с помощью [PlacementType](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions/properties/placementtype) из [DiagramShapeWatermarkOptions](https:// apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions)
5. Сохраните документ

Следующий код демонстрирует, как добавить водяной знак к определенному типу страниц.

**AdvancedUsage.AddingWatermarks.AdWatermarksToDiagrams.DiagramAddWatermarkToAllPagesOfParticularType**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToAllPagesOfParticularType.cs" >}}

## Добавление водяного знака на отдельную фоновую страницу

В некоторых случаях вы можете разместить водяной знак на отдельных вновь созданных фоновых страницах. В этом случае используйте приведенный ниже код.

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToSeparateBackgroundPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToSeparateBackgroundPage.cs" >}}

## Добавить водяной знак на определенную страницу

GroupDocs.Watermark позволяет добавить водяной знак на определенную страницу документа с помощью [PageIndex](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions/properties/pageindex) из [ DiagramPageWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagrampagewatermarkoptions), как показано в примере ниже.

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramAddWatermarkToParticularPage**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramAddWatermarkToParticularPage.cs" >}}

## Заблокировать водяной знак

Когда вы вызываете [Добавить](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.watermarker/add/methods/1) метод [Watermaker](https://apireference.groupdocs.com /net/watermark/groupdocs.watermark/watermarker) создается для документа Diagram, в документ добавляется простая фигура. Нет никакой разницы между добавленным водяным знаком и фигурами Visio, которые используются для создания диаграмм.

GroupDocs.Watermark позволяет защитить водяной знак от редактирования в MS Visio, установив свойство [IsLocked](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramwatermarkoptions/properties/islocked) для [ DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.options.diagram/diagramshapewatermarkoptions) (как показано в следующем примере).

**AdvancedUsage.AddingWatermarks.AddWatermarksToDiagrams.DiagramLockWatermarkShape**

{{< gist "conholdate-docs-gists" "9ee0643fc83f6723e9bcd30650fbeb35" "DiagramLockWatermarkShape.cs" >}}

Для получения дополнительной информации посетите [эту статью] (https://docs.groupdocs.com/watermark/net/add-watermarks-to-diagram-documents/).









