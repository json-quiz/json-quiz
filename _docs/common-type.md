---
title: Common type
layout: default
---

#Common type

##Structure

* A question:

  * must be an object

  * must have an *id* property

  * must have a *title* property

  * may have an *meta* property

  * may have an *objects* property

  * may have a *resources* property

  * may have a *feedback* property

* The *id* property:

  * must be a string

* The *title* property:

  * must be a string

* The *meta* property:

  * must satisfy #metadata# schema

* The *objects* property:

  * must be an array

  * must contain at least one object

  * Each object:

    * must satisfy #content# schema

    * must be unique

* The *resources* property:

  * must be an array

  * must contain at least one resource

  * Each resource:

    * must satisfy #content# schema

    * must be unique

* The *hints* property:

  * must be an array

  * must contain at least one hint

  * Each hint:

    * must be an object

    * must be unique

    * must have an *id* property

    * must have a *text* property

    * may have a *penalty* property

  * The *id* property:

    * must be a string

  * The *text* property:

    * must be a string

  * The *penalty* property:

    * must be a number

    * must be greater than zero

* The *feedback* property:

  * must be a string

##Examples

###with-metadata.json

```json

{
  "id": "1",
  "meta": {
    "authors": [
      {
        "name": "John Doe",
        "status": "Tutor"
      }
    ],
    "license": "CC",
    "created": "2014-06-23"
  },
  "title": "Question ?"
}

```

###with-object.json

```json

{
  "id": "1",
  "objects": [
    {
      "id": "1",
      "type": "text/html",
      "data": "<p>Lorem ipsum dolor sit amet</p>",
      "meta": {
        "title": "Lorem sample"
      }
    }
  ],
  "title": "Is the previous text written in english ?"
}

```

###with-resource.json

```json

{
  "id": "1",
  "title": "Question ?",
  "resources": [
    {
      "id": "1",
      "type": "application/pdf",
      "url": "http://domain.com/syllabus.txt"
    }
  ]
}

```

###global-feedback.json

```json

{
  "id": "1",
  "title": "Question ?",
  "feedback": "Lorem ipsum dolor sit amet"
}

```

###hints-no-penalty.json

```json

{
  "id": "1",
  "title": "Question ?",
  "hints": [
    {
      "id": "1",
      "text": "Lorem"
    },
    {
      "id": "2",
      "text": "Ipsum"
    }
  ]
}

```

###hints-penalty.json

```json

{
  "id": "1",
  "title": "Question ?",
  "hints": [
    {
      "id": "1",
      "text": "Lorem",
      "penalty": 1
    },
    {
      "id": "2",
      "text": "Ipsum",
      "penalty": 1.5
    }
  ]
}

```

