---
title: View and Convert AI files Java
second_title: Conholdate.Total for Java
articleTitle: View and Convert AI files
linktitle: View and Convert AI files
description: "This article demonstrates how to use the GroupDocs.Viewer Java API (which is a part of Conholdate.Total for Java) to view and convert AI files."
keywords: View and Convert AI files, View and Convert AI files in Java
type: docs
url: /java/view-and-convert-ai-files/
weight: 30
---


## View and Convert AI files in Java

[GroupDocs.Viewer for Java](https://products.groupdocs.com/viewer/java) (which is a part of Conholdate.Total for Java) provides you ways to view and convert Adobe Illustrator (AI) files.

AI (Adobe Illustrator) is an Adobe vector graphics format. Typically used for logos and print media, illustrations.

![AI file example](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-ai-files/ai-file-example.jpg)

## How to view AI files

The AI files can be opened with Adobe Illustrator and Corel Draw.

In case you need to view an AI file in a browser or a standard image or PDF viewer application, you can convert it to HTML, JPEG, PNG  PDF format with GroupDocs.Viewer for Java.

### Convert AI to HTML

To convert AI files to HTML with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.ai")) {
        HtmlViewOptions options = HtmlViewOptions.forEmbeddedResources("ai_result.html");

        viewer.view(options);
    }
```

The following screenshot shows the output HTML file opened in a browser.

![AI file converted in HTML](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-ai-files/ai-file-in-html.jpg)

### Convert AI to JPG

To convert AI files to JPG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.ai")) {
        JpgViewOptions options = new JpgViewOptions("ai_result.jpg");

        viewer.view(options);
    }
```

The following screenshot shows the output JPG file opened in a Windows Photo Viewer application.

![AI file converted in JPG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-ai-files/ai-file-in-jpg.jpg)

### Convert AI to PNG

To convert AI/HPG files to PNG with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.ai")) {
        PngViewOptions options = new PngViewOptions("ai_result.png");

        viewer.view(options);
    }
```

The following screenshot shows the output PNG file opened in a Windows Photo Viewer application.

![AI file converted in PNG](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-ai-files/ai-file-in-png.jpg)

### Convert AI to PDF

To convert AI files to PDF with GroupDocs.Viewer for Java use following code:

```java
    try (Viewer viewer = new Viewer("sample.ai")) {
        PdfViewOptions options = new PdfViewOptions("ai_result.pdf");

        viewer.view(options);
    }
```

The following screenshot shows the output PDF file opened in a browser.

![AI file converted in PDF](https://docs.groupdocs.com/viewer/java/images/how-to-convert-and-view-ai-files/ai-file-in-pdf.jpg)
