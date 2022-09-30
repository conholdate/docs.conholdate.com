---
url: /zh/add-image-annotation/
title: "添加图像注释"
weight: 3
description: "了解什么是图像注释以及如何使用 GroupDocs.Annotation API 以编程方式将其添加到文档中，该 API 是 Conholdate.Total for .NET 的一部分。"
keywords: "什么是Image注解，如何添加注解，添加Image注解"
type: docs
---

## 如何在 C# 中添加图像注释

**图像注释**功能允许在文档页面中添加图像，如下图所示。

![](annotation/net/images/add-image-annotation.png)

可以为 [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation) 类型指定下一个属性：

* [ImagePath](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/imagepath) - 定义图像本地或远程路径。
* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/box) – 使用 [Rectangle](https://apireference) 在文档页面定义注释位置.groupdocs.com/net/annotation/groupdocs.annotation.models/rectangle) 结构；
（图像将根据您的自定义宽度和高度调整大小）
* [不透明度](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/opacity) - 允许设置注释不透明度（以所有支持的格式显示，您可以举个例子可以看上面）；
* [Angle]() – 定义注释旋转角度。

按照以下步骤将突出显示注释添加到文档：

* 使用输入文档路径或流实例化 [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) 对象；
* 使用所需属性（位置、页码等）实例化 [ImageAnnotation](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation) 对象；
* 调用[Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add)方法并传递ImageAnnotation对象；
* 使用结果文档路径或流调用 [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save) 方法。

以下代码演示了如何在文档中添加 [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation)：

{{< gist "conholdate-docs-gists" "ceb73e80ee7d42dc1622b9e87a3e5471" "add-image-annotation.cs" >}}

## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：

* [用于 .NET 示例、插件和展示的 GroupDocs.Annotation](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation for Java 示例、插件和展示](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [.NET MVC UI 示例文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [.NET App WebForms UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Java App Dropwizard UI 现代示例的文档注释](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Java Spring UI 文档注释示例](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




