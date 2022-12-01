---
title: Merge Documents into PDF Java
second_title: Conholdate.Total for Java
articleTitle: Merge Documents into PDF
linktitle: Merge Documents into PDF
description: "This article explains how GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) can merge documents into PDF."
keywords: merge documents into PDF, merge documents into PDF in Java
type: docs
url: /java/merge-documents-into-pdf/
weight: 70
---

## Merge Documents into PDF in Java

GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) allows to merge Multiple files (even different types of files such as [DOC](https://docs.fileformat.com/word-processing/doc/), [PPT](https://docs.fileformat.com/presentation/ppt/), [XLS](https://docs.fileformat.com/spreadsheet/xls/)) can be combined into a single PDF / XPS file by using **[GroupDocs.Merger](https://products.groupdocs.com/merger/java)** API. You can also use this [Join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream) ) method to combine multiple PDF / XPS files. This cross-format merge to PDF / XPS could be useful for the cases when there is no ability to merge only PDF / XPS files. For now, GroupDocs.Merger API allows to [Join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream) ) other file types without password with the PDF / XPS document loaded into [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger ) object.

The following example demonstrates how to merge PDF file with [DOC](https://docs.fileformat.com/word-processing/doc/), [PPT](https://docs.fileformat.com/presentation/ppt/) and [XLS](https://docs.fileformat.com/spreadsheet/xls/) file types:

```java
Merger merger = new Merger("c:\document1.pdf");
{
    merger.join("c:\document2.doc");
    merger.join("c:\document3.ppt");
    merger.join("c:\document4.xls");
  
    merger.save("c:\merged.pdf");
}
```
