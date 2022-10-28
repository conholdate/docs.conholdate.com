---
url: /net/add-image-annotation/
title: Add Image Annotation
weight: 3
description: "Learn what is Image annotation and how to add it to a document programmatically using GroupDocs.Annotation API which is a part of Conholdate.Total for .NET."
keywords: What is Image annotation, how to add annotation, add Image annotation
type: docs
---

## How to add Image Annotation in C# 

**Image annotation** feature allows to add image within document page like shown at the picture below.

![](annotation/net/images/add-image-annotation.png)

There is an ability to specify the next properties for [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation) type:

*   [ImagePath](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/imagepath) – defines image local or remote path.
*   [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/box) – defines annotation position at document page using [Rectangle](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models/rectangle) structure;
    (image will be resized for your custom width and height)
*   [Opacity](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/opacity) – allows to set annotation opacity (present in all supported formats, examples of it you can see above);
*   [Angle]() – defines annotation rotation angle.

Follow these steps to add Highlight annotation to document:

*   Instantiate [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) object with input document path or stream;
*   Instantiate [ImageAnnotation](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation) object with desired properties (position, page number, etc);
*   Call [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) method and pass ImageAnnotation object;
*   Call [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save) method with resultant document path or stream.  

The following code demonstrates how to add [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation) to the document:

{{< gist "conholdate-docs-gists" "ceb73e80ee7d42dc1622b9e87a3e5471" "add-image-annotation.cs" >}}

## More resources
### GitHub Examples
You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Annotation for .NET examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
*   [GroupDocs.Annotation for Java examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
*   [Document Annotation for .NET MVC UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
*   [Document Annotation for .NET App WebForms UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
*   [Document Annotation for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
*   [Document Annotation for Java Spring UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    


