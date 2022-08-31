---
title: "Set Metadata Properties"
description: "This article shows the usage of SetProperties method which is used to update or add metadata."
keywords: set metadata
type: docs
url: /set-metadata-properties/
weight: 50
---

## Update or add metadata properties satisfying a predicate

The [SetProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/setproperties) is used to update or add metadata. You can easily add metadata to photos, pdfs or you can update or add data to mp3 files. This code sample actually combines two operations: add and update. If an existing property satisfies the specified predicate its value is updated. If there is a known property missing in a metadata package that satisfies the predicate it is added to the appropriate package.

The code snippet below demonstrates a basic usage scenario of the [SetProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/setproperties) method.

1.  Open a document
2.  Specify a predicate that will be used to add/update metadata properties
3.  Specify a value you would like to add to existing metadata packages in the file
4.  Check the actual number of added/updated properties
5.  Save the changes


**Example**

{{< gist "conholdate-docs-gists" "f68231657baf755e3160b5c2298e69ca" "set-metadata.cs" >}}

As a result, we update all existing metadata properties containing the date the document was created/updated. If a metadata package doesn't contain such properties but they are meant to be in its structure they are added.






