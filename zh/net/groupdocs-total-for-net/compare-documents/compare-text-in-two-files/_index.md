---
title: "Compare Text in Two Files"
description: "This article explains the usage of GroupDocs.Comparison API (which is a part of Conholdate.Total for .NET) to compare text in two files."
keywords: compare text in two files, Compare text in two files using C#
type: docs
url: /compare-text-in-two-files/
weight: 20
---
## File comparison

The GroupDocs.Comparison (which is a part of Conholdate.Total for .NET) gives the potential to detect differences between target and source files for changes at words, character levels and paragraphs. It can also identify styling and formatting changes - like bold, italic, underlines, strike-troughs, font types, etc.

## Compare text in two files using C#

Following example will show you how simply you can **compare text in two files** using C#. 
After comparing the two Word files, you will get a resulting document in which the changes are highlighted in three different colors:

- Elements wich were deleted from the first file – **red**.
- Elements that were inserted in the first file. – **blue**.
- Elements that have changed their styles – **green**.



## Two file comparison example

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-documents.cs" >}}

