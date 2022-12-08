---
title: Convert JPG to PDF Java
second_title: Conholdate.Total for Java
articleTitle: Convert JPG to PDF
linktitle: Convert JPG to PDF
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports JPG conversion to PDF."
keywords: Convert JPG to PDF, Convert JPG to PDF in Java, JPG to PDF
type: docs
url: /java/convert-jpg-to-pdf/
weight: 70
---

## Convert JPG to PDF in Java

A very common use case you can see over the internet is converting JPG to PDF, e.g.  sometime you need to publish a JPG into PDF format. GroupDocs.Conversion (which is a part of Conholdate.Total for Java) API allows to do this job in an easy and intuitive way.  You need to write just a few lines of Java code. Just follow the steps below:

- Instantiate Converter class and pass source JPG file path as a constructor parameter. The path might be absolute or relative as per your requirements.
- Instantiate of PdfConvertOptions class.
- Call Converter class Convert method and pass the filename for the converted PDF file and the PdfConvertOptions object from the previous step as parameters.

```java
// Load the source JPG file
Converter converter = new Converter("sample.jpg");
// Set the convert options for PDF format
PdfConvertOptions options = new PdfConvertOptions();
// Convert to PDF format
converter.convert("converted.pdf", options);
```








