---
title: "Extrahieren Sie Metadaten aus dem Bild"
description: "Dieser Artikel zeigt, wie einfach Sie mit c# Metadaten aus Bildern extrahieren können."
keywords: "Metadaten aus Bild extrahieren"
type: docs
url: /extract-metadata-from-image/
weight: 20
---

## Extrahieren gemeinsamer Bildinformationen

Die GroupDocs.Metadata-API ermöglicht das Extrahieren allgemeiner Bildeigenschaften wie Breite und Höhe, MIME-Typ, Byte-Reihenfolge usw. für alle unterstützten Bildformate. Das unten stehende Code-Snippet enthält weitere Informationen zu dieser nützlichen Funktion.

1. Laden Sie ein Bild
2. Extrahieren Sie das Root-Metadatenpaket
3. Verwenden Sie die Eigenschaft FileType, um Informationen zum Dateiformat zu erhalten

**AdvancedUsage.ManagingMetadataForSpecificFormats.Image.ImageReadFileFormatProperties**

```csharp
using (Metadata metadata = new Metadata(Constants.InputPng))
{
	var root = metadata.GetRootPackage<ImageRootPackage>();

	Console.WriteLine(root.FileType.FileFormat);
	Console.WriteLine(root.FileType.ByteOrder);
	Console.WriteLine(root.FileType.MimeType);
	Console.WriteLine(root.FileType.Extension);
	Console.WriteLine(root.FileType.Width);
	Console.WriteLine(root.FileType.Height);
}
```

## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:
* [Beispiele für GroupDocs.Metadata für .NET](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-.NET)
* [GroupDocs.Metadata für Java-Beispiele](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Java)

### Kostenlose Online-App zur Verwaltung von Dokumentenmetadaten
Zusammen mit der voll ausgestatteten .NET-Bibliothek bieten wir einfache, aber leistungsstarke kostenlose Apps.
Sie können Metadaten von PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, E-Mails, Bildern und mehr mit unserer kostenlosen Online-App [Free Online Document Metadata Viewing and Editing App] (https://products.groupdocs .app/metadaten).



