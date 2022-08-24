---
title: How to add barcode to PDF in C#
second_title: Conholdate.Total for .NET
articleTitle: How to add barcode to PDF
linktitle: How to add barcode to PDF
type: docs
url: /how-to-add-barcode-to-pdf/
description: "Create a barcode and add it to PDF in C#."
keywords: "create barcode c#, Create PDF c#, Add barcode to PDf c#, .NET create barcode, .NET Create PDF, .NET Add barcode to PDf"
weight: 10
---

PDFs are a popular medium for generating reports or any official documents in many organizations. [Aspose.PDF](https://products.aspose.com/pdf/net) is part of Conholdate.Total for .NET to generate PDF documents in .NET. It is easy to add barcodes to PDF by integrating Aspose.BarCode with Aspose.PDF. This article briefly describes how to add high-quality barcode images to PDFs.
## **Create barcode in C#**
To create a barcode, follow these simple steps:

- Create an object of the BarcodeGenerator class.
- Set the text using CodeText property of the BarcodeGenerator object.
- Set the barcode type (Code128 as an example) from the EncodeTypes enumeration.

Following code shows the steps in detail.

{{< gist "aspose-barcode-gists" "03dfdc48b9daeda11c30e89980eacf08" "create-barcode.cs" >}}
## **Save barcode to MemoryStream**
Once the barcode is generated (in the first step), it can be saved to MemoryStream as shown in the following code.

{{< gist "aspose-barcode-gists" "7455f3a7708b1c39af59763157945fa7" "save-to-stream.cs" >}}
## **Create PDF in C#.NET and add barcode iamge**
Barcode image is saved to a MemoryStream, so we can now create a PDF and add barcode to it as shown in the steps below.

- Create a PDF by creating an object of Aspose.Pdf.Document class.
- Add a new page to the PDF
- Use Aspose.Pdf.Facades.PdfFileMend class object to add the image to PDF

Following code shows these steps in detail

{{< gist "conholdate-gists" "260c8d99d9949bfec6f056bdd0190ac6" "add-barcode-to-pdf.cs" >}}
