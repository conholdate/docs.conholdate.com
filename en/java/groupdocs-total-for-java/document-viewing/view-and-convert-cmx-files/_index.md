---
title: View and Convert CMX files Java
second_title: Conholdate.Total for Java
articleTitle: View and Convert CMX files
linktitle: View and Convert CMX files
description: "This article demonstrates how to use the GroupDocs.Viewer Java API (which is a part of Conholdate.Total for Java) to view and convert CMX files."
keywords: View and Convert CMX files, View and Convert CMX files in Java
type: docs
url: /java/view-and-convert-cmx-files/
weight: 30
---


## View and Convert CMX files in Java

[GroupDocs.Viewer for Java](https://products.groupdocs.com/viewer/java) (which is a part of Conholdate.Total for Java) provides facility to view and convert CMX files. 


CMX is a Corel Metafile Exchange Image File format containing a vector image with metadata information. These files may contain multiple images, you can to set what images to render (see examples).

If you need to view a CMX file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET.

![CMX](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cmx-files/sample.jpg)

## How to convert CMX files

### Convert CMX to HTML

To convert CMX files to HTML with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cmx")) {
        HtmlViewOptions options = HtmlViewOptions.forEmbeddedResources("output_{0}.html");

        viewer.view(options);

        // To render 2nd image, just specify
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output HTML file opened in a browser.

![CMX in HTML](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cmx-files/html.jpg)

### Convert CMX to JPG

To convert CMX files to JPG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cmx")) {
        JpgViewOptions options = new JpgViewOptions("output_{0}.jpg");

        viewer.view(options);

        // To render 2nd image, just specify
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![CMX in JPG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cmx-files/jpg.jpg)

### Convert CMX to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cmx")) {
        PngViewOptions options = new PngViewOptions("output_{0}.png");

        viewer.view(options);

        // To render 2nd image, just specify
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![CMX in PNG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cmx-files/png.jpg)

### Convert CMX to PDF

To convert CMX files to PDF with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cmx")) {
        PdfViewOptions options = new PdfViewOptions("output.pdf");

        viewer.view(options);

        // By default all images will be rendered in output.pdf, to render only 2nd image in output PDF
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output PDF file opened in an Acrobat Reader.

![CMX in PDF](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cmx-files/pdf.jpg)