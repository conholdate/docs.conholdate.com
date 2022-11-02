---
title: "Сравнить документы"
description: "В этом разделе рассказывается об использовании API GroupDocs.Comparison, который является частью Conholdate.Total для .NET. В статье ниже показано, как можно просто сравнивать документы."
keywords: "Сравнить документы"
type: docs
url: /ru/net/compare-documents/
weight: 20
---
## Особенности сравнения

Информация об алгоритмах обнаружения изменений, используемых **[GroupDocs.Comparison](https://products.groupdocs.com/comparison/net)**, позволяет обнаруживать изменения в различных частях и блоках документа:

* Текстовые блоки - абзацы, слова и символы;
* Столы;
* Картинки;
* Формы и т.д.
    

Для лучшего визуального разделения обнаруженных изменений добавленные, измененные или удаленные части документа выделены разными цветами:

* Добавлено — <font color="blue">**синий**</font>
* Изменено — <font color="green">**зеленый**</font>
* Стиль – <font color="green">**зеленый**</font>
* Удалено — <font color="red">**красный**</font>

При необходимости цветовую схему стиля можно настроить, измененные текстовые блоки можно пометить различным форматированием — курсивом, полужирным, подчеркнутым, зачеркнутым и т. д.

Вот простые шаги для сравнения двух документов:
* Создать объект [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) с путем или потоком исходного документа;
* Вызовите метод [Добавить](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) и укажите путь или поток целевого документа.
* Вызовите метод [Сравнить](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/compare/index).

В следующем примере кода показан простейший случай сравнения документов с помощью пары строк кода.

## Сравните документы из локального файла

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-documents.cs" >}}




## Сравните документы из потока

{{< gist "conholdate-docs-gists" "1034d2470a495b3070833290efc093c4" "compare-document-from-stream.cs" >}}

Для получения дополнительной информации посетите [эту статью] (https://docs.groupdocs.com/watermark/net/adding-text-watermarks/).




