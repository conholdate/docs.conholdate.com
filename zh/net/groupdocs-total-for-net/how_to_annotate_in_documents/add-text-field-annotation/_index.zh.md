---
url: /zh/add-text-field-annotation/
title: "添加文本字段注释"
weight: 3
description: "了解什么是文本字段注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是Text Field注解，如何添加注解，添加Text Field注解"
type: docs
---

## 如何在 C# 中添加文本字段注释
**Text field** 注释添加了一个带有文本的矩形，如下图所示。

![](https://docs.groupdocs.com/annotation/net/images/add-text-field-annotation.png)

可以为 [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) 类型指定下一个属性：

* [BackgroundColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/backgroundcolor) - 描述区域背景颜色；
* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/box) - 定义文档页面的注释位置；
* [文本](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/text) - 将出现在矩形中的文本
* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontcolor) - 文本的颜色
* [FontFamily](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontfamily) - 文本字体名称；
* [FontSize](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontsize) - 文本字体大小；
* [不透明度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/opacity) - 允许设置注释不透明度；
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/penstyle) - 定义框架线条样式（实线、虚线、点等）；
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/penwidth) - 以像素为单位定义框架线宽；
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/pencolor) - 定义框架颜色；
* [TextHorizontalAlignment]() - 定义文本水平对齐。

按照以下步骤将 [TextField](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) 注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) 对象；
* 调用 [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) 方法并传递 [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/textfieldannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。

以下代码演示了如何在文档中添加 [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation)：

{{< gist "conholdate-docs-gists" "0b96fd14df88332224777c1960cab12d" "add-text-field-annotation.cs" >}}
    



## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





