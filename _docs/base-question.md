---
title: Base question
layout: default
---

# FOOOOOBase question

## Schema

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

  * must satisfy the [metadata](metadata.html) schema

* The *objects* property:

  * must be an array

  * must contain at least one object

  * Each object:

    * must satisfy the [content](content.html) schema

    * must be unique

* The *resources* property:

  * must be an array

  * must contain at least one resource

  * Each resource:

    * must satisfy the [content](content.html) schema

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

## Examples

### With metadata

{% highlight json %}

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

{% endhighlight %}

### With object

{% highlight json %}

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

{% endhighlight %}

### With resource

{% highlight json %}

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

{% endhighlight %}

### Global feedback

{% highlight json %}

{
  "id": "1",
  "title": "Question ?",
  "feedback": "Lorem ipsum dolor sit amet"
}

{% endhighlight %}

### Hints no-penalty

{% highlight json %}

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

{% endhighlight %}

### Hints penalty

{% highlight json %}

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

{% endhighlight %}

