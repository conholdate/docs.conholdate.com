---
title: "Convert Word to PDF"
description: "This article explains how GroupDocs.Conversion for .NET (which is a part of Conholdate.Total for .NET) supports Word conversion to PDF."
keywords: Convert Word to PDF, Convert Word to PDF in C#, Word to PDF
type: docs
url: /convert-word-to-pdf/
weight: 70
---

## Convert Word to PDF in C#

THe GroupDocs.Conversion which is a part of Conholdate.Total for .NET gives you an easy way to convert MS Word documents such as: DOC or DOCX to PDF. Simply you need to write a couple lines of code to:

1. Load your DOCX document into a Converter object by providing a filename with extension.
2. Invoke the Convert method of the Converter object and specify the desired output format as PDF by passing PdfConvertOptions object to it along with the name for the converted file.  
  
The code given below demonstrates how to convert a document from DOCX or DOC into PDF format:

{{< gist "conholdate-docs-gists" "8e3909d51d67b46e0ab13048e2ef2c1a" "convert-word-to-pdf.cs" >}}











