---
url: /ru/net/add-link-annotation/
title: "Добавить аннотацию к ссылке"
weight: 3
description: "Узнайте, что такое аннотация ссылки и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация ссылки, как добавить аннотацию, добавить аннотацию ссылки"
type: docs
---

## Как добавить аннотацию ссылки в C#

Аннотация **Ссылка** добавляет гиперссылку на документ, как показано на рисунке ниже.

![](annotation/net/images/add-link-annotation.png)

Для типа [LinkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/linkannotation) можно указать следующие свойства:

* [URL](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/linkannotation/properties/url) – ссылка на веб-ресурс.
* [Точки](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/linkannotation/properties/points) – позиции аннотаций, заданные массивом точек.
    



Выполните следующие действия, чтобы добавить в документ аннотацию Underline:

* Создать экземпляр [Аннотатора] (https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) объекта с входным путем или потоком документа;
* Создать объект [LinkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/linkannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [LinkAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/linkannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [LinkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/linkannotation):


{{< gist "conholdate-docs-gists" "5b6efa0d8b13cb0a510d2613453b69d8" "add-link-annotation.cs" >}}

## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстраций .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример аннотации документа для .NET App WebForms UI] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации документа для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





