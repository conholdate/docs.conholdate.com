---
title: Add Watermarks to Diagrams Java
second_title: Conholdate.Total for Java
articleTitle: Add Watermarks to Diagrams
linktitle: Add Watermarks to Diagrams
description: "A guide to learn adding watermark to diagrams documents (such as .vsdx) in Java using GroupDocs.Watermark for Java which is a part of Conholdate.Total for Java."
keywords: Add Watermarks to Diagrams, adding watermark to diagrams documents in Java
type: docs
url: /java/add-watermarks-to-diagrams/
weight: 80
---

## Adding watermark to all pages of a particular type

Using GroupDocs.Watermark for Java which is a part of Conholdate.Total for Java, allows you to  add watermark to all pages of a particular type in a document. It consists of following steps.

1.  Load the document
2.  Create and initialize watermark object
3.  Set watermark properties
4.  Add watermark by specifying page type using [setPlacementType()](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.options/DiagramShapeWatermarkOptions#setPlacementType(int)) method of [DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.options/DiagramShapeWatermarkOptions)
5.  Save the document

Following code shows how to add watermark to a particular type of the pages:

```java
DiagramLoadOptions loadOptions = new DiagramLoadOptions();                                               
// Constants.InDiagramVsdx is an absolute or relative path to your document. Ex: "C:\\Docs\\diagram.vsdx"
Watermarker watermarker = new Watermarker(Constants.InDiagramVsdx, loadOptions);                         
                                                                                                         
// Initialize text watermark                                                                             
TextWatermark textWatermark = new TextWatermark("Test watermark 1", new Font("Calibri", 19));            
                                                                                                         
DiagramShapeWatermarkOptions textWatermarkOptions = new DiagramShapeWatermarkOptions();                  
textWatermarkOptions.setPlacementType(DiagramWatermarkPlacementType.BackgroundPages);                    
                                                                                                         
// Add text watermark to all background pages                                                            
watermarker.add(textWatermark, textWatermarkOptions);                                                    
                                                                                                         
// Initialize image watermark                                                                            
ImageWatermark imageWatermark = new ImageWatermark(Constants.LogoJpg);                                   
                                                                                                         
DiagramShapeWatermarkOptions imageWatermarkOptions = new DiagramShapeWatermarkOptions();                 
imageWatermarkOptions.setPlacementType(DiagramWatermarkPlacementType.ForegroundPages);                   
                                                                                                         
// Add image watermark to all foreground pages                                                           
watermarker.add(imageWatermark, imageWatermarkOptions);                                                  
                                                                                                         
watermarker.save(Constants.OutDiagramVsdx);                                                              
imageWatermark.close();                                                                                  
watermarker.close();                                                                                   
```

## Adding watermark on separate background page

In some cases, you may want to place the watermark on separate newly created background pages. In this case, use below code:

```java
DiagramLoadOptions loadOptions = new DiagramLoadOptions();                                               
// Constants.InDiagramVsdx is an absolute or relative path to your document. Ex: "C:\\Docs\\diagram.vsdx"
Watermarker watermarker = new Watermarker(Constants.InDiagramVsdx, loadOptions);                         
                                                                                                         
// Initialize watermark of any supported type                                                            
TextWatermark textWatermark = new TextWatermark("Test watermark 1", new Font("Calibri", 19));            
                                                                                                         
DiagramShapeWatermarkOptions options = new DiagramShapeWatermarkOptions();                               
options.setPlacementType(DiagramWatermarkPlacementType.SeparateBackgrounds);                             
                                                                                                         
// Create separate background for each page where it is not set. Add watermark to it.                    
watermarker.add(textWatermark, options);                                                                 
                                                                                                         
watermarker.save(Constants.OutDiagramVsdx);                                                              
                                                                                                         
watermarker.close();                                                                                     
```

## Add watermark to a particular page

GroupDocs.Watermark allows you to add watermark to a particular page of the document using [setPageIndex()](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.options/DiagramPageWatermarkOptions#setPageIndex(int)) of [DiagramPageWatermarkOptions](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.options/DiagramPageWatermarkOptions) as shown in below example:

```java
DiagramLoadOptions loadOptions = new DiagramLoadOptions();                                               
// Constants.InDiagramVsdx is an absolute or relative path to your document. Ex: "C:\\Docs\\diagram.vsdx"
Watermarker watermarker = new Watermarker(Constants.InDiagramVsdx, loadOptions);                         
                                                                                                         
TextWatermark textWatermark = new TextWatermark("Test watermark", new Font("Calibri", 19));              
                                                                                                         
DiagramPageWatermarkOptions textWatermarkOptions = new DiagramPageWatermarkOptions();                    
textWatermarkOptions.setPageIndex(0);                                                                    
                                                                                                         
// Add text watermark to the first page                                                                  
watermarker.add(textWatermark, textWatermarkOptions);                                                    
                                                                                                         
ImageWatermark imageWatermark = new ImageWatermark(Constants.LogoJpg);                                   
                                                                                                         
DiagramPageWatermarkOptions imageWatermarkOptions = new DiagramPageWatermarkOptions();                   
imageWatermarkOptions.setPageIndex(1);                                                                   
                                                                                                         
// Add image watermark to the second page                                                                
watermarker.add(imageWatermark, imageWatermarkOptions);                                                  
                                                                                                         
watermarker.save(Constants.OutDiagramVsdx);                                                              
                                                                                                         
watermarker.close();                                                                                     
imageWatermark.close();                                                                                  
```

## Lock watermark

When you're calling [*add()*](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker#add(com.groupdocs.watermark.Watermark)) method of *[Watermaker](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark/Watermarker)* object created for the Diagram document, simple shape is added to the document. There is no difference between added watermark and Visio shapes that are used to create diagrams.

GroupDocs.Watermark allows you to protect watermark from editing in MS Visio by calling [setLocked()](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.options/DiagramWatermarkOptions#setLocked(boolean)) method of [DiagramShapeWatermarkOptions](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.options/DiagramShapeWatermarkOptions) (as shown in the following example):

```java
DiagramLoadOptions loadOptions = new DiagramLoadOptions();                                                
// Constants.InDiagramVsdx is an absolute or relative path to your document. Ex: "C:\\Docs\\diagram.vsdx" 
Watermarker watermarker = new Watermarker(Constants.InDiagramVsdx, loadOptions);                          
                                                                                                          
TextWatermark watermark = new TextWatermark("Test watermark", new Font("Arial", 19));                     
                                                                                                          
DiagramShapeWatermarkOptions options = new DiagramShapeWatermarkOptions();                                
options.setLocked(true);                                                                                  
                                                                                                          
// Editing of the shape in Visio is forbidden                                                             
watermarker.add(watermark, options);                                                                      
                                                                                                          
watermarker.save(Constants.OutDiagramVsdx);                                                               
                                                                                                          
watermarker.close();                                                                                      
```


    








