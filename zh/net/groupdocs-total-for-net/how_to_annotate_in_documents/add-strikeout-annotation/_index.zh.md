---
url: /zh/add-strikeout-annotation/
title: "添加删除线注释"
weight: 3
description: "了解什么是 Strikeout 注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是Strikeout注解，如何添加注解，添加Strikeout注解"
type: docs
---

## 如何在 C# 中添加 Strikeout Annotation
**Strikeout** 注释使用删除线样式标记文本片段，如下图所示。

![](https://docs.groupdocs.com/annotation/net/images/add-strikeout-annotation.png)

可以为 [StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/strikeoutannotation) 类型指定下一个属性：

* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/strikeoutannotation/properties/fontcolor) - 注释文本的颜色；
* [不透明度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) - 允许设置注释不透明度；
* [Points](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/strikeoutannotation/properties/points) - 由点数组设置的注释位置。
      





    





按照以下步骤将 Strikeout 注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/strikeoutannotation) 对象；
* 调用[Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add)方法并通过[StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/strikeoutannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。

  


以下代码演示了如何在文档中添加 [StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/strikeoutannotation)：


{{< gist "conholdate-docs-gists" "82d2c5875a844056c5868e140ce7ecc2" "add-strikeout-annotation.cs" >}}
    





## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    







