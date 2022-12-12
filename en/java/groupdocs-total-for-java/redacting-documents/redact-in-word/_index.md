---
title: Redact in Word Java
second_title: Conholdate.Total for Java
articleTitle: Redact in Word
linktitle: Redact in Word
description: "This article explains how GroupDocs.Redaction for Java (which is a part of Conholdate.Total for Java) redact in Word documents."
keywords: Redact in Word, Extract from ZIP in Java, redact
type: docs
url: /java/redact-in-word/
weight: 70
---

## Redact in Word using Java


GroupDocs.Redaction(which is a part of Conholdate.Total for Java) allows developers to redact data of sensitive or private nature from your documents in an easy way. The well known redaction case is to remove a text from a document.

With GroupDocs.Redaction Java API you can do text redaction using exact phrase or [regular expression](https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions) for documents of different formats like PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and others. See full list at [supported document formats](https://docs.groupdocs.com/redaction/java/supported-document-formats/) article.

## Use exact phrase redaction in Java

In the example below, we apply textual redaction, replacing personal exact phrase "John Doe" with "\[personal\]" (or any exemption code):



```java
final Redactor redactor = new Redactor("sample.docx");
try 
{
    redactor.apply(new ExactPhraseRedaction("John Doe", new ReplacementOptions("[personal]")));
    redactor.save();
}
finally { redactor.close(); }
```

By default, search for exact phase is case insensitive.For a case-sensitive redaction, there is a constructor parameter and corresponding public property:



```java
final Redactor redactor = new Redactor("sample.docx");
try
{
    redactor.apply(new ExactPhraseRedaction("John Doe", true /*isCaseSensitive*/, new ReplacementOptions("[personal]")));
    redactor.save();
}
finally { redactor.close(); }
```

If you need a color box over the redacted text, you can use color instead of replacement string. The redaction will erase matched text and put a rectangle of the specified color in place of redacted text:



```java
final Redactor redactor = new Redactor("sample.docx");
try
{
    redactor.apply(new ExactPhraseRedaction("John Doe", new ReplacementOptions(java.awt.Color.RED)));
    redactor.save();
}
finally { redactor.close(); }
```

### Use regular expression in Java

Behind the scenes, "exact phrase" redaction works though regular expressions, which are the baseline approach for redaction. In the example below, we redact out any text, matching "2 digits, space or nothing, 2 digits, again space and 6 digits" with a blue color box:



```java
final Redactor redactor = new Redactor("sample.docx");
try
{
    redactor.apply(new RegexRedaction("\\d{2}\\s*\\d{2}[^\\d]*\\d{6}", new ReplacementOptions(java.awt.Color.BLUE)));
    SaveOptions saveOptions = new SaveOptions();
    saveOptions.setAddSuffix(true);
    saveOptions.setRasterizeToPDF(false);
    redactor.save(saveOptions);
}
finally { redactor.close(); }
```
