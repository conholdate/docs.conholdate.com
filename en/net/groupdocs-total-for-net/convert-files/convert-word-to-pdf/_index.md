---
title: "Convert Word to PDF"
description: "This article explains how GroupDocs.Conversion for .NET (which is a part of Conholdate.Total for .NET) supports Word conversion to PDF."
keywords: Convert Word to PDF, Convert Word to PDF in C#, Word to PDF
type: docs
url: /net/convert-word-to-pdf/
weight: 70
toc: True
structuredData:
    showOrganization: True
    application:    
        name: Convert Word to PDF in .NET    
        description: Convert DOCX to PDF natively with high performance using .NET language and GroupDocs.Conversion for .NET(which is a part of Conholdate.Total for .NET) APIs
        productCode: conversion
        productPlatform: .net 
    showVideo: True
    howTo:
        name: How to convert Word to PDF in C# or .NET 
        description: Learn how to convert DOCX to PDF in C# or .NET step by step
        steps:
        - name: Load source DOCX file 
          text: Create an instance of Converter class and pass source DOCX file path as a constructor parameter. You may specify absolute or relative file path as per your requirements. 
        - name: Specify convert options 
          text: Create an instance of PdfConvertOptions class.
        - name: Convert to PDF and save result 
          text: Call Converter class convert method and pass the filename for the converted PDF file and the PdfConvertOptions object from the previous step as parameters.
---

## Convert Word to PDF in C#

The GroupDocs.Conversion which is a part of Conholdate.Total for .NET gives you an easy way to convert MS Word documents such as: DOC or DOCX to PDF. Simply you need to write a couple lines of code to:

1. Load your DOCX document into a Converter object by providing a filename with extension.
2. Invoke the Convert method of the Converter object and specify the desired output format as PDF by passing PdfConvertOptions object to it along with the name for the converted file.  
  
The code given below demonstrates how to convert a document from DOCX or DOC into PDF format:

{{< gist "conholdate-docs-gists" "8e3909d51d67b46e0ab13048e2ef2c1a" "convert-word-to-pdf.cs" >}}











