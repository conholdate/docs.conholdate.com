---
title: Extract Metadata From Image Java
second_title: Conholdate.Total for Java
articleTitle: Extract Metadata From Image
linktitle: Extract Metadata From Image
description: "This article demonstrates that how easily you can extract metadata from image using Java."
keywords: extract metadata from image
type: docs
url: /java/extract-metadata-from-image/
weight: 20
---

## Extracting Common Image Information

The GroupDocs.Metadata Java API allows extracting common image properties such as width and height, MIME type, byte order, etc for all supported image formats. The code snippet is given below for more information on this useful feature.

1. Load an image
2. Extract the root metadata package
3. Use the FileType property to obtain file format information



```java
try (Metadata metadata = new Metadata(Constants.InputPng)) {
	ImageRootPackage root = metadata.getRootPackageGeneric();

	System.out.println(root.getImageType().getFileFormat());
	System.out.println(root.getImageType().getByteOrder());
	System.out.println(root.getImageType().getMimeType());
	System.out.println(root.getImageType().getExtension());
	System.out.println(root.getImageType().getWidth());
	System.out.println(root.getImageType().getHeight());
}
```

## More resources
### GitHub examples
You may easily run the code above and see the feature in action in our GitHub examples:
*   [GroupDocs.Metadata for .NET examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-.NET)    
*   [GroupDocs.Metadata for Java examples](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Java)    

### Free online document metadata management App
Along with full featured .NET library we provide simple, but powerful free Apps.
You are welcome to view and edit metadata of PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, emails, images and more with our free online [Free Online Document Metadata Viewing and Editing App](https://products.groupdocs.app/metadata).


