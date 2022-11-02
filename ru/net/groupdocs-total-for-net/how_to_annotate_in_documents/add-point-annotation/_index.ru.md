---
url: /ru/net/add-point-annotation/
title: "Добавить аннотацию точки"
weight: 3
description: "Узнайте, что такое аннотация Point и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация Point, как добавить аннотацию, добавить аннотацию Point"
type: docs
---

## Как добавить аннотацию точки в C#

Аннотация **Точка** прикрепляет комментарии к любой точке документа, как показано на рисунке ниже.

![](annotation/net/images/add-point-annotation.png)

API аннотации, который является частью Conholdate.Total для .NET, предоставляет возможность указать следующие свойства для [PointAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation ) тип:

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/pointannotation/properties/box) – определяет положение аннотации на странице документа;
    



Выполните следующие действия, чтобы добавить аннотацию Point в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создать объект [PointAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [PointAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/pointannotation) объект;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [PointAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation):

{{< gist "conholdate-docs-gists" "9ae598ce1d98541ca1804c042160531a" "add-point-annotation.cs" >}}

## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстраций .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример пользовательского интерфейса WebForms приложения .NET] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации к документу для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





