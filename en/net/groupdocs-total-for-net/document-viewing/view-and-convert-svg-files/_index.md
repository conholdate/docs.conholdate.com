---
title: "View and Convert SVG files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view and convert SVG files."
keywords: View and Convert SVG files, View and Convert SVG files in C#
type: docs
url: /net/view-and-convert-svg-files/
weight: 30
---


## View and Convert SVG files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides facility to view and convert SVG files. SVG is a Flat Scalable Vector Graphics format in uncompressed XML.

You can open these files with Adobe Illustrator, Corel PaintShop Pro, Serif DrawPlus, and Inkscape.

If you need to view an SVG(SVGZ) file in a browser or in a standard image or PDF viewer application, you have a choice to convert it to HTML, JPEG, PNG PDF format with GroupDocs.Viewer for .NET.

![Image in desktop program](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-svg-and-svgz-files/main.jpg)

## How to convert SVG/SVGZ files

### Convert SVG/SVGZ to HTML

To convert SVG/SVGZ files to HTML with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.svgz"))
{
       HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output.html");

       viewer.View(options);
}
```

The following screenshot shows the output HTML file opened in a browser.

![Result in browser](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-svg-and-svgz-files/result-in-browser.jpg)

### Convert SVG/SVGZ to JPG

To convert SVG/SVGZ files to JPG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.svgz"))
{
       JpgViewOptions options = new JpgViewOptions("output.jpg");

       viewer.View(options);
}
```

The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![Result in JPG](viewer/net/images/how-to-convert-and-view-svg-and-svgz-files/result-jpg.jpg)

### Convert SVG/SVGZ to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.svgz"))
{
       PngViewOptions options = new PngViewOptions("output.png");

       viewer.View(options);
}
```

The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![Result in PNG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-svg-and-svgz-files/result-png.jpg)

### Convert SVG/SVGZ to PDF

To convert SVGZ files to PDF with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.svgz"))
{
       PdfViewOptions options = new PdfViewOptions("output.pdf");

       viewer.View(options);
}
```

The following screenshot shows the output PDF file opened in an Acrobat Reader.

![Result in PDF](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-svg-and-svgz-files/result-pdf.jpg)
