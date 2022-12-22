---
title: "View and Convert CDR files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view and convert CDR files."
keywords: View and Convert CDR files, View and Convert CDR files in C#
type: docs
url: /net/view-and-convert-cdr-files/
weight: 30
---


## View and Convert CDR files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides facility to view and convert CDR files. 

CDR is a Corel Draw Image File format developed by Corel containing vector image data.

If you need to view a CDR file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET.

![CDR](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cdr-files/sample.jpg)

## How to convert CDR files

### Convert CDR to HTML

To convert CDR files to HTML with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cdr"))
{
       HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output_{0}.html");

       viewer.View(options);

       // To render 2nd image, just specify
       //viewer.View(options,2);
}
```


The following screenshot shows the output HTML file opened in a browser.

![CDR in HTML](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cdr-files/html.jpg)

### Convert CDR to JPG

To convert CDR files to JPG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cdr"))
{
       JpgViewOptions options = new JpgViewOptions("output_{0}.jpg");

       viewer.View(options);

       // To render 2nd image, just specify
       //viewer.View(options,2);
}
```


The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![CDR in JPG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cdr-files/jpg.jpg)

### Convert CDR to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cdr"))
{
       PngViewOptions options = new PngViewOptions("output_{0}.png");

       viewer.View(options);

       // To render 2nd image, just specify
       //viewer.View(options,2);
}
```

\
The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![CDR in PNG](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cdr-files/png.jpg)

### Convert CDR to PDF

To convert CDR files to PDF with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.cdr"))
{
       PdfViewOptions options = new PdfViewOptions("output.pdf");

       viewer.View(options);

       // By default all images will be rendered in output.pdf, to render only 2nd image in output PDF
       //viewer.View(options,2);
}
```

The following screenshot shows the output PDF file opened in an Acrobat Reader.

![CDR in PDF](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-cdr-files/pdf.jpg) 
