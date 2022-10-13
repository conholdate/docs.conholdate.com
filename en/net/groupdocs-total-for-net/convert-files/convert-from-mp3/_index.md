---
title: "Convert From MP3 "
description: "This article explains how GroupDocs.Conversion for .NET (which is a part of Conholdate.Total for .NET) supports conversion of From MP3."
keywords: Convert From MP3, Convert From MP3 in C#, MP3
type: docs
url: /convert-from-mp3/
weight: 70
---

## Convert From MP3 in C#

The [GroupDocs.Conversion](https://products.groupdocs.com/conversion/net) (which is a part of Conholdate.Total for .NET) allows you to easily convert your audio file into various other audio file formats.

In order to allow audio conversions, the Conholdate.Total's GroupDocs.Conversion provides an extended point to off-load actual audio conversion to audio processing library, in parallel it gives you the ease of conversion setup. The extension point is IAudioConnector interface.

First select an audio processing library. Various libraries have different setup process.

The example given here is using FFMPEG. You can use Chocolatey to install FFMPG and all needed dependencies. To install FFmpeg with Cocolatey, you can run the following command in console:

```
choco install ffmpeg
```
You must implement IAudioConnector interface, when audio processing library will be installed. The FFMpegCore nuget package must be installed in your project, for this implementation. The code snippet below provides sample implementation:

{{< gist "conholdate-docs-gists" "1b294837ec1f35350d24301aed9cff17" "AudioConnector.cs" >}}

After implementation of IAudioConnector you can start conversion from mp3 to other formats. For an instance, MP3 to FLAC conversion code snippet will look like the following:

{{< gist "conholdate-docs-gists" "1b294837ec1f35350d24301aed9cff17" "mp3-to-flac.cs" >}}












