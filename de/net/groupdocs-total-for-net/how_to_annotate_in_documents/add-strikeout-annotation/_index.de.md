---
url: /add-strikeout-annotation/
title: "Durchgestrichene Anmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was eine Strikeout-Annotation ist und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine durchgestrichene Anmerkung, wie fügt man eine Anmerkung hinzu, fügt eine durchgestrichene Anmerkung hinzu"
type: docs
---

## So fügen Sie eine durchgestrichene Anmerkung in C# hinzu
Die Anmerkung **Durchgestrichen** markiert Textfragmente mit einem durchgestrichenen Stil, wie im Bild unten gezeigt.

![](https://docs.groupdocs.com/annotation/net/images/add-strikeout-annotation.png)

Es besteht die Möglichkeit, die nächsten Eigenschaften für den Typ [StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/strikeoutannotation) anzugeben:

* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/strikeoutannotation/properties/fontcolor) – Farbe des Anmerkungstextes;
* [Deckkraft](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/areaannotation/properties/opacity) – ermöglicht das Festlegen der Deckkraft von Anmerkungen;
* [Punkte](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/strikeoutannotation/properties/points) – Annotationspositionen, die durch ein Array von Punkten festgelegt werden.
      





    





Befolgen Sie diese Schritte, um dem Dokument eine durchgestrichene Anmerkung hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziieren Sie das Objekt [StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/strikeoutannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/strikeoutannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf.

  


Der folgende Code zeigt, wie [StrikeoutAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/strikeoutannotation) zum Dokument hinzugefügt wird:


{{< gist "conholdate-docs-gists" "82d2c5875a844056c5868e140ce7ecc2" "add-strikeout-annotation.cs" >}}
    





## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    







