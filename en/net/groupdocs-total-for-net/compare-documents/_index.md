---
title: "Compare Documents"
description: "This section guide you about the usage of GroupDocs.Comparison API which is a part of Conholdate.Total for .NET. The article below shows that how you can simply compare documents."
keywords: Compare Documents
type: docs
url: /compare-documents/
weight: 20
---
## Comparison features

Information about Changes detection algorithms used by **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** allows to detect changes in different document parts and blocks:

*   Text blocks - paragraphs, words and characters;  
*   Tables;
*   Images;
*   Shapes etc.
    
For better visual separation of detected changes added, modified or deleted document parts are highlighted with different colors:

*   Added – <font color="blue">**blue** </font>
*   Modified – <font color="green">**green**</font>
*   Style – <font color="green">**green**</font>
*   Deleted – <font color="red">**red**</font>

Style coloring scheme can be customized if needed, changed text blocks can be marked with different formatting - italic, bold, underlined, strikethrough etc.

 Here are simple steps to compare two documents:
*   Instantiate [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) object with source document path or stream;
*   Call [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) method and specify target document path or stream.
*   Call [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/compare/index) method.

The following code sample shows the simplest case of documents comparison using couple lines of code.

## Compare documents from local file

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-documents.cs" >}}




## Compare documents from stream

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-document-from-stream.cs" >}}

For more details please visit [this article](https://docs.groupdocs.com/watermark/net/adding-text-watermarks/).



