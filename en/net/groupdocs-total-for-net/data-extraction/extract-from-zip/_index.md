---
title: "Extract from ZIP or Attachments"
description: "This article explains how GroupDocs.Parser for .NET (which is a part of Conholdate.Total for .NET) extract data from ZIP file."
keywords: Extract from ZIP,extract data from ZIP, Extract from ZIP in C#
type: docs
url: /extract-from-zip/
weight: 70
---

## Extract from ZIP in C#

GroupDocs.Parser (which is a part of Conholdate.Total for .NET) allows you to extract documents from ZIP files and get attachments from containers simply call the [GetContainer](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser/methods/getcontainer) method.

```csharp
IEnumerable<ContainerItem> GetContainer()

```

This method returns a collection of [ContainerItem](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem) objects.

| Member | Description |
| --- | --- |
| [Name](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem/properties/name) | The name of the item. |
| [Directory](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem/properties/directory) | The directory of the item. |
| [FilePath](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem/properties/filepath) | The full path of the item. |
| [Size](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem/properties/size) | The size of the item in bytes. |
| [Metadata](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem/properties/metadata) | The collection of item metadata. |
| Stream [OpenStream()](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem/methods/openstream) | Opens the stream of the item content. |
| Parser [OpenParser()](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data/containeritem/methods/openparser) | Creates the Parser object for the item content. |
| Parser [OpenParser(LoadOptions)](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data.containeritem/openparser/methods/1) | Creates the Parser object for the item content with [LoadOptions](https://apireference.groupdocs.com/net/parser/groupdocs.parser.options/loadoptions). |
| Parser [OpenParser(LoadOptions, ParserSettings)](https://apireference.groupdocs.com/net/parser/groupdocs.parser.data.containeritem/openparser/methods/2) | Creates the Parser object for the item content with [LoadOptions](https://apireference.groupdocs.com/net/parser/groupdocs.parser.options/loadoptions) and [ParserSettings](https://apireference.groupdocs.com/net/parser/groupdocs.parser.options/parsersettings). |

Container means that both container-only files (like zip archives, outlook storage) and documents with attachments (like emails, PDF Portfolios).

Follow the steps below to extract an email text from outlook storage

*   Instantiate [Parser](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser) object for the initial document.
*   Call [GetContainer](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser/methods/getcontainer) method and obtain collection of document container item objects.
*   Check if *collection* isn't *null* (container extraction is supported for the document).
*   Iterate through the collection and obtain [Parser](https://apireference.groupdocs.com/net/parser/groupdocs.parser/parser) object to extract a text.

The following sample code shows how to extract a text from zip entities.


{{< gist "conholdate-docs-gists" "7cbce1a3a43e0499231b59427a842a93" "extract-from-zip.cs" >}}











