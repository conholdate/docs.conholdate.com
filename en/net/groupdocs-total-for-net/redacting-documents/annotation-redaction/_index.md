---
title: "Annotation Redaction"
description: "This article explains how GroupDocs.Redaction for .NET (which is a part of Conholdate.Total for .NET) perform annotation redaction."
keywords: Annotation Redaction, Annotation Redaction in C#
type: docs
url: /net/annotation-redaction/
weight: 70
---

## Annotation Redaction in C#

With GroupDocs.Redaction(which is a part of Conholdate.Total for .NET) you can apply annotation redactions for documents of different formats like PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and others.

This API provides a flexible API that allows to remove sensitive data from annotation text, or completely remove annotations by a regular expression.

## Remove annotations (comments etc)

You can remove all or specific comments and other annotations from the document. For example, we can remove all comments from the document, containing texts like "use", "show" or "describe" in its body:

**C#**

```csharp
using (Redactor redactor = new Redactor(@"D:\test.docx"))
{
   redactor.Apply(new DeleteAnnotationRedaction("(?im:(use|show|describe))"));

   redactor.Save()
}
```

Use constructor without arguments to remove all annotations within the document.

## Redact annotations

Instead of removing all or specific annotations, you can remove sensitive data from the annotation text. For instance, we can remove all mentions of "John" in the given document, e.g.:

**C#**

```csharp
using (Redactor redactor = new Redactor(@"C:\test.pdf"))
{
   redactor.Apply(new AnnotationRedaction("(?im:john)", "[redacted]"));

   redactor.Save()
}
```












