---
title: "Search Metadata Properties"
description: "This article demonstrate that how you can search metadata and extract desired metadata properties from docs like PDF, DOCX, PPTX, XLSX, images, audio, video and many other files of different types in your .NET solution"
keywords: search metadata
type: docs
url: /search-metadata-properties/
weight: 30
---

You can easily search metadata and extract desired metadata properties from PDF, DOCX, PPTX, XLSX, images, audio, video and many other files of different types in your .NET solution by using GroupDocs.Metadata API.

GroupDocs.Metadata for .NET supports many file formats. See full list at [supported file formats](https://docs.groupdocs.com/metadata/net/supported-document-formats/) article.

## Use tags to find most common metadata properties

Using tags you can search for desirable properties with a few lines of code without even knowing the exact format of the loaded file.

In this article we will demonstrate how to search and extract metadata from PPTX Microsoft PowerPoint presentation. Using the same code, you can easily search matadata properties of any supported file formats.

The following steps and C# code sample below show **how to search for specific metadata properties using tags in .NET solution**:

1.  Load a file to examine.
2.  Make up a predicate checking that a specific tag is assigned to a property 
3.  Pass the predicate to the [FindProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/findproperties) method
4.  Iterate through the found properties

**Example**

{{< gist "conholdate-docs-gists" "f00c0d1b85ac41622421ad1b083dab07" "search-metadata.cs" >}}

As a result, we obtain all metadata properties containing the name of the person last edited the document and all properties that store the date/time the document was last edited.



