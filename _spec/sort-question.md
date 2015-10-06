---
title: Sort question
layout: spec
---

# Sort question

## Schema

* A sort question:

  * must satisfy the [base-question](base-question.html) schema

  * must have an *items* property

  * may have a *solution* property

* The *items* property:

  * must be an array

  * must contain at least two items

  * Each item:

    * must satisfy the [content](content.html) schema

    * must be unique

* The *solution* property:

  * must be an array

  * must contain at least two items

  * Each solution item:

    * must be unique

    * must be an object

    * must have an *itemId* property

    * must have a *score* property

    * The *itemId* property:

      * must be a string

    * The *score* property:

      * must be a number

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "type": "application/x.sort+json",
  "title": "Question ?",
  "items": [
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
  ]
}

{% endhighlight %}

### Solution

{% highlight json %}

{
  "id": "1",
  "type": "application/x.sort+json",
  "title": "Question ?",
  "items": [
    {
      "id": "2",
      "type": "image/jpg",
      "url": "http://domain.com/image-1.jpg"
    },
    {
      "id": "3",
      "type": "image/jpg",
      "url": "http://domain.com/image-2.jpg"
    },
    {
      "id": "4",
      "type": "image/jpg",
      "url": "http://domain.com/image-3.jpg"
    }
  ],
  "solution": [
    {
      "itemId": "3",
      "score": 1.5
    },
    {
      "itemId": "4",
      "score": 1
    },
    {
      "itemId": "2",
      "score": 0.5
    }
  ]
}

{% endhighlight %}

### Extended

{% highlight json %}

{
  "id": "1",
  "type": "application/x.sort+json",
  "meta": {
    "authors": [
      {
        "name": "John Doe"
      }
    ]
  },
  "title": "Question ?",
  "objects": [
    {
      "id": "42",
      "type": "text/plain",
      "url": "http://domain.com/text.txt"
    }
  ],
  "items": [
    {
      "id": "2",
      "type": "image/jpg",
      "url": "http://domain.com/image-1.jpg"
    },
    {
      "id": "3",
      "type": "image/jpg",
      "url": "http://domain.com/image-2.jpg"
    },
    {
      "id": "4",
      "type": "image/jpg",
      "url": "http://domain.com/image-3.jpg"
    }
  ],
  "solution": [
    {
      "itemId": "3",
      "score": 1.5
    },
    {
      "itemId": "4",
      "score": 1
    },
    {
      "itemId": "2",
      "score": 0.5
    }
  ],
  "feedback": "Lorem ipsum dolor sit amet"
}

{% endhighlight %}

