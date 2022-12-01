---
title: Adding Watermark to Photos Java
second_title: Conholdate.Total for Java
articleTitle: Adding Watermark to Photos
linktitle: Adding Watermark to Photos
description: "A guide to learn adding watermark to photos in c# using GroupDocs.Watermark for Java which is part of Conholdate.Total for Java ."
keywords: adding watermark to photos, adding watermark, add watermark, Add watermark to photos or multi-framed images in Java
type: docs
url: /java/adding-watermark-to-photos/
weight: 30
---
## Add watermark to photos or multi-framed images in Java

GroupDocs.Watermark for Java which is a part of Conholdate.Total for Java, allows you to add watermark to photos or images. 

The following steps demonstrates how to add an [ImageWatermark](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.watermarks/ImageWatermark) to a document from a stream:

*   [Create](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#Watermarker(java.lang.String)) a watermarker for the file stream (line 4);
*   [Create](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.watermarks/ImageWatermark#ImageWatermark(java.lang.String)) an image watermark from the local image file (line 6);
*   Set the watermark [horizontal](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermark#setHorizontalAlignment(int)) and [vertical](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermark#setVerticalAlignment(int)) alignments (lines 7, 8);
*   [Add](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#add(com.groupdocs.watermark.Watermark)) the watermark to the document (line 9);
*   [Save](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#save(java.lang.String)) the document to the new file (line 11).
*   [Close](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.watermarks/ImageWatermark#close()) the watermark and free its resources (line 13);
*   [Close](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#close()) the watermarker and free its resources (line 14).

**Code Snippet**

```java
// Constants.InDocumentXlsx is an absolute or relative path to your document. Ex: "C:\\Docs\\document.xlsx" 
FileInputStream stream = new FileInputStream(Constants.InDocumentXlsx);                                     
                                                                                                            
Watermarker watermarker = new Watermarker(stream);                                                          
                                                                                                            
ImageWatermark watermark = new ImageWatermark(Constants.LogoPng);                                           
watermark.setHorizontalAlignment(HorizontalAlignment.Center);                                               
watermark.setVerticalAlignment(VerticalAlignment.Center);                                                   
watermarker.add(watermark);                                                                                 
                                                                                                            
watermarker.save(Constants.OutDocumentXlsx);                                                                
                                                                                                            
watermark.close();                                                                                          
watermarker.close();                                                                                      
stream.close();                                                                                             
```








