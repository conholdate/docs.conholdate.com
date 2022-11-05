---
title: "Remove Pages Redaction"
description: "This article explains how GroupDocs.Redaction for .NET (which is a part of Conholdate.Total for .NET) allows you to remove pages with sensitive data from your PDF, presentation and spreadsheet documents."
keywords: remove pages, Remove Page Redaction in C#
type: docs
url: /net/remove-pages-redaction/
weight: 70
---

## Remove Page Redaction in C#

GroupDocs.Redaction(which is a part of Conholdate.Total for .NET) allows you to easily remove pages from slides from presentations, PDF documents and worksheets from spreadsheet documents. 

By using this API, you can remove pages by specifying the page range by means of its relative position (the beginning or the end), zero-based index and the count of pages to remove. At this time the supported formats are: PDF, presentations (Microsoft PowerPoint, OpenOffice Presentations) and spreadsheets (Microsoft Excel, OpenOffice Spreadsheets, etc.).

## Remove page range

The example below demonstrates, the remove of 2nd, 3rd and 4th pages from the document, if the document has enough pages:

**C#**

```csharp
using (Redactor redactor = new Redactor("sample.pdf"))
{
    // Removes 3 pages starting from 2nd one, requires at least 4 pages
    if (redactor.GetDocumentInfo().PageCount >= 4)
    {
        redactor.Apply(new RemovePageRedaction(PageSeekOrigin.Begin, 1, 3));
        redactor.Save();
    }
}
```

## Remove last page

To delete the last page or a number of pages, no matter how many pages are there.

The following example demonstrates how to remove the last page from a document:

**C#**

```csharp
using (Redactor redactor = new Redactor("sample.pdf"))
{
    // Requires at least 1 page
    if (redactor.GetDocumentInfo().PageCount >= 1)
    {
        redactor.Apply(new RemovePageRedaction(PageSeekOrigin.End, 0, 1));
        redactor.Save();
    }
}
```
