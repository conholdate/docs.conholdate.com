---
title: "View Visio files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view Visio files in HTML, PDF, PNG, and JPEG formats."
keywords: View Visio files, View Visio files in C#
type: docs
url: /net/view-visio-files/
weight: 30
---


## View Visio files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides you a way to render your Visio diagrams in HTML, PDF, PNG, and JPEG formats. You do not need to use Microsoft Visio or other diagramming software to load and view Visio files within your .NET application (web or desktop). 

To start using the GroupDocs.Viewer API, create a [Viewer](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer) class instance. Pass a document you want to view to the class constructor. You can load the document from a file or stream. Call one of the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method overloads to convert the document to HTML, PDF, or image format. These methods allow you to render the entire document or specific pages.

## Render Visio files as HTML

Create an [HtmlViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a Visio file to HTML. The **HtmlViewOptions** class properties allow you to control the conversion process. For instance, you can embed all external resources in the generated HTML file, minify the output file, and optimize it for printing. 

### Create an HTML file with embedded resources

To save all elements of an HTML page (including text, graphics, and stylesheets) into a single file, call the [HtmlViewOptions.ForEmbeddedResources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions/methods/forembeddedresources/index) method and specify the output file name.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("flowchart.vsdx"))
{
    // Create an HTML file for each drawing page.
    // {0} is replaced with the current page number in the file name.
    var viewOptions = HtmlViewOptions.ForEmbeddedResources("page_{0}.html");
    viewer.View(viewOptions);
}
```

The following image demonstrates the result:

![Render a Visio file to HTML](viewer/net/images/rendering-basics/render-visio-documents/render-visio-to-html-embedded-resources.png)

### Create an HTML file with external resources

If you want to store an HTML file and additional resource files (such as fonts, images, and stylesheets) separately, call the [HtmlViewOptions.ForExternalResources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions/methods/forexternalresources/index) method and pass the following parameters:

  * The output file path format
  * The path format for the folder with external resources
  * The resource URL format

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("flowchart.vsdx"))
{
    // Create an HTML file for each drawing page.
    // Specify the HTML file names and location of external resources.
    // {0} and {1} are replaced with the current page number and resource name, respectively.
    var viewOptions = HtmlViewOptions.ForExternalResources(
        "page_{0}.html", "page_{0}/resource_{0}_{1}", "page_{0}/resource_{0}_{1}");
    viewer.View(viewOptions);
}
```

The image below demonstrates the result. External resources are placed in a separate folder.

![Place HTML resources in a separate folder](viewer/net/images/rendering-basics/render-visio-documents/render-visio-to-html-external-resources.png)

## Render Visio files as PDF

Create a [PdfViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pdfviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a Visio file to PDF. The **PdfViewOptions** class properties allow you to control the conversion process. For instance, you can protect the output PDF file, reorder its pages, and specify the quality of document images.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("flowchart.vsdx"))
{
    var viewOptions = new PdfViewOptions("output.pdf");
    viewer.View(viewOptions);
}
```

The following image demonstrates the result:

![Render a Visio file to PDF](viewer/net/images/rendering-basics/render-visio-documents/render-visio-to-pdf.png)

## Render Visio files as PNG

Create a [PngViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a Visio file to PNG. Use the [PngViewOptions.Height](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions/properties/height) and [PngViewOptions.Width](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions/properties/width) properties to specify the output image size in pixels.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("flowchart.vsdx"))
{
    // Create a PNG image for each drawing page.
    // {0} is replaced with the current page number in the image name.
    var viewOptions = new PngViewOptions("output_{0}.png");
    viewOptions.Width = 950;
    viewOptions.Height = 800;
    viewer.View(viewOptions);
}
```
The following image demonstrates the result:

![Render a Visio file to PNG](viewer/net/images/rendering-basics/render-visio-documents/render-visio-to-png-image.png)

## Render Visio files as JPEG

Create a [JpgViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a Visio file to JPEG. Use the [JpgViewOptions.Height](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions/properties/height) and [JpgViewOptions.Width](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions/properties/width) properties to specify the output image size in pixels.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("flowchart.vsdx"))
{
    // Create a JPEG image for each drawing page.
    // {0} is replaced with the current page number in the image name.
    var viewOptions = new JpgViewOptions("output_{0}.jpg");
    viewOptions.Width = 950;
    viewOptions.Height = 800;
    viewer.View(viewOptions);
}
```

## Render only diagram shapes

GroupDocs.Viewer allows you to render shapes used in a Visio diagram or stored in a Visio stencil file. These shapes are displayed in the **Document Stencil** pane in Microsoft Visio.

![Document Stencil pane in Visio](viewer/net/images/rendering-basics/render-visio-documents/visio-document-stencil.png)

To render only master shapes contained in your Visio file, enable the [VisioRenderingOptions.RenderFiguresOnly](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/visiorenderingoptions/properties/renderfiguresonly) property for one of the following classes (depending on the output file format):

* [HtmlViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/htmlviewoptions) 
* [PdfViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfviewoptions)
* [PngViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pngviewoptions)
* [JpgViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/jpgviewoptions)

The [VisioRenderingOptions.FigureWidth](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/visiorenderingoptions/properties/figurewidth) property allows you to specify the shape width in pixels. The height is calculated automatically based on the aspect ratio of each shape.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("map.vsdx"))
{
    var viewOptions = new PdfViewOptions("output.pdf");
    viewOptions.VisioRenderingOptions.RenderFiguresOnly = true;
    viewOptions.VisioRenderingOptions.FigureWidth = 200;
    viewer.View(viewOptions);
}
```

The image below demonstrates the result.

![Render master shapes only](viewer/net/images/rendering-basics/render-visio-documents/render-visio-shapes
