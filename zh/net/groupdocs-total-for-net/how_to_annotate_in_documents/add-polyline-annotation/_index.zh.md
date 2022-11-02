---
url: /zh/net/add-polyline-annotation/
title: "添加折线注释"
weight: 3
description: "了解什么是折线注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是折线注释，如何添加注释，添加折线注释"
type: docs
---

## 如何在 C# 中添加折线注释

**Polyline** 注释使您可以绘制形状和手绘线，如下图所示。

![](annotation/net/images/add-polyline-annotation.png)

注释 API 是 Conholdate.Total for .NET 的一部分，方便您为 [PolylineAnnotation] 指定下一个属性（https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation ） 类型：

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/box) - 定义文档页面的注释位置；
* [不透明度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) - 允许设置注释不透明度；
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/pencolor) - 定义框架颜色；
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penstyle) - 定义框架线条样式（实线、虚线、点等）；
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penwidth) - 以像素为单位定义框架线宽。
* [SvgPath](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/polylineannotation/properties/svgpath) - 描述形状的 SVG 路径。

按照以下步骤将 [Polyline](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/polylineannotation) 注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation) 对象；
* 调用[Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add)方法并通过[PolylineAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/polylineannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。

以下代码演示了如何在文档中添加 [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation)：

{{< gist "conholdate-docs-gists" "ac13aeb5ae23e29a23358fef96b5550e" "add-polyline-annotation.cs" >}}

## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




