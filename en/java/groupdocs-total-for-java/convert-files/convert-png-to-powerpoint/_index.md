---
title: Convert PNG to PowerPoint Java
second_title: Conholdate.Total for Java
articleTitle: Convert PNG to PowerPoint
linktitle: Convert PNG to PowerPoint
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports PNG conversion to PowerPoint."
keywords: Convert PNG to PowerPoint, Convert PNG to PowerPoint in Java, PNG to PowerPoint
type: docs
url: /java/convert-png-to-powerpoint/
weight: 70
---

## Convert PNG to PowerPoint in Java

If you are in need to make a PowerPoint presentation from **PNG**, a good solution to consider is to convert them programmatically.  
Let’s have a look at the code examples in Java language below:


```java
// Load the source PNG file
Converter converter = new Converter("sample.png");
PresentationConvertOptions options = new PresentationConvertOptions();
// Save converted PPT file
converter.convert("png-converted-to.pptx", options);
```











