---
url: /ru/net/add-squiggly-annotation/
title: "Добавить волнистую аннотацию"
weight: 3
description: "Узнайте, что такое аннотация Squiggly и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация Squiggly, как добавить аннотацию, добавить аннотацию Squiggly"
type: docs
---

## Как добавить волнистую аннотацию в C#
Аннотация **Squiggly** помечает текст волнистым стилем, как показано на рисунке ниже.

![](https://docs.groupdocs.com/annotation/net/images/add-squiggly-annotation.png)

Annotation API имеет возможность указать следующие свойства для типа [SquigglyAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/squigglyannotation):

* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/squigglyannotation/properties/fontcolor) - цвет текста аннотации;
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/squigglyannotation/properties/opacity) - позволяет установить прозрачность аннотации;
* [Точки](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/squigglyannotation/properties/points) - позиции аннотаций, заданные массивом точек.
* [BackgroundColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textfieldannotation/properties/backgroundcolor) - описывает цвет фона области;
* [SquigglyColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/squigglyannotation/properties/squigglycolor) - настройка цвета линии аннотации

Выполните следующие действия, чтобы добавить аннотацию Squiggly в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создать объект [SquigglyAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/squigglyannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [SquigglyAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/squigglyannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [SquigglyAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/squigglyannotation):

{{< gist "conholdate-docs-gists" "384e60c9a5c676ab44b0d72b814b92ea" "add-squiggly-annotation.cs" >}}
    



## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстрации .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример пользовательского интерфейса WebForms приложения .NET] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации к документу для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





