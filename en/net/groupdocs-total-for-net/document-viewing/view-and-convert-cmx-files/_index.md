---
title: "View and Convert CMX files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view and convert CMX files."
keywords: View and Convert CMX files, View and Convert CMX files in C#
type: docs
url: /net/view-and-convert-cmx-files/
weight: 30
---


## View and Convert CMX files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides facility to view and convert CMX files. 


CMX is a Corel Metafile Exchange Image File format containing a vector image with metadata information. These files may contain multiple images, you can to set what images to render (see examples).

If you need to view a CMX file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET.

![CMX](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cmx-files/sample.jpg)

## How to convert CMX files

### Convert CMX to HTML

To convert CMX files to HTML with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cmx"))
{
       HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output_{0}.html");

       viewer.View(options);

       // To render 2nd image, just specify
       //viewer.View(options,2);

}
```

\
The following screenshot shows the output HTML file opened in a browser.

![CMX in HTML](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cmx-files/html.jpg)

### Convert CMX to JPG

To convert CMX files to JPG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cmx"))
{
       JpgViewOptions options = new JpgViewOptions("output_{0}.jpg");

       viewer.View(options);

       // To render 2nd image, just specify
       //viewer.View(options,2);

}
```

\
The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![CMX in JPG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cmx-files/jpg.jpg)

### Convert CMX to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cmx"))
{
       PngViewOptions options = new PngViewOptions("output_{0}.png");

       viewer.View(options);

       // To render 2nd image, just specify
       //viewer.View(options,2);

}
```

\
The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![CMX in PNG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cmx-files/png.jpg)

### Convert CMX to PDF

To convert CMX files to PDF with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cmx"))
{
       PdfViewOptions options = new PdfViewOptions("output.pdf");

       viewer.View(options);

       // By default all images will be rendered in output.pdf, to render only 2nd image in output PDF
       //viewer.View(options,2);
}
```

\
The following screenshot shows the output PDF file opened in an Acrobat Reader.

![CMX in PDF](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cmx-files/pdf.jpg)