---
title: Merge PDF Document Java
second_title: Conholdate.Total for Java
articleTitle: Merge PDF Document
linktitle: Merge PDF Document
description: "This article explains how GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) can merge PDF documents."
keywords: Merge PDF Documents, Merge PDF Documents in Java
type: docs
url: /java/merge-pdf-documents/
weight: 70
---

## Merge PDF Documents in Java

GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) allows you to merge several PDF files as per your need without any third-party software or manual work involved.
With GroupDocs.Merger it is possible to combine PDF documents of any size and structure - all text, images, tables, graphs, forms and other content will be preserved.

The following example demonstrates how to merge PDF files with several lines of Java code:

* Create an instance of [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class and pass source PDF file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Add another PDF file to merge with [join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream)) method. Repeat this step for other PDF documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class [save](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#save(java.io.OutputStream)) method and specify the filename for the merged PDF file as parameter.

```java
// Load the source PDF file
Merger merger = new Merger("c:\sample1.pdf")

// Add another PDF file to merge
merger.join("c:\sample2.pdf");
// Merge PDF files and save result
merger.save("c:\merged.pdf");
```
















