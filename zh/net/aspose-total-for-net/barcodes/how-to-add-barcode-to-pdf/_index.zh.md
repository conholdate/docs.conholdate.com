---
title: "如何在 C# 中将条形码添加到 PDF"
second_title: ".NET 的 Conholdate.Total"
articleTitle: "如何将条形码添加到 PDF"
linktitle: "如何将条形码添加到 PDF"
type: docs
url: /how-to-add-barcode-to-pdf/
description: "在 C# 中创建一个条形码并将其添加到 PDF。"
keywords: "创建条形码 c#, 创建 PDF c#, 将条形码添加到 PDf c#, .NET 创建条形码, .NET 创建 PDF, .NET 将条形码添加到 PDf"
weight: 10
---

PDF 是许多组织中用于生成报告或任何官方文件的流行媒介。 [Aspose.PDF](https://products.aspose.com/pdf/net) 是 Conholdate.Total 的一部分，用于 .NET 在 .NET 中生成 PDF 文档。通过将 Aspose.BarCode 与 Aspose.PDF 集成，可以轻松地将条形码添加到 PDF。本文简要介绍了如何将高质量的条形码图像添加到 PDF 中。
## **在 C# 中创建条形码**
要创建条形码，请按照以下简单步骤操作：

- 创建 BarcodeGenerator 类的对象。
- 使用 BarcodeGenerator 对象的 CodeText 属性设置文本。
- 从 EncodeTypes 枚举中设置条形码类型（以 Code128 为例）。

以下代码详细显示了这些步骤。

```

```
## **将条形码保存到 MemoryStream**
生成条形码后（在第一步中），可以将其保存到 MemoryStream 中，如下面的代码所示。

```

```
## **在 C#.NET 中创建 PDF 并添加条形码 iamge**
条形码图像被保存到 MemoryStream 中，因此我们现在可以创建一个 PDF 并向其添加条形码，如下面的步骤所示。

- 通过创建 Aspose.Pdf.Document 类的对象来创建 PDF。
- 向 PDF 添加新页面
- 使用 Aspose.Pdf.Facades.PdfFileMend 类对象将图像添加到 PDF

以下代码详细显示了这些步骤

```

```

