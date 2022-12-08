---
title: Convert Excel to PowerPoint Java
second_title: Conholdate.Total for Java
articleTitle: Convert Excel to PowerPoint
linktitle: Convert Excel to PowerPoint
description: "This article explains how GroupDocs.Conversion for Java (which is a part of Conholdate.Total for Java) supports Excel conversion to PowerPoint."
keywords: Convert Excel to PowerPoint, Convert Excel to PowerPoint in Java, Excel to PowerPoint
type: docs
url: /java/convert-excel-to-powerpoint/
weight: 70
---

## Convert Excel to PowerPoint in Java

GroupDocs.Conversion (which is a part of Conholdate.Total for Java) library supports such Excel to PowerPoint transformations when spreadsheets of a workbook are converted to presentation slides.  

Likewise other conversions you may select the desired presentation file format by specifying the Format property of the [PresentationConvertOptions](https://apireference.groupdocs.com/java/conversion/com.groupdocs.conversion.options.convert/PresentationConvertOptions) class. PPTX is the default format for presentations and in case of converting to PPTX Format property may not be set.  

Following code snippet demonstrates how to convert XLSX to PPTX using Java language:  


```java
Converter converter = new Converter("sample.xlsx");
PresentationConvertOptions options = new PresentationConvertOptions();
converter.convert("converted.pptx", options);
```











