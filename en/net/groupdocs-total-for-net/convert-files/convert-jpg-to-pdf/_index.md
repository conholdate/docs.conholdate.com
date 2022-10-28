---
title: "Convert JPG to PDF"
description: "This article explains how GroupDocs.Conversion for .NET (which is a part of Conholdate.Total for .NET) supports JPG conversion to PDF."
keywords: Convert JPG to PDF, Convert JPG to PDF in C#, JPG to PDF
type: docs
url: /net/convert-jpg-to-pdf/
weight: 70
---

## Convert JPG to PDF in C#

A very common use case you can see over the internet is converting JPG to PDF, e.g.  sometime you need to publish a JPG into PDF format. GroupDocs.Conversion (which is a part of Conholdate.Total for .NET) API allows to do this job in an easy and intuitive way.  You need to write just a few lines of C# code. Just follow the steps below:

- Instantiate Converter class and pass source JPG file path as a constructor parameter. The path might be absolute or relative as per your requirements.
- Instantiate of PdfConvertOptions class.
- Call Converter class Convert method and pass the filename for the converted PDF file and the PdfConvertOptions object from the previous step as parameters.

{{< gist "conholdate-docs-gists" "3382b1dd8b634d13b12d8587f121e424" "convert-jpg-to-pdf.cs" >}}











