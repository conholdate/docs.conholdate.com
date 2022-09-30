---
url: /ru/add-polyline-annotation/
title: "Добавить полилинейную аннотацию"
weight: 3
description: "Узнайте, что такое аннотация Polyline и как добавить ее в документ программно с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация полилинии, как добавить аннотацию, добавить аннотацию полилинии"
type: docs
---

## Как добавить аннотацию полилинии в C#

Аннотация **Polyline** позволяет рисовать фигуры и линии от руки, как показано на рисунке ниже.

![](annotation/net/images/add-polyline-annotation.png)

API аннотаций, который является частью Conholdate.Total для .NET, позволяет указать следующие свойства для [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation ) тип:

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/box) - определяет положение аннотации на странице документа;
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) - позволяет установить прозрачность аннотации;
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/pencolor) — определяет цвет рамки;
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penstyle) — определяет стиль линии рамки (сплошная, штриховая, точечная и т. д.);
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penwidth) — определяет ширину линии кадра в пикселях.
* [SvgPath](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/polylineannotation/properties/svgpath) — путь SVG, описывающий форму.

Выполните следующие действия, чтобы добавить аннотацию [Polyline](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/polylineannotation) в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создать объект [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/polylineannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation):

{{< gist "conholdate-docs-gists" "ac13aeb5ae23e29a23358fef96b5550e" "add-polyline-annotation.cs" >}}

## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстраций .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример аннотации документа для .NET App WebForms UI] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации документа для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




