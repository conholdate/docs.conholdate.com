---
title: "Redact in Excel"
description: "This article explains how GroupDocs.Redaction for .NET (which is a part of Conholdate.Total for .NET) allows you to redact in Excel."
keywords: redact in Excel, redact in Excel using C#
type: docs
url: /net/redact-in-excel/
weight: 70
---

## Redact in Excel using C#

GroupDocs.Redaction(which is a part of Conholdate.Total for .NET) allows you to redact data of  private nature or sensitive from your spreadsheet (e.g. XLS, XLSX, ODS) document formats.

## Filter by spreadsheet and column

Suppose you have a document with one or more tables, organized into worksheets (one table per worksheet) - such as Microsoft Excel documents - you can use specific type of textual redactions, [CellColumnRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/cellcolumnredaction). It allows you to set the scope of the redaction to a specific worksheet and/or column. The options are:

*   optionally set worksheet name or its numeric index (if both are missing, redaction affects all worksheets)
*   optionally set column (all columns are used, if the column filter is not set)

Suppose no filters are set, the redactions will affect the entire document. All indices are zero-based. Below is an example, where we use all filters, to redact second column with emails (e.g. loaded from database) on a worksheet "Customers", leaving untouched all other emails in the document:

**C#**

```csharp
using (Redactor redactor = new Redactor("D:\\Sales in September.xslx"))
{
   var filter = new CellFilter()
   {
      ColumnIndex = 1, // zero-based 2nd column
      WorkSheetName = "Customers"
   };
   var expression = new Regex("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
   RedactorChangeLog changeLog = redactor.Apply(new CellColumnRedaction(filter, expression, new ReplacementOptions("[customer email]")));
   if (result.Status != RedactionStatus.Failed)
   {
      doc.Save(new SaveOptions() { AddSuffix = true });
   };
}
```
