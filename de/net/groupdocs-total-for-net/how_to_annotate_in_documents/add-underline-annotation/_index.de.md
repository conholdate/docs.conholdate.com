---
url: /de/add-underline-annotation/
title: "Unterstrichene Anmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was eine Unterstreichungsannotation ist und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Unterstreichungsanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Unterstreichungsanmerkung hinzu"
type: docs
---

## So fügen Sie eine Unterstreichungsanmerkung in C# hinzu

Die Annotation **Unterstrichen** kennzeichnet Text mit einem Unterstreichungsstil, wie im Bild unten gezeigt.

![](https://docs.groupdocs.com/annotation/net/images/add-underline-annotation.png)

Die Anmerkungs-API (in Conholdate.Total für .NET enthalten) kann die nächsten Eigenschaften für [UnderlineAnnotation] (https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/underlineannotation) angeben. Typ:

* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/fontcolor) – Farbe des Anmerkungstextes;
* [Deckkraft](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/opacity) – ermöglicht das Festlegen der Deckkraft von Anmerkungen;
* [Punkte](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/points) – Annotationspositionen, die durch ein Array von Punkten festgelegt werden.
* [UnderlineColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/underlineannotation/properties/underlinecolor) – Farbe der Unterstreichungslinie einrichten

Befolgen Sie diese Schritte, um dem Dokument eine Unterstreichungsanmerkung hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziieren Sie das Objekt [UnderlineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/underlineannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [UnderlineAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/underlineannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf.

Der folgende Code zeigt, wie [UnderlineAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/underlineannotation) zum Dokument hinzugefügt wird:

{{< gist "conholdate-docs-gists" "8598a8d851b687af18ff339b01b402f3" "add-underline-annotation.cs" >}}
    



## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





