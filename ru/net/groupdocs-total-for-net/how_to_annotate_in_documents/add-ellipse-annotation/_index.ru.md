---
url: /ru/net/add-ellipse-annotation/
title: "Добавить аннотацию эллипса"
weight: 3
description: "Узнайте, что такое эллиптическая аннотация и как добавить ее в документ программным путем с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация эллипса, как добавить аннотацию, добавить аннотацию эллипса"
type: docs
---

## Как добавить аннотацию эллипса в C#

Annotation API позволяет указать следующие свойства для типа [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/ellipseannotation):

* [BackgroundColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/backgroundcolor) — описывает цвет фона эллипса;
* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/box) - определяет положение аннотации на странице документа;
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) - позволяет установить прозрачность аннотации;
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/pencolor) — определяет цвет пера;
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penstyle) — определяет стиль линии (сплошная, штриховая, точка и т. д.);
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penwidth) — определяет ширину линии в пикселях.

Выполните следующие действия, чтобы добавить аннотацию в виде эллипса в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создать объект [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/ellipseannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/ellipseannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/ellipseannotation):

{{< gist "conholdate-docs-gists" "136f64789ebf11d5e9b9fdbbefec3f19" "add-ellipse-annotation.cs" >}}

## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстрации .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример пользовательского интерфейса WebForms приложения .NET] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации документа для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




