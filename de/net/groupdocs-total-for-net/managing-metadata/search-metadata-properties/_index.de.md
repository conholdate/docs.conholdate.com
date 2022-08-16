---
title: "Metadaten-Eigenschaften durchsuchen"
description: "Dieser Artikel zeigt, wie Sie Metadaten suchen und gewünschte Metadateneigenschaften aus Dokumenten wie PDF, DOCX, PPTX, XLSX, Bildern, Audio, Video und vielen anderen Dateien verschiedener Typen in Ihrer .NET-Lösung extrahieren können"
keywords: "Metadaten suchen"
type: docs
url: /search-metadata-properties/
weight: 30
---

Mithilfe der GroupDocs.Metadata-API können Sie in Ihrer .NET-Lösung ganz einfach Metadaten suchen und gewünschte Metadateneigenschaften aus PDF-, DOCX-, PPTX-, XLSX-, Bild-, Audio-, Video- und vielen anderen Dateien verschiedener Typen extrahieren.

GroupDocs.Metadata für .NET unterstützt viele Dateiformate. Eine vollständige Liste finden Sie im Artikel [unterstützte Dateiformate](https://docs.groupdocs.com/metadata/net/supported-document-formats/).

## Verwenden Sie Tags, um die gängigsten Metadateneigenschaften zu finden

Mithilfe von Tags können Sie mit wenigen Codezeilen nach gewünschten Eigenschaften suchen, ohne das genaue Format der geladenen Datei zu kennen.

In diesem Artikel zeigen wir, wie Sie Metadaten aus PPTX Microsoft PowerPoint-Präsentationen suchen und extrahieren. Mit demselben Code können Sie Matadata-Eigenschaften aller unterstützten Dateiformate einfach durchsuchen.

Die folgenden Schritte und das C#-Codebeispiel unten zeigen, **wie Sie mithilfe von Tags in der .NET-Lösung nach bestimmten Metadateneigenschaften suchen**:

1. Laden Sie eine zu untersuchende Datei.
2. Erstellen Sie ein Prädikat, das überprüft, ob ein bestimmtes Tag einer Eigenschaft zugewiesen ist
3. Übergeben Sie das Prädikat an die Methode [FindProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/findproperties).
4. Durchlaufen Sie die gefundenen Eigenschaften

**Beispiel**

{{< gist "conholdate-docs-gists" "f00c0d1b85ac41622421ad1b083dab07" "search-metadata.cs" >}}

Als Ergebnis erhalten wir alle Metadateneigenschaften, die den Namen der Person enthalten, die das Dokument zuletzt bearbeitet hat, und alle Eigenschaften, die das Datum/die Uhrzeit der letzten Bearbeitung des Dokuments speichern.




