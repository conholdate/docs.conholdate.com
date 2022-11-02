---
url: /zh/net/add-point-annotation/
title: "添加点注释"
weight: 3
description: "了解什么是点注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是点注释，如何添加注释，添加点注释"
type: docs
---

## 如何在 C# 中添加点注释

**Point** 注释将注释粘贴到文档中的任何点，如下图所示。

![](annotation/net/images/add-point-annotation.png)

注释 API 是 Conholdate.Total for .NET 的一部分，提供了为 [PointAnnotation] 指定下一个属性的能力（https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation ） 类型：

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/pointannotation/properties/box) - 定义文档页面的注释位置；
    



按照以下步骤将点注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [PointAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation) 对象；
* 调用[Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add)方法并通过[PointAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/pointannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。

以下代码演示了如何在文档中添加 [PointAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation)：

{{< gist "conholdate-docs-gists" "9ae598ce1d98541ca1804c042160531a" "add-point-annotation.cs" >}}

## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





