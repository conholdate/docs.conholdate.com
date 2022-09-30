---
url: /ru/add-underline-annotation/
title: "Добавить аннотацию подчеркивания"
weight: 3
description: "Узнайте, что такое аннотация Underline и как добавить ее в документ программно с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое подчеркивание аннотации, как добавить аннотацию, добавить подчеркивание аннотации"
type: docs
---

## Как добавить аннотацию подчеркивания в C#

Аннотация **Подчеркивание** помечает текст подчеркиванием, как показано на рисунке ниже.

![](https://docs.groupdocs.com/annotation/net/images/add-underline-annotation.png)

Annotation API (включенный в Conholdate.Total для .NET) имеет возможность указать следующие свойства для [UnderlineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/underlineannotation) тип:

* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/fontcolor) - цвет текста аннотации;
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/opacity) - позволяет установить прозрачность аннотации;
* [Точки](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/points) - позиции аннотаций, заданные массивом точек.
* [UnderlineColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/underlinecolor) - настройка цвета линии подчеркивания

Выполните следующие действия, чтобы добавить в документ аннотацию Underline:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создание объекта [UnderlineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/underlineannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [UnderlineAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/underlineannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [UnderlineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/underlineannotation):

{{< gist "conholdate-docs-gists" "8598a8d851b687af18ff339b01b402f3" "add-underline-annotation.cs" >}}
    



## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстраций .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример аннотации документа для .NET App WebForms UI] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации к документу для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





