---
title: "Minimieren Sie HTML, um das Rendering zu optimieren"
description: "Dieser Artikel zeigt, wie HTML und CSS minimiert werden, wenn Dokumente in HTML gerendert werden."
keywords: "html verkleinern, in html rendern"
type: docs
url: /de/net/minify-html-to-optimize-rendering/
weight: 30
---


## Minimieren Sie HTML, um das Rendern in HTML in C# zu optimieren

Der Prozess der Minimierung liefert fast in allen Fällen eine Ausgabe, die in allen Browsern identisch mit dem Originalinhalt aussieht, aber minimierter HTML-Inhalt besteht keine strenge HTML-Validierung. Hier ist die Liste der Techniken, die hinter dem Minifizierungsprozess lagen.

### HTML-Minifizierung

* Kommentare (außer wenn sie IE-bedingte Anweisungen enthalten) werden vollständig entfernt
* Bedingte Kommentare werden komprimiert
* Leerzeichen und Zeilenumbrüche innerhalb der Tags und zwischen den Tags werden entfernt
* Die Dokumenttyp-Deklaration wird vereinfacht zu `<!DOCTYPE html> `und alle HTML-Tag-Eigenschaften werden entfernt
* Protokolldeklarationen wie http:, https: und javascript: werden aus Pfadwerten entfernt
* Mehrere Leerzeichen zwischen Wörtern (außer wenn sie innerhalb des pre- oder textarea-Tags vorkommen) werden durch einzelne Leerzeichen ersetzt
* Anführungszeichen um Tag-Eigenschaftswerte (außer Inline-Ereignisse) wurden entfernt
* Standardattribute für "script", "style" und "link"-Tags wurden entfernt
* Boolesche Attribute sind vereinfacht, daher `<input type="text" disabled="disabled"> ` wird zu `<input type=text disabled> `

### CSS-Minifizierung

Der eingebettete CSS-Inhalt wird minimiert, wenn die Einstellung *Minify* aktiviert ist.

* Entfernen Sie alle unbedeutenden Leerzeichen.
* Alle Kommentare entfernen.
* Entfernen Sie alle unnötigen Semikolon-Trennzeichen.
* Farbwerte reduzieren.
* Reduzieren Sie ganzzahlige Darstellungen, indem Sie führende und nachgestellte Nullen entfernen.
* Einheitenbezeichner aus numerischen Nullwerten entfernen.

## So minimieren Sie HTML und CSS

Die Viewer-API stellt die *Minify*-Eigenschaft der *HtmlViewOptions*-Klasse bereit, mit der Sie Ausgabeinhalte minimiert erhalten können. Die Minimierung entfernt Kommentare, zusätzliche Leerzeichen und andere nicht benötigte Zeichen, ohne die Inhaltsstruktur zu beschädigen. Dadurch wird die Seite kleiner und lädt schneller. Das folgende Beispiel zeigt, wie der Ausgabeinhalt minimiert wird, wenn ein MS Word-Dokument in HTML gerendert wird.

Das folgende Codebeispiel zeigt, wie die Minimierung aktiviert wird.

{{< gist "conholdate-docs-gists" "5746ab59a9c4a41e91c90e1704d50699" "minify-html.cs" >}}

{{< alert style="info" >}}Diese Einstellung komprimiert den Inhalt nicht so stark, wie dies mit der Gzip-Komprimierung erreicht werden könnte (die von Ihrem Webserver aktiviert und konfiguriert werden sollte). Aber es könnte immer noch wertvoll sein und kann als zusätzliche Optimierung in Kombination mit der Gzip-Komprimierung verwendet werden. {{< /alert >}}







