---
title: Graphic question
layout: spec
---

# Graphic question

## Definitions

* The *coord* type:

  * must be an object

  * must have an *x* property

  * must have an *y* property

  * The *x* property:

    * must be a number

  * The *y* property:

    * must be a number

* The *area* type:

  * must be an object

  * must have an *id* property

  * must have a *shape* property

  * The *id* property:

    * must be a string

  * The *shape* property:

    * must be either "circle", "rect" or "poly"

  * A "circle" area:

    * must have a *center* property

    * must have a *radius* property

    * The *center* property:

      * must be of type *coord*

    * The *radius* property:

      * must be a number

  * A "rect" or "poly" area:

    * must have a *coords* property

    * The *coords* property:

      * must be an array

      * Each coord:

        * must be of type *coord*

        * must be unique

  * A "rect" area:

    * must have exactly 2 *coords* items

  * A "poly" area:

    * must have at least 3 *coords* items

## Schema

* A graphic question:

  * must satisfy the [base-question](base-question.html) schema

  * must have an *image* property

  * must have a *pointers* property

  * may have a *solutions* property

* The *image* property:

  * must have an *id* property

  * must have an *url* property

  * must have a *width* property

  * must have a *height* property

  * must be an object

* the *solutions* property:

  * must be an array

  * must contain at least one solution

  * Each solution:

    * must be an object

    * must be unique

    * must have a *score* property

    * must have an *area* property

    * may have a *feedback* property

    * The *area* property:

      * must be of type *area*

    * The *score* property:

      * must be a number

    * The *feedback* property:

      * must be a string

## Examples

### Graphic simple

{% highlight json %}

{
  "id": "1",
  "type": "application/x.graphic+json",
  "content": "Question ?",
  "image": {
    "id": "12",
    "type": "image/jpeg",
    "meta": {
      "label": "Charlie"
    },
    "url": "http://domain.com/images/charlie_01.jpg",
    "width": 800,
    "height": 400
  },
  "pointers": 2
}


{% endhighlight %}

### Graphic extended

{% highlight json %}

{
  "id": "1",
  "type": "application/x.graphic+json",
  "content": "Question ?",
  "meta": {
    "authors": [
      {
        "name": "Dr Bunny",
        "status": "Tutor"
      }
    ],
    "license": "CC",
    "created": "2014-06-23"
  },
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
  "resources": [
    {
      "id": "2",
      "type": "application/pdf",
      "url": "http://domain.com/syllabus.txt"
    }
  ],
  "image": {
    "id": "12",
    "type": "image/jpeg",
    "meta": {
      "label": "Charlie"
    },
    "url": "http://domain.com/images/charlie_01.jpg",
    "width": 800,
    "height": 400
  },
  "pointers": 2,
  "hints": [
    {
      "id": "21",
      "value": "Lorem",
      "penalty": 0.5
    },
    {
      "id": "12",
      "value": "Ipsum",
      "penalty": 1.5
    }
  ]
}


{% endhighlight %}

### Graphic solutions

{% highlight json %}

{
  "id": "1",
  "type": "application/x.graphic+json",
  "content": "Where is Charlie ?",
  "image": {
    "id": "12",
    "meta": {
      "label": "Charlie"
    },
    "type": "image/jpeg",
    "url": "http://domain.com/images/charlie_01.jpg",
    "width": 800,
    "height": 400
  },
  "pointers": 1,
  "solutions": [
    {
      "area": {
        "id": "7",
        "center": {
          "x": 144,
          "y": 727
        },
        "shape": "circle",
        "color": "red",
        "radius": 26
      },
      "score": 2,
      "feedback": "you should have known..."
    }
  ]
}


{% endhighlight %}

### Graphic with meta

{% highlight json %}

{
  "id": "1",
  "type": "application/x.graphic+json",
  "content": "Question ?",
  "meta": {
    "authors": [
      {
        "name": "Dr Bunny",
        "status": "Tutor"
      }
    ],
    "license": "CC",
    "created": "2014-06-23"
  },
  "image": {
    "id": "12",
    "type": "image/jpeg",
    "meta": {
      "label": "Charlie"
    },
    "url": "http://images/charlie_01.jpg",
    "width": 800,
    "height": 400
  },
  "pointers": 2
}


{% endhighlight %}

