---
title: Merge Powerpoint Presentations Java
second_title: Conholdate.Total for Java
articleTitle: Merge Powerpoint Presentations
linktitle: Merge Powerpoint Presentations
description: "This article explains how GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) can merge powerpoint presentations."
keywords: Merge Powerpoint Presentations, Merge Powerpoint Presentations in Java
type: docs
url: /java/merge-powerpoint-presentations/
weight: 70
---

 **PPTX** and **PPT** extension files are Presentation file formats that store collection of records to accommodate presentation data such as: shapes, slides, animations, text, video, audio and embedded objects.

## Merge Powerpoint Presentations in Java

GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) allows you to merge PowerPoint preasentations by writing just few lines of Java code. 

You need to follow the steps below:

* Create an instance of [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class and pass source PPSX file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Add another PPSX file to merge with [join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream)) method. Repeat this step for other PPSX documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class [save](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#save(java.io.OutputStream)) method and specify the filename for the merged PPSX file as parameter.

```java
// Load the source PPSX file
Merger merger = new Merger("c:\sample1.ppsx")

// Add another PPSX file to merge
merger.join("c:\sample2.ppsx");
// Merge PPSX files and save result
merger.save("c:\merged.ppsx");
```