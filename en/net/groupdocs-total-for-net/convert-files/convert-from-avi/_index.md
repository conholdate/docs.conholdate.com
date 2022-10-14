---
title: "Convert From AVI "
description: "This article explains how GroupDocs.Conversion for .NET (which is a part of Conholdate.Total for .NET) supports conversion of From AVI."
keywords: Convert From AVI, Convert From AVI in C#, AVI
type: docs
url: /convert-from-avi/
weight: 70
---

## Convert From AVI in C#

The [GroupDocs.Conversion](https://products.groupdocs.com/conversion/net) (which is a part of Conholdate.Total for .NET) allows you to easily convert your audio file into various other video file formats.

In order to allow video conversions, the Conholdate.Total's GroupDocs.Conversion provides an extended point to off-load actual video conversion to video processing library, in parallel it gives you the ease of conversion setup. The extension point is IVideoConnector interface.

First select an video processing library. Various libraries have different setup process.

The example given here is using FFMPEG. You can use Chocolatey to install FFMPG and all needed dependencies. To install FFmpeg with Cocolatey, you can run the following command in console:

```
choco install ffmpeg
```
You must implement IVideoConnector interface, when audio processing library will be installed. The FFMpegCore nuget package must be installed in your project, for this implementation. The code snippet below provides sample implementation:

{{< gist "conholdate-docs-gists" "69233f5726123f96641082806be8565a" "VideoConnector.cs" >}}

After implementation of IVideoConnector you can start conversion from AVI to other formats. For an instance, AVI to MP4 conversion code snippet will look like the following:

{{< gist "conholdate-docs-gists" "69233f5726123f96641082806be8565a" "avi-to-mp4.cs" >}}












