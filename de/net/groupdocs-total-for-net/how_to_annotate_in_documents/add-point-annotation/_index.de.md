---
url: /de/net/add-point-annotation/
title: "Punktbeschriftung hinzufügen"
weight: 3
description: "Erfahren Sie, was eine Point-Annotation ist und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Punktanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Punktanmerkung hinzu"
type: docs
---

## So fügen Sie Punktanmerkungen in C# hinzu

Die **Punkt**-Anmerkung klebt Kommentare an einen beliebigen Punkt in einem Dokument, wie im Bild unten gezeigt.

![](annotation/net/images/add-point-annotation.png)

Die Anmerkungs-API, die Teil von Conholdate.Total für .NET ist, bietet die Möglichkeit, die nächsten Eigenschaften für [PointAnnotation] (https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation ) Typ:

* [Box](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/pointannotation/properties/box) – definiert die Anmerkungsposition auf der Dokumentseite;
    



Befolgen Sie diese Schritte, um dem Dokument eine Punktanmerkung hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziiere das Objekt [PointAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [PointAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/pointannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf.

Der folgende Code zeigt, wie [PointAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/pointannotation) zum Dokument hinzugefügt wird:

{{< gist "conholdate-docs-gists" "9ae598ce1d98541ca1804c042160531a" "add-point-annotation.cs" >}}

## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





