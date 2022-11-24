---
title: Add Text Field Annotation Java
second_title: Conholdate.Total for Java
articleTitle: Add Text Field Annotation
linktitle: Add Text Field Annotation
url: /java/add-text-field-annotation/
weight: 3
description: "Learn what is Text Field annotation and how to add it to a document programmatically using GroupDocs.Annotation Java API which is a part of Conholdate.Total for Java."
keywords: What is Text Field annotation, how to add annotation, add Text Field annotation
type: docs
---

## How to add Text Field Annotation in Java 

**Text field** annotation adds rectangle with a text inside, like shown at the picture below. 

![](https://docs.groupdocs.com/annotation/java/images/add-text-field-annotation.png)

There is an ability to specify the next fields for [TextFieldAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation) type:
*   [BackgroundColor](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getBackgroundColor()) - describes area background color;
*   [Box](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getBox()) - defines annotation position at document page;
*   [Text](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation#getText()) - text that will be appear in rectangle
*   [FontColor](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation#getFontColor()) - color of the text
*   [FontFamily](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation#getFontFamily()) - name of text font;
*   [FontSize](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation#getFontSize())  - size of text font;
*   [Opacity](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getOpacity()) - allows to set annotation opacity;
*   [PenColor](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getPenColor()) - defines frame color;
*   [PenStyle](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getPenStyle()) - defines frame line style (solid, dash, dot etc.);
*   [PenWidth](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getPenWidth()) -  defines frame line width in pixels.
    
Follow these steps to add *TextField* annotation to document:
*   Instantiate [Annotator](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator) object with input document path or stream;
*   Instantiate [TextFieldAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation) object with desired properties (position, page number, etc);
*   Call [add](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator#add(com.groupdocs.annotation.models.annotationmodels.AnnotationBase)) method and pass [TextFieldAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation) object;
*   Call [save](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator#save(java.io.InputStream)) method with resultant document path or stream.
    

The following code demonstrates how to add [TextFieldAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation) to the document:

{{< gist "groupdocs-annotation-gists" "6417f1b3b8fc9edeeb070f2cfad3edcc" "java-add-text-field-annotation.java" >}}
    

## More resources
### GitHub Examples
You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Annotation for .NET examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
*   [GroupDocs.Annotation for Java examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
*   [Document Annotation for .NET MVC UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
*   [Document Annotation for .NET App WebForms UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
*   [Document Annotation for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
*   [Document Annotation for Java Spring UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    


