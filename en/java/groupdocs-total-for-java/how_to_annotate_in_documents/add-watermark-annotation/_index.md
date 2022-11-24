---
title: Add Watermark Annotation Java
second_title: Conholdate.Total for Java
articleTitle: Add Watermark Annotation
linktitle: Add Watermark Annotation
url: /java/add-watermark-annotation/
weight: 3
description: "Learn what is Watermark annotation and how to add it to a document programmatically using GroupDocs.Annotation Java API which is a part of Conholdate.Total for Java."
keywords: What is Watermark annotation, how to add annotation, add Watermark annotation
type: docs
---

## How to add Watermark Annotation in Java 

The **Watermark** annotation adds text watermark like shown at the picture below. 

![](https://docs.groupdocs.com/annotation/java/images/add-watermark-annotation.png)

There is an ability to specify the next fields for [WatermarkAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/WatermarkAnnotation) type:
*   [Box](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/PointAnnotation#getBox()) - defines annotation position at document page;
*   [Text](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation#getText()) - text of watermark;
*   [FontColor](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/HighlightAnnotation#getFontColor()) - color of annotation text;
*   [FontFamily](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation#getFontFamily()) - name of text font;
*   [FontSize](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/TextFieldAnnotation#getFontSize())  - size of text font;
*   [Opacity](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/AreaAnnotation#getOpacity()) - allows to set annotation opacity;
*   [Angle](https://apireference.groupdocs.com/annotation/java/com.groupdocs.annotation.models.annotationmodels/WatermarkAnnotation#getAngle()) - watermark text angle.

Follow these steps to add Watermark annotation to document: 

*   Instantiate [Annotator](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator) object with input document path or stream;
*   Instantiate [WatermarkAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/WatermarkAnnotation) object with desired properties (position, color, etc);
*   Call [add](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator#add(com.groupdocs.annotation.models.annotationmodels.AnnotationBase)) method and pass [WatermarkAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/WatermarkAnnotation) object;
*   Call [save](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation/Annotator#save(java.io.InputStream)) method with resultant document path or stream.
    

The following code demonstrates how to add [WatermarkAnnotation](https://apireference.groupdocs.com/java/annotation/com.groupdocs.annotation.models.annotationmodels/WatermarkAnnotation) to the document:

{{< gist "groupdocs-annotation-gists" "6417f1b3b8fc9edeeb070f2cfad3edcc" "java-add-watermark-annotation.java" >}}

## More resources
### GitHub Examples
You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Annotation for .NET examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
*   [GroupDocs.Annotation for Java examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
*   [Document Annotation for .NET MVC UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
*   [Document Annotation for .NET App WebForms UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
*   [Document Annotation for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
*   [Document Annotation for Java Spring UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    


