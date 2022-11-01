---
title: "PowerPoint-Dateien vergleichen"
description: "In diesem Artikel wird die Verwendung der GroupDocs.Comparison-API (die Teil von Conholdate.Total für .NET ist) zum Vergleichen von Powerpoint-Dateien erläutert."
keywords: "PowerPoint-Dateien vergleichen, PowerPoint-Dateien in C# vergleichen"
type: docs
url: /de/net/compare-powerpoint-files/
weight: 50
---

## Vergleichen Sie PowerPoint-Dateien in C#

Der Vergleich von PowerPoint-Dateien mit den Tools von Drittanbietern reicht eindeutig nicht aus. **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** (das ein Teil von Conholdate.Total für .NET ist) bietet Ihnen viele Funktionen zum Vergleichen einer breiten Palette von [unterstützten Datei Formate] (https://docs.groupdocs.com/comparison/net/supported-document-formats/), einschließlich PowerPoint-Präsentationsformat.

## Fallstudie
Betrachten wir einen Anwendungsfall: Sie haben zu unterschiedlichen Zeiten eine Präsentation gehalten, aber die Elemente auf den Folien sind nicht so angeordnet, wie Sie es ursprünglich getan haben. Um zu wissen, wo sich die Folien unterscheiden, können Sie **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** verwenden, um zwei Dateien im PPTX-Format zusammen mit einer integrierten Option zu vergleichen, die hilft Stiländerungen finden.

| | Präsentationen |
| --- | --- |
|Original | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_1.png)|
|Geändert | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_2.png)|

[**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/net) bietet die Möglichkeit, zwei Dateien im PPTX-Format (oder anderen [unterstützten Dateiformaten](https://docs. groupdocs.com/comparison/net/supported-document-formats/))

Im Folgenden sind die Schritte zum Vergleichen von zwei PPTX-Dateien aufgeführt.

* Objekt [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) mit Pfad oder Stream des Quelldokuments instanziieren;
* Instanziieren Sie das Objekt [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions) mit den gewünschten Parametern;
* Rufen Sie die Methode [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) auf und übergeben Sie [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison .options/compareoptions) Objekt zu Methode;

## Codebeispiel
Das folgende Codebeispiel veranschaulicht, wie zwei PPTX-Dateien verglichen werden.

{{< gist "conholdate-docs-gists" "f2fdd8fd59740ba13ef67ddd8356e094" "compare-powerpoint-files.cs" >}}

Als Ergebnis erhalten wir eine PPTX-Datei, in der die gelöschten Elemente in <font color="red">**rot**</font> markiert sind, die hinzugefügten – in <font color="blue">**blau**</font> und die geänderten – in <font color="green">**grün**</font>

| Ergebnisfolie |
| --- |
| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_3.png))






