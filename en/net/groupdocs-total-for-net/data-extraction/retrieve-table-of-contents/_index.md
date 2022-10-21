---
title: "Retrieve Table of Contents"
description: "This article explains how GroupDocs.Parser for .NET (which is a part of Conholdate.Total for .NET) retrieve table of contents from file."
keywords: Table of Contents,Retrieve Table of Contents, Retrieve Table of Contents in C#
type: docs
url: /retrieve-table-of-contents/
weight: 70
---

## Retrieve Table of Contents in C#

GroupDocs.Parser (which is a part of Conholdate.Total for .NET) allows you to extract table of contents from PDF documents, Ebooks and Microsoft Word (DOC, DOCX etc).

To extract TOC you need to use [GetToc](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser/methods/gettoc) method.

```csharp
IEnumerable<TocItem> GetToc()

```

[TocItem](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/tocitem) class has the following members.

| Member | Description |
| --- | --- |
| [Depth](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/tocitem/properties/depth) | The depth level. |
| [PageIndex](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/tocitem/properties/pageindex) | The page index. |
| [Text](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/tocitem/properties/text) | The text. |
| TextReader [ExtractText()](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/tocitem/methods/extracttext) | Extract a text from the document to which [TocItem](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/tocitem) object refers. For detail|

Follow the steps below to retrieve table of contents from the document.

*   Instantiate [Parser](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser) object for the initial document.
*   Call [GetToc](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser/methods/gettoc) method and obtain collection of [TocItem](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/tocitem) objects.
*   Check if *collection* isn't *null* (table of contents  extraction is supported for the document).
*   Iterate through the collection and get page index to extract a page text from the document.

See the following example which shows how to extract table of contents from CHM file.


{{< gist "conholdate-docs-gists" "ffe75c341b0c907513d8ae08f6d4d3d2" "retrieve-table-of-contents.cs" >}}











