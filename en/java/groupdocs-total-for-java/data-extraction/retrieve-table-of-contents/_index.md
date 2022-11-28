---
title: Retrieve Table of Contents Java
second_title: Conholdate.Total for Java
articleTitle: Retrieve Table of Contents
linktitle: Retrieve Table of Contents
description: "This article explains how GroupDocs.Parser for Java (which is a part of Conholdate.Total for Java) retrieve table of contents from file."
keywords: Table of Contents,Retrieve Table of Contents, Retrieve Table of Contents in Java
type: docs
url: /java/retrieve-table-of-contents/
weight: 70
---

## Retrieve Table of Contents in Java

GroupDocs.Parser, a Java API (which is a part of Conholdate.Total for Java) allows you to 
extract table of contents from documents, please use the [getToc](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#getToc()) method:

```java
Iterable<TocItem> getToc();
```

[TocItem](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TocItem) class has the following members:

| Member | Description |
| --- | --- |
| [getDepth](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TocItem#getDepth()) | The depth level. |
| [getPageIndex](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TocItem#getPageIndex()) | The page index. |
| [getText](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TocItem#getText()) | The text. |
| [extractText](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TocItem#extractText()) | Extracts a text from the document to which [TocItem](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TocItem) object refers. For detail, see [Extract text by table of contents item]({{< ref "parser/java/developer-guide/advanced-usage/working-with-text/extract-text-by-table-of-contents-item.md" >}}) |

Follow the steps below to extract extract table of contents from the document:

*   Instantiate [Parser](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser) object for the initial document;
*   Call [getToc](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#getToc()) method and obtain collection of [TocItem](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TocItem) objects;
*   Check if *collection* isn't *null* (table of contents  extraction is supported for the document);
*   Iterate through the collection and get page index to extract a page text from the document.

The following example shows how to extract table of contents from CHM file:

```java
// Create an instance of Parser class
try (Parser parser = new Parser(Constants.SampleChm)) {
    // Check if text extraction is supported
    if (!parser.getFeatures().isText()) {
        System.out.println("Text extraction isn't supported.");
        return;
    }
    // Check if toc extraction is supported
    if (!parser.getFeatures().isToc()) {
        System.out.println("Toc extraction isn't supported.");
        return;
    }
    // Get table of contents
    Iterable<TocItem> toc = parser.getToc();
    // Iterate over items
    for (TocItem i : toc) {
        // Print the Toc text
        System.out.println(i.getText());
        // Check if page index has a value
        if (i.getPageIndex() == null) {
            continue;
        }
        // Extract a page text
        try (TextReader reader = parser.getText(i.getPageIndex())) {
            System.out.println(reader.readToEnd());
        }
    }
}
```










