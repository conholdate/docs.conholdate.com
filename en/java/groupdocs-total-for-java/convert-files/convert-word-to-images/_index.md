---
title: Convert Word to Images Java
second_title: Conholdate.Total for Java
articleTitle: Convert Word to Images
linktitle: Convert Word to Images
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Word conversion to Images."
keywords: Convert Word to Images, Convert Word to Images in Java, Word to Images
type: docs
url: /java/convert-word-to-images/
weight: 70
---

## Convert Word to Images in Java

When you are trying to show your documents to someone who haven’t Microsoft Word installed on their computers. Then the solution is to convert a document into various image formats e.g. JPG, PNG, TIFF or any other supported image format. 

All you need to convert Word document to image is to load source DOC or DOCX file into Converter class and call Convert method. Every page from the source Word document will be saved as a separate image file, so you need to specify naming format for output images

Code example of how to convert DOCX to PNG is given below:

```java
string outputFileNameFormat = "converted-page-%s.png";
SavePageStream getPageStream = page => new FileOutputStream(String.format(outputFileNameFormat, page));

// Load the source DOCX file
Converter converter = new Converter("sample.docx");
// Set the convert options for PNG format
ImageConvertOptions options = new ImageConvertOptions();
options.setFormat(ImageFileType.Png);  
// Convert to PNG format
converter.convert(getPageStream, options);
```










