---
title: "Compare Two PDF Documents"
description: "This article will explain how to compare two pdf documents using GroupDocs.Comparison API which is a part of Conholdate.Total for .NET."
keywords: Compare Two PDF Documents, Compare Two PDF Documents using C#
type: docs
url: /compare-two-pdf-documents/
weight: 20
---
## Compare two PDF documents using C#

It becomes very difficult to find the difference between what was changed in one of the versions, particularly when working with large-volume PDF documents. The **[GroupDocs.Comparison for .NET](https://products.groupdocs.com/comparison/net)** (which is a part of Conholdate.Total for .NET) provides you many choices for comparing a wide range of [supported file formats](https://docs.groupdocs.com/comparison/net/supported-document-formats/), including PDF format.

After the comparison, there are three colors on the resulting file that highlight the differences.

*   Elements that were inserted in the first file. – <font color="blue">**blue**</font>, by default
*   Elements wich were deleted from the first file – <font color="red">**red**</font>, by default
*   Elements that have changed their styles (font, color, etc.) – <font color="green">**green**</font>, by default

|  Source / Target / Result PDF files |
| --- | --- |
|Source |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-1.png) | 
|Target |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-2.png)|
|Result |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-3.png)|

## Compare two PDF documents example

{{< gist "conholdate-docs-gists" "d8a8f36405b2a0bec4cfc074e9e9c7ad" "compare-two-pdf-documents.cs" >}}








