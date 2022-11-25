---
title: Extract Text from PDF Java
second_title: Conholdate.Total for Java
articleTitle: Extract Text from PDF
linktitle: Extract Text from PDF
description: "This article explains how GroupDocs.Parser for Java (which is a part of Conholdate.Total for Java) extract text from PDF file."
keywords: Extract Text from PDF, Extract Text from PDF in Java
type: docs
url: /java/extract-text-from-pdf/
weight: 70
---

## Extract Text from PDF in Java

GroupDocs.Parser (which is a part of Conholdate.Total for Java) is very powerful tool to extract text and it can be easily used in simple use cases.

This article shows how to write code for a simplest scenario.

To extract text from PDF simply call the [getText](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#getText()) method:

```java
TextReader getText();
```

This method returns an instance of [TextReader](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TextReader) class with an extracted text. 

[TextReader](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TextReader) class extends [*java.io.Reader*](http://docs.oracle.com/javase/7/docs/api/java/io/Reader.html?is-external=true) and adds the following members:

| Member | Description |
| --- | --- |
| [readLine](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TextReader#readLine()) | Reads a line of characters from the text reader and returns the data as a string. |
| [readToEnd](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TextReader#readToEnd()) | Reads all characters from the current position to the end of the text reader and returns them as one string. |

Here are the steps to extract a text from the document:

*   Instantiate [Parser](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser) object for the initial document;
*   Call [getText](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser/Parser#getText()) method and obtain [TextReader](https://apireference.groupdocs.com/java/parser/com.groupdocs.parser.data/TextReader) object;
*   Check if *reader* isn't *null* (text extraction is supported for the document);
*   Read a text from *reader*.

The following example shows how to extract a text from a document:

```java
// Create an instance of Parser class
try (Parser parser = new Parser(Constants.SamplePdf)) {
    // Extract a text into the reader
    try (TextReader reader = parser.getText()) {
        // Print a text from the document
        // If text extraction isn't supported, a reader is null
        System.out.println(reader == null ? "Text extraction isn't supported" : reader.readToEnd());
    }
}
```












