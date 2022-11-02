---
title: "设置元数据属性"
description: "本文展示了用于更新或添加元数据的 SetProperties 方法的用法。"
keywords: "设置元数据"
type: docs
url: /zh/net/set-metadata-properties/
weight: 50
---

## 更新或添加满足谓词的元数据属性

[SetProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/setproperties) 用于更新或添加元数据。您可以轻松地将元数据添加到照片、pdf，或者您可以更新或添加数据到 mp3 文件。此代码示例实际上结合了两个操作：添加和更新。如果现有属性满足指定的谓词，则更新其值。如果元数据包中缺少满足谓词的已知属性，则将其添加到适当的包中。

下面的代码片段演示了 [SetProperties](https://apireference.groupdocs.com/net/metadata/groupdocs.metadata/metadata/methods/setproperties) 方法的基本使用场景。

1. 打开一个文档
2. 指定将用于添加/更新元数据属性的谓词
3. 指定要添加到文件中现有元数据包的值
4.查看实际添加/更新属性的数量
5. 保存更改


**例子**

{{< gist "conholdate-docs-gists" "f68231657baf755e3160b5c2298e69ca" "set-metadata.cs" >}}

因此，我们更新了所有包含文档创建/更新日期的现有元数据属性。如果元数据包不包含此类属性，但它们应该在其结构中，则添加它们。







