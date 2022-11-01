---
title: "Rechtsdokumente vergleichen"
description: "In diesem Artikel wird erläutert, wie Sie die GroupDocs.Comparison-API (die Teil von Conholdate.Total für .NET ist) zum Vergleichen von Rechtsdokumenten verwenden."
keywords: "Rechtsdokumente vergleichen, Rechtsdokumente in C# vergleichen"
type: docs
url: /de/net/compare-legal-documents/
weight: 50
---

## Rechtsdokumente in C# vergleichen

Die Vergleichsfunktionen von Microsoft Word reichen möglicherweise nicht aus, um Verträge und Rechtsdokumente zu vergleichen. Angenommen, Sie benötigen eine eigene Methode zur Implementierung der Vergleichslogik oder Sie entwickeln Ihre eigene App. Der [**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/net) (der Teil von Conholdate.Total für .NET ist) bietet die Möglichkeit, Dokumente programmgesteuert zu vergleichen und gefundene Unterschiede zu verwalten Code für eine Vielzahl von [unterstützten Dateiformaten] (https://docs.groupdocs.com/comparison/net/supported-document-formats/). Hier ist ein Beispiel für den Vergleich zweier Verträge mit der GroupDocs.Comparsion-API. Sie müssen nur diese Schritte befolgen

* Instanziieren Sie das Objekt [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) mit dem Pfad oder Stream des Quelldokuments.
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) auf und geben Sie den Pfad oder Stream des Zieldokuments an.
* Rufen Sie die Methode [Compare](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison/comparer/methods/compare) auf.

Angenommen, Sie haben zwei Verträge im DOCX-Format, die in unterschiedlichen Jahren abgeschlossen wurden (z. B. für 2018 und 2019). Jetzt werden Sie vergleichen, wie sich die Bedingungen nach einiger Zeit verändert haben.

| | Dateien |
| --- | --- |
|Quelldatei - Vertrag 2018 unterzeichnet| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_3.png) |
|Zieldatei – Vertrag 2019 unterzeichnet|![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_4.png)|

## Codebeispiel
Hier ist der Code, der verwendet wird, um zwei Verträge zu vergleichen.

{{< gist "conholdate-docs-gists" "01e03338e930f4d1aa19e23242383c99" "compare-legal-documents.cs" >}}

Als Ergebnis erhalten wir eine DOCX-Datei, in der die gelöschten Elemente in <font color="red">**rot**</font> , die hinzugefügten in <font color="blue">**blau**</font> und die geänderten in <font color="green">**grün**</font> markiert sind.

![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_5.png)

Weitere Einzelheiten finden Sie in [diesem Artikel](https://docs.groupdocs.com/comparison/net/how-to-compare-contracts-drafts-and-legal-documents/).







