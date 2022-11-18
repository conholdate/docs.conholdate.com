---
title: "Metadata Redaction"
description: "This article explains how GroupDocs.Redaction for .NET (which is a part of Conholdate.Total for .NET) perform metadata redaction."
keywords: metadata Redaction, metadata Redaction in C#
type: docs
url: /net/metadata-redaction/
weight: 70
---

## Metadata Redaction in C#


GroupDocs.Redaction(which is a part of Conholdate.Total for .NET) allows you to apply metadata redactions for documents of various formats like PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX and others.

It provides a flexible API that enables you to replace or remove metadata using filters or search by regular expression.

## Filter metadata

Base functionality for all redactions, derived from [MetadataRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/metadataredaction) base class is *metadata filtering* and it is mandatory for metadata redactions. It uses flagged enumeration [MetadataFilters](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/metadatafilters), containing items for most frequent metadata entries. You can set the filter to *All*, or any combination of metadata. For instance, the example below sets filter to *Author*, *Manager* and *NameOfApplication* - for textual redaction or cleaning them out:

**C#**

```csharp
// redaction derived from MetadataRedaction
redaction.Filter = MetadataFilters.Author | MetadataFilters.Manager | MetadataFilters.NameOfApplication;
```

Following is the table with full list of [MetadataFilters](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/metadatafilters) items:

| Filter | Numeric value | Description |
| --- | --- | --- |
| *None* | 0 | Empty filter setting, matches no metadata items |
| *Author* | 1 | Author of the document |
| *Category* | 2 | Category of the document |
| *Comments* | 4 | Document comment |
| *Company* | 8 | Company of the Author |
| *ContentStatus* | 16 | Content status |
| *CreatedTime* | 32 | Created time |
| *HyperlinkBase* | 64 | Hyperlink base |
| *LastPrinted* | 128 | Last printed date and time |
| *LastSavedBy* | 256 | Last saved by user |
| *LastSavedTime* | 1024 | Last saved date and time |
| *NameOfApplication* | 2048 | Name of application where the document was created |
| *Manager* | 4096 | Author's manager name |
| *RevisionNumber* | 8192 | Revision number |
| *Subject* | 16384 | Subject of the document |
| *Template* | 32768 | Document template name |
| *Title* | 65536 | Document title |
| *TotalEditingTime* | 131072 | Total editing time |
| *Version* | 262144 | Document's version |
| *Description* | 524288 | Document's description |
| *Keywords* | 1048576 | Document's keywords |
| *ContentType* | 2097152 | Content type |
| *All* | 2147483647 | All types of the metadata items |

## Clean metadata

Allows you to replace all or specific metadata in the document with empty (blank or minimal) values using [EraseMetadataRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/erasemetadataredaction) class. The example below blanks out all properties of the document:

**C#**

```csharp
using (Redactor redactor = new Redactor(@"C:\sample.docx"))
{
   redactor.Apply(new EraseMetadataRedaction(MetadataFilters.All));

   redactor.Save();
}
```

You can specify [MetadataFilter.All](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/metadatafilters) or use default constructor to blank out all metadata within given document, Custom - to clear all custom metadata entries.

## Redact metadata

You can use [MetadataSearchRedaction](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/metadatasearchredaction) to remove sensitive data from document's metadata using regular expressions. For instance, we can remove any mention of "Company Ltd.":

**C#**

```csharp
using (Redactor redactor = new Redactor(@"C:\sample.docx"))
{
   redactor.Apply(new MetadataSearchRedaction("Company Ltd.", "--company--"));

   redactor.Save();
}
```

First argument is regular expression, second is a replacement string. You can also set scope for redaction by setting filter, e.g. to [MetadataFilter.Company](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction.redactions/metadatafilters). - it will leave the regular expressions matches undone in all metadata items, except "Company" property:

**C#**

```csharp
using (Redactor redactor = new Redactor(@"C:\sample.docx"))
{
   MetadataSearchRedaction redaction = new MetadataSearchRedaction("Company Ltd.", "--company--");
   redaction.Filter = MetadataFilters.Company;
   redactor.Apply(redaction);
   redactor.Save();
}
```

## Metadata redaction status

All metadata redactions apply to each metadata item separately, and even if metadata item redaction fails, the rest of the metadata items will be updated. You can find a list of failed, skipped (rejected) metadata items and reasons for that in [ErrorMessage](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redactionresult/properties/errormessage) property of [RedactorLogEntry.Result](https://apireference.groupdocs.com/net/redaction/groupdocs.redaction/redactorlogentry/properties/result).  
 












