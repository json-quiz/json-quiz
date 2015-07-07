---
title: Match question
layout: spec
---

# Match question

## Schema

* A match question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *firstSet* property

  * must have a *secondSet* property

  * may have a *solutions* property

* The *firstSet* property:

  * must be an array

  * must contain at least two items

  * Each item:

    * must satisfy the [content](content.html) schema

    * must be unique

* The *secondSet* property:

  * must be an array

  * must contain at least two items

  * Each item:

    * must satisfy the [content](content.html) schema

    * must be unique

* The *solutions* property:

  * must be an array

  * must contain at least one solution

  * Each solution:

    * must be unique

    * must have a *firstId* property

    * must have a *secondId* property

    * must have a *score* property

  * The *firstId* property:

    * must be a string

  * The *secondId* property:

    * must be a string

  * The *score* property:

    * must be a number

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "type": "application/x.match+json",
  "title": "Question ?",
  "firstSet": [
    {
      "id": "2",
      "type": "text/plain",
      "data": "Item A"
    },
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item B"
    }
  ],
  "secondSet": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item C"
    },
    {
      "id": "5",
      "type": "text/plain",
      "data": "Item D"
    }
  ]
}

{% endhighlight %}

### Solutions

{% highlight json %}

{
  "id": "1",
  "type": "application/x.match+json",
  "title": "Question ?",
  "firstSet": [
    {
      "id": "2",
      "type": "text/plain",
      "data": "Item A"
    },
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item B"
    }
  ],
  "secondSet": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item C"
    },
    {
      "id": "5",
      "type": "text/plain",
      "data": "Item D"
    }
  ],
  "solutions": [
    {
      "firstId": "2",
      "secondId": "5",
      "score": 2
    },
    {
      "firstId": "3",
      "secondId": "4",
      "score": 0.5
    }
  ]
}

{% endhighlight %}

### Text and images

{% highlight json %}

{
  "id": "1",
  "type": "application/x.match+json",
  "meta": {
    "authors": [
      {
        "name": "John Doe",
        "status": "Tutor"
      },
      {
        "name": "Jane Doe",
        "email": "jane@mail.com",
        "status": "Professor"
      }
    ],
    "license": "CC",
    "created": "2014-06-23"
  },
  "title": "Question ?",
  "objects": [
    {
      "id": "1",
      "type": "image/png",
      "url": "http://domain.com/image.png",
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
  "firstSet": [
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item A"
    },
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item B"
    }
  ],
  "secondSet": [
    {
      "id": "5",
      "type": "image/png",
      "url": "http://domain.com/image-c.png"
    },
    {
      "id": "6",
      "type": "image/png",
      "url": "http://domain.com/image-d.png"
    }
  ],
  "solutions": [
    {
      "firstId": "3",
      "secondId": "6",
      "score": 1.5
    },
    {
      "firstId": "4",
      "secondId": "5",
      "score": 1
    }
  ],
  "feedback": "Lorem ipsum dolor sit amet."
}

{% endhighlight %}

