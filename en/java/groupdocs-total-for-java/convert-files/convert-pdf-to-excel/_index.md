---
title: Convert PDF to Excel Java
second_title: Conholdate.Total for Java
articleTitle: Convert PDF to Excel
linktitle: Convert PDF to Excel
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports PDF conversion to all popular formats of Microsoft Excel - XLS, XLSX, XLSM, XLSB, XLTX, XLT etc."
keywords: Convert PDF to Excel, Convert PDF to Excel in Java
type: docs
url: /java/convert-pdf-to-excel/
weight: 70
---

## Convert PDF to Excel in Java

Spreadsheet formats are designed to represent data within the kind of rows and columns, and this manner tables are much easier to use. Therefore, when it's required to convert data from PDF file into Excel format GroupDocs.Conversion library involves resque. You can choose between wide selection of supported spreadsheet formats: 

* Microsoft Excel - XLS, XLSX, XLSM, XLSB, XLTX, XLT; 
* OpenDocument - ODS, OTS; 
* Apple iWork Numbers. 

Required spreadsheet format may be specified with the assistance of [SpreadsheetFileType](https://apireference.groupdocs.com/conversion/java/groupdocs.conversion.filetypes/spreadsheetfiletype) class, however default format for PDF to Spreadsheet conversion is XLSX. 

Please check below the way to convert PDF to Excel in Java in a very few lines of code.

```java
// Load the source PDF file
Converter converter = new Converter("sample.pdf");
// Set the convert options for XLSX format
SpreadsheetConvertOptions options = new SpreadsheetConvertOptions();
// Convert to XLSX format
converter.convert("converted.xlsx", options);
```











