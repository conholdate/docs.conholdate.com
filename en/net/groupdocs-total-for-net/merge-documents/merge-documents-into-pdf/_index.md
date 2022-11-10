---
title: "Merge Documents into PDF"
description: "This article explains how GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) can merge documents into PDF."
keywords: merge documents into PDF, merge documents into PDF in C#
type: docs
url: /net/merge-documents-into-pdf/
weight: 70
---

## Merge Documents into PDF in C#

GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) allows to merge multiple files (even different types of files such as [DOC](https://docs.fileformat.com/word-processing/doc/), [PPT](https://docs.fileformat.com/presentation/ppt/), [XLS](https://docs.fileformat.com/spreadsheet/xls/)) into a single PDF file. Use [Join](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger/methods/join/index) method to combine multiple PDF files. This cross-format merge to PDF / XPS could be useful for the cases when there is no ability to merge only PDF files. For now, the API allows to join other file types without password with the PDF document loaded into [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) object.

The following example demonstrates how to merge PDF file with [DOC](https://docs.fileformat.com/word-processing/doc/), [PPT](https://docs.fileformat.com/presentation/ppt/) and [XLS](https://docs.fileformat.com/spreadsheet/xls/) file types:

```csharp
using (Merger merger = new Merger(@"c:\document1.pdf"))
{
    merger.Join(@"c:\document2.doc");
    merger.Join(@"c:\document3.ppt");
    merger.Join(@"c:\document4.xls");
 
	merger.Save(@"c:\merged.pdf");
}
```
