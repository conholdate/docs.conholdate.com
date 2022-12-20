---
title: "View XLSX files"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view XLSX files in HTML, PDF, PNG, and JPEG formats."
keywords: View XLSX files, View XLSX files in C#
type: docs
url: /net/view-xlsx-files/
weight: 30
---


## View XLSX files in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) allows you to render your spreadsheet files in HTML, PDF, PNG, and JPEG formats. You do not need to use Microsoft Excel or other spreadsheet programs to load and view Excel documents within your .NET application (web or desktop). 

To start with the GroupDocs.Viewer API, create a [Viewer](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer) class instance. Pass a spreadsheet file you want to view to the class constructor. You can load the document from a file or stream. Call one of the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method overloads to convert the document to HTML, PDF, or image format. These methods allow you to render the entire document or specific pages.

GroupDocs.Viewer can detect the document format automatically based on information in the file header.

## Render spreadsheets as HTML

Create an [HtmlViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a spreadsheet file to HTML. The **HtmlViewOptions** class properties allow you to control the conversion process. For instance, you can embed all external resources in the generated HTML file, minify the output file, and optimize it for printing.
### Create an HTML file with embedded resources

To save all elements of an HTML page (including text, graphics, and stylesheets) into a single file, call the [HtmlViewOptions.ForEmbeddedResources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions/methods/forembeddedresources/index) method and specify the output file name.

**Example  1: Convert an Excel workbook to HTML**

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("invoice.xlsx"))
{
    // Convert the spreadsheet to HTML.
    // {0} is replaced with the current page number in the file names.
    var viewOptions = HtmlViewOptions.ForEmbeddedResources("page_{0}.html");
    viewer.View(viewOptions);
}
```

The following image demonstrates the result:

![Render an Excel file to HTML](viewer/net/images/rendering-basics/render-spreadsheets/convert-excel-to-html.png)



### Create an HTML file with external resources

If you want to store an HTML file and additional resource files (such as fonts, images, and stylesheets) separately, call the [HtmlViewOptions.ForExternalResources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions/methods/forexternalresources/index) method and pass the following parameters:

  * The output file path format
  * The path format for the folder with external resources
  * The resource URL format

**Example  1: Convert an Excel workbook to HTML**

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("invoice.xlsx"))
{
    // Convert the spreadsheet to HTML.
    // Specify the HTML file names and location of external resources.
    // {0} and {1} are replaced with the current page number and resource name, respectively.
    var viewOptions = HtmlViewOptions.ForExternalResources(
        "page_{0}.html", "page_{0}/resource_{0}_{1}", "page_{0}/resource_{0}_{1}");
    viewer.View(viewOptions);
}
```



## Render spreadsheets as PDF

Create a [PdfViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pdfviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a spreadsheet file to PDF. The **PdfViewOptions** class properties allow you to control the conversion process. For instance, you can protect the output PDF file, reorder its pages, and specify the quality of document images.
**Example  1: Convert an Excel workbook to PDF**

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("invoice.xlsx"))
{
    // Convert the spreadsheet to PDF.
    var viewOptions = new PdfViewOptions("output.pdf");
    viewer.View(viewOptions);
}
```

The following image demonstrates the result:

![Render an Excel file to PDF](viewer/net/images/rendering-basics/render-spreadsheets/render-excel-to-pdf.png)

## Render spreadsheets as PNG

Create a [PngViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a spreadsheet file to PNG. Use the [PngViewOptions.Height](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions/properties/height) and [PngViewOptions.Width](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions/properties/width) properties to specify the output image size in pixels.

**Example  1: Convert an Excel workbook to PNG**

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("invoice.xlsx"))
{
    // Convert the spreadsheet to PNG.
    // {0} is replaced with the current page number in the file names.
    var viewOptions = new PngViewOptions("output_{0}.png");
    viewOptions.Width = 800;
    viewOptions.Height = 900;
    viewer.View(viewOptions);
}
```
The following image demonstrates the result:

![Render an Excel file to PNG](viewer/net/images/rendering-basics/render-spreadsheets/render-excel-to-png.png)

## Render spreadsheets as JPEG

Create a [JpgViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions) class instance and pass it to the [Viewer.View](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer/viewer/methods/view/index) method to convert a spreadsheet file to JPEG. Use the [JpgViewOptions.Height](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions/properties/height) and [JpgViewOptions.Width](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions/properties/width) properties to specify the output image size in pixels.

**Example  1: Convert an Excel workbook to JPEG**

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer("invoice.xlsx"))
{
    // Convert the spreadsheet to JPEG.
    // {0} is replaced with the current page number in the file names.
    var viewOptions = new JpgViewOptions("output_{0}.jpg");
    viewOptions.Width = 800;
    viewOptions.Height = 900;
    viewer.View(viewOptions);
}
```



## Detect a CSV/TSV separator

If you load a CSV/TSV file to convert it to another format, enable the [SpreadsheetOptions.DetectSeparator](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/spreadsheetoptions/properties/detectseparator) property for a target view to automatically detect a delimiter used to separate values in the source file.

GroupDocs.Viewer can detect the following separators:

* A comma (the default separator)
* A semicolon

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
// ...

using (var viewer = new Viewer(@"sample.csv"))
{
    var viewOptions = HtmlViewOptions.ForEmbeddedResources();
    viewOptions.SpreadsheetOptions.DetectSeparator = true;
    viewer.View(viewOptions);
}          
```

## Obtain worksheet names

GroupDocs.Viewer allows you to obtain information about the source spreadsheet file. For example, you can retrieve worksheet names, as described below:

1. Create a [ViewInfoOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/viewinfooptions) instance for a specific view.
2. Call the [Viewer.GetViewInfo](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/getviewinfo) method and pass the **ViewInfoOptions** instance to this method as a parameter.
3. Use the [Pages](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.results/viewinfo/properties/pages) property of the returned [ViewInfo](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.results/viewinfo) object to iterate through the list of worksheets and retrieve the worksheet names.

```cs
using GroupDocs.Viewer;
using GroupDocs.Viewer.Options;
using GroupDocs.Viewer.Results;
// ...

using (var viewer = new Viewer("sample.xlsx"))
{
    var viewInfoOptions = ViewInfoOptions.ForHtmlView();
    // Call this method to create a single page for each worksheet.
    viewInfoOptions.SpreadsheetOptions = SpreadsheetOptions.ForOnePagePerSheet();

    var viewInfo = viewer.GetViewInfo(viewInfoOptions);

    // Print the worksheet names in the console window.
    Console.WriteLine("The document contains the following worksheets:");
    foreach (Page page in viewInfo.Pages)
    {
        Console.WriteLine($" - Worksheet {page.Number}: '{page.Name}'");
    }
}
```

The following image demonstrates a sample console output:

![Retrieve worksheet names](viewer/net/images/rendering-basics/render-spreadsheets/retrieve-worksheet-names.png)

