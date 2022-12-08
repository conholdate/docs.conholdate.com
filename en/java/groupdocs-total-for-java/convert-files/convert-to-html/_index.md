---
title: Convert to HTML Java
second_title: Conholdate.Total for Java
articleTitle: Convert to HTML
linktitle: Convert to HTML
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports convert to HTML."
keywords: Convert to HTML, Convert to HTML in Java
type: docs
url: /java/convert-to-html/
weight: 70
---

## Convert to HTML in Java

The [GroupDocs.Conversion](https://products.groupdocs.com/conversion/java) (which is a part of Conholdate.Total for Java) allows converting your files to HTML format is also an easy and natural way.

Here for an instance, the example below shows that how to convert PDF document to HTML in Java using [GroupDocs.Conversion](https://products.groupdocs.com/conversion/java):

```java
// Load the source PDF file
Converter converter = new Converter("sample.pdf");
// Set the convert options for HTML format
MarkupConvertOptions options = new MarkupConvertOptions();
// Convert to HTML format
converter.convert("converted.html", options);
```











