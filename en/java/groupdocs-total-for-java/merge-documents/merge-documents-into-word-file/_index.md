---
title: Merge Documents into Word file Java
second_title: Conholdate.Total for Java
articleTitle: Merge Documents into Word file
linktitle: Merge Documents into Word file
description: "This article explains how GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) can merge documents into Word file."
keywords: merge documents into Word file, merge documents into Word file in Java
type: docs
url: /java/merge-documents-into-word-file/
weight: 70
---

## Merge Documents into Word file in Java

GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) allows Multiple files (even different types of PDF files such as [PDF](https://docs.fileformat.com/view/pdf/), [XPS](https://docs.fileformat.com/page-description-language/xps/), [EPUB](https://docs.fileformat.com/ebook/epub/) and [TEX](https://docs.fileformat.com/page-description-language/tex/)) can be combined into a single DOC / DOCX file by using **[GroupDocs.Merger](https://products.groupdocs.com/merger/java )** API. You can also use this [Join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream) ) method to combine multiple DOC / DOCX files. This cross-format merge to DOC / DOCX could be useful for the cases when there is no ability to merge only DOC files. For now, GroupDocs.Merger API allows to [Join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream) ) other file types without password with the DOC / DOCX document loaded into [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger ) object.

The following example demonstrates how to merge DOC file with [PDF](https://docs.fileformat.com/view/pdf/), [XPS](https://docs.fileformat.com/page-description-language/xps/), [EPUB](https://docs.fileformat.com/ebook/epub/) and [TEX](https://docs.fileformat.com/page-description-language/tex/) file types:

```java
Merger merger = new Merger("c:\document1.doc"))
{
     merger.join("c:\document2.pdf");
     merger.join("c:\document3.xps");
     merger.join("c:\document4.epub");
     merger.join("c:\document5.tex");
 
	merger.save("c:\merged.doc");
}
```

