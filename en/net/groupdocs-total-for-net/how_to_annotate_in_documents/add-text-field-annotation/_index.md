---
url: /add-text-field-annotation/
title: Add Text Field Annotation
weight: 3
description: "Learn what is Text Field annotation and how to add it to a document programmatically using GroupDocs.Annotation API which is a part of Conholdate.Total for .NET."
keywords: What is Text Field annotation, how to add annotation, add Text Field annotation
type: docs
---

## How to add Text Field Annotation in C# 
The **Text field** annotation adds rectangle with a text inside, like shown at the picture below. 

![](https://docs.groupdocs.com/annotation/net/images/add-text-field-annotation.png)

There is an ability to specify the next properties for [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) type:

*   [BackgroundColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/backgroundcolor) - describes area background color;
*   [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/box) - defines annotation position at document page;
*   [Text](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/text) - text that will be appear in rectangle
*   [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontcolor) - color of the text
*   [FontFamily](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontfamily) - name of text font;
*   [FontSize](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontsize) - size of text font;
*   [Opacity](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/opacity) - allows to set annotation opacity;
*   [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/penstyle) - defines frame line style (solid, dash, dot etc.);
*   [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/penwidth) - defines frame line width in pixels;
*   [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/pencolor) - defines frame color;
*   [TextHorizontalAlignment]() - defines text horizontal alignment.

Follow these steps to add [TextField](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) annotation to document: 

*   Instantiate [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) object with input document path or stream;
*   Instantiate [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) object with desired properties (position, page number, etc);
*   Call [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) method and pass [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) object;
*   Call [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) method with resultant document path or stream.

The following code demonstrates how to add [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) to the document:

{{< gist "conholdate-docs-gists" "0b96fd14df88332224777c1960cab12d" "add-text-field-annotation.cs" >}}
    

## More resources
### GitHub Examples
You may easily run the code above and see the feature in action in our GitHub examples:

*   [GroupDocs.Annotation for .NET examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
*   [GroupDocs.Annotation for Java examples, plugins, and showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
*   [Document Annotation for .NET MVC UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
*   [Document Annotation for .NET App WebForms UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
*   [Document Annotation for Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
*   [Document Annotation for Java Spring UI Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    


