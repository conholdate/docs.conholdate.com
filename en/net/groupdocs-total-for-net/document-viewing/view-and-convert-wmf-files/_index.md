---
title: "View and Convert WMF files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view and convert WMF files."
keywords: View and Convert WMF files, View and Convert WMF files in C#
type: docs
url: /net/view-and-convert-wmf-files/
weight: 30
---


## View and Convert WMF files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides facility to view and convert WMF files. WMF and WMZ are Windows Metafile graphics formats developed by Microsoft, primarily used for vector images but may contain both vector and raster images.
WMF is Windows MetaFile Format - it contains Windows MetaFile binary data.
WMZ is Windows Metafile Zipped format - it also contains Windows MetaFile binary data but compressed with GZIP.

WMF files can be opened with Microsoft Paint, Adobe Illustrator, InkScape.
WMZ files can be opened with the same applications but should be unpacked before open.

These file formats are part of a series of Windows Metafile formats:

Windows Metafile formats:
WMF - Windows Metafile Format
WMZ - Windows Metafile Compressed (GZipped) Format

If you need to view a WMF(WMZ) file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET.

![WMF and WMZ](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-wmf-and-wmz-files/sample.jpg)

## How to convert WMZ files

### Convert WMZ to HTML

To convert WMZ files to HTML with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.WMZ"))
{
       HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output.html");

       viewer.View(options);
}
```


The following screenshot shows the output HTML file opened in a browser.

![WMF/WMZ in HTML](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-wmf-and-wmz-files/html.jpg)

### Convert WMZ to JPG

To convert WMZ files to JPG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.WMZ"))
{
       JpgViewOptions options = new JpgViewOptions("output.jpg");

       viewer.View(options);
}
```


The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![WMF/WMZ in JPG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-wmf-and-wmz-files/jpg.jpg)

### Convert WMZ to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.WMZ"))
{
       PngViewOptions options = new PngViewOptions("output.png");

       viewer.View(options);
}
```


The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![WMF/WMZ in PNG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-wmf-and-wmz-files/png.jpg)

### Convert WMZ to PDF

To convert WMZ files to PDF with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.WMZ"))
{
       PdfViewOptions options = new PdfViewOptions("output.pdf");

       viewer.View(options);
}
```


The following screenshot shows the output PDF file opened in an Acrobat Reader.


