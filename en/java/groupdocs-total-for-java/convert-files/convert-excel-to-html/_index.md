---
title: Convert Excel to HTML Java
second_title: Conholdate.Total for Java
articleTitle: Convert Excel to HTML
linktitle: Convert Excel to HTML
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Excel conversion to HTML."
keywords: Convert Excel to HTML, Convert Excel to PDF in Java, Excel to HTML
type: docs
url: /java/convert-excel-to-html/
weight: 70
---

## Convert Excel to HTML in Java

GroupDocs.Conversion (which is a part of Conholdate.Total for Java) library provides a great feature which is exporting Excel workbooks to HTML and MHTML formats which are well known to almost everybody. The major difference between MHTML and HTML is that in the MHTML page it combines all document content like CSS styles, images, audio etc. into a single file. 

The code snippet for XLSX to HTML or MHTML conversion using Java language is given below:


```java
// Load the source XLSX file
Converter converter = new Converter("sample.xlsx");
MarkupConvertOptions options = new MarkupConvertOptions();
// Save converted HTML file
converter.convert("converted.html", options);
```











