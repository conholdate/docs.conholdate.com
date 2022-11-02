---
title: "删除元数据"
description: "本文介绍如何在不应用任何过滤器的情况下清除所有或删除元数据属性。你可以这样做是使用 Sanitize 方法。"
keywords: "删除元数据"
type: docs
url: /zh/net/remove-metadata/
weight: 40
---

## 从文件中删除所有已识别的元数据属性

有时您可能只需要删除所有或清除元数据属性而不应用任何过滤器。最好的方法是使用 [Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize) 方法。

此示例演示如何删除所有检测到的元数据包/属性。

1.加载文件
2.调用[Sanitize](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/sanitize)方法
3.检查删除的包/属性的实际数量
4. 保存更改

**例子**

{{< gist "conholdate-docs-gists" "84c24a9c9dba1c15d7a43d439887f9fa" "remove-metadata.cs" >}}

结果，我们得到了原始文件的净化版本。







