---
url: /zh/net/add-text-redaction-annotation/
title: "添加文本编辑注释"
weight: 3
description: "了解什么是文本编辑注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是 Text Redaction 注释，如何添加注释，添加 Text Redaction 注释"
type: docs
---

## 如何在 C# 中添加文本编辑注释

**文本编辑**注释用黑色矩形填充部分文本（用于隐藏某些文本），如下图所示。

![](https://docs.groupdocs.com/annotation/net/images/add-text-redaction-annotation.png)

可以为 [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation) 类型指定下一个属性

* [Points](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textredactionannotation/properties/points) - 由点数组设置的注释位置。
    




请按照以下步骤将文本编辑注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation) 对象；
* 调用 [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) 方法并通过 [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation) /groupdocs.annotation.models.annotationmodels/textredactionannotation) 对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) 方法。

以下代码演示了如何在文档中添加 [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation)：

{{< gist "conholdate-docs-gists" "869d678ddebc36ff4e77ba7d7e23fe9a" "add-text-redaction-annotation.cs" >}}
    




## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    






