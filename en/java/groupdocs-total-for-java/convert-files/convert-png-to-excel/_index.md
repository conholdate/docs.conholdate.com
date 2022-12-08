---
title: Convert PNG to Excel Java
second_title: Conholdate.Total for Java
articleTitle: Convert PNG to Excel
linktitle: Convert PNG to Excel
title: "Convert PNG to Excel"
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports PNG conversion to Excel."
keywords: Convert PNG to Excel, Convert PNG to Excel in Java, PNG to Excel
type: docs
url: /java/convert-png-to-excel/
weight: 70
---

## Convert PNG to Excel in Java

If you need to get data from your previous tax returns or any other image statistical data into Excel and you only have printed copies just scan that documents and save them in PNG format or take a picture of each one and convert these images into XLS/XLSX workbook.

```java
// Load the source PNG  file
Converter converter = new Converter("sample.png");
SpreadsheetConvertOptions options = new SpreadsheetConvertOptions();
// Save converted XLS file
converter.convert("png-converted-to.xlsx", options);
```











