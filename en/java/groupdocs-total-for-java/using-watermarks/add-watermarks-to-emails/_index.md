---
title: Add Watermarks to Emails Java
second_title: Conholdate.Total for Java
articleTitle: Add Watermarks to Emails
linktitle: Add Watermarks to Emails
description: "A guide to learn how to add watermarks to emails in Java using GroupDocs.Watermark Java API which is part of Conholdate.Total for Java."
keywords: add watermark, add watermark to email, Add Watermarks to Emails in Java
type: docs
url: /java/add-watermarks-to-emails/
weight: 60
---

## Add Watermarks to Emails in Java
The GroupDocs.Watermark Java API which is part of Conholdate.Total for Java, allows you to get the information about the [attachments](https://apireference.groupdocs.com/watermark/java/com.groupdocs.watermark.contents/EmailContent#getAttachments()) in an email message. Below is the code snippet for extracting attachments from Email.

```java
EmailLoadOptions loadOptions = new EmailLoadOptions();                                                       
// Constants.InMessageMsg is an absolute or relative path to your document. Ex: "C:\\Docs\\message.msg"      
Watermarker watermarker = new Watermarker(Constants.InMessageMsg, loadOptions);                              
                                                                                                             
EmailContent content = watermarker.getContent(EmailContent.class);                                           
for (EmailAttachment attachment : content.getAttachments())                                                  
{                                                                                                            
    System.out.println("Name: " + attachment.getName());                                                     
    System.out.println("File format: " + attachment.getDocumentInfo().getFileType());                        
                                                                                                             
    FileOutputStream outputStream = new FileOutputStream(Constants.OutputPath + "\\" + attachment.getName());
    outputStream.write(attachment.getContent());                                                             
    outputStream.close();                                                                                    
}                                                                                                            
                                                                                                             
watermarker.close();                                                                                         
```




