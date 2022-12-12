---
title: Redact in Excel Java
second_title: Conholdate.Total for Java
articleTitle: Redact in Excel
linktitle: Redact in Excel
description: "This article explains how GroupDocs.Redaction for Java (which is a part of Conholdate.Total for Java) allows you to redact in Excel."
keywords: redact in Excel, redact in Excel using Java
type: docs
url: /java/redact-in-excel/
weight: 70
---

## Redact in Excel using Java

GroupDocs.Redaction Java API(which is a part of Conholdate.Total for Java) allows you to redact data of  private nature or sensitive from your spreadsheet (e.g. XLS, XLSX, ODS) document formats.

## Filter by spreadsheet and column

If you have a document with one or more tables, organized into worksheets (one table per worksheet) - such as Microsoft Excel documents - you can use specific type of textual redactions, *CellColumnRedaction*. It allows you to set the scope of the redaction to a specific worksheet and/or column. The options are:

*   optionally set worksheet name or its numeric index (if both are missing, redaction affects all worksheets)
*   optionally set column (all columns are used, if the column filter is not set)

If no filters are set, redactions affects the entire document. All indices are zero-based. Below is an example, where we use all filters, to redact second column with emails (e.g. loaded from database) on a worksheet "Customers", leaving untouched all other emails in the document:



```java
final Redactor redactor  = new Redactor("sample.xlsx");
try 
{
    CellFilter filter = new CellFilter();
    filter.setColumnIndex(1);
    filter.setWorkSheetName("Customers");
    Pattern expression = Pattern.compile("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
    RedactorChangeLog result = redactor.apply(new CellColumnRedaction(filter, expression, new ReplacementOptions("[customer email]")));
    if (result.getStatus() != RedactionStatus.Failed)
    {
        SaveOptions so = new SaveOptions();
        so.setAddSuffix(true);
        so.setRasterizeToPDF(false);
        redactor.save(so);
    };
}
finally { redactor.close(); }
```
