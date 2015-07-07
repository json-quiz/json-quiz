---
title: Content
layout: spec
---

# Content

## Schema

* A content block:

  * must be an object

  * must have an *id* property

  * must have a *type* property

  * must have either a *data* or an *url* property

  * may have a *meta* property

* The *id* property:

  * must be a string

* The *type* property:

  * must be a string

  * must hold a MIME type

* The *url* property:

  * must be a string

  * must hold an URL

* The *data* property:

  * must be a string

  * may have an associated *encoding* property

  * The *encoding* property:

    * must be a string

* The *meta* property:

  * must satisfy the [metadata](metadata.html) schema

## Examples

### Html

{% highlight json %}

{
  "id": "1",
  "type": "text/html",
  "data": "<p>Lorem ipsum dolor sit amet</p>"
}

{% endhighlight %}

### Distant media

{% highlight json %}

{
  "id": "1",
  "type": "image/png",
  "url": "http://domain.com/image-1.png"
}

{% endhighlight %}

### Embedded media

{% highlight json %}

{
  "id": "1",
  "type": "image/png",
  "encoding": "base64",
  "data": "f47544a4211f454e12"
}

{% endhighlight %}

### Metadata

{% highlight json %}

{
  "id": "1",
  "type": "image/png",
  "url": "http://domain.com/cat.png",
  "meta": {
    "authors": [
      {
        "name": "John Doe",
        "email": "john@mail.com"
      }
    ],
    "license": "CC",
    "created": "2012-08-09",
    "description": "A black cat"
  }
}

{% endhighlight %}

