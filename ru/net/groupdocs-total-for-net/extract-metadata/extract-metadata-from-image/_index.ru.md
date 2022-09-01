---
title: "Извлечь метаданные из изображения"
description: "В этой статье показано, как легко можно извлечь метаданные из изображения с помощью C#."
keywords: "извлечь метаданные из изображения"
type: docs
url: /ru/extract-metadata-from-image/
weight: 20
---

## Извлечение общей информации об изображении

API GroupDocs.Metadata позволяет извлекать общие свойства изображения, такие как ширина и высота, тип MIME, порядок байтов и т. д., для всех поддерживаемых форматов изображений. Фрагмент кода приведен ниже для получения дополнительной информации об этой полезной функции.

1. Загрузите изображение
2. Извлеките корневой пакет метаданных
3. Используйте свойство FileType для получения информации о формате файла.

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

## Дополнительные ресурсы
### Примеры GitHub
Вы можете легко запустить приведенный выше код и увидеть функцию в действии в наших примерах GitHub:
* [GroupDocs.Metadata для примеров .NET] (https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-.NET)
* [GroupDocs.Metadata для примеров Java] (https://github.com/groupdocs-metadata/GroupDocs.Metadata-for-Java)

### Бесплатное онлайн-приложение для управления метаданными документов
Наряду с полнофункциональной библиотекой .NET мы предоставляем простые, но мощные бесплатные приложения.
Вы можете просматривать и редактировать метаданные PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, сообщения электронной почты, изображения и многое другое с помощью нашего бесплатного онлайн-приложения [Бесплатное онлайн-приложение для просмотра и редактирования метаданных документов] (https://products.groupdocs .app/метаданные).



