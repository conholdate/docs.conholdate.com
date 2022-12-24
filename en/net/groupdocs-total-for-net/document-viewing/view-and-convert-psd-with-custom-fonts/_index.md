---
title: "View and Convert PSD with Custom Fonts"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view and convert PSD with custom fonts."
keywords: View and Convert PSD with custom fonts, View and Convert PSD with custom fonts in C#
type: docs
url: /net/view-and-convert-psd-with-custom-fonts/
weight: 30
---


## View and Convert PSD with custom fonts in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) provides facility to view and convert PSD with custom fonts. You can set the default font when you rendering PSD file format.

### How to set directories for fonts

To specify directories with your custom fonts, follow the below steps:

* Instantiate the [FolderFontSource](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/folderfontsource) object - set folder path, and [SearchOption](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/folderfontsource/properties/searchoption) - AllFolders - to search for fonts recursively, TopFolderOnly - to search for fonts only in the current folder;
* Call [SetFontSources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/fontsettings/methods/setfontsources) method of [FontsSettings](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/fontsettings) class.

```csharp
FolderFontSource folderFontSource = new FolderFontSource(@"C:\custom_fonts_folder", SearchOption.TopFolderOnly);
FontSettings.SetFontSources(folderFontSource);
```

Your fonts will be loaded before open your document.

### Convert PSD with custom fonts

To convert PSD files with custom fonts with GroupDocs.Viewer for .NET follow the below steps:

* Instantiate the [FolderFontSource](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/folderfontsource) object - set folder path, and [SearchOption](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/folderfontsource/properties/searchoption) - AllFolders - to search for fonts recursively, TopFolderOnly - to search for fonts only in the current folder;
* Call [SetFontSources](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/fontsettings/methods/setfontsources) method of [FontsSettings](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.fonts/fontsettings) class and supply font sources as arguments.
* Instantiate the [Viewer](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer) object;
* Instantiate [HtmlViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/htmlviewoptions) (or [JpgViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/jpgviewoptions), or [PngViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pngviewoptions), or [PdfViewOptions](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer.options/pdfviewoptions)) object;
* Set [DefaultFontName](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/baseviewoptions/properties/defaultfontname) property in options - set your font name;
* Call [View](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/view) method.
* The following code sample shows how to set the output image size limits when rendering the document.

```csharp

// Create font sources.
// Add custom fonts folder to look for fonts recursively. (look into subfolders too).
FolderFontSource folderFontSource = new FolderFontSource(@"C:\custom_fonts_folder", SearchOption.AllFolders);
// Add custom fonts folder to look for fonts only in this folder (wihout subfolders).
FolderFontSource additionalFontSource = new FolderFontSource(@"C:\custom_additional_fonts_folder", SearchOption.TopFolderOnly);
// Call SetFontSources method and supply font sources as arguments.
FontSettings.SetFontSources(folderFontSource, additionalFontSource);

using (Viewer viewer = new Viewer("sample.psd"))
{
       JpgViewOptions options = new JpgViewOptions("result.jpg");
       options.DefaultFontName = "Arial";

       viewer.View(options); 
}
```




