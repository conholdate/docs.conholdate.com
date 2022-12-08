---
title: Convert Word to PDF Java
second_title: Conholdate.Total for Java
articleTitle: Convert Word to PDF
linktitle: Convert Word to PDF
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Word conversion to PDF."
keywords: Convert Word to PDF, Convert Word to PDF in Java, Word to PDF
type: docs
url: /java/convert-word-to-pdf/
weight: 70
---

## Convert Word to PDF in Java

The GroupDocs.Conversion which is a part of Conholdate.Total for Java gives you an easy way to convert MS Word documents such as: DOC or DOCX to PDF. Simply you need to write a couple lines of code to:

1. Load your DOCX document into a Converter object by providing a filename with extension.
2. Invoke the Convert method of the Converter object and specify the desired output format as PDF by passing PdfConvertOptions object to it along with the name for the converted file.  
  
The code given below demonstrates how to convert a document from DOCX or DOC into PDF format:


```java
// Load the source DOCX file
Converter converter = new Converter("sample.docx");
// Set the convert options for PDF format
PdfConvertOptions options = new PdfConvertOptions();
// Convert to PDF format
converter.convert("converted.pdf", options);
```












