---
title: "Remove Metadata"
description: "This artcle shows how to clean all or remove metadata properties without applying any filters. You can do this is to use the Sanitize method."
keywords: remove metadata
type: docs
url: /remove-metadata/
weight: 40
---

## Remove all recognized metadata properties from a file

Sometimes you may need to just remove all or clean metadata properties without applying any filters. The best way to do this is to use the [Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize) method.

This example demonstrates how to remove all detected metadata packages/properties.

1.  Load a file
2.  Call the [Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize) method
3.  Check the actual number of removed packages/properties
4.  Save the changes

**Example**

{{< gist "conholdate-docs-gists" "84c24a9c9dba1c15d7a43d439887f9fa" "remove-metadata.cs" >}}

As a result, we get a sanitized version of the original file.






