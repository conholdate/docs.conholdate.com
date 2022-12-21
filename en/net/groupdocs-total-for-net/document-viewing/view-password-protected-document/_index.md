---
title: "View Password Protected Documents"
description: "This article demonstrates how to use the GroupDocs.Viewer .NET API (which is a part of Conholdate.Total for .NET) to view password protected documents in HTML, PDF, PNG, and JPEG formats."
keywords: View Password Protected Documents, View Password Protected Documents in C#
type: docs
url: /net/view-password-protected-documents/
weight: 30
---


## View Password Protected Documents in C#

[GroupDocs.Viewer for .NET](https://products.groupdocs.com/viewer/net) (which is a part of Conholdate.Total for .NET) Provides you a facility to view the password protected documents.

The following are the steps to convert encrypted documents:

* Instantiate the [HtmlViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/htmlviewoptions) (or [PngViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pngviewoptions), or [JpgViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/jpgviewoptions), or [PdfViewOptions](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/pdfviewoptions)) object;
* Set password in [LoadOptions.Password](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.options/loadoptions/properties/password) property;
* Call [View](https://apireference.groupdocs.com/net/viewer/groupdocs.viewer/viewer/methods/view) method.

The following code sample shows how to convert encrypted documents:

```csharp
LoadOptions loadOptions = new LoadOptions();
loadOptions.Password = "123456";

using (Viewer viewer = new Viewer("encrypted.docx", loadOptions))
{
    HtmlViewOptions viewOptions = HtmlViewOptions.ForEmbeddedResources();
    viewer.View(viewOptions);
}
```

{{< alert style="info" >}}
In case the password is not specified GroupDocs.Viewer will throw [PasswordRequiredException](https://apireference.groupdocs.com/viewer/net/groupdocs.viewer.exceptions/passwordrequiredexception).
{{< /alert >}}
