---
url: /add-watermark-annotation/
title: Add Watermark Annotation
weight: 3
description: "Learn what is Watermark annotation and how to add it to a document programmatically using GroupDocs.Annotation API which is a part of Conholdate.Total for .NET."
keywords: What is Watermark annotation, how to add annotation, add Watermark annotation
type: docs
---

## How to add Watermark Annotation in C# 
The **Watermark** annotation adds text watermark like shown at the picture below. 

![](https://docs.groupdocs.com/annotation/net/images/add-watermark-annotation.png)

The Annotation API (included in Conholdate.Total for .NET) has an ability to specify the next properties for [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) type:

*   [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/box) - defines annotation position at document page;
*   [Text](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/text) - text of watermark;
*   [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontcolor) - color of annotation text;
*   [FontFamily](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontfamily) - font of annotation text;
*   [FontSize](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontsize) - size of text font;
*   [Opacity](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/opacity) - allows to set annotation opacity;
*   [Angle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/angle) - watermark text angle;
*   [VerticalAlignment]() - defines vertical alignment on document;
*   [HorizontalAlignment]() - defines horizontal alignment on document.
*   [AutoScale]() - size watermark depends on the word length and document size.

Follow these steps to add Watermark annotation to document:

*   Instantiate [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) object with input document path or stream;
*   Instantiate [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) object with desired properties (position, color, etc);
*   Call [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) method and pass [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) object;
*   Call [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) method with resultant document path or stream.  

The following code demonstrates how to add [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) to the document:


{{< gist "conholdate-docs-gists" "a75b6de86f75b46d6a6beaf24ebd8da1" "add-watermark-annotation.cs" >}}
    

## More resources
### GitHub Examples
You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Annotation for .NET examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
*   [GroupDocs.Annotation for Java examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
*   [Document Annotation for .NET MVC UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
*   [Document Annotation for .NET App WebForms UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
*   [Document Annotation for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
*   [Document Annotation for Java Spring UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    


