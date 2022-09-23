---
title: "Сравните два документа Word на наличие различий"
description: "В этой статье объясняется, как сравнивать два текстовых документа на наличие различий с помощью API GroupDocs.Comparison, который является частью Conholdate.Total для .NET."
keywords: "Сравните два документа Word на предмет различий, сравните два документа Word на предмет различий в C#"
type: docs
url: /compare-two-word-documents-for-differences/
weight: 20
---
## Сравните два текстовых документа на наличие различий в C#

В ситуации, когда вам нужно сравнить текстовые файлы большого размера, которые похожи друг на друга, но имеют небольшие отличия, о которых вы хотели бы узнать. Поэтому поиск этих изменений вручную — достаточно трудоемкий процесс.
**[GroupDocs.Comparison для .NET](https://products.groupdocs.com/comparison/net)** (который является частью Conholdate.Total для .NET) предоставляет множество возможностей для сравнения широкого спектра [поддерживаемые форматы файлов](https://docs.groupdocs.com/comparison/net/supported-document-formats/).

После сравнения двух файлов Word вы получите результирующий документ, в котором изменения выделены тремя разными цветами:

* Элементы, которые были вставлены в первый файл. – <font color="blue">**синий**</font> , по умолчанию
* Элементы, которые были удалены из первого файла – <font color="red">**красный**</font> , по умолчанию
* Элементы, у которых изменились стили (шрифт, цвет и т. д.) — <font color="green">**зеленые**</font> по умолчанию

| Исходные / Целевые / Результирующие файлы Word |
| --- | --- |
|Источник |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-word-1.png) |
|Цель |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-word-2.png)|
|Результат |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-word-3.png)|

## Пример сравнения документов из двух слов

{{< gist "conholdate-docs-gists" "73111e0960857a7f0091f3fc5011ab0d" "compare-two-word-documents-for-differences.cs" >}}









