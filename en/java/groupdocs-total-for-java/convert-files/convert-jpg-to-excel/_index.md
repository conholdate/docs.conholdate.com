---
title: Convert JPG to Excel Java
second_title: Conholdate.Total for Java
articleTitle: Convert JPG to Excel
linktitle: Convert JPG to Excel
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports JPG conversion to Excel."
keywords: Convert JPG to Excel, Convert JPG to Excel in Java, JPG to Excel
type: docs
url: /java/convert-jpg-to-excel/
weight: 70
---

## Convert JPG to Excel in Java

If you need to get data from your previous tax returns or any other image statistical data into Excel and you only have printed copies just scan that documents or take a picture of each one and convert these images into XLS/XLSX workbook.

```java
// Load the source JPG file
Converter converter = new Converter("sample.jpg");
SpreadsheetConvertOptions options = new SpreadsheetConvertOptions();
// Save converted XLS file
converter.convert("jpg-converted-to.xlsx", options);











