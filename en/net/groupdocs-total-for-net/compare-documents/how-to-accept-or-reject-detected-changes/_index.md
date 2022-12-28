---
title: "How to Accept or Reject Detected Changes"
description: "This article will explain how to accept or reject detected changes using GroupDocs.Comparison API which is a part of Conholdate.Total for .NET."
keywords: reject detected changes, reject detected changes in C#
type: docs
url: /net/how-to-accept-or-reject-detected-changes/
weight: 20
---
## How to Accept or Reject Detected Changes in C#

**[GroupDocs.Comparison for .NET](https://products.groupdocs.com/comparison/net)** (which is a part of Conholdate.Total for .NET) facilitates you to apply or discard specific changes between source and target documents and save resultant document with (or without) selected changes.  
The following are the steps to apply/reject changes to resultant document.

*   Instantiate [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) object with source document path or stream;
*   Call [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) method  and specify path target document path or stream;
*   Call [Compare](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/compare/index) method;
*   Call [GetChanges](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/getchanges/index) method and obtain detected changes list;
*   Set [ComparisonAction](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.result/changeinfo/properties/comparisonaction) of needed change object to [ComparisonAction.Accept](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.result/comparisonaction) or [ComparisonAction.Reject](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison.result/comparisonaction) value;
*   Call [ApplyChanges](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/applychanges/index) method and pass collection of changes to it.

[ApplyChangeOptions](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/applychangeoptions) class:

*   [Changes](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/applychangeoptions/properties/changes) - List of changes that must be applied (or not) to the resulting document;
*   [SaveOriginalState](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison.options/applychangeoptions/properties/saveoriginalstate) - Keep the original state of the compared result after applying changes.

The following example shows how to accept/reject detected changes.

## Accept or Reject changes for documents stored at local disk

```csharp
using (Comparer comparer = new Comparer("source.docx"))
{
    comparer.Add("target.docx");
    comparer.Compare();
    ChangeInfo[] changes = comparer.GetChanges();
    changes[0].ComparisonAction = ComparisonAction.Reject;
    comparer.ApplyChanges(File.Create("result.docx"), new SaveOptions(), new ApplyChangeOptions() { Changes = changes });
}
```

## Accept or Reject changes for documents provided as a stream

```csharp
using (Comparer comparer = new Comparer(File.OpenRead("source.docx")))
{
    comparer.Add(File.OpenRead("target.docx"));
    comparer.Compare(new SaveOptions(), new CompareOptions());
    ChangeInfo[] changes = comparer.GetChanges(new GetChangeOptions());
    changes[0].ComparisonAction = ComparisonAction.Reject;
    comparer.ApplyChanges(File.Create("result.docx"), new SaveOptions(), new ApplyChangeOptions() { Changes = changes });
}
```

## The following code sample shows how to accept/reject detected changes using SaveOriginalState option

```csharp
using (Comparer comparer = new Comparer("source.docx"))
{
    comparer.Add("target.docx");
    comparer.Compare();
    ChangeInfo[] changes = comparer.GetChanges();
    changes[0].ComparisonAction = ComparisonAction.Reject;
    comparer.ApplyChanges("resultWithRejectedChange.docx", new ApplyChangeOptions() { Changes = changes, SaveOriginalState = true });
    changes = comparer.GetChanges();
    changes[0].ComparisonAction = ComparisonAction.Accept;
    comparer.ApplyChanges("resultWithAcceptedChange.docx", new ApplyChangeOptions() { Changes = changes });
}
``` 







