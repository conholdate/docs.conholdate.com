---
title: "Extract Images from PDF"
description: "This article explains how GroupDocs.Parser for .NET (which is a part of Conholdate.Total for .NET) extract images from PDF file."
keywords: Extract Images from PDF, Extract Images from PDF in C#
type: docs
url: /extract-images-from-pdf/
weight: 70
---

## Extract Images from PDF in C#

GroupDocs.Parser (which is a part of Conholdate.Total for .NET) is very powerful tool to extract images from PDF of other various kind of documents and it can be easily used in simple use cases.

This article shows how to write code for a simplest scenario.

To extract images from documents simply call [GetImages](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser/methods/getimages) method:

```csharp
IEnumerable<PageImageArea> GetImages();

```
The methods return a collection of [PageImageArea](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/pageimagearea) objects:

| Member | Description |
| --- | --- |
| [Page](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/pagearea/properties/page) | The page that contains the text area. |
| [Rectangle](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/pagearea/properties/rectangle) | The rectangular area on the page that contains the text area. |
| [FileType](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/pageimagearea/properties/filetype) | The format of the image. |
| [Rotation](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/pageimagearea/properties/rotation) | The rotation angle of the image. |
| Stream [GetImageStream()](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/pageimagearea/methods/getimagestream) | Returns the image stream. |
| Stream [GetImageStream(ImageOptions)](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data.pageimagearea/getimagestream/methods/1) | Returns the image stream in a different format. |
| void [Save(String)](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/pageimagearea/methods/save) | Saves the image to the file. |
| void Save(String, ImageOptions) | Saves the image to the file in a different format. |
{{< gist "conholdate-docs-gists" "b27ac127cfc657c1dc7b017ced472e9b" "extract-text-from-pdf.cs" >}}

The following code snippet demonstrates how to extract all images from the whole document:

{{< gist "conholdate-docs-gists" "dbac88960e59c38ebf6821423559affa" "extract-images-from-pdf.cs" >}}











