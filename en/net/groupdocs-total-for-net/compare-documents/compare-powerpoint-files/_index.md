---
title: "Compare Powerpoint Files"
description: "This article explains the usage of GroupDocs.Comparison API (which is a part of Conholdate.Total for .NET) to compare powerpoint files."
keywords: Compare Powerpoint Files, Compare Powerpoint Files in C#
type: docs
url: /compare-powerpoint-files/
weight: 50
---

## Compare Powerpoint Files in C#

Comparing PowerPoint files using the thrid-party tools is clearly not enough. **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** (which is a part of Conholdate.Total for .NET) gives you many features for comparing a wide range of [supported file formats](https://docs.groupdocs.com/comparison/net/supported-document-formats/), including PowerPoint Presentation format. 

## Case study
Let's consider a use case, you made a presentation at different times, but the elements on the slides are not located as you originally did. To know where the slides differ, you can use **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** to compare two files in PPTX format along with a built-in option that helps find changes in styles.

|   |  Presentations |
| --- | --- |
|Original | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_1.png)|
|Modified | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_2.png)|

[**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/net) provides the ability to compare two files in PPTX format(or any other [supported file formats](https://docs.groupdocs.com/comparison/net/supported-document-formats/))

The following are the steps to compare two PPTX files.

*   Instantiate [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) object with source document path or stream;
*   Instantiate [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions) object with desired parameters;
*   Call [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) method and pass [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions) object to method;

## Code sample
The following code sample demonstrates how to compare two PPTX files.

{{< gist "conholdate-docs-gists" "f2fdd8fd59740ba13ef67ddd8356e094" "compare-powerpoint-files.cs" >}}

As a result, we get a PPTX file where the deleted elements are marked in <font color="red">**red**</font>, the added – in <font color="blue">**blue**</font>, and the modified – in <font color="green">**green**</font>

| Result Slide |
| --- |
| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_3.png)) 





