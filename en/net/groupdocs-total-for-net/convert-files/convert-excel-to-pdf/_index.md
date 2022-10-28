---
title: "Convert Excel to PDF"
description: "This article explains how GroupDocs.Conversion for .NET (which is a part of Conholdate.Total for .NET) supports Excel conversion to PDF."
keywords: Convert Excel to PDF, Convert Excel to PDF in C#, Excel to PDF
type: docs
url: /net/convert-excel-to-pdf/
weight: 70
---

## Convert Excel to PDF in C#

The PDF format is understood jointly of the common ways to share documents between people and various quite organizations. It's also a popular use case in software development to convert Excel spreadsheets into PDF format. The Groupdocs.Conversion (which could be a a part of Conholdate.Total for .NET) keeps great display precision when converting XLSX/XLS spreadsheets to PDF and no additional software is required. 

Just instantiate Converter class to save lots of an Excel spreadsheet to PDF using its Convert method. there's an entire list of steps that ought to be followed for XLSX to PDF conversion: 
- Instantiate an object of the Converter class by passing the source XLSX file name into it. 
- Call Convert method and specify computer file name together with PdfConvertOptions object as we are converting the workbook into PDF format. Converted PDF file are saved under the chosen file name.



{{< gist "conholdate-docs-gists" "1d39ce3082242cc0efede236b46dcff8" "convert-excel-to-pdf.cs" >}}











