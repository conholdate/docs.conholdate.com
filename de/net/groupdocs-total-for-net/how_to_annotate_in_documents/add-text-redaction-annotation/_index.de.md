---
url: /de/add-text-redaction-annotation/
title: "Textschwärzungsanmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was eine Textschwärzungsannotation ist und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Textschwärzungsanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Textschwärzungsanmerkung hinzu"
type: docs
---

## So fügen Sie Textschwärzungsanmerkungen in C# hinzu

Die Annotation **Textschwärzung** füllt einen Teil des Textes mit einem schwarzen Rechteck (wird verwendet, wenn Sie Text ausblenden möchten), wie im Bild unten gezeigt.

![](https://docs.groupdocs.com/annotation/net/images/add-text-redaction-annotation.png)

Es besteht die Möglichkeit, die nächsten Eigenschaften für den Typ [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation) anzugeben

* [Punkte](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/textredactionannotation/properties/points) – Annotationspositionen, die durch ein Array von Punkten festgelegt werden.
    




Befolgen Sie diese Schritte, um dem Dokument Textschwärzungsanmerkungen hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziiere das Objekt [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/textredactionannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf.

Der folgende Code zeigt, wie [TextRedactionAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/textredactionannotation) zum Dokument hinzugefügt wird:

{{< gist "conholdate-docs-gists" "869d678ddebc36ff4e77ba7d7e23fe9a" "add-text-redaction-annotation.cs" >}}
    




## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    






