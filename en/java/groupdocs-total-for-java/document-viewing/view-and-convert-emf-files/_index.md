---
title: View and Convert EMF files Java
second_title: Conholdate.Total for Java
articleTitle: View and Convert EMF files
linktitle: View and Convert EMF files
title: ""
description: "This article demonstrates how to use the GroupDocs.Viewer Java API (which is a part of Conholdate.Total for Java) to view and convert EMF files."
keywords: View and Convert EMF files, View and Convert EMF files in Java
type: docs
url: /java/view-and-convert-emf-files/
weight: 30
---


## View and Convert EMF files in Java

[GroupDocs.Viewer for Java](https://products.groupdocs.com/viewer/java) (which is a part of Conholdate.Total for Java) provides facility to view and convert EMF or EMZ files. 

EMF or EMZ are Windows Compressed Enhanced Metafile graphics formats developed by Microsoft. These formats may contain both vector and raster images, but they are primarily used for vector images.

EMF or EMZ is Enhanced Windows Metafile Format - it contains Windows MetaFile binary data.

If you need to view an EMF(EMZ) file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for Java.

![EMF or EMZ](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-emf-and-emz-files/sample.jpg)

## How to convert EMZ files

### Convert EMZ to HTML

To convert EMZ files to HTML with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.emz")) {
        HtmlViewOptions options = HtmlViewOptions.forEmbeddedResources("output.html");

        viewer.view(options);
    }
```

\
The following screenshot shows the output HTML file opened in a browser.

![EMF/EMZ in HTML](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-emf-and-emz-files/html.jpg)

### Convert EMZ to JPG

To convert EMZ files to JPG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.emz")) {
        JpgViewOptions options = new JpgViewOptions("output.jpg");

        viewer.view(options);
    }
```

\
The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![EMF/EMZ in JPG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-emf-and-emz-files/jpg.jpg)

### Convert EMZ to PNG

To convert PLT/HPG files to PNG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.emz")) {
        PngViewOptions options = new PngViewOptions("output.png");

        viewer.view(options);
    }
```

\
The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![EMF/EMZ in PNG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-emf-and-emz-files/png.jpg)

### Convert EMZ to PDF

To convert EMZ files to PDF with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.emz")) {
        PdfViewOptions options = new PdfViewOptions("output.pdf");

        viewer.view(options);
    }
```

\
The following screenshot shows the output PDF file opened in an Acrobat Reader.

![EMF/EMZ in PDF](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-emf-and-emz-files/pdf.jpg)
