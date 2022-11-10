---
title: "Merge Powerpoint Presentations"
description: "This article explains how GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) can merge powerpoint presentations."
keywords: Merge Powerpoint Presentations, Merge Powerpoint Presentations in C#
type: docs
url: /net/merge-powerpoint-presentations/
weight: 70
---

 **PPTX** and **PPT** extension files are Presentation file formats that store collection of records to accommodate presentation data such as: shapes, slides, animations, text, video, audio and embedded objects.

## Merge Powerpoint Presentations in C#

GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) allows you to merge PowerPoint preasentations by writing just few lines of C# code. 

You need to follow the steps below:

* Create an instance of [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class and pass source PPSX file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Add another PPSX file to merge with [Join](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/join/index) method. Repeat this step for other PPSX documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class [Save](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/save/index) method and specify the filename for the merged PPSX file as parameter.

```csharp
// Load the source PPSX file
using (Merger merger = new Merger(@"c:\sample1.ppsx"))
{
    // Add another PPSX file to merge
    merger.Join(@"c:\sample2.ppsx");
    // Merge PPSX files and save result
    merger.Save(@"c:\merged.ppsx");
}
```
