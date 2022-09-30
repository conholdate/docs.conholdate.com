---
url: /de/add-watermark-annotation/
title: "Wasserzeichenanmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was eine Wasserzeichenannotation ist und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Wasserzeichenanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Wasserzeichenanmerkung hinzu"
type: docs
---

## So fügen Sie Wasserzeichenanmerkungen in C# hinzu
Die Anmerkung **Wasserzeichen** fügt Textwasserzeichen hinzu, wie im Bild unten gezeigt.

![](https://docs.groupdocs.com/annotation/net/images/add-watermark-annotation.png)

Die Anmerkungs-API (in Conholdate.Total für .NET enthalten) kann die nächsten Eigenschaften für [WatermarkAnnotation] (https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) angeben. Typ:

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/box) – definiert die Position der Anmerkung auf der Dokumentseite;
* [Text](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/text) – Text des Wasserzeichens;
* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontcolor) – Farbe des Anmerkungstextes;
* [FontFamily](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontfamily) – Schriftart des Anmerkungstextes;
* [FontSize](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/fontsize) – Schriftgröße des Textes;
* [Deckkraft](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/opacity) – ermöglicht das Festlegen der Deckkraft von Anmerkungen;
* [Winkel](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/watermarkannotation/properties/angle) - Wasserzeichen-Textwinkel;
* [VerticalAlignment]() - definiert die vertikale Ausrichtung des Dokuments;
* [HorizontalAlignment]() - definiert die horizontale Ausrichtung des Dokuments.
* [AutoScale]() - Größe des Wasserzeichens hängt von der Wortlänge und der Dokumentgröße ab.

Befolgen Sie diese Schritte, um dem Dokument eine Wasserzeichenanmerkung hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziieren Sie das Objekt [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) mit den gewünschten Eigenschaften (Position, Farbe usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/watermarkannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf.

Der folgende Code zeigt, wie [WatermarkAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/watermarkannotation) zum Dokument hinzugefügt wird:


{{< gist "conholdate-docs-gists" "a75b6de86f75b46d6a6beaf24ebd8da1" "add-watermark-annotation.cs" >}}
    



## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





