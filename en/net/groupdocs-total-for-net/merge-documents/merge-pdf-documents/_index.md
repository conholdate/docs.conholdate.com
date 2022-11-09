---
title: "Merge PDF Documents"
description: "This article explains how GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) can merge PDF documents."
keywords: Merge PDF Documents, Merge PDF Documents in C#
type: docs
url: /net/merge-pdf-documents/
weight: 70
---

## Merge PDF Documents in C#

GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) allows you to merge several PDF files as per your need without any third-party software or manual work involved.
With this API, it is possible to merge PDF documents of any size or structure - all text, images, tables, graphs, forms and other content will be preserved.

The code sample below shows the merging of PDF files with a few lines of C# code:

* Create an instance of [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class and pass source PDF file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Add another PDF file to merge with [Join](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/join/index) method. Repeat this step for other PDF documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class [Save](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/save/index) method and specify the filename for the merged PDF file as parameter.

```csharp
// Load the source PDF file
using (Merger merger = new Merger(@"c:\sample1.pdf"))
{
    // Add another PDF file to merge
    merger.Join(@"c:\sample2.pdf");
    // Merge PDF files and save result
    merger.Save(@"c:\merged.pdf");
}
```















