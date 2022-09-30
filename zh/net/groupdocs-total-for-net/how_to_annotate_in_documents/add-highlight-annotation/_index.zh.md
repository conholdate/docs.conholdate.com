---
url: /zh/add-highlight-annotation/
title: "添加高亮注释"
weight: 3
description: "了解什么是突出显示注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是高亮注释，如何添加注释，添加高亮注释"
type: docs
---

## 如何在 C# 中添加高亮注释

**突出显示**注释突出显示和评论选定的文本，如下图所示。

![](annotation/net/images/add-highlight-annotation.png)

Annotation API 允许您为 [HighlightAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/highlightannotation) 类型指定下一个属性：

* [BackgroundColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/backgroundcolor) - 描述注释背景颜色；
* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/linkannotation/properties/fontcolor) - 注释文本的颜色；
* [不透明度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) - 允许设置注释不透明度；
* [Points](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/linkannotation/properties/points) - 由点数组设置的注释位置。

按照以下步骤将突出显示注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [HighlightAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/highlightannotation) 对象；
* 调用[Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add)方法并通过[HighlightAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/highlightannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。
      



    



以下代码演示了如何在文档中添加 [HighlightAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/highlightannotation)：

{{< gist "conholdate-docs-gists" "776a2cb61d37ace7ef1a53b60601e936" "add-highlight-annotation.cs" >}}

## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





