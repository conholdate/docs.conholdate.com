---
url: /ru/add-watermark-annotation/
title: "Добавить аннотацию водяного знака"
weight: 3
description: "Узнайте, что такое аннотация водяного знака и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация водяного знака, как добавить аннотацию, добавить аннотацию водяного знака"
type: docs
---

## Как добавить аннотацию водяного знака в C#
Аннотация **Водяной знак** добавляет текстовый водяной знак, как показано на рисунке ниже.

![](https://docs.groupdocs.com/annotation/net/images/add-watermark-annotation.png)

Annotation API (включенный в Conholdate.Total для .NET) имеет возможность указать следующие свойства для [WatermarkAnnotation] (https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) тип:

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/box) - определяет положение аннотации на странице документа;
* [Текст](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/text) - текст водяного знака;
* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontcolor) - цвет текста аннотации;
* [FontFamily](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontfamily) - шрифт текста аннотации;
* [FontSize](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontsize) - размер шрифта текста;
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/opacity) - позволяет установить прозрачность аннотации;
* [Угол](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/angle) - угол наклона текста водяного знака;
* [VerticalAlignment]() - определяет вертикальное выравнивание документа;
* [HorizontalAlignment]() - определяет горизонтальное выравнивание документа.
* [AutoScale]() - размер водяного знака зависит от длины слова и размера документа.

Выполните следующие действия, чтобы добавить аннотацию водяного знака в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создать объект [WatermarkAnnotation] (https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) с желаемыми свойствами (положением, цветом и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/watermarkannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [Аннотацию водяного знака](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation):


{{< gist "conholdate-docs-gists" "a75b6de86f75b46d6a6beaf24ebd8da1" "add-watermark-annotation.cs" >}}
    



## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстраций .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример аннотации документа для .NET App WebForms UI] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации документа для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





