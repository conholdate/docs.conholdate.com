---
title: Search Metadata Properties Java
second_title: Conholdate.Total for Java
articleTitle: Search Metadata Properties
linktitle: Search Metadata Properties
description: "This article demonstrate that how you can search metadata and extract desired metadata properties (using Metadata Java API) from docs like PDF, DOCX, PPTX, XLSX, images, audio, video and many other files of different types in your Java solution"
keywords: search metadata
type: docs
url: /java/search-metadata-properties/
weight: 30
---

You can easily search metadata and extract desired metadata properties from PDF, DOCX, PPTX, XLSX, images, audio, video and many other files of different types in your Java solution by using GroupDocs.Metadata Java API.

GroupDocs.Metadata for Java (which is the part of Conholdate.Total for Java) supports many file formats. See full list at [supported file formats](https://docs.groupdocs.com/metadata/net/supported-document-formats/) article.

## Use tags to find most common metadata properties

To make manipulating metadata easier we attach specific tags to the most commonly used metadata properties extracted from a file. Some metadata standards can have quite a complex structure. Moreover, in most cases, one image, video or document contains more than one metadata packages. Using tags you can search for desirable properties with a few lines of code without even knowing the exact format of the loaded file.

The code sample below demonstrates how to search for specific metadata properties using tags:

1.  Load a file to examine
2.  Make up a predicate checking that a specific tag is assigned to a property (alternatively you can use a combination of tags)
3.  Pass the predicate to the [f](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata/Metadata#findProperties(com.groupdocs.metadata.search.Specification))[indProperties](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata/Metadata#findProperties(com.groupdocs.metadata.search.Specification)) method
4.  Iterate through the found properties

```java
// Constants.InputPptx is an absolute or relative path to your document. Ex: @"C:\Docs\source.pptx"
try (Metadata metadata = new Metadata(Constants.InputPptx)) {
	// Fetch all the properties satisfying the predicate:
	// property contains the name of the last document editor OR the date/time the document was last modified
	IReadOnlyList<MetadataProperty> properties = metadata.findProperties(
			new ContainsTagSpecification(Tags.getPerson().getEditor()).or(new ContainsTagSpecification(Tags.getTime().getModified())));
	for (MetadataProperty property : properties) {
		System.out.println(String.format("Property name: %s, Property value: %s", property.getName(), property.getValue()));
	}
}
```

As a result, we obtain all metadata properties containing the name of the person last edited the document and all properties that store the date/time the document was last edited.

