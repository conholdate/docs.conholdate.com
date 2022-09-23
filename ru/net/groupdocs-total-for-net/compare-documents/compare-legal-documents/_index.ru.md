---
title: "Сравните юридические документы"
description: "В этой статье объясняется, как использовать API GroupDocs.Comparison (который является частью Conholdate.Total для .NET) для сравнения юридических документов."
keywords: "Сравните юридические документы, Сравните юридические документы на C#"
type: docs
url: /compare-legal-documents/
weight: 50
---

## Сравните юридические документы на C#

Возможностей сравнения Microsoft Word может быть недостаточно для сравнения контрактов и юридических документов. Предположим, вам нужен собственный способ реализации логики сравнения или вы разрабатываете собственное приложение. [**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/net) (который является частью Conholdate.Total для .NET) дает возможность программно сравнивать документы и управлять найденными различиями в код для широкого спектра [поддерживаемых форматов файлов] (https://docs.groupdocs.com/comparison/net/supported-document-formats/). Вот пример того, как сравнить два контракта с помощью API GroupDocs.Comparsion. Вам просто нужно выполнить следующие шаги

* Создайте объект [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) с путем или потоком исходного документа.
* Вызовите метод [Добавить](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) и укажите путь или поток целевого документа.
* Вызовите метод [Сравнить](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison/comparer/methods/compare).

Допустим, у вас есть два договора в формате DOCX, которые были заключены в разные годы (например, на 2018 и 2019 годы). Теперь вы собираетесь сравнить, как изменились условия через какое-то время.

| | Файлы |
| --- | --- |
|Исходный файл - Контракт подписан в 2018 году| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_3.png) |
|Целевой файл – Контракт, подписанный в 2019 году|![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_4.png)|

## Пример кода
Вот код, который используется для сравнения двух контрактов.

{{< gist "conholdate-docs-gists" "01e03338e930f4d1aa19e23242383c99" "compare-legal-documents.cs" >}}

В результате мы получаем файл DOCX, в котором удаленные элементы отмечены <font color="red">**красным**</font> , добавленные — <font color="blue">**синим**</font> , а измененные — <font color="green">**зеленым**</font> .

![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_5.png)

Для получения более подробной информации вы можете посетить [эту статью] (https://docs.groupdocs.com/comparison/net/how-to-compare-contracts-drafts-and-legal-documents/).







