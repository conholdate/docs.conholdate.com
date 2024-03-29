---
title: Redact Information in PDF Java
second_title: Conholdate.Total for Java
articleTitle: Redact Information in PDF
linktitle: Redact Information in PDF
description: "This article explains how GroupDocs.Redaction for Java (which is a part of Conholdate.Total for Java) Redact Information in PDF documents."
keywords: Redact Information in PDF,Redact Information in PDF using Java
type: docs
url: /java/redact-information-in-pdf/
weight: 70
---

## Redact Information in PDF using Java


GroupDocs.Redaction Java API (which is a part of Conholdate.Total for Java) allows developers to redact information in PDF Documents. 

### Use exact phrase redaction

In the example below, we apply textual redaction, replacing personal exact phrase "John Doe" with "\[personal\]" (or any exemption code):


```java
final Redactor redactor = new Redactor("sample.pdf");
try 
{
    redactor.apply(new ExactPhraseRedaction("John Doe", new ReplacementOptions("[personal]")));
    redactor.save();
}
finally { redactor.close(); }
```

By default, search for exact phase is case insensitive.For a case-sensitive redaction, there is a constructor parameter and corresponding public property:



```java
final Redactor redactor = new Redactor("sample.pdf");
try
{
    redactor.apply(new ExactPhraseRedaction("John Doe", true /*isCaseSensitive*/, new ReplacementOptions("[personal]")));
    redactor.save();
}
finally { redactor.close(); }
```

If you need a color box over the redacted text, you can use color instead of replacement string. The redaction will erase matched text and put a rectangle of the specified color in place of redacted text:



```java
final Redactor redactor = new Redactor("sample.pdf");
try
{
    redactor.apply(new ExactPhraseRedaction("John Doe", new ReplacementOptions(java.awt.Color.RED)));
    redactor.save();
}
finally { redactor.close(); }
```

### Use regular expression

Behind the scenes, "exact phrase" redaction works though regular expressions, which are the baseline approach for redaction. In the example below, we redact out any text, matching "2 digits, space or nothing, 2 digits, again space and 6 digits" with a blue color box:



```java
final Redactor redactor = new Redactor("sample.pdf");
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
