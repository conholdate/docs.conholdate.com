---
title: Minify HTML to Optimize Rendering Java
second_title: Conholdate.Total for Java
articleTitle: Minify HTML to Optimize Rendering
linktitle: Minify HTML to Optimize Rendering
description: "This article shows how to minify HTML and CSS when rendering of documents into HTML using Viewer Java API."
keywords: minify html, rendering to html
type: docs
url: /java/minify-html-to-optimize-rendering/
weight: 30
---


## Minify HTML to Optimize Rendering to HTML in Java

The process of minification almost in all cases provides the output that looks identically with original content in all browsers, but minified HTML content does not pass strict HTML validation. Here is the list of technics that lay behind the minification process.

### HTML Minification

* Comments (except when they contain IE conditional statements) are completely removed
* Conditional comments are compressed
* Spaces and line breaks inside the tags and between the tags are removed
* Document type declaration is simplified to `<!DOCTYPE html> `and all HTML tag properties are removed
* Protocol declarations like http:, https: and javascript: are removed from path values
* Multiple spaces between words (except when they occur inside the pre or textarea tag) are replaced with single space
* Quotes around tag property values (except inline events) are removed
* Default attributes for "script", "style" and "link" tags are removed
* Boolean attributes are simplified, therefore `<input type="text" disabled="disabled">` becomes `<input type=text disabled>`

### CSS Minification

The embedded CSS content is minified when the *Minify* setting is on.

* Remove all insignificant white-space.
* Remove all comments.
* Remove all unnecessary semicolon separators.
* Reduce color values.
* Reduce integer representations by removing leading and trailing zeros.
* Remove unit specifiers from numeric zero values.

## How to minify HTML and CSS

The Viewer Java API provides the *Minify* property of the *HtmlViewOptions* class, that lets you get output content minified. Minification removes comments, extra white-spaces, and other unneeded characters without breaking the content structure. As a result, the page becomes smaller in size and loads faster. The following example demonstrates how to minify output content when rendering MS Word document into HTML.

The following code sample shows how to enable minification.

```java
try (Viewer viewer = new Viewer("sample.docx");
    HtmlViewOptions viewOptions = HtmlViewOptions.forEmbeddedResources();
    viewOptions.setMinify(true);
    viewer.view(viewOptions);
}
```

{{< alert style="info" >}}This setting will not compress the content as significantly as this might be achieved using Gzip compression (that should be enabled and configured from your webserver). But it still might be valuable and can be used as additional optimization in combination with Gzip compression. {{< /alert >}}






