---
title: "Vergleichen Sie Excel-Dateien"
description: "In diesem Artikel wird erläutert, wie Sie die GroupDocs.Comparison-API (die Teil von Conholdate.Total für .NET ist) verwenden, um Excel-Dokumente zu vergleichen."
keywords: "Excel-Dateien vergleichen, Excel-Dateien in C# vergleichen, Codebeispiel zum Vergleichen von zwei Excel-Dateien"
type: docs
url: /compare-excel-files/
weight: 70
---

## Excel-Dateien in C# vergleichen

Der Vergleich von Arbeitsblättern hilft Ihnen, mögliche Probleme zu erkennen, wie z. B. zusätzliche Einträge, falsche Tabellen, inkonsistente Formeln oder falsche Formatierung.**[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** gibt Ihnen viele Optionen zum Vergleichen einer Vielzahl von [unterstützten Dateiformaten](https://docs.groupdocs.com/comparison/net/supported-document-formats/), einschließlich Excel-Formaten.

Nach dem Vergleich gibt es drei Farben in der resultierenden Datei, die die Unterschiede hervorheben. Sie können die Farben auch selbst bestimmen, um den nächsten Unterschied zu erkennen:

* Elemente, die in die erste Datei eingefügt wurden. – <font color="blue">**blau**</font> , standardmäßig
* Elemente, die aus der ersten Datei gelöscht wurden – standardmäßig <font color="red">**rot**</font>
* Elemente, deren Stil geändert wurde (Schriftart, Farbe usw.) – standardmäßig <font color="green">**grün**</font>

## Codebeispiel zum Vergleichen zweier Excel-Dateien

{{< gist "conholdate-docs-gists" "05e9a0800d63d9d68047e17a88f86644" "compare-excel-files.cs" >}}

| Quell-/Ziel-/Ergebnis-Excel-Dateien |
| --- | --- |
|Quelle |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-1.png) |
|Ziel |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-2.png)|
|Ergebnis |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-3.png)|

Als Ergebnis haben Sie eine Excel-Datei mit hervorgehobenen Änderungen, in der die gelöschten Elemente mit einer Schriftart <font color="red">**rot**</font> , die hinzugefügten – in <font color="blue">**blau**</font> und die geänderten – in <font color="yellow">**grün**</font> gekennzeichnet sind.









