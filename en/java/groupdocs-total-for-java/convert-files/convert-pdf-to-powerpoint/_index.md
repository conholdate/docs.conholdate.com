---
title: Convert PDF to PowerPoint Java
second_title: Conholdate.Total for Java
articleTitle: Convert PDF to PowerPoint
linktitle: Convert PDF to PowerPoint
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) converts PDF file into PowerPoint format."
keywords: Convert PDF to PowerPoint, Convert PDF to PowerPoint in Java
type: docs
url: /java/convert-pdf-to-powerpoint/
weight: 70
---

## Convert PDF to PowerPoint in Java

The Presentation file formats Save collections of records to manage data e.g. text, slides, animations, shapes, audio, video and embedded objects. The foremost popular app for creating and editing presentations is Microsoft PowerPoint with its PPT and PPTX file formats, though there are many applications that job with OpenDocument formats like ODP and OTP.
Below is code snippet appears like for PDF to PPTX conversion in Java language:


```java
// Load the source PDF file
Converter converter = new Converter("sample.pdf");
// Set the convert options for PPTX format
PresentationConvertOptions options = new PresentationConvertOptions();
// Convert to PPTX format
converter.convert("converted.pptx", options);
```











