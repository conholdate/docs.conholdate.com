---
title: Convert Excel to Word Java
second_title: Conholdate.Total for Java
articleTitle: Convert Excel to Word
linktitle: Convert Excel to Word
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Excel conversion to Word."
keywords: Convert Excel to Word, Convert Excel to Word in Java, Excel to Word
type: docs
url: /java/convert-excel-to-word/
weight: 70
---

## Convert Excel to Word in Java

GroupDocs.Conversion (which is a part of Conholdate.Total for Java) library allows you to convert Microsoft Excel files into a well known range of Microsoft Word formats. The most commonly used Microsoft Word formats are DOCX and DOC, and when converting XLSX spreadsheet you should specify the target format by setting Format property for [WordProcessingConvertOptions](https://reference.groupdocs.com/conversion/java/com.groupdocs.conversion.options.convert/WordProcessingConvertOptions) object.  

Code example for XLSX to DOCX conversion using Java is given below:

```java
// Load the source XLSX file
Converter converter = new Converter("sample.xlsx");
WordProcessingConvertOptions options = new WordProcessingConvertOptions();
// Save converted DOCX file
converter.convert("converted.docx", options);
```











