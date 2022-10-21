---
title: "Scanning QR Code"
description: "This article explains how GroupDocs.Parser for .NET (which is a part of Conholdate.Total for .NET) scan QR Code from images, documents and other file formats like PDF, Emails, Ebooks, Words, and others."
keywords: Scanning QR Code,Scanning QR Code in C#
type: docs
url: /scanning-qr-code/
weight: 70
---

## Scanning QR Code in C#

GroupDocs.Parser (which is a part of Conholdate.Total for .NET) allows to scan QR Code from PDF, MS Word (DOC, DOCX), MS PowerPoint (PPT, PPTX), LibreOffice formats and many others (see full list at [supported document formats]({{< ref "parser/net/getting-started/supported-document-formats.md" >}}) article).

GroupDocs.Parser's QR Code scanner is easy to use and powerful at the same time. Our sophisticated algorithms allow to read even damaged barcodes.

This article demonstrates how to implement QR Code reader from any supported format. 

## How to scan QR Code in .Net with GroupDocs.Parser

Scan QR Code from your document by calling [GetBarcodes](https://apireference.groupdocs.com/parser/net/groupdocs.parser/parser/methods/getbarcodes) method:

```csharp
IEnumerable<PageBarcodeArea> GetBarcodes();
```

This method returns a collection of [PageBarcodeArea](https://apireference.groupdocs.com/parser/net/groupdocs.parser.data/pagebarcodearea) objects.

Here are the steps to extract a QR Code from file:

- Instantiate [Parser](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser) object for the initial file;
- Check if the file supports barcodes extraction;
- Call [GetBarcodes](https://apireference.groupdocs.com/parser/net/groupdocs.parser/parser/methods/getbarcodes) method and obtain collection of [PageBarcodeArea](https://apireference.groupdocs.com/parser/net/groupdocs.parser.data/pagebarcodearea) objects;
- Iterate through the collection and get a barcode value.

The following example shows how to scan barcode:


{{< gist "conholdate-docs-gists" "28590d7ad4bf27705a682483810228b5" "scanning-qr-code.cs" >}}











