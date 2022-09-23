---
title: "Сравните файлы Powerpoint"
description: "В этой статье объясняется использование API GroupDocs.Comparison (который является частью Conholdate.Total для .NET) для сравнения файлов PowerPoint."
keywords: "Сравните файлы Powerpoint, сравните файлы Powerpoint на C#"
type: docs
url: /compare-powerpoint-files/
weight: 50
---

## Сравните файлы Powerpoint в C#

Сравнение файлов PowerPoint с помощью сторонних инструментов явно недостаточно. **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** (который является частью Conholdate.Total для .NET) предоставляет множество функций для сравнения широкого диапазона [поддерживаемых файлов форматы](https://docs.groupdocs.com/comparison/net/supported-document-formats/), включая формат презентации PowerPoint.

## Тематическое исследование
Давайте рассмотрим вариант использования, вы сделали презентацию в разное время, но элементы на слайдах расположены не так, как изначально. Чтобы узнать, чем слайды отличаются, вы можете использовать **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** для сравнения двух файлов в формате PPTX вместе со встроенной опцией, которая помогает найти изменения в стилях.

| | Презентации |
| --- | --- |
|Оригинал | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_1.png)|
|Изменено | ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_2.png)|

[**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/net) предоставляет возможность сравнить два файла в формате PPTX (или любых других [поддерживаемых форматах файлов](https://docs. groupdocs.com/comparison/net/supported-document-formats/))

Ниже приведены шаги для сравнения двух файлов PPTX.

* Создать объект [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) с путем или потоком исходного документа;
* Создать объект [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.options/compareoptions) с нужными параметрами;
* Вызовите метод [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) и передайте [CompareOptions](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison .options/compareoptions) объект к методу;

## Пример кода
В следующем примере кода показано, как сравнить два файла PPTX.

{{< gist "conholdate-docs-gists" "f2fdd8fd59740ba13ef67ddd8356e094" "compare-powerpoint-files.cs" >}}

В результате получаем файл PPTX, в котором удаленные элементы отмечены <font color="red">**красным**</font> , добавленные — <font color="blue">**синим**</font> , а измененные — <font color="green">**зеленым**</font>

| Слайд результатов |
| --- |
| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-powerpoint-presentations_3.png))






