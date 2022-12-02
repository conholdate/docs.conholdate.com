---
title: Removing Watermark from Photo Java
second_title: Conholdate.Total for Java
articleTitle: Removing Watermark from Photo
linktitle: Removing Watermark from Photo
description: "A guide to learn removing watermark from photo in Java using GroupDocs.Watermark which is a part of Conholdate.Total for Java."
keywords: removing watermark from photo, remove watermark, watermark, remove watermark from photo in Java
type: docs
url: /java/removing-watermark-from-photo/
weight: 30
---

## Remove watermark

GroupDocs.Watermark Java API which is a part of Conholdate.Total for Java, enables you to easily find and remove a particular [watermark](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.search/PossibleWatermark) from a document. Following code serves this purpose.


```java
// Constants.InDocumentPdf is an absolute or relative path to your document. Ex: "C:\\Docs\\document.pdf"
Watermarker watermarker = new Watermarker(Constants.InDocumentPdf);                                      
                                                                                                         
PossibleWatermarkCollection possibleWatermarks = watermarker.search();                                   
                                                                                                         
// Remove possible watermark at the specified index from the document.                                   
possibleWatermarks.removeAt(0);                                                                          
                                                                                                         
// Remove specified possible watermark from the document.                                                
possibleWatermarks.remove(possibleWatermarks.get_Item(0));                                               
                                                                                                         
watermarker.save(Constants.OutDocumentPdf);                                                              
                                                                                                         
watermarker.close();                                                                                     
```

## Remove watermark with particular text formatting

GroupDocs.Watermark also enables you to search and remove the watermarks on the basis of some particular [text formatting](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.search/TextFormattingSearchCriteria). You can provide a search criterion containing [font name](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.search/TextFormattingSearchCriteria#setFontName(java.lang.String)), size, [color](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.search/TextFormattingSearchCriteria#setForegroundColorRange(com.groupdocs.watermark.search.ColorRange)) etc and the API will find the watermarks with matching properties. Following code snippet shows how to search and remove watermarks with a particular text formatting.

```java
// Constants.InDocumentPdf is an absolute or relative path to your document. Ex: "C:\\Docs\\document.pdf"
Watermarker watermarker = new Watermarker(Constants.InDocumentPdf);                                      
                                                                                                         
TextFormattingSearchCriteria criteria = new TextFormattingSearchCriteria();                              
criteria.setForegroundColorRange(new ColorRange());                                                      
criteria.getForegroundColorRange().setMinHue(-5);                                                        
criteria.getForegroundColorRange().setMaxHue(10);                                                        
criteria.getForegroundColorRange().setMinBrightness(0.01f);                                              
criteria.getForegroundColorRange().setMaxBrightness(0.99f);                                              
criteria.setBackgroundColorRange(new ColorRange());                                                      
criteria.getBackgroundColorRange().setEmpty(true);                                                       
criteria.setFontName("Arial");                                                                           
criteria.setMinFontSize(19);                                                                             
criteria.setMaxFontSize(42);                                                                             
criteria.setFontBold(true);                                                                              
                                                                                                         
PossibleWatermarkCollection watermarks = watermarker.search(criteria);                                   
watermarks.clear();                                                                                      
                                                                                                         
watermarker.save(Constants.OutDocumentPdf);                                                              
                                                                                                         
watermarker.close();                                                                                     
```

## Remove hyperlink watermarks 

GroupDocs.Watermark API allows you to search and remove [hyperlinks](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.search/HyperlinkPossibleWatermark) in a document of any supported format. Following code sample shows how to find and remove hyperlinks with a particular URL from a document.

```java
// Constants.InDocumentPdf is an absolute or relative path to your document. Ex: "C:\\Docs\\document.pdf"             
Watermarker watermarker = new Watermarker(Constants.InDocumentPdf);                                                   
                                                                                                                      
PossibleWatermarkCollection watermarks = watermarker.search(new TextSearchCriteria(Pattern.compile("someurl\\.com")));
for (int i = watermarks.getCount() - 1; i >= 0; i--)                                                                  
{                                                                                                                     
    // Ensure that only hyperlinks will be removed.                                                                   
    if (HyperlinkPossibleWatermark.class.isInstance(watermarks.get_Item(i)))                                          
    {                                                                                                                 
        // Output the full url of the hyperlink                                                                       
        System.out.println(watermarks.get_Item(i).getText());                                                         
                                                                                                                      
        // Remove hyperlink from the document                                                                         
        watermarks.removeAt(i);                                                                                       
    }                                                                                                                 
}                                                                                                                     
                                                                                                                      
watermarker.save(Constants.OutDocumentPdf);                                                                           
                                                                                                                      
watermarker.close();                                                                                                  
```








