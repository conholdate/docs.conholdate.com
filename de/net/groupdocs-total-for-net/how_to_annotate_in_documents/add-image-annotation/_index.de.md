---
url: /de/add-image-annotation/
title: "Bildanmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was Bildanmerkungen sind und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Bildanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Bildanmerkung hinzu"
type: docs
---

## So fügen Sie Bildanmerkungen in C# hinzu

Die Funktion **Bildanmerkung** ermöglicht das Hinzufügen von Bildern innerhalb der Dokumentseite, wie im Bild unten gezeigt.

![](annotation/net/images/add-image-annotation.png)

Es besteht die Möglichkeit, die nächsten Eigenschaften für den Typ [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation) anzugeben:

* [ImagePath](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/imagepath) – definiert den lokalen oder entfernten Bildpfad.
* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/box) – definiert die Anmerkungsposition auf der Dokumentseite mit [Rectangle](https://apireference .groupdocs.com/net/annotation/groupdocs.annotation.models/rectangle) Struktur;
(Bild wird für Ihre benutzerdefinierte Breite und Höhe angepasst)
* [Deckkraft](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation/properties/opacity) – ermöglicht das Festlegen der Deckkraft von Anmerkungen (in allen unterstützten Formaten vorhanden, Beispiele dafür Sie siehe oben);
* [Winkel]() – definiert den Rotationswinkel der Anmerkung.

Befolgen Sie diese Schritte, um dem Dokument eine Highlight-Anmerkung hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziiere das Objekt [ImageAnnotation](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/imageannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie das ImageAnnotation-Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save) mit dem resultierenden Dokumentpfad oder Stream auf.

Der folgende Code zeigt, wie [ImageAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/imageannotation) zum Dokument hinzugefügt wird:

{{< gist "conholdate-docs-gists" "ceb73e80ee7d42dc1622b9e87a3e5471" "add-image-annotation.cs" >}}

## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    




