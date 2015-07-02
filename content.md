---
layout: default
title: Content
---

#Content

##Structure

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

  * must satisfy #metadata# schema

##Examples

###html.json

```json

{
  "id": "1",
  "type": "text/html",
  "data": "<p>Lorem ipsum dolor sit amet</p>"
}

```

###distant-media.json

```json

{
  "id": "1",
  "type": "image/png",
  "url": "http://domain.com/image-1.png"
}

```

###embedded-media.json

```json

{
  "id": "1",
  "type": "image/png",
  "encoding": "base64",
  "data": "f47544a4211f454e12"
}

```

###metadata.json

```json

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

```

