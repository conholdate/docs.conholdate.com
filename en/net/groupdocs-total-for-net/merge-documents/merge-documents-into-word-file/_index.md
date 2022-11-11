---
title: "Merge Documents into Word file"
description: "This article explains how GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) can merge documents into Word file."
keywords: merge documents into Word file, merge documents into Word file in C#
type: docs
url: /net/merge-documents-into-word-file/
weight: 70
---

## Merge Documents into Word file in C#

GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) allows multiple files (even different types of PDF files such as [PDF](https://docs.fileformat.com/view/pdf/), [XPS](https://docs.fileformat.com/page-description-language/xps/), [EPUB](https://docs.fileformat.com/ebook/epub/) and [TEX](https://docs.fileformat.com/page-description-language/tex/)) can be merged into a single DOC / DOCX file. 

Use this [Join](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger/methods/join/index) method to merged multiple DOC / DOCX files. This cross-format merge to DOC / DOCX could be useful for the cases when there is no ability to merge only DOC files. For now, GroupDocs.Merger API allows to join other file types without password with the DOC / DOCX document loaded into [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) object.

The example below demonstrates how to merge DOC file with [PDF](https://docs.fileformat.com/view/pdf/), [XPS](https://docs.fileformat.com/page-description-language/xps/), [EPUB](https://docs.fileformat.com/ebook/epub/) and [TEX](https://docs.fileformat.com/page-description-language/tex/) file types:

```csharp
using (Merger merger = new Merger(@"c:\document1.doc"))
{
    merger.Join(@"c:\document2.pdf");
    merger.Join(@"c:\document3.xps");
    merger.Join(@"c:\document4.epub");
    merger.Join(@"c:\document5.tex");
 
	merger.Save(@"c:\merged.doc");
}
```

