---
title: "Scanning Barcode"
description: "This article explains how GroupDocs.Parser for .NET (which is a part of Conholdate.Total for .NET) scan barcode from images, documents and other file formats like PDF, Emails, Ebooks, Words, and others."
keywords: Scanning Barcode,Scanning Barcode in C#
type: docs
url: /scanning-barcode/
weight: 70
---

## Scanning Barcode in C#

GroupDocs.Parser (which is a part of Conholdate.Total for .NET) allows to scan barcode from PDF, Word (DOC, DOCX), PowerPoint (PPT, PPTX), LibreOffice formats and many others.

The Parser API is easy to use and powerful to scan barcodes. The API is capable to read even damaged barcodes.

This article shows how to implement the simplest scenario - read barcode from any supported format without additional settings. 

## How to scan barcode

To scan barcode from your file, simply call [GetBarcodes](https://apireference.groupdocs.com/parser/net/groupdocs.parser/parser/methods/getbarcodes) method.

```csharp
IEnumerable<PageBarcodeArea> GetBarcodes();
```

This method returns a collection of [PageBarcodeArea](https://apireference.groupdocs.com/parser/net/groupdocs.parser.data/pagebarcodearea) objects.

Here are the steps to extract a barcode from file.

- Instantiate [Parser](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser) object for the initial file.
- Check if the file supports barcodes extraction.
- Call [GetBarcodes](https://apireference.groupdocs.com/parser/net/groupdocs.parser/parser/methods/getbarcodes) method and obtain collection of [PageBarcodeArea](https://apireference.groupdocs.com/parser/net/groupdocs.parser.data/pagebarcodearea) objects.
- Iterate through the collection and get a barcode value.

The following example shows how to scan barcode:


{{< gist "conholdate-docs-gists" "63ee67bbcee0453c7ff2c3dba12ac3a5" "scanning-barcode.cs" >}}











