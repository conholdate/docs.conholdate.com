---
title: View Metadata Java
second_title: Conholdate.Total for Java
articleTitle: View Metadata
linktitle: View Metadata
description: "This article demonstrates how to view metadata information of a document using Metadata Java API."
keywords: view metadata
type: docs
url: /java/view-metadata/
weight: 20
---

Using GroupDocs.Metadata Java API, the users can get meta information of a document which includes:

- File format (detected by the internal structure)
- File extension
- MIME type
- Number of pages
- File size
- A value indicating whether a file is encrypted
The following code sample demonstrates how to extract basic format information from a file.

```java
// Constants.InputXlsx is an absolute or relative path to your document. Ex: @"C:\Docs\source.xlsx"
try (Metadata metadata = new Metadata(Constants.InputXlsx)) {
	if (metadata.getFileFormat() != FileFormat.Unknown) {
		IDocumentInfo info = metadata.getDocumentInfo();
		System.out.println(String.format("File format: %s", info.getFileType().getFileFormat()));
		System.out.println(String.format("File extension: %s", info.getFileType().getExtension()));
		System.out.println(String.format("MIME Type: %s", info.getFileType().getMimeType()));
		System.out.println(String.format("Number of pages: %s", info.getPageCount()));
		System.out.println(String.format("Document size: %s bytes", info.getSize()));
		System.out.println(String.format("Is document encrypted: %s", info.isEncrypted()));
	}
}
```


