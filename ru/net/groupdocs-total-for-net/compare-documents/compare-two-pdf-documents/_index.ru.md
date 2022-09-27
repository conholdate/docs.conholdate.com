---
title: "Сравните два PDF-документа"
description: "В этой статье объясняется, как сравнить два pdf-документа с помощью API GroupDocs.Comparison, который является частью Conholdate.Total для .NET."
keywords: "Сравните два документа PDF, сравните два документа PDF с помощью С#"
type: docs
url: /ru/compare-two-pdf-documents/
weight: 20
---
## Сравните два PDF-документа с помощью C#

Найти разницу между тем, что было изменено в одной из версий, становится очень сложно, особенно при работе с PDF-документами большого объема. **[GroupDocs.Comparison для .NET](https://products.groupdocs.com/comparison/net)** (который является частью Conholdate.Total для .NET) предоставляет множество возможностей для сравнения широкого диапазона из [поддерживаемых форматов файлов](https://docs.groupdocs.com/comparison/net/supported-document-formats/), включая формат PDF.

После сравнения в результирующем файле есть три цвета, которые выделяют различия.

* Элементы, которые были вставлены в первый файл. – <font color="blue">**синий**</font> , по умолчанию
* Элементы, которые были удалены из первого файла – <font color="red">**красный**</font> , по умолчанию
* Элементы, у которых изменились стили (шрифт, цвет и т. д.) — <font color="green">**зеленые**</font> по умолчанию

| Исходный / Целевой / Результат PDF-файлы |
| --- | --- |
|Источник |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-1.png) |
|Цель |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-2.png)|
|Результат |![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-pdf-3.png)|

## Пример сравнения двух документов PDF

{{< gist "conholdate-docs-gists" "d8a8f36405b2a0bec4cfc074e9e9c7ad" "compare-two-pdf-documents.cs" >}}









