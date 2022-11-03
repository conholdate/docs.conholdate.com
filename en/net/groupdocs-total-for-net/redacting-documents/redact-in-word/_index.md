---
title: "Redact in Word"
description: "This article explains how GroupDocs.Redaction for .NET (which is a part of Conholdate.Total for .NET) redact in Word documents."
keywords: Redact in Word, Extract from ZIP in C#, redact
type: docs
url: /net/redact-in-word/
weight: 70
---

## Redact in Word using C#


GroupDocs.Redaction(which is a part of Conholdate.Total for .NET) allows developers to redact data of sensitive or private nature from your documents in an easy way. The well known redaction case is to remove a text from a document.

With GroupDocs.Redaction API you can do text redaction using exact phrase or [regular expression](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions) for documents of different formats like PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and others. See full list at [supported document formats](https://docs.groupdocs.com/redaction/net/supported-document-formats/) article.

## Use exact phrase redaction

The example below shows textual redaction, replacing personal exact phrase "John Doe" with "\[personal\]" (or any exemption code):

**C#**

```csharp
using (Redactor redactor = new Redactor(@"sample.docx"))
{
  redactor.Apply(new ExactPhraseRedaction("John Doe", new ReplacementOptions("[personal]")));
  redactor.Save();
}
```

By default, search for exact phase is case insensitive.For a case-sensitive redaction, there is a constructor parameter and corresponding public property:

**C#**

```csharp
using (Redactor redactor = new Redactor(@"sample.docx"))
{
  redactor.Apply(new ExactPhraseRedaction("John Doe", true /*isCaseSensitive*/, new ReplacementOptions("[personal]")));
  redactor.Save();
}
```

If you need a color box over the redacted text, you can use color instead of replacement string. The redaction will erase matched text and put a rectangle of the specified color in place of redacted text:

**C#**

```csharp
using (Redactor redactor = new Redactor(@"sample.docx"))
{
  redactor.Apply(new ExactPhraseRedaction("John Doe", new ReplacementOptions(System.Drawing.Color.Black)));
  redactor.Save();
}
```

## Use regular expression

Behind the scenes, "exact phrase" redaction works though regular expressions, which are the baseline approach for redaction. In the example below, we redact out any text, matching "2 digits, space or nothing, 2 digits, again space and 6 digits" with a blue color box:

**C#**

```csharp
using (Redactor redactor = new Redactor(@"sample.docx"))
{
  redactor.Apply(new RegexRedaction("\\d{2}\\s*\\d{2}[^\\d]*\\d{6}", new ReplacementOptions(System.Drawing.Color.Blue)));
  redactor.Save();
}
```












