---
title: Convert from HTML Java
second_title: Conholdate.Total for Java
articleTitle: Convert from HTML
linktitle: Convert from HTML
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports convert from HTML."
keywords: Convert from HTML, Convert from HTML in Java
type: docs
url: /java/convert-from-html/
weight: 70
---

## Convert from HTML in Java

The [GroupDocs.Conversion](https://products.groupdocs.com/conversion/java) (which is a part of Conholdate.Total for Java) allows you to easily convert your HTML document into various other file formats.  
Here for an instance, the example below shows that how an HTML to PDF conversion code snippet can be written in Java language:

```java
// Load the source HTML file
Converter converter = new Converter("sample.html");
// Set the convert options for PDF format
PdfConvertOptions options = new PdfConvertOptions();
// Convert to PDF format
converter.convert("converted.pdf", options);
```











