---
title: Remove Metadata Java
second_title: Conholdate.Total for Java
articleTitle: Remove Metadata
linktitle: Remove Metadata
description: "This article shows how to clean all or remove metadata properties using Metadata Java API without applying any filters. You can do this is to use the Sanitize method."
keywords: remove metadata
type: docs
url: /java/remove-metadata/
weight: 40
---

## Remove all recognized metadata properties from a file

Sometimes you may need to just remove all or clean metadata properties without applying any filters. The best way to do this is to use the [sanitize](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata/Metadata#sanitize()) method.

This example demonstrates how to remove all detected metadata packages/properties.

1.  Load a file to clean
2.  Call the [sanitize](https://apireference.groupdocs.com/metadata/java/com.groupdocs.metadata/Metadata#sanitize()) method
3.  Check the actual number of removed packages/properties
4.  Save the changes


```java
// Constants.InputPdf is an absolute or relative path to your document. Ex: @"C:\Docs\source.pdf"
try (Metadata metadata = new Metadata(Constants.InputPdf)) {
	// Remove detected metadata packages
	int affected = metadata.sanitize();
	System.out.println(String.format("Properties removed: %s", affected));
	metadata.save(Constants.OutputPdf);
}
```

As a result, we get a sanitized version of the original file.






