---
title: "Сравните файлы Excel"
description: "В этой статье объясняется, как использовать API GroupDocs.Comparison (который является частью Conholdate.Total для .NET) для сравнения документов Excel."
keywords: "Сравните файлы Excel, сравните файлы Excel в C#, пример кода для сравнения двух файлов Excel"
type: docs
url: /ru/compare-excel-files/
weight: 70
---

## Сравните файлы Excel в C#

Сравнение рабочих листов помогает обнаружить возможные проблемы, такие как лишние записи, неправильные таблицы, противоречивые формулы или неправильное форматирование.**[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)** дает вам множество вариантов для сравнения широкого диапазона [поддерживаемых форматов файлов](https://docs.groupdocs.com/comparison/net/supported-document-formats/), включая форматы Excel.

После сравнения в результирующем файле есть три цвета, которые выделяют различия. Вы также можете указать цвета самостоятельно, чтобы определить следующее различие:

* Элементы, которые были вставлены в первый файл. – <font color="blue">**синий**</font> , по умолчанию
* Элементы, которые были удалены из первого файла – <font color="red">**красный**</font> , по умолчанию
* Элементы, у которых изменились стили (шрифт, цвет и т. д.) — <font color="green">**зеленые**</font> по умолчанию

## Пример кода для сравнения двух файлов Excel

{{< gist "conholdate-docs-gists" "05e9a0800d63d9d68047e17a88f86644" "compare-excel-files.cs" >}}

| Исходный / целевой / результат файлов Excel |
| --- | --- |
|Источник |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-1.png) |
|Цель |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-2.png)|
|Результат |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-spreadsheet-or-tables-3.png)|

В результате у вас есть файл Excel с выделенными изменениями, в котором удаленные элементы отмечены шрифтом <font color="red">**красным**</font> , добавленные — <font color="blue">**синим**</font> , а измененные — <font color="yellow">**зеленым**</font> .









