---
title: "So fügen Sie Barcodes zu PDF in C# hinzu"
second_title: "Conholdate.Total für .NET"
articleTitle: "So fügen Sie Barcodes zu PDF hinzu"
linktitle: "So fügen Sie Barcodes zu PDF hinzu"
type: docs
url: /de/net/how-to-add-barcode-to-pdf/
description: "Erstellen Sie einen Barcode und fügen Sie ihn in C# zu PDF hinzu."
keywords: "Barcode erstellen c#, PDF erstellen c#, Barcode zu PDF hinzufügen c#, .NET Barcode erstellen, .NET PDF erstellen, .NET Barcode zu PDF hinzufügen"
weight: 10
---

PDFs sind in vielen Organisationen ein beliebtes Medium zum Erstellen von Berichten oder offiziellen Dokumenten. [Aspose.PDF](https://products.aspose.com/pdf/net) ist Teil von Conholdate.Total für .NET, um PDF-Dokumente in .NET zu generieren. Es ist einfach, Barcodes zu PDF hinzuzufügen, indem Aspose.BarCode mit Aspose.PDF integriert wird. Dieser Artikel beschreibt kurz, wie Sie hochwertige Barcode-Bilder zu PDFs hinzufügen.
## **Barcode in C# erstellen**
Um einen Barcode zu erstellen, folgen Sie diesen einfachen Schritten:

- Erstellen Sie ein Objekt der Klasse BarcodeGenerator.
- Legen Sie den Text mit der CodeText-Eigenschaft des BarcodeGenerator-Objekts fest.
- Legen Sie den Barcode-Typ (Code128 als Beispiel) aus der EncodeTypes-Enumeration fest.

Der folgende Code zeigt die Schritte im Detail.

{{< gist "aspose-barcode-gists" "03dfdc48b9daeda11c30e89980eacf08" "create-barcode.cs" >}}
## **Barcode in MemoryStream speichern**
Sobald der Barcode generiert wurde (im ersten Schritt), kann er wie im folgenden Code gezeigt in MemoryStream gespeichert werden.

{{< gist "aspose-barcode-gists" "7455f3a7708b1c39af59763157945fa7" "save-to-stream.cs" >}}
## **PDF in C#.NET erstellen und Barcodebild hinzufügen**
Das Barcode-Bild wird in einem MemoryStream gespeichert, sodass wir jetzt ein PDF erstellen und Barcode hinzufügen können, wie in den folgenden Schritten gezeigt.

- Erstellen Sie ein PDF, indem Sie ein Objekt der Aspose.Pdf.Document-Klasse erstellen.
- Fügen Sie dem PDF eine neue Seite hinzu
- Verwenden Sie das Klassenobjekt Aspose.Pdf.Facades.PdfFileMend, um das Bild zu PDF hinzuzufügen

Der folgende Code zeigt diese Schritte im Detail

{{< gist "conholdate-gists" "260c8d99d9949bfec6f056bdd0190ac6" "add-barcode-to-pdf.cs" >}}

