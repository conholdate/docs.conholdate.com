---
id: convert
url: /net/convert-files/
title: Convert files
weight: 3
description: "This article demonstrates that how to convert a file to PDF, Word, Excel, PowerPoint, Email, JPG, PNG, TIFF and many other formats with just couple of lines of С# (CSharp) code."
keywords: Convert PDF, Convert Word, Convert Excel, Convert Email, Convert Presentation, Convert a File C#, Convert document C#
type: docs

---


The **[GroupDocs.Conversion](https://products.groupdocs.com/conversion/net)**  (which is the part of Conholdate.Total for .NET) provides a convinient way to convert files from supported source format to several range of target formats. The user just need to follow the simple process which is - load a source document converter and after conversion is completed, result will be saved to a chosen file path at local disk or other desired storage.  
  
By default when performing internal calculations GroupDocs.Conversion for .NET will use some predefined settings that are best suited for loading and saving specified file format. However, conversion process can always be adjusted by setting specific [LoadOptions](https://apireference.groupdocs.com/conversion/net/groupdocs.conversion.options.load) to switch the way source document is loaged - for instance it's needed to cover document comments, setup fonts substitution, set password for protected document etc. Also [ConvertOptions](https://apireference.groupdocs.com/conversion/net/groupdocs.conversion.options.convert) class is employed to manage converted document - add watermarks into resultant document, change pages orientation, set images height/widht or resolution and plenty of more.
  
The common conversion workflow includes the following 3 steps:

* Loading source document into a new instance of [Converter](https://apireference.groupdocs.com/net/conversion/groupdocs.conversion/converter) class. You can provide file name with extension for this or document stream.
* Instantiate the needed [ConvertOptions](https://apireference.groupdocs.com/net/conversion/groupdocs.conversion.options.convert/convertoptions) object according to your requirements and desired output format like [PdfConvertOptions](https://apireference.groupdocs.com/conversion/net/groupdocs.conversion.options.convert/pdfconvertoptions), [PresentationConvertOptions](https://apireference.groupdocs.com/conversion/net/groupdocs.conversion.options.convert/presentationconvertoptions), [WordProcessingConvertOptions](https://apireference.groupdocs.com/conversion/net/groupdocs.conversion.options.convert/wordprocessingconvertoptions) and others.
* Call [Convert](https://apireference.groupdocs.com/net/conversion/groupdocs.conversion/converter/methods/convert/2) method of [Converter](https://apireference.groupdocs.com/net/conversion/groupdocs.conversion/converter) object and pass file name to save converted document with the convert options object from the previous step).  
  
These documentation articles are explaining in details how to convert a file to the most popular formats:
