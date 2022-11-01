---
url: /de/net/add-ellipse-annotation/
title: "Ellipsenanmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was Ellipsenanmerkungen sind und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Ellipsenanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Ellipsenanmerkung hinzu"
type: docs
---

## So fügen Sie Ellipse-Anmerkungen in C# hinzu

Mit der Anmerkungs-API können Sie die nächsten Eigenschaften für den Typ [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/ellipseannotation) angeben:

* [BackgroundColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/backgroundcolor) – beschreibt die Hintergrundfarbe der Ellipse;
* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/box) – definiert die Anmerkungsposition auf der Dokumentseite;
* [Deckkraft](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) – ermöglicht das Festlegen der Deckkraft von Anmerkungen;
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/pencolor) – definiert die Stiftfarbe;
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penstyle) – definiert den Linienstil (durchgehend, Strich, Punkt usw.);
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penwidth) – definiert die Linienbreite in Pixel.

Befolgen Sie diese Schritte, um dem Dokument eine Ellipsenanmerkung hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziieren Sie das Objekt [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/ellipseannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/ellipseannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf.

Der folgende Code zeigt, wie [EllipseAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/ellipseannotation) zum Dokument hinzugefügt wird:

{{< gist "conholdate-docs-gists" "136f64789ebf11d5e9b9fdbbefec3f19" "add-ellipse-annotation.cs" >}}

## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




