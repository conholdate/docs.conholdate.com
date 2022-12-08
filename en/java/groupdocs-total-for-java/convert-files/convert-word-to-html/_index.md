---
title: Convert Word to HTML Java
second_title: Conholdate.Total for Java
articleTitle: Convert Word to HTML
linktitle: Convert Word to HTML
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Word conversion to HTML."
keywords: Convert Word to HTML, Convert Word to HTML in Java, Word to HTML
type: docs
url: /java/convert-word-to-html/
weight: 70
---

## Convert Word to HTML in Java

Conversion of Microsoft Word documents to HTML format has become a very demanding feature of GroupDocs.Conversion (which is a part of Conholdate.Total for Java). 

Basic use case of DOCX to HTML conversion could be implemented in few lines of Java code - you are required to specify source file name with extension and then call Convert method of Converter class passing target HTML file name to it. 

Complete code snippet is given below:

```java
// Load the source DOCX file
Converter converter = new Converter("sample.docx");
// Set the convert options for HTML format
MarkupConvertOptions options = new MarkupConvertOptions();
// Save converted HTML file
converter.convert("converted.html", options);
```











