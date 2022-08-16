---
title: "从图像中提取元数据"
description: "本文演示了使用 c# 从图像中提取元数据是多么容易。"
keywords: "从图像中提取元数据"
type: docs
url: /extract-metadata-from-image/
weight: 20
---

## 提取公共图像信息

GroupDocs.Metadata API 允许为所有支持的图像格式提取常见的图像属性，例如宽度和高度、MIME 类型、字节顺序等。下面给出了代码片段，以获取有关此有用功能的更多信息。

1.加载图像
2.提取根元数据包
3.使用FileType属性获取文件格式信息

**AdvancedUsage.ManagingMetadataForSpecificFormats.Image.ImageReadFileFormatProperties**

```csharp
using (Metadata metadata = new Metadata(Constants.InputPng))
{
	var root = metadata.GetRootPackage<ImageRootPackage>();

	Console.WriteLine(root.FileType.FileFormat);
	Console.WriteLine(root.FileType.ByteOrder);
	Console.WriteLine(root.FileType.MimeType);
	Console.WriteLine(root.FileType.Extension);
	Console.WriteLine(root.FileType.Width);
	Console.WriteLine(root.FileType.Height);
}
```

## 更多资源
### GitHub 示例
您可以轻松运行上面的代码，并在我们的 GitHub 示例中查看该功能的实际效果：
* [用于 .NET 示例的 GroupDocs.Metadata](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-.NET)
* [GroupDocs.Metadata for Java 示例](https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Java)

### 免费在线文档元数据管理应用
除了功能齐全的 .NET 库，我们还提供简单但功能强大的免费应用程序。
欢迎您使用我们的免费在线[免费在线文档元数据查看和编辑应用程序](https://products.groupdocs)查看和编辑 PDF、DOC、DOCX、PPT、PPTX、XLS、XLSX、电子邮件、图像等的元数据.app/元数据）。



