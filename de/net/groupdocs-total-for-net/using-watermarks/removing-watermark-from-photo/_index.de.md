---
title: "Wasserzeichen vom Foto entfernen"
description: "Ein Leitfaden zum Erlernen des Entfernens von Wasserzeichen aus Fotos in c# mithilfe von GroupDocs.Watermark, das Teil von Conholdate.Total für .NET ist."
keywords: "Wasserzeichen vom Foto entfernen, Wasserzeichen entfernen, Wasserzeichen, Wasserzeichen vom Foto in c# entfernen"
type: docs
url: /de/net/removing-watermark-from-photo/
weight: 30
---
## Wasserzeichen entfernen

Die GroupDocs.Watermark-API, die Teil von Conholdate.Total für .NET ist, ermöglicht Ihnen das einfache [finden](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark/watermarker/methods/search) und Entfernen ein bestimmtes [Wasserzeichen] (https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/possiblewatermark) aus einem Foto oder einem anderen Dokument. Dazu dient folgender Code.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermark**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermark.cs" >}}

## Wasserzeichen mit bestimmter Textformatierung entfernen

Die Wasserzeichen-API ermöglicht es Ihnen auch, die Wasserzeichen auf der Grundlage einer bestimmten [Textformatierung] zu suchen und zu entfernen (https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria). Sie können ein Suchkriterium angeben, das [Schriftartname](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/fontname), Größe, [Farbe](https:/ /apireference.groupdocs.com/net/watermark/groupdocs.watermark.search.searchcriteria/textformattingsearchcriteria/properties/foregroundcolorrange) usw. und die API findet die Wasserzeichen mit übereinstimmenden Eigenschaften. Das folgende Code-Snippet zeigt, wie Wasserzeichen mit einer bestimmten Textformatierung gesucht und entfernt werden.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveWatermarkWithParticularTextFormatting**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveWatermarkWithParticularTextFormatting.cs" >}}

## Hyperlink-Wasserzeichen entfernen

Mit der Wasserzeichen-API können Sie [Hyperlinks](https://apireference.groupdocs.com/net/watermark/groupdocs.watermark.search/hyperlinkpossiblewatermark) in einem Dokument in jedem unterstützten Format suchen und entfernen. Das folgende Codebeispiel zeigt, wie Sie Hyperlinks mit einer bestimmten URL aus einem Dokument finden und entfernen.

**AdvancedUsage.SearchAndRemoveWatermarks.RemoveHyperlinksWithParticularUrl**

{{< gist "conholdate-docs-gists" "e464529e174b5eaeca60a352341561cc" "RemoveHyperlinksWithParticularUrl.cs" >}}









