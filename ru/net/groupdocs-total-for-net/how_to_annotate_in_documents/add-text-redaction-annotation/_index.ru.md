---
url: /ru/net/add-text-redaction-annotation/
title: "Добавить аннотацию редактирования текста"
weight: 3
description: "Узнайте, что такое аннотация Text Redaction и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация редактирования текста, как добавить аннотацию, добавить аннотацию редактирования текста"
type: docs
---

## Как добавить аннотацию редактирования текста в C#

Аннотация **Редактирование текста** заполняет часть текста черным прямоугольником (используется, если вы хотите скрыть часть текста), как показано на рисунке ниже.

![](https://docs.groupdocs.com/annotation/net/images/add-text-redaction-annotation.png)

Есть возможность указать следующие свойства для типа [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation)

* [Точки](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textredactionannotation/properties/points) - позиции аннотаций, заданные массивом точек.
    




Выполните следующие действия, чтобы добавить аннотацию редактирования текста в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создать объект [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/textredactionannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation):

{{< gist "conholdate-docs-gists" "869d678ddebc36ff4e77ba7d7e23fe9a" "add-text-redaction-annotation.cs" >}}
    




## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстрации .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример аннотации документа для .NET App WebForms UI] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации к документу для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    






