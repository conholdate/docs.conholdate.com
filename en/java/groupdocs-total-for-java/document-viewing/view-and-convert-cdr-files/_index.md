---
title: View and Convert CDR files Java
second_title: Conholdate.Total for Java
articleTitle: View and Convert CDR files
linktitle: View and Convert CDR files
description: "This article demonstrates how to use the GroupDocs.Viewer Java API (which is a part of Conholdate.Total for Java) to view and convert CDR files."
keywords: View and Convert CDR files, View and Convert CDR files in C#
type: docs
url: /java/view-and-convert-cdr-files/
weight: 30
---


## View and Convert CDR files in Java

[GroupDocs.Viewer for Java](https://products.groupdocs.com/viewer/java) (which is a part of Conholdate.Total for Java) provides facility to view and convert CDR files. 

CDR is a Corel Draw Image File format developed by Corel containing vector image data.

If you need to view a CDR file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for .NET.

![CDR](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cdr-files/sample.jpg)

## How to convert CDR files

### Convert CDR to HTML

To convert CDR files to HTML with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cdr")) {
        HtmlViewOptions options = HtmlViewOptions.forEmbeddedResources("output_{0}.html");

        viewer.view(options);

        // To render 2nd image, just specify
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output HTML file opened in a browser.

![CDR in HTML](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cdr-files/html.jpg)

### Convert CDR to JPG

To convert CDR files to JPG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cdr")) {
        JpgViewOptions options = new JpgViewOptions("output_{0}.jpg");

        viewer.view(options);

        // To render 2nd image, just specify
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![CDR in JPG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cdr-files/jpg.jpg)

### Convert CDR to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cdr")) {
        PngViewOptions options = new PngViewOptions("output_{0}.png");

        viewer.view(options);

        // To render 2nd image, just specify
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![CDR in PNG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cdr-files/png.jpg)

### Convert CDR to PDF

To convert CDR files to PDF with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.cdr")) {
        PdfViewOptions options = new PdfViewOptions("output.pdf");

        viewer.view(options);

        // By default all images will be rendered in output.pdf, to render only 2nd image in output PDF
        //viewer.view(options,2);
    }
```

\
The following screenshot shows the output PDF file opened in an Acrobat Reader.

![CDR in PDF](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-cdr-files/pdf.jpg)
