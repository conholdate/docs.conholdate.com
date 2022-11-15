---
title: "Compare Documents | Java"
description: "This section guide you about the usage of GroupDocs.Comparison API which is a part of Conholdate.Total for Java. The article below shows that how you can simply compare documents."
keywords: Compare Documents, Comparison features 
type: docs
url: /java/compare-documents/
weight: 20
---
## Comparison features

Information about Changes detection algorithms used by **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/java)** allows to detect changes in different document parts and blocks:

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
*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer) object with source document path or stream;
*   Call [add](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#add(java.lang.String)) method and specify target document path or stream.
*   Call [compare](https://apireference.groupdocs.com/comparison/java/com.groupdocs.comparison/Comparer#compare(java.lang.String)) method.

The following code sample shows the simplest case of documents comparison using couple lines of code.

## Compare documents from local file

{{< gist "conholdate-docs-gists" "9700cac3752f7cc231718ba340091976" "compare-documents.java" >}}




## Compare documents from stream

{{< gist "conholdate-docs-gists" "9700cac3752f7cc231718ba340091976" "compare-document-from-stream.java" >}}




