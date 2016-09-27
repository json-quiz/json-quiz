---
title: Base question
layout: spec
---

# Base question

## Schema

* A question:

  * must be an object

  * must have an *id* property

  * must have a *type* property

  * must have a *title* property

  * may have a *meta* property

  * may have an *objects* property

  * may have a *resources* property

  * may have a *feedback* property

  * may have a *score* property

* The *id* property:

  * must be a string

* The *type* property:

  * must be a string

  * must hold a custom JSON MIME type

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

    * must satisfy the [hint](hint.html) schema

    * must be unique

* The *feedback* property:

  * must be a string

* The *score* property:

  * must be an object

  * must have a *type* property

  * The *type* property:

    * must be either "sum" or "fixed"

  * Scores of type "fixed":

    * must have a *success* property

    * must have a *failure* property

    * The *success* property:

      * must be a number

    * The *feedback* property:

      * must be a string

## Examples

### With hints

{% highlight json %}

{
  "id": "1",
  "type": "application/x.type+json",
  "title": "Question ?",
  "hints": [
    {
      "id": "1",
      "value": "Lorem"
    },
    {
      "id": "2",
      "value": "Ipsum"
    }
  ]
}

{% endhighlight %}

### With metadata

{% highlight json %}

{
  "id": "1",
  "type": "application/x.type+json",
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
  "type": "application/x.type+json",
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
  "type": "application/x.type+json",
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

### With fixed score

{% highlight json %}

{
  "id": "1",
  "type": "application/x.type+json",
  "title": "Question ?",
  "score": {
    "type": "fixed",
    "success": 5,
    "failure": -1.5
  }
}


{% endhighlight %}

### With sum score

{% highlight json %}

{
  "id": "1",
  "type": "application/x.type+json",
  "title": "Question ?",
  "score": {
    "type": "sum"
  }
}


{% endhighlight %}

### Global feedback

{% highlight json %}

{
  "id": "1",
  "type": "application/x.type+json",
  "title": "Question ?",
  "feedback": "Lorem ipsum dolor sit amet"
}

{% endhighlight %}

