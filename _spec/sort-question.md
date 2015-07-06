---
title: Sort question
layout: default
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

  * must be an object

  * must have an *itemIds* property

  * must have a *itemScore* property

  * The *itemIds* property:

    * must be an array

    * must contain at least two item ids

  * Each item id:

    * must be unique

    * must be a string

  * The *itemScore* property:

    * must be a number

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
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
  "solution": {
    "itemIds": ["3", "4", "2"],
    "itemScore": 1.5
  }
}

{% endhighlight %}

### Extended

{% highlight json %}

{
  "id": "1",
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
  "solution": {
    "itemIds": ["3", "4", "2"],
    "itemScore": 1.5
  },
  "feedback": "Lorem ipsum dolor sit amet"
}

{% endhighlight %}

