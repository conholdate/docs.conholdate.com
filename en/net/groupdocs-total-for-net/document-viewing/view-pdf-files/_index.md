---
title: "View PDF files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view PDF files in HTML, PDF, PNG, and JPEG formats."
keywords: View PDF files, View PDF files in C#
type: docs
url: /net/view-pdf-files/
weight: 30
---


## View PDF files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) allows you to render your PDF files in HTML, PNG, and JPEG formats. Use this API to implement a simple PDF viewer within your .NET application .

Create a [Viewer](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer) class instance to get started with the GroupDocs.Viewer API. Pass a document you want to view to the class constructor. You can load the document from a file or stream. Call one of the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method overloads to convert the document to HTML or image format. These methods allow you to render the entire document or specific pages.

## Render PDF files as HTML

Create an [HtmlViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a PDF file to HTML. The **HtmlViewOptions** class properties allow you to control the conversion process. For instance, you can embed all external resources in the generated HTML file, minify the output file, and optimize it for printing.

### Create an HTML file with embedded resources

To save all elements of an HTML page (including text, graphics, and stylesheets) into a single file, call the [HtmlViewOptions.ForEmbeddedResources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions/methods/forembeddedresources/index) method and specify the output file name.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    // Create an HTML file for each PDF page.
    // {0} is replaced with the current page number in the file name.
    var viewOptions = HtmlViewOptions.ForEmbeddedResources("page_{0}.html");
    viewer.View(viewOptions);
}
```

The following image demonstrates the result:

![Render a PDF file to HTML](https://docs.groupdocs.com/viewer/net/images/rendering-basics/render-pdf-documents/render-pdf-to-html.png)

### Create an HTML file with external resources

If you want to store an HTML file and additional resource files (such as fonts, images, and stylesheets) separately, call the [HtmlViewOptions.ForExternalResources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions/methods/forexternalresources/index) method and pass the following parameters:

  * The output file path format
  * The path format for the folder with external resources
  * The resource URL format

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    // Create an HTML file for each PDF page.
    // Specify the HTML file names and location of external resources.
    // {0} and {1} are replaced with the current page number and resource name, respectively.
    var viewOptions = HtmlViewOptions.ForExternalResources(
        "page_{0}.html", "page_{0}/resource_{0}_{1}", "page_{0}/resource_{0}_{1}");
    viewer.View(viewOptions);
}
```

The image below demonstrates the result. External resources are placed in a separate folder.

![Place HTML resources in a separate folder](https://docs.groupdocs.com/viewer/net/images/rendering-basics/render-pdf-documents/render-to-html-external-resources.png)

### Adjust image quality in the output HTML file

The [HtmlViewOptions.PdfOptions.ImageQuality](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfoptions/properties/imagequality) option allows you to specify the quality of images in the output HTML file. You can set this property to one of the following values:

* [ImageQuality.Low](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/imagequality) --- The image resolution is low (96 DPI), and the image size is small. Use this value to increase the conversion performance.
* [ImageQuality.Medium](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/imagequality) --- The image resolution is medium (192 DPI), and the image size is larger compared to the low quality images.
* [ImageQuality.High](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/imagequality) --- The image resolution is high (300 DPI), and the image size is big. Use of this value may decrease the conversion performance.

The following code snippet uses the medium image quality when rendering a PDF document to HTML.

```csharp
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    var viewOptions = HtmlViewOptions.ForEmbeddedResources("page_{0}.html");
    viewOptions.PdfOptions.ImageQuality = ImageQuality.Medium;
    viewer.View(viewOptions);
}
```

### Render text as an image

GroupDocs.Viewer supports the [HtmlViewOptions.PdfOptions.RenderTextAsImage](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pdfoptions/properties/rendertextasimage) option that allows you to render text as an image when you convert a PDF file to HTML. In this case, the layout of the output HTML file closely mirrors the layout of the source PDF document.

The following example demonstrates how to enable this option in code:

```csharp
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    var viewOptions = HtmlViewOptions.ForEmbeddedResources("text-as-image.html");
    viewOptions.PdfOptions.RenderTextAsImage = true;
    viewer.View(viewOptions);
}
```

The image below illustrates the result. PDF content is exported to HTML as an image, so users cannot select or copy document text.  

![Render PDF content as an image in the output HTML file](https://docs.groupdocs.com/viewer/net/images/rendering-basics/render-pdf-documents/render-pdf-to-html-as-image.png)

### Enable multi-layer rendering

When you convert a PDF file to HTML, GroupDocs.Viewer creates an HTML document with a single layer (the **z-index** is not specified for document elements). This helps increase performance and reduce the output file size. If you convert a PDF document with multiple layers and want to improve the position of document elements in the output HTML file, activate the [HtmlViewOptions.PdfOptions.EnableLayeredRendering](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfoptions/properties/enablelayeredrendering) property to render text and graphics in the HTML file according to the z-order in the source PDF document.

The following example demonstrates how to enable this option in code:

```csharp
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("sample.pdf"))
{
    var viewOptions = HtmlViewOptions.ForEmbeddedResources();
    viewOptions.PdfOptions.EnableLayeredRendering = true;
    viewer.View(viewOptions);
}
```

## Render PDF files as images
### Convert PDF files to PNG

Create a [PngViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a PDF file to PNG. Use the [PngViewOptions.Height](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions/properties/height) and [PngViewOptions.Width](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions/properties/width) properties to specify the output image size in pixels.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    // Create a PNG image for each PDF page.
    // {0} is replaced with the current page number in the image name.
    var viewOptions = new PngViewOptions("output_{0}.png");
    viewOptions.Width = 800;
    viewOptions.Height = 900;
    viewer.View(viewOptions);
}
```

The following image demonstrates the result:

![Render a PDF file to PNG](https://docs.groupdocs.com/viewer/net/images/rendering-basics/render-pdf-documents/render-pdf-to-png.png)

### Convert PDF files to JPEG

Create a [JpgViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a PDF file to JPEG. Use the [JpgViewOptions.Height](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions/properties/height) and [JpgViewOptions.Width](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions/properties/width) properties to specify the output image size in pixels.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    // Create a JPEG image for each PDF page.
    // {0} is replaced with the current page number in the image name.
    var viewOptions = new JpgViewOptions("output_{0}.jpg");
    viewOptions.Width = 800;
    viewOptions.Height = 900;
    viewer.View(viewOptions);
}
```

### Preserve the size of document pages

When you render PDF documents as images, GroupDocs.Viewer calculates the optimal image size to achieve better rendering quality. If you want the generated images to be the same size as pages in the source PDF document, enable the [PdfOptions.RenderOriginalPageSize](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfoptions/properties/renderoriginalpagesize) property for the [PngViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions) or [JpgViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions) class (depending on the output image format).


```csharp
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    var viewOptions = new PngViewOptions("output_{0}.png");
    viewOptions.PdfOptions.RenderOriginalPageSize = true;
    viewer.View(viewOptions);
}
```

### Enable font hinting

To adjust the display of outline fonts when you convert PDF documents to PNG or JPEG, activate the [PdfOptions.EnableFontHinting](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfoptions/properties/enablefonthinting) option, as shown below:

```csharp
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    var viewOptions = new PngViewOptions("output_{0}.png");
    viewOptions.PdfOptions.EnableFontHinting = true;
    viewer.View(viewOptions);
}
```



## Disable character grouping

When you render PDF files in other formats, GroupDocs.Viewer groups individual characters into words to improve rendering performance. If your document contains hieroglyphic or special symbols, you may need to disable character grouping to generate a more precise layout. To do this, use the [PdfOptions.DisableCharsGrouping](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfoptions/properties/disablecharsgrouping) option, as shown below:

```csharp
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("sample.pdf"))
{
    var viewOptions = HtmlViewOptions.ForEmbeddedResources();
    viewOptions.PdfOptions.DisableCharsGrouping = true;
    viewer.View(viewOptions);
}
```

## Render text comments

Enable the [ViewOptions.RenderComments](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/baseviewoptions/properties/rendercomments) option for a target view to display textual annotations (such as text comments, sticky notes, text boxes and callouts) in the output HTML, PNG, or JPEG files.

The code example below renders a PDF file with text comments as an image.

```csharp
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("resume_commented.pdf"))
{
    var viewOptions = new PngViewOptions("output.png");
    viewOptions.RenderComments = true;
    viewer.View(viewOptions);
}
```

The following image illustrates the result:

![Render PDF comments to PNG](https://docs.groupdocs.com/viewer/net/images/rendering-basics/render-pdf-documents/render-pdf-comments.png)

## Obtain information about a PDF file

Follow the steps below to obtain information about a PDF file (the number of pages, page size, and printing permissions): 

1. Create a [ViewInfoOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/viewinfooptions) instance for a specific view.
2. Call the [Viewer.GetViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/getviewinfo) method, pass the **ViewInfoOptions** instance to this method as a parameter, and cast the returned object to the [PdfViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.results/pdfviewinfo) type.
3. Use the **PdfViewInfo** class properties to retrieve document-specific information.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
using GroupDocs.Viewer.Results;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    var viewInfoOptions = ViewInfoOptions.ForHtmlView();
    viewInfoOptions.ExtractText = true;
    var viewInfo = viewer.GetViewInfo(viewInfoOptions) as PdfViewInfo;

    // Display information about the PDF document.
    Console.WriteLine($"File type: {viewInfo.FileType}");
    Console.WriteLine($"The number of pages: {viewInfo.Pages.Count}");
    Console.WriteLine($"Is printing allowed: {viewInfo.PrintingAllowed}");
    
    // Display information about all document pages.
    Console.WriteLine("Page information:");
    foreach (Page page in viewInfo.Pages)
    {
        // The Page.ToString method is overriden to display the following page information: 
        // "Page {Number} ({visibility}) {Width}x{Height}px with {Lines.Count} line(s)."
        Console.WriteLine(page);
    }
}
```

The following image demonstrates a sample console output:

![Get information about a PDF file](https://docs.groupdocs.com/viewer/net/images/rendering-basics/render-pdf-documents/retrieve-pdf-file-information.png)

### Extract text from a PDF file

Set the [ViewInfoOptions.ExtractText](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/viewinfooptions/properties/extracttext) property to **true** to enable PDF text extraction. Use the [PdfViewInfo.Pages](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.results/viewinfo/properties/pages) property to obtain the list of all document pages, and iterate through the collection of lines on each page ([Page.Lines](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.results/page/properties/lines)) to retrieve text for each line.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
using GroupDocs.Viewer.Results;
// ...

using (var viewer = new Viewer("resume.pdf"))
{
    var viewInfoOptions = ViewInfoOptions.ForHtmlView();
    viewInfoOptions.ExtractText = true;
    var viewInfo = viewer.GetViewInfo(viewInfoOptions) as PdfViewInfo;
    
    // Retrieve text from the PDF file.
    Console.WriteLine("Extracted document text:");
    foreach (Page page in viewInfo.Pages)
        foreach (Line line in page.Lines)
        {
            Console.WriteLine(line.Value);
        }
}
```

![Extract and display PDF text](https://docs.groupdocs.com/viewer/net/images/rendering-basics/render-pdf-documents/extract-pdf-text.png)
