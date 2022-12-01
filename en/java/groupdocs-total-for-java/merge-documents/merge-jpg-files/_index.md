---
title: Merge JPG Files Java
second_title: Conholdate.Total for Java
articleTitle: Merge JPG Files
linktitle: Merge JPG Files
description: "This article explains how GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) can merge JPG files."
keywords: Merge JPG Files, Merge JPG Files in Java
type: docs
url: /java/merge-jpg-files/
weight: 70
---

## Merge JPG Files in Java

GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) allows you to combine or merge several JPG documents in the preferred order and save them as a single file. You will not spend your time doing these operations manually on desktop software.

With GroupDocs.Merger for Java it is possible to combine image documents of any JPG, PNG or BMP extensions.

The following example demonstrates how to merge image files with several lines of Java code:

* Create an instance of [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class and pass source image file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Create an instance of [ImageJoinOptions](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger.domain.options/ImageJoinOptions) class and pass enum value of [ImageJoinMode](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger.domain.options/ImageJoinMode) as a constructor parameter.
* Add another image file to merge with [join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream)) method and pass instance of [ImageJoinOptions](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger.domain.options/ImageJoinOptions) class as a method parameter. Repeat this step for other image documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class [save](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#save(java.io.OutputStream)) method and specify the filename for the merged image file as parameter.

```java
// Load the source image file
Merger merger = new Merger("c:\sample1.jpg")

// Define image join options with vertical join mode
ImageJoinOptions joinOptions = new ImageJoinOptions(ImageJoinMode.Vertical);
// Add another image file to merge
merger.join("c:\sample2.jpg", joinOptions);
// Merge image files and save result
merger.save("c:\merged.jpg");
```

