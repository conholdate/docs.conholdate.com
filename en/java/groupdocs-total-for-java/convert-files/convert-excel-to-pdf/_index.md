---
title: Convert Excel to PDF Java
second_title: Conholdate.Total for Java
articleTitle: Convert Excel to PDF
linktitle: Convert Excel to PDF
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Excel conversion to PDF."
keywords: Convert Excel to PDF, Convert Excel to PDF in Java, Excel to PDF
type: docs
url: /java/convert-excel-to-pdf/
weight: 70
---

## Convert Excel to PDF in Java

The PDF format is understood jointly of the common ways to share documents between people and various quite organizations. It's also a popular use case in software development to convert Excel spreadsheets into PDF format. The Groupdocs.Conversion (which could be a a part of Conholdate.Total for Java) keeps great display precision when converting XLSX/XLS spreadsheets to PDF and no additional software is required. 

Just instantiate Converter class to save lots of an Excel spreadsheet to PDF using its Convert method. there's an entire list of steps that ought to be followed for XLSX to PDF conversion: 
- Instantiate an object of the Converter class by passing the source XLSX file name into it. 
- Call Convert method and specify computer file name together with PdfConvertOptions object as we are converting the workbook into PDF format. Converted PDF file are saved under the chosen file name.


```Java
// Load the source XLSX file
Converter converter = new Converter("sample.xlsx");
PdfConvertOptions options = new PdfConvertOptions();
// Save converted PDF file
converter.convert("converted.pdf", options);
```











