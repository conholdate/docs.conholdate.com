---
title: "比较法律文件"
description: "本文介绍了如何使用 GroupDocs.Comparison API（它是 Conholdate.Total for .NET 的一部分）来比较法律文件。"
keywords: "比较法律文件，比较 C# 中的法律文件"
type: docs
url: /zh/net/compare-legal-documents/
weight: 50
---

## 比较 C# 中的法律文件

Microsoft Word 比较功能可能不足以比较合同和法律文件。假设您需要自己的方式来实现比较逻辑，或者您正在开发自己的应用程序。 [**GroupDocs.Comparison**](https://products.groupdocs.com/comparison/net)（它是 Conholdate.Total for .NET 的一部分）能够以编程方式比较文档并管理发现的差异各种[支持的文件格式]的代码（https://docs.groupdocs.com/comparison/net/supported-document-formats/）。这是一个如何使用 GroupDocs.Comparsion API 比较两个合约的示例。您只需按照以下步骤操作

* 使用源文档路径或流实例化 [Comparer](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer) 对象。
* 调用 [Add](https://apireference.groupdocs.com/net/comparison/groupdocs.comparison/comparer/methods/add/index) 方法并指定目标文档路径或流。
* 调用 [比较](https://apireference.groupdocs.com/comparison/net/groupdocs.comparison/comparer/methods/compare) 方法。

假设您有两份 DOCX 格式的合同在不同年份签订（例如，2018 年和 2019 年）。现在您将比较一段时间后条件的变化情况。

| |文件 |
| --- | --- |
|源文件-2018年签订的合同| ![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_3.png) |
|目标文件-2019年签订的合同|![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_4.png)|

## 代码示例
这是用于比较两个合约的代码。

{{< gist "conholdate-docs-gists" "01e03338e930f4d1aa19e23242383c99" "compare-legal-documents.cs" >}}

结果，我们得到一个 DOCX 文件，其中删除的元素标记为<font color="red">**red**</font> ，添加的 - 标记为<font color="blue">**blue**</font> ，修改的 - 标记为<font color="green">**green**</font> 。

![](https://docs.groupdocs.com/comparison/net/images/how-to-compare-contracts-drafts-and-legal-documents_5.png)

有关更多详细信息，您可以访问 [本文](https://docs.groupdocs.com/comparison/net/how-to-compare-contracts-drafts-and-legal-documents/)。







