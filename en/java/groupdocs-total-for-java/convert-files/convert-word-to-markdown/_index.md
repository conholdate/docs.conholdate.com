---
title: Convert Word to Markdown Java
second_title: Conholdate.Total for Java
articleTitle: Convert Word to Markdown
linktitle: Convert Word to Markdown
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Word conversion to Markdown."
keywords: Convert Word to Markdown, Convert Word to Markdown in Java, Word to Markdown
type: docs
url: /java/convert-word-to-markdown/
weight: 70
---

## Convert Word to Markdown in Java

Markdown format has become popular among developers because of its versatility. It is widely used for writing programs description and documentation, it has sort of simple and plain structure, so it's good for transforming to DOCX ,PDF, HTML and many other formats. GroupDocs.Conversion which is a part of Conholdate.Total for .NET provides you a way to convert Microsoft Word documents to markdown files with ".md" extension without an excessive amount of effort. 

Below is the code to convert DOCX to MD using Java programing language.


```java
// Load the source DOCX file
Converter converter = new Converter("sample.docx");
WordProcessingConvertOptions options = new WordProcessingConvertOptions();
options.setFormat(WordProcessingFileType.Md);
// Save converted TXT file
converter.convert(outputFile, options);
```











