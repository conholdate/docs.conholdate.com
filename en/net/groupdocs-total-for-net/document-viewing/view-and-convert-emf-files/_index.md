---
title: "View and Convert EMF files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view and convert EMF files."
keywords: View and Convert EMF files, View and Convert EMF files in C#
type: docs
url: /net/view-and-convert-emf-files/
weight: 30
---


## View and Convert EMF files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides facility to view and convert EMF or EMZ files. 

EMF or EMZ are Windows Compressed Enhanced Metafile graphics formats developed by Microsoft. These formats may contain both vector and raster images, but they are primarily used for vector images.

EMF or EMZ is Enhanced Windows Metafile Format - it contains Windows MetaFile binary data.

If you need to view an EMF(EMZ) file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET.

![EMF or EMZ](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-emf-and-emz-files/sample.jpg)

## How to convert EMZ files

### Convert EMZ to HTML

To convert EMZ files to HTML with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.emz"))
{
       HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output.html");

       viewer.View(options);
}
```


The following screenshot shows the output HTML file opened in a browser.

![EMF/EMZ in HTML](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-emf-and-emz-files/html.jpg)

### Convert EMZ to JPG

To convert EMZ files to JPG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.emz"))
{
       JpgViewOptions options = new JpgViewOptions("output.jpg");

       viewer.View(options);
}
```


The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![EMF/EMZ in JPG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-emf-and-emz-files/jpg.jpg)

### Convert EMZ to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.emz"))
{
       PngViewOptions options = new PngViewOptions("output.png");

       viewer.View(options);
}
```


The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![EMF/EMZ in PNG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-emf-and-emz-files/png.jpg)

### Convert EMZ to PDF

To convert EMZ files to PDF with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.emz"))
{
       PdfViewOptions options = new PdfViewOptions("output.pdf");

       viewer.View(options);
}
```


The following screenshot shows the output PDF file opened in an Acrobat Reader.

![EMF/EMZ in PDF](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-emf-and-emz-files/pdf.jpg)


