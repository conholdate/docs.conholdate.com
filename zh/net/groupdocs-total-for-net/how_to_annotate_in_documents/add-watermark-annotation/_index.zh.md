---
url: /zh/net/add-watermark-annotation/
title: "添加水印注释"
weight: 3
description: "了解什么是水印注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是Watermark注解，如何添加注解，添加Watermark注解"
type: docs
---

## 如何在 C# 中添加水印注释
**Watermark** 注释添加文本水印，如下图所示。

![](https://docs.groupdocs.com/annotation/net/images/add-watermark-annotation.png)

Annotation API（包含在 Conholdate.Total for .NET 中）能够为 [WatermarkAnnotation] 指定下一个属性（https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation）类型：

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/box) - 定义文档页面的注释位置；
* [文本](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/text) - 水印文本；
* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontcolor) - 注释文本的颜色；
* [FontFamily](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontfamily) - 注释文本的字体；
* [FontSize](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontsize) - 文本字体大小；
* [不透明度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/opacity) - 允许设置注释不透明度；
* [角度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/angle) - 水印文字角度；
* [VerticalAlignment]() - 定义文档的垂直对齐方式；
* [HorizontalAlignment]() - 定义文档的水平对齐方式。
* [AutoScale]() - 水印大小取决于字长和文档大小。

按照以下步骤将水印注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、颜色等）实例化 [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) 对象；
* 调用[Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add)方法并通过[WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/watermarkannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。

以下代码演示了如何在文档中添加 [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation)：


{{< gist "conholdate-docs-gists" "a75b6de86f75b46d6a6beaf24ebd8da1" "add-watermark-annotation.cs" >}}
    



## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





