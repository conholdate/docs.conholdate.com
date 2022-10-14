---
title: "Удаление водяного знака с фотографии"
description: "Руководство по удалению водяных знаков с фотографий в C# с помощью GroupDocs.Watermark, который является частью Conholdate.Total для .NET."
keywords: "удаление водяного знака с фото, удалить водяной знак, водяной знак, удалить водяной знак с фото в c#"
type: docs
url: /ru/removing-watermark-from-photo/
weight: 30
---
## Удалить водяной знак

API GroupDocs.Watermark, который является частью Conholdate.Total для .NET, позволяет легко [найти](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/search) и удалить конкретный [водяной знак](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/possiblewatermark) с фотографии или любого другого документа. Следующий код служит этой цели.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermark**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermark.cs" >}}

## Удалить водяной знак с определенным форматированием текста

API водяных знаков также позволяет вам искать и удалять водяные знаки на основе определенного [текстового форматирования] (https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria). Вы можете указать критерий поиска, содержащий [имя шрифта](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/имя шрифта), размер, [цвет](https:/ /apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/foregroundcolorrange) и т. д., и API найдет водяные знаки с соответствующими свойствами. Следующий фрагмент кода показывает, как искать и удалять водяные знаки с определенным форматированием текста.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermarkWithParticularTextFormatting**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermarkWithParticularTextFormatting.cs" >}}

## Удалить водяные знаки с гиперссылками

API водяных знаков позволяет искать и удалять [гиперссылки](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/hyperlinkpossiblewatermark) в документе любого поддерживаемого формата. В следующем примере кода показано, как найти и удалить гиперссылки с определенным URL-адресом из документа.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveHyperlinksWithParticularUrl**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveHyperlinksWithParticularUrl.cs" >}}









