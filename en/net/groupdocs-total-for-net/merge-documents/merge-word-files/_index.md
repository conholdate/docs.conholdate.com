---
title: "Merge Word Files"
description: "This article explains how GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) can merge Word files."
keywords: Merge Word Files, Merge Word Files in C#
type: docs
url: /net/merge-word-files/
weight: 70
---

## Merge Word Files in C#

GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) DOCX is a famous format for Microsoft Word documents. It was introduced from 2007 with the release of Microsoft Office 2007, the structure of this new Document format was changed from plain binary to a combination of XML and binary files. The DOCX files can be opened with Word 2007 and Later versions, but not with the earlier versions of MS Word which support DOC file extensions.

Following C# code snippet in demonstrates that how to merge DOCX files into single file.

```csharp
// Load the source DOCX file
using (Merger merger = new Merger(@"c:\sample1.docx"))
{
    // Add another DOCX file to merge
    merger.Join(@"c:\sample2.docx");
    // Merge DOCX files and save result
    merger.Save(@"c:\merged.docx");
}
```
  
## Combine Word documents without starting from a new page

An additional option for Word document joining is that allows to merge those documents without page breaking between them, i.e. the last page of the initial document will be merged with the first page of the next document as one page.

Following C# code snippet in demonstrates that how to merge DOC files into single file without starting from a new page.

```csharp
// Load the source DOC file
using (Merger merger = new Merger(@"c:\sample1.doc"))
{
    // Define Word join options
    WordJoinOptions joinOptions = new WordJoinOptions();
    joinOptions.Mode = WordJoinMode.Continuous;
    // Add another DOC file to merge
    merger.Join(@"c:\sample2.doc", joinOptions);
    // Merge DOC files and save result
    merger.Save(@"c:\merged.doc");
}
```

