---
url: /net/add-replacement-annotation/
title: Add Replacement Annotation
weight: 3
description: "Learn what is Replacement annotation and how to add it to a document programmatically using GroupDocs.Annotation API which is a part of Conholdate.Total for .NET."
keywords: What is Replacement annotation, how to add annotation, add Replacement annotation
type: docs
---

## How to add Replacement Annotation in C# 

The **Replacement** annotation replaces original text with other provided text fragment. Please check the picture below to know how replacement annotation may look like. 

![](https://docs.groupdocs.com/annotation/net/images/add-replacement-annotation.png)

There is an ability to specify the next properties for [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) type:

*   [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/fontcolor) - color of annotation text;
*   [Opacity](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/opacity) \- allows to set annotation opacity;
*   [Points](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/points) - annotation positions set by array of points;
*   [TextToReplace](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/texttoreplace) - text that will be replaced   
     

Follow these steps to add Replacement annotation to document: 

*   Instantiate [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) object with input document path or stream;
*   Instantiate [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) object with desired properties (position, page number, etc);
*   Call [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) method and pass [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) object;
*   Call [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) method with resultant document path or stream;  

The following code demonstrates how to add [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) to the document:


{{< gist "conholdate-docs-gists" "75b019e25bd99928d7c09b2a62c0ae72" "add-replacement-annotation.cs" >}}
    

## More resources
### GitHub Examples
You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Annotation for .NET examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
*   [GroupDocs.Annotation for Java examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
*   [Document Annotation for .NET MVC UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
*   [Document Annotation for .NET App WebForms UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
*   [Document Annotation for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
*   [Document Annotation for Java Spring UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    


