---
title: "Compare Excel Files"
description: "This article explains how to use GroupDocs.Comparison API (which is a part of Conholdate.Total for .NET) to compare excel documents."
keywords: Compare Excel Files, Compare Excel Files in C#, Code sample to compare two Excel files
type: docs
url: /compare-excel-files/
weight: 70
---

## Compare Excel files in C#

Comparing worksheets helps you to detect possible problems, such as extra entries, incorrect tables, inconsistent formulas, or improper formatting.**[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** gives you many options for comparing a wide range of [supported file formats](https://docs.groupdocs.com/comparison/net/supported-document-formats/), including Excel formats.

After the comparison, there are three colors on the resulting file that highlight the differences. You can also specify the colors yourself to identify the next difference:

*   Elements that were inserted in the first file. – <font color="blue">**blue**</font>, by default
*   Elements wich were deleted from the first file – <font color="red">**red**</font>, by default
*   Elements that have changed their styles (font, color, etc.) – <font color="green">**green**</font>, by default

## Code sample to compare two Excel files:

{{< gist "conholdate-docs-gists" "f68231657baf755e3160b5c2298e69ca" "compare-excel-files.cs" >}}

|  Source / Target / Result Excel files |
| --- | --- |
|Source |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-1.png) | 
|Target |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-2.png)|
|Result |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-3.png)|

As a result, you have an Excel file with highlighted changes, in which the deleted elements are marked with a font <font color="red">**red**</font>, the added – in <font color="blue">**blue**</font>, and the modified – in <font color="yellow">**green**</font>.








