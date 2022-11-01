---
title: "Text in zwei Dateien vergleichen"
description: "In diesem Artikel wird die Verwendung der GroupDocs.Comparison-API (die Teil von Conholdate.Total für .NET ist) zum Vergleichen von Text in zwei Dateien erläutert."
keywords: "Text in zwei Dateien vergleichen, Text in zwei Dateien mit C# vergleichen"
type: docs
url: /de/net/compare-text-in-two-files/
weight: 20
---
## Dateivergleich

Der GroupDocs.Comparison (der Teil von Conholdate.Total für .NET ist) bietet die Möglichkeit, Unterschiede zwischen Ziel- und Quelldateien für Änderungen auf Wort-, Zeichen- und Absatzebene zu erkennen. Es kann auch Stil- und Formatierungsänderungen erkennen – wie Fettdruck, Kursivschrift, Unterstreichungen, Durchstreichungen, Schriftarten usw.

## Text in zwei Dateien mit C# vergleichen

Das folgende Beispiel zeigt Ihnen, wie einfach Sie mit C# **Text in zwei Dateien vergleichen** können.
Nach dem Vergleich der beiden Word-Dateien erhalten Sie ein Ergebnisdokument, in dem die Änderungen in drei verschiedenen Farben hervorgehoben sind:

- Elemente, die aus der ersten Datei gelöscht wurden – **rot**.
- Elemente, die in die erste Datei eingefügt wurden. - **blau**.
- Elemente, die ihren Stil geändert haben – **grün**.



## Beispiel für den Vergleich von zwei Dateien

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-documents.cs" >}}


