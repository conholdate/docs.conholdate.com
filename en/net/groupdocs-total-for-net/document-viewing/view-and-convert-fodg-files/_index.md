---
title: "View and Convert FODG files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view and convert FODG files."
keywords: View and Convert EMF files, View and Convert FODG files in C#
type: docs
url: /net/view-and-convert-fodg-files/
weight: 30
---


## View and Convert FODG files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides facility to view and convert FODG files. Whereas, FODG is Flat OpenDocument Graphics format in uncompessed XML.

These files can be opened with LibreOffice(OpenOffice) draw. However, you can view a ODG(FODG) file in a browser or in a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET. 

![](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-odg-and-fodg-files.png)

## How to convert FODG files

### Convert FODG to HTML

To convert FODG files to HTML with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.fodg"))
{
       HtmlViewOptions options = HtmlViewOptions.ForEmbeddedResources("output.html");

       viewer.View(options);
}
```

The following screenshot shows the output HTML file opened in a browser.

![](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-odg-and-fodg-files_1.png)

### Convert FODG to JPG

To convert FODG files to JPG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.fodg"))
{
       JpgViewOptions options = new JpgViewOptions("output.jpg");

       viewer.View(options);
}
```

The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-odg-and-fodg-files_2.png)

### Convert FODG to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.fodg"))
{
       PngViewOptions options = new PngViewOptions("output.png");

       viewer.View(options);
}
```

The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-odg-and-fodg-files_3.png)

### Convert FODG to PDF

To convert FODG files to PDF with GroupDocs.Viewer for .NET use following code:

```csharp
using (Viewer viewer = new Viewer("sample.fodg"))
{
       PdfViewOptions options = new PdfViewOptions("output.pdf");

       viewer.View(options);
}
```

The following screenshot shows the output PDF file opened in an Acrobat Reader.

![](https://docs.groupdocs.com/viewer/net/images/how-to-convert-and-view-odg-and-fodg-files_4.png)
