---
title: Annotation Redaction Java
second_title: Conholdate.Total for Java
articleTitle: Annotation Redaction
linktitle: Annotation Redaction
description: "This article explains how GroupDocs.Redaction for Java (which is a part of Conholdate.Total for Java) perform annotation redaction."
keywords: Annotation Redaction, Annotation Redaction in Java
type: docs
url: /java/annotation-redaction/
weight: 70
---

## Annotation Redaction in Java

With GroupDocs.Redaction(which is a part of Conholdate.Total for .NET) you can apply annotation redactions for documents of different formats like PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and others.

This Java API provides a flexible API that allows to remove sensitive data from annotation text, or completely remove annotations by a regular expression.

## Remove annotations in Java (comments etc)

You can remove all or specific comments and other annotations from the document. For example, we can remove all comments from the document, containing texts like "use", "show" or "describe" in its body:

**Java**

```java
final Redactor redactor = new Redactor("annotated_sample.xlsx");
try 
{
    redactor.apply(new DeleteAnnotationRedaction("(?im:(use|show|describe))"));
    SaveOptions options = new  SaveOptions();
    options.setAddSuffix(true);
    options.setRasterizeToPDF(false);
    redactor.save(options);
}
finally { redactor.close(); }
```

Use constructor without arguments to remove all annotations within the document.

## Redact annotations in Java

Instead of removing all or specific annotations, you can remove sensitive data from the annotation text. For instance, we can remove all mentions of "John" in the given document, e.g.:

**Java**

```java
final Redactor redactor = new Redactor("annotated_sample.xlsx");
try 
{
    redactor.apply(new AnnotationRedaction("(?im:john)", "[redacted]"));
    SaveOptions options = new  SaveOptions();
    options.setAddSuffix(true);
    options.setRasterizeToPDF(false);
    redactor.save(options);
}
finally { redactor.close(); }
```












