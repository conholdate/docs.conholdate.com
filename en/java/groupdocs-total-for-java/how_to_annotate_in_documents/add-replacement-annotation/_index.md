---
title: Add Replacement Annotation Java
second_title: Conholdate.Total for Java
articleTitle: Add Replacement Annotation
linktitle: Add Replacement Annotation
url: /java/add-replacement-annotation/
weight: 3
description: "Learn what is Replacement annotation and how to add it to a document programmatically using GroupDocs.Annotation Java API which is a part of Conholdate.Total for Java."
keywords: What is Replacement annotation, how to add annotation, add Replacement annotation
type: docs
---

## How to add Replacement Annotation in Java

**Replacement** annotation replaces original text with other provided text fragment. Please check the picture below to know how replacement annotation may look like. 

![](https://docs.groupdocs.com/annotation/java/annotation/java/images/add-replacement-annotation.png)

There is an ability to specify the next fields for [ReplacementAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/ReplacementAnnotation) type:
*   [FontColor](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/HighlightAnnotation#getFontColor()) - color of annotation text;
*   [Opacity](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getOpacity()) - allows to set annotation opacity;
*   [Points](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/HighlightAnnotation#getPoints()) - annotation positions set by array of points.
*   [TextToReplace](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/ReplacementAnnotation#getTextToReplace()) - text that will be replaced 
    

Follow these steps to add Replacement annotation to document:
*   Instantiate [Annotator](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator) object with input document path or stream;
*   Instantiate [ReplacementAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/ReplacementAnnotation) object with desired properties (position, page number, etc);
*   Call [add](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator#add(com.groupdocs.annotation.models.annotationmodels.AnnotationBase)) method and pass [ReplacementAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/ReplacementAnnotation) object;
*   Call [save](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator#save(java.io.InputStream)) method with resultant document path or stream;
    

The following code demonstrates how to add [ReplacementAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/ReplacementAnnotation) to the document:

{{< gist "groupdocs-annotation-gists" "6417f1b3b8fc9edeeb070f2cfad3edcc" "java-add-text-replacement-annotation.java" >}}



## More resources
### GitHub Examples
You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Annotation for .NET examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
*   [GroupDocs.Annotation for Java examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
*   [Document Annotation for .NET MVC UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
*   [Document Annotation for .NET App WebForms UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
*   [Document Annotation for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
*   [Document Annotation for Java Spring UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    


