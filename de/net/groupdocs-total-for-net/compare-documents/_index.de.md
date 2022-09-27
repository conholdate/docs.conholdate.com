---
title: "Dokumente vergleichen"
description: "In diesem Abschnitt erfahren Sie mehr über die Verwendung der GroupDocs.Comparison-API, die Teil von Conholdate.Total für .NET ist. Der folgende Artikel zeigt, wie Sie Dokumente einfach vergleichen können."
keywords: "Dokumente vergleichen"
type: docs
url: /de/compare-documents/
weight: 20
---
## Vergleichsfunktionen

Informationen zu Algorithmen zur Erkennung von Änderungen, die von **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** verwendet werden, ermöglichen die Erkennung von Änderungen in verschiedenen Dokumententeilen und -blöcken:

* Textblöcke - Absätze, Wörter und Zeichen;
* Tabellen;
* Bilder;
* Formen usw.
    

Zur besseren visuellen Trennung von erkannten Änderungen werden hinzugefügte, geänderte oder gelöschte Dokumentteile farblich hervorgehoben:

*Hinzugefügt – <font color="blue">**blau**</font>
* Modifiziert – <font color="green">**grün**</font>
* Stil – <font color="green">**grün**</font>
* Gelöscht – <font color="red">**rot**</font>

Das Farbschema des Stils kann bei Bedarf angepasst werden, geänderte Textblöcke können mit unterschiedlichen Formatierungen gekennzeichnet werden - kursiv, fett, unterstrichen, durchgestrichen usw.

Hier sind einfache Schritte, um zwei Dokumente zu vergleichen:
* Objekt [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) mit Pfad oder Stream des Quelldokuments instanziieren;
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) auf und geben Sie den Pfad oder Stream des Zieldokuments an.
* Rufen Sie die Methode [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/compare/index) auf.

Das folgende Codebeispiel zeigt den einfachsten Fall eines Dokumentenvergleichs mit ein paar Codezeilen.

## Vergleichen Sie Dokumente aus der lokalen Datei

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-documents.cs" >}}




## Vergleichen Sie Dokumente aus dem Stream

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-document-from-stream.cs" >}}

Weitere Einzelheiten finden Sie in [diesem Artikel](https://docs.groupdocs.com/watermark/net/adding-text-watermarks/).




