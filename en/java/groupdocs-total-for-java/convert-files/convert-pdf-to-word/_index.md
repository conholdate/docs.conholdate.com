---
title: Convert PDF to Word Java
second_title: Conholdate.Total for Java
articleTitle: Convert PDF to Word
linktitle: Convert PDF to Word
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports PDF conversion to all popular formats of Microsoft Word like - DOC, DOCX, RTF etc."
keywords: Convert PDF to Word, Convert PDF to Word in Java
type: docs
url: /java/convert-pdf-to-word/
weight: 70
---

## Convert PDF to Word in Java

The MS Word is one amongst the foremost convenient ways to edit and maintain document’s content, that’s why PDF to Word conversion has become so famous. Converting a PDF file to Word document in a manual way is little bit a tricky and lengthy process. Much easier is to convert PDF to Word programmatically in Java. In this fashion - any file created as PDF could even be converted to a Word document for later content manipulations and editing text, tables, images, lists etc.

The GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports PDF conversion to almost all popular formats of Microsoft Word e.g. DOC, DOCX, RTF etc. Document transformation process is admittedly simple and easy from users point of view - all you've to write just two to three lines of code. The default format for PDF to Word conversion is DOCX - it’s a widely known format for Microsoft Word 2007 and later versions which may otherwise be a mixture of XML and binary files. 

Below is a code snippet for PDF to DOCX conversion:

```java
// Load the source PDF file
Converter converter = new Converter("sample.pdf");
// Set the convert options for DOCX format
WordProcessingConvertOptions options = new WordProcessingConvertOptions();
// Convert to DOCX format
converter.convert("converted.docx", options);
```











