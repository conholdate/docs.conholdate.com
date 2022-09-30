---
url: /add-replacement-annotation/
title: "Ersatzanmerkung hinzufügen"
weight: 3
description: "Erfahren Sie, was eine Ersatzannotation ist und wie Sie sie mithilfe der GroupDocs.Annotation-API, die Teil von Conholdate.Total für .NET ist, programmgesteuert zu einem Dokument hinzufügen."
keywords: "Was ist eine Ersatzanmerkung, wie fügt man eine Anmerkung hinzu, fügt eine Ersatzanmerkung hinzu"
type: docs
---

## So fügen Sie eine Ersatzanmerkung in C# hinzu

Die Annotation **Replacement** ersetzt den Originaltext durch ein anderes bereitgestelltes Textfragment. Bitte überprüfen Sie das Bild unten, um zu erfahren, wie die Ersatzanmerkung aussehen kann.

![](https://docs.groupdocs.com/annotation/net/images/add-replacement-annotation.png)

Es besteht die Möglichkeit, die nächsten Eigenschaften für den Typ [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) anzugeben:

* [FontColor](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/fontcolor) – Farbe des Anmerkungstextes;
* [Deckkraft](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/opacity) \- ermöglicht das Festlegen der Deckkraft von Anmerkungen;
* [Punkte](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/points) – Annotationspositionen, die durch ein Array von Punkten festgelegt werden;
* [TextToReplace](https://apireference.groupdocs.com/annotation/net/groupdocs.annotation.models.annotationmodels/replacementannotation/properties/texttoreplace) – Text, der ersetzt wird
 

Befolgen Sie diese Schritte, um dem Dokument eine Ersatzanmerkung hinzuzufügen:

* Instanziiere das Objekt [Annotator](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator) mit dem Pfad oder Stream des Eingabedokuments;
* Instanziiere das Objekt [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) mit den gewünschten Eigenschaften (Position, Seitenzahl usw.);
* Rufen Sie die Methode [Add](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/add) auf und übergeben Sie [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation /groupdocs.annotation.models.annotationmodels/replacementannotation) Objekt;
* Rufen Sie die Methode [Save](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation/annotator/methods/save/index) mit dem resultierenden Dokumentpfad oder Stream auf;

Der folgende Code zeigt, wie [ReplacementAnnotation](https://apireference.groupdocs.com/net/annotation/groupdocs.annotation.models.annotationmodels/replacementannotation) zum Dokument hinzugefügt wird:


{{< gist "conholdate-docs-gists" "75b019e25bd99928d7c09b2a62c0ae72" "add-replacement-annotation.cs" >}}
    



## Mehr Ressourcen
### GitHub-Beispiele
Sie können den obigen Code einfach ausführen und die Funktion in unseren GitHub-Beispielen in Aktion sehen:

* [GroupDocs.Annotation für .NET-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET)
* [GroupDocs.Annotation für Java-Beispiele, Plugins und Showcase](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java)
* [Dokumentanmerkung für .NET MVC-UI-Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-MVC)
* [Dokumentanmerkung für .NET App WebForms UI Modernes Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-.NET-WebForms)
* [Dokumentanmerkung für Java App Dropwizard UI Modern Example](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Dropwizard)
* [Dokumentanmerkung für Java Spring UI Beispiel](https://github.com/groupdocs-annotation/GroupDocs.Annotation-for-Java-Spring)
    





