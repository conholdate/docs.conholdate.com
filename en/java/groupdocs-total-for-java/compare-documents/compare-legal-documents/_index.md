---
title: Compare Legal Documents Java
second_title: Conholdate.Total for Java
articleTitle: Compare Legal Documents
linktitle: Compare Legal Documents
description: "This article explains how to use GroupDocs.Comparison API (which is a part of Conholdate.Total for Java) to compare legal documents."
keywords: Compare legal documents, Compare legal documents in Java
type: docs
url: /java/compare-legal-documents/
weight: 50
---

## Compare legal documents in Java

The Microsoft Word comparison features may be not enough to compare contracts and legal documents. Suppose you need your own way to implement comparison logic or you are developing your own app. The [**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/java) (which is a part of Conholdate.Total for Java) gives the ability to compare documents programmatically and manage found differences in code for wide range of [supported file formats](https://docs.groupdocs.com/comparison/java/supported-document-formats/). Here is an example of how to compare two contracts using GroupDocs.Comparsion API. You just have to follow these steps

*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer) object with source document path or stream;
*   Call [add](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#add(java.lang.String)) method and specify target document path or stream;
*   Call [compare](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#compare(java.lang.String)) method.

Let's say you have two contracts in DOCX format that were concluded in different years (For example, for 2018 and 2019). Now you are going to compare how the conditions have changed after some time. 

|  | Files |
| --- | --- |
|Source File - Contract signed in 2018| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_3.png) |
|Target File- Contract signed in 2019|![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_4.png)|

## Code Sample
Here is the code that is used to compare two contracts.

{{< gist "conholdate-docs-gists" "01e03338e930f4d1aa19e23242383c99" "compare-legal-documents.cs" >}}

As a result, we get a DOCX file where the deleted elements are marked in <font color="red">**red**</font>, the added – in <font color="blue">**blue**</font>, and the modified – in <font color="green">**green**</font>.

![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_5.png)

For more details you can visit [this article](https://docs.groupdocs.com/comparison/java/how-to-compare-contracts-drafts-and-legal-documents/).






