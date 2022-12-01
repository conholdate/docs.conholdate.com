---
title: Merge Multiple Excel Files into One Sheet Java
second_title: Conholdate.Total for Java
articleTitle: Merge Multiple Excel Files into One Sheet
linktitle: Merge Multiple Excel Files into One Sheet
description: "This article explains how GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) can merge multiple excel files into one sheet."
keywords: Merge Multiple Excel Files into One Sheet, Merge Multiple Excel Files into One Sheet in Java
type: docs
url: /java/merge-multiple-excel-files-into-one-sheet/
weight: 70
---
.

## Merge Multiple Excel Files into One Sheet in Java

GroupDocs.Merger for Java (which is a part of Conholdate.Total for Java) allows you to merge multiple Excel files into one sheet or file without any third-party software or manual work involved.
With GroupDocs.Merger it is possible to combine XLSX documents of any size and structure - all text, images, tables, graphs, forms and other content will be preserved.

The following example demonstrates how to merge XLSX files with several lines of java code:

* Create an instance of [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class and pass source XLSX file path as a constructor parameter. You may specify absolute or relative file path as per your requirements.
* Add another XLSX file to merge with [join](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#join(java.io.InputStream)) method. Repeat this step for other XLSX documents you want to merge.
* Call [Merger](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger) class [save](https://apireference.groupdocs.com/merger/java/com.groupdocs.merger/Merger#save(java.io.OutputStream)) method and specify the filename for the merged XLSX file as parameter.

```java
// Load the source XLSX file
Merger merger = new Merger("c:\sample1.xlsx")

// Add another XLSX file to merge
merger.join("c:\sample2.xlsx");
// Merge XLSX files and save result
merger.save("c:\merged.xlsx");
```
