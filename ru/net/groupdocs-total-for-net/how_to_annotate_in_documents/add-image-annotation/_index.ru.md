---
url: /ru/add-image-annotation/
title: "Добавить аннотацию к изображению"
weight: 3
description: "Узнайте, что такое аннотация к изображению и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация к изображению, как добавить аннотацию, добавить аннотацию к изображению"
type: docs
---

## Как добавить аннотацию к изображению в C#

Функция **Аннотации изображения** позволяет добавлять изображение на страницу документа, как показано на рисунке ниже.

![](annotation/net/images/add-image-annotation.png)

Для типа [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation) можно указать следующие свойства:

* [ImagePath](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/imagepath) — определяет локальный или удаленный путь к изображению.
* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/box) — определяет положение аннотации на странице документа с помощью [Прямоугольник](https://apireference .groupdocs.com/net/annotation/groupdocs.annotation.models/rectangle);
(изображение будет изменено в соответствии с вашей шириной и высотой)
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/opacity) — позволяет установить прозрачность аннотации (присутствует во всех поддерживаемых форматах, примеры этого вы можно увидеть выше);
* [Угол]() — определяет угол поворота аннотации.

Выполните следующие действия, чтобы добавить аннотацию Highlight в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создайте объект [ImageAnnotation](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызвать метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передать объект ImageAnnotation;
* Вызов метода [Сохранить](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save) с результирующим путем или потоком документа.

В следующем коде показано, как добавить в документ [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation):

{{< gist "conholdate-docs-gists" "ceb73e80ee7d42dc1622b9e87a3e5471" "add-image-annotation.cs" >}}

## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстрации .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример аннотации документа для .NET App WebForms UI] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации к документу для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




