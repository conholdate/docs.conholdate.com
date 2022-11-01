---
title: "Legen Sie Metadateneigenschaften fest"
description: "Dieser Artikel zeigt die Verwendung der SetProperties-Methode, die zum Aktualisieren oder Hinzufügen von Metadaten verwendet wird."
keywords: "Metadaten festlegen"
type: docs
url: /de/net/set-metadata-properties/
weight: 50
---

## Aktualisieren oder fügen Sie Metadateneigenschaften hinzu, die ein Prädikat erfüllen

[SetProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/setproperties) wird verwendet, um Metadaten zu aktualisieren oder hinzuzufügen. Sie können ganz einfach Metadaten zu Fotos und PDF-Dateien hinzufügen oder Daten zu MP3-Dateien aktualisieren oder hinzufügen. Dieses Codebeispiel kombiniert tatsächlich zwei Vorgänge: Hinzufügen und Aktualisieren. Wenn eine vorhandene Eigenschaft das angegebene Prädikat erfüllt, wird ihr Wert aktualisiert. Wenn in einem Metadatenpaket eine bekannte Eigenschaft fehlt, die das Prädikat erfüllt, wird sie dem entsprechenden Paket hinzugefügt.

Das folgende Code-Snippet zeigt ein grundlegendes Verwendungsszenario der [SetProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/setproperties)-Methode.

1. Öffnen Sie ein Dokument
2. Geben Sie ein Prädikat an, das zum Hinzufügen/Aktualisieren von Metadateneigenschaften verwendet wird
3. Geben Sie einen Wert an, den Sie zu vorhandenen Metadatenpaketen in der Datei hinzufügen möchten
4. Überprüfen Sie die tatsächliche Anzahl der hinzugefügten/aktualisierten Eigenschaften
5. Speichern Sie die Änderungen


**Beispiel**

{{< gist "conholdate-docs-gists" "f68231657baf755e3160b5c2298e69ca" "set-metadata.cs" >}}

Als Ergebnis aktualisieren wir alle vorhandenen Metadateneigenschaften, die das Datum enthalten, an dem das Dokument erstellt/aktualisiert wurde. Wenn ein Metadatenpaket solche Eigenschaften nicht enthält, sie aber in seiner Struktur enthalten sein sollen, werden sie hinzugefügt.







