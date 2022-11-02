---
url: /ru/net/add-replacement-annotation/
title: "Добавить заменяющую аннотацию"
weight: 3
description: "Узнайте, что такое замещающая аннотация и как программно добавить ее в документ с помощью API GroupDocs.Annotation, который является частью Conholdate.Total для .NET."
keywords: "Что такое аннотация замены, как добавить аннотацию, добавить аннотацию замены"
type: docs
---

## Как добавить замещающую аннотацию в C#

Аннотация **Замена** заменяет исходный текст другим предоставленным текстовым фрагментом. Пожалуйста, проверьте изображение ниже, чтобы узнать, как может выглядеть замена аннотации.

![](https://docs.groupdocs.com/annotation/net/images/add-replacement-annotation.png)

Для типа [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) можно указать следующие свойства:

* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/fontcolor) - цвет текста аннотации;
* [Непрозрачность](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/opacity) \ - позволяет установить прозрачность аннотации;
* [Точки](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/points) - позиции аннотаций задаются массивом точек;
* [TextToReplace](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/texttoreplace) - текст, который будет заменен
 

Выполните следующие действия, чтобы добавить замещающую аннотацию в документ:

* Создать объект [Аннотатор](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) с входным путем или потоком документа;
* Создание объекта [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) с желаемыми свойствами (позиция, номер страницы и т. д.);
* Вызовите метод [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) и передайте [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/replacementannotation) объект;
* Вызов метода [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) с результирующим путем или потоком документа;

В следующем коде показано, как добавить в документ [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation):


{{< gist "conholdate-docs-gists" "75b019e25bd99928d7c09b2a62c0ae72" "add-replacement-annotation.cs" >}}
    



## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:

* [GroupDocs.Annotation для примеров, плагинов и демонстрации .NET](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation для примеров, плагинов и демонстраций Java] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Пример аннотации документа для пользовательского интерфейса .NET MVC] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Современный пример аннотации документа для .NET App WebForms UI] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Современный пример пользовательского интерфейса приложения Java Dropwizard с аннотацией документа] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Пример аннотации документа для пользовательского интерфейса Java Spring] (https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





