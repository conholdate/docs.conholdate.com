---
title: "Comparison of Variable or Document Properties"
description: "This article will explain how to compare variable or document properties using GroupDocs.Comparison API which is a part of Conholdate.Total for .NET."
keywords: compare variable or document properties, compare variable or document properties in C#
type: docs
url: /net/comparison-of-variable-or-document-properties/
weight: 20
---
## How to compare variable or document properties in C#

**[GroupDocs.Comparison for .NET](https://products.groupdocs.com/comparison/net)** (which is a part of Conholdate.Total for .NET) facilitate you to compare several properties of a WORD document such as *Variable*, *Built*, and *Custom* properties.

The following fields of the CompareOptions class are used to enable comparison functions for document properties:

*   [CompareVariableProperty](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/compareoptions/properties/comparevariableproperty) - to activate the comparison of *variable* properties;
*   [CompareDocumentProperty](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/compareoptions/properties/comparedocumentproperty) - to activate the comparison of *built* and *custom* properties.

Following are the steps to activate compare document properties:

*   Instantiate [Comparer](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison/comparer) object with source file path or stream;
*   Call [Add](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison/comparer/methods/add/index) method and specify target file path or stream;
*   Instantiate [CompareOptions](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/compareoptions) object and set [CompareVariableProperty](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/compareoptions/properties/comparevariableproperty) property to *true* ([CompareDocumentProperty](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/compareoptions/properties/comparedocumentproperty) to *true* for *built* and *custom* properties);
*   Call [Comparer](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison/comparer) method and pass [CompareOptions](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/compareoptions) object from previous step.

## Example code block to activate comparison of Variable, Built and Custom properties

---

```csharp
using (Comparer comparer = new Comparer(sourcePath))
{
    comparer.Add(targetPath);
    CompareOptions options = new CompareOptions();
    options.CompareVariableProperty = true; // to activate the comparison of variable properties
    options.CompareDocumentProperty = true; // to activate the comparison of built and custom properties
     
    comparer.Compare(resultPath, options);
}
```

## The result of comparing properties

---

The result of comparing properties is presented on a separate page - *Properties summary page*.

![](https://docs.groupdocs.com/comparison/net/images/properties-summary-page.png)

