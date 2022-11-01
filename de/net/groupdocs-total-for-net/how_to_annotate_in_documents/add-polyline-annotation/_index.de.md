---
url: /de/net/add-polyline-annotation/
title: "Polylinienanmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was eine Polylinienannotation ist und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Polylinienanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Polylinienanmerkung hinzu"
type: docs
---

## So fügen Sie Polylinienanmerkungen in C# hinzu

Mit der Annotation **Polylinie** können Sie Formen und Freihandlinien zeichnen, wie im Bild unten gezeigt.

![](annotation/net/images/add-polyline-annotation.png)

Die Anmerkungs-API, die Teil von Conholdate.Total für .NET ist, erleichtert Ihnen die Angabe der nächsten Eigenschaften für [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation ) Typ:

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/box) – definiert die Anmerkungsposition auf einer Dokumentseite;
* [Deckkraft](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) – ermöglicht das Festlegen der Deckkraft von Anmerkungen;
* [PenColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/pencolor) – definiert Rahmenfarbe;
* [PenStyle](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penstyle) – definiert den Rahmenlinienstil (durchgehend, Strich, Punkt usw.);
* [PenWidth](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/penwidth) – definiert die Rahmenlinienbreite in Pixel.
* [SvgPath](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/polylineannotation/properties/svgpath) – SVG-Pfad, der die Form beschreibt.

Führen Sie die folgenden Schritte aus, um die Annotation [Polyline](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/polylineannotation) zum Dokument hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziieren Sie das Objekt [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/polylineannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf.

Der folgende Code zeigt, wie [PolylineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/polylineannotation) zum Dokument hinzugefügt wird:

{{< gist "conholdate-docs-gists" "ac13aeb5ae23e29a23358fef96b5550e" "add-polyline-annotation.cs" >}}

## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




