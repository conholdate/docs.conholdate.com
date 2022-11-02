---
title: "Удалить метаданные"
description: "В этой статье показано, как очистить все или удалить свойства метаданных без применения каких-либо фильтров. Вы можете сделать это, используя метод Sanitize."
keywords: "удалить метаданные"
type: docs
url: /ru/net/remove-metadata/
weight: 40
---

## Удалить все распознанные свойства метаданных из файла

Иногда вам может понадобиться просто удалить все или очистить свойства метаданных без применения каких-либо фильтров. Лучший способ сделать это — использовать метод [Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize).

В этом примере показано, как удалить все обнаруженные пакеты/свойства метаданных.

1. Загрузите файл
2. Вызовите метод [Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize).
3. Проверьте фактическое количество удаленных пакетов/свойств.
4. Сохраните изменения

**Пример**

{{< gist "conholdate-docs-gists" "84c24a9c9dba1c15d7a43d439887f9fa" "remove-metadata.cs" >}}

В результате мы получаем очищенную версию исходного файла.







