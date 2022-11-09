---
title: "Merge JPG Files"
description: "This article explains how GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) can merge JPG files."
keywords: Merge JPG Files, Merge JPG Files in C#
type: docs
url: /net/merge-jpg-files/
weight: 70
---

## Merge JPG Files in C#

GroupDocs.Merger for .NET (which is a part of Conholdate.Total for .NET) allows you to combine or merge several JPG documents in the order of your own choice and save them as a single file. You will not need to do any manual work.
 

The following example demonstrates how to merge JPG files with several lines of C# code:

* Create an instance of [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class and pass source image file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Create an instance of [ImageJoinOptions](https://apireference.groupdocs.com/merger/net/groupdocs.merger.domain.options/imagejoinoptions) class and pass enum value of [ImageJoinMode](https://apireference.groupdocs.com/merger/net/groupdocs.merger.domain.options/imagejoinmode) as a constructor parameter.
* Add another image file to merge with [Join](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/join/index) method and pass instance of [ImageJoinOptions](https://apireference.groupdocs.com/merger/net/groupdocs.merger.domain.options/imagejoinoptions) class as a method parameter. Repeat this step for other image documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/net/merger/groupdocs.merger/merger) class [Save](https://apireference.groupdocs.com/merger/net/groupdocs.merger/merger/methods/save/index) method and specify the filename for the merged image file as parameter.

```csharp
// Load the source image file
using (Merger merger = new Merger(@"c:\sample1.jpg"))
{
    // Define image join options with vertical join mode
    ImageJoinOptions joinOptions = new ImageJoinOptions(ImageJoinMode.Vertical);
    // Add another image file to merge
    merger.Join(@"c:\sample2.jpg", joinOptions);
    // Merge image files and save result
    merger.Save(@"c:\merged.jpg");
}
```

