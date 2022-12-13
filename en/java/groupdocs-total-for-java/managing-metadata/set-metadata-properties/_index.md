---
title: Set Metadata Properties Java
second_title: Conholdate.Total for Java
articleTitle: Set Metadata Properties
linktitle: Set Metadata Properties
description: "This article shows the usage of SetProperties method ( in Metadata Java API) which is used to update or add metadata."
keywords: set metadata
type: docs
url: /java/set-metadata-properties/
weight: 50
---

## Update or add metadata properties satisfying a predicate

The [setProperties](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata/Metadata#setProperties(com.groupdocs.metadata.search.Specification,%20com.groupdocs.metadata.core.PropertyValue)) method used in this code sample actually combines two operations: add and update. If an existing property satisfies the specified predicate its value is updated. If there is a known property missing in a metadata package that satisfies the predicate it is added to the appropriate package.

The code snippet below demonstrates a basic usage scenario of the [setProperties](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata/Metadata#setProperties(com.groupdocs.metadata.search.Specification,%20com.groupdocs.metadata.core.PropertyValue)) method.

1.  Open a file to update
2.  Specify a predicate that will be used to add/update metadata properties
3.  Specify a value you would like to add to existing metadata packages in the file
4.  Check the actual number of added/updated properties
5.  Save the changes


```java
// Constants.InputVsdx is an absolute or relative path to your document. Ex: @"C:\Docs\source.vsdx"
try (Metadata metadata = new Metadata(Constants.InputVsdx)) {
	// Set the value of each property that satisfies the predicate:
	// property contains the date/time the document was created OR modified
	int affected = metadata.setProperties(
			new ContainsTagSpecification(Tags.getTime().getCreated()).or(new ContainsTagSpecification(Tags.getTime().getModified())),
			new PropertyValue(new Date()));
	System.out.println(String.format("Properties set: %s", affected));
	metadata.save(Constants.OutputVsdx);
}
```

As a result, we update all existing metadata properties containing the date the document was created/updated. If a metadata package doesn't contain such properties but they are meant to be in its structure they are added.