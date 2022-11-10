---
title: "Merge Multiple Excel Files into One Sheet"
description: "This article explains how GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) can merge multiple excel files into one sheet."
keywords: Merge Multiple Excel Files into One Sheet, Merge Multiple Excel Files into One Sheet in C#
type: docs
url: /net/merge-multiple-excel-files-into-one-sheet/
weight: 70
---
.

## Merge Multiple Excel Files into One Sheet in C#

GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) allows you to merge multiple Excel files into one sheet or file without any third-party software or manual work involved.
 With this API it is possible to combine XLSX documents of any size and structure - all text, images, tables, graphs, forms and other content will be safe and un-changed.

The following example demonstrates how to merge XLSX files with several lines of C# code:

* Create an instance of [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class and pass source XLSX file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Add another XLSX file to merge with [Join](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/join/index) method. Repeat this step for other XLSX documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class [Save](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/save/index) method and specify the filename for the merged XLSX file as parameter.

```csharp
// Load the source XLSX file
using (Merger merger = new Merger(@"c:\sample1.xlsx"))
{
    // Add another XLSX file to merge
    merger.Join(@"c:\sample2.xlsx");
    // Merge XLSX files and save result
    merger.Save(@"c:\merged.xlsx");
}
```
