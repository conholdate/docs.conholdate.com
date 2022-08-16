---
title: "Metadaten entfernen"
description: "In diesem Artikel wird gezeigt, wie Sie alle Metadateneigenschaften bereinigen oder entfernen, ohne Filter anzuwenden. Sie können dies tun, indem Sie die Sanitize-Methode verwenden."
keywords: "Metadaten entfernen"
type: docs
url: /remove-metadata/
weight: 40
---

## Entfernen Sie alle erkannten Metadateneigenschaften aus einer Datei

Manchmal müssen Sie möglicherweise einfach alle Metadateneigenschaften entfernen oder bereinigen, ohne Filter anzuwenden. Verwenden Sie dazu am besten die Methode [Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize).

Dieses Beispiel zeigt, wie alle erkannten Metadatenpakete/Eigenschaften entfernt werden.

1. Laden Sie eine Datei
2. Rufen Sie die Methode [Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize) auf
3. Überprüfen Sie die tatsächliche Anzahl der entfernten Pakete/Eigenschaften
4. Speichern Sie die Änderungen

**Beispiel**

{{< gist "conholdate-docs-gists" "84c24a9c9dba1c15d7a43d439887f9fa" "remove-metadata.cs" >}}

Als Ergebnis erhalten wir eine bereinigte Version der Originaldatei.







