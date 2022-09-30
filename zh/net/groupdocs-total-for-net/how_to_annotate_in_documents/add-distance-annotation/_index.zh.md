---
url: /zh/add-distance-annotation/
title: "添加距离注释"
weight: 3
description: "了解什么是距离注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是距离标注，如何添加标注，添加距离标注"
type: docs
---

## 如何在 C# 中添加距离注释

Annotation API 允许您为 [DistanceAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/distanceannotation) 类型指定下一个属性：

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/box) - 定义文档页面的注释位置；
* [不透明度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) - 允许设置注释不透明度；
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/pencolor) - 定义注释颜色；
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penstyle) - 定义注释线样式（实线、虚线、点等）；
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penwidth) - 以像素为单位定义线宽。

  

按照以下步骤将距离注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [DistanceAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/distanceannotation) 对象；
* 调用[Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add)方法并通过[DistanceAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/distanceannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。

      




    




以下代码演示了如何在文档中添加 [DistanceAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/distanceannotation)：

{{< gist "conholdate-docs-gists" "769ed43cd988545f3cfe0a05621031db" "add-distance-annotation.cs" >}}

## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    






