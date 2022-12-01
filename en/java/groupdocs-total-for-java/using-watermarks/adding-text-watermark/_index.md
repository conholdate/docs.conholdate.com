---
title: Adding Text Watermark Java
second_title: Conholdate.Total for Java
articleTitle: Adding Text Watermark
linktitle: Adding Text Watermark
description: "A guide to learn adding text watermark on document pages or images in Java using GroupDocs.Watermark which is part of Conholdate.Total for Java."
keywords: Adding Text Watermark, Text Watermark, Adding Text Watermark in Java
type: docs
url: /java/adding-text-watermark/
weight: 50
---

## Adding Text Watermark in Java

The GroupDocs.Watermark for Java which is a part of Conholdate.Total for Java allows you to add text watermarks on images or other documents. 

Follow the steps below to do the job:

*   [Create](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#Watermarker(java.lang.String)) a watermarker for the local file (line 2);
*   [Create](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.watermarks/TextWatermark#TextWatermark(java.lang.String,%20com.groupdocs.watermark.watermarks.Font)) a watermark with text and font (line 4);
*   Set the watermark [color](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.watermarks/TextWatermark#setForegroundColor(com.groupdocs.watermark.watermarks.Color)), [horizontal](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermark#setHorizontalAlignment(int)) and [vertical](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermark#setVerticalAlignment(int)) alignments (lines 5-7);
*   [Add](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#add(com.groupdocs.watermark.Watermark)) the watermark to the document (line 9);
*   [Save](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#save(java.lang.String)) the document to the new file (line 10).
*   [Close](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#close()) the watermarker and free its resources (line 12).

Please note, if the document consists of multiple parts such as pages, worksheets, slides, frames etc, the watermark will be added to all of them.

Code snippet below demonstrates how to add text watermark to a document. 

```java
// Constants.InDocumentPdf is an absolute or relative path to your document. Ex: "C:\\Docs\\document.pdf"
Watermarker watermarker = new Watermarker(Constants.InDocumentPdf);                                      
                                                                                                         
TextWatermark watermark = new TextWatermark("top secret", new Font("Arial", 36));                        
watermark.setForegroundColor(Color.getRed());                                                            
watermark.setHorizontalAlignment(HorizontalAlignment.Center);                                            
watermark.setVerticalAlignment(VerticalAlignment.Center);                                                
                                                                                                         
watermarker.add(watermark);                                                                              
watermarker.save(Constants.OutDocumentPdf);                                                              
                                                                                                         
watermarker.close();                                                                                   
```





