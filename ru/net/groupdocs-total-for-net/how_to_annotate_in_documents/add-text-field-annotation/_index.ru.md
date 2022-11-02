---
url: /ru/net/add-text-field-annotation/
title: "Добавить аннотацию к текстовому полю"
weight: 3
description: "Узнайте, что такое аннотация текстового поля и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация текстового поля, как добавить аннотацию, добавить аннотацию текстового поля"
type: docs
---

## Как добавить аннотацию текстового поля в C#
Аннотация **Текстовое поле** добавляет прямоугольник с текстом внутри, как показано на рисунке ниже.

![](https://docs.groupdocs.com/annotation/net/images/add-text-field-annotation.png)

Для типа [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) можно указать следующие свойства:

* [BackgroundColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/backgroundcolor) - описывает цвет фона области;
* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/box) - определяет положение аннотации на странице документа;
* [Текст](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/text) - текст, который будет отображаться в прямоугольнике
* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontcolor) - цвет текста
* [FontFamily](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontfamily) - название текстового шрифта;
* [FontSize](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/fontsize) - размер шрифта текста;
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/opacity) - позволяет установить прозрачность аннотации;
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/penstyle) — определяет стиль линии рамки (сплошная, штриховая, точечная и т. д.);
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/penwidth) — определяет ширину линии кадра в пикселях;
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/pencolor) — определяет цвет рамки;
* [TextHorizontalAlignment]() - определяет горизонтальное выравнивание текста.

Выполните следующие действия, чтобы добавить аннотацию [TextField](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создание объекта [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/textfieldannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [TextFieldAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textfieldannotation):

{{< gist "conholdate-docs-gists" "0b96fd14df88332224777c1960cab12d" "add-text-field-annotation.cs" >}}
    



## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстрации .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример пользовательского интерфейса WebForms приложения .NET] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации документа для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





