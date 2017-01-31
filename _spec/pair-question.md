---
title: Pair question
layout: spec
---

# Pair question

## Schema

* A pair question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *rows* property

  * must have a *items* property

  * must have a *random* property

  * must have a *penalty* property

  * may have a *solutions* property

* The *rows* property:

  * must be a number

  * must be greater than 1

* The *items* property:

  * must be an array

  * must contain at least two item

  * Each item:

    * must satisfy the [content](content.html) schema

    * must be unique

    * may have a *coordinates* property

* The *random* property:

  * must be a boolean

* The *penalty* property:

  * must be a number

* The *solutions* property:

  * must be an array

  * Each solution:

    * must be unique

    * must have a *itemIds* property

    * must have a *score* property

    * may have a *feedback* property

  * The *itemIds* property:

    * must be a array

    * Each itemIds:

      * must contain at least one item

  * The *score* property:

    * must be a number

  * The *feedback* property:

    * must be a string

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "type": "application/x.pair+json",
  "content": "Question ?",
  "random": false,
  "penalty": 0.5,
  "rows": 1,
  "items": [
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item A"
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item B"
    }
  ]
}


{% endhighlight %}

### With coordinates

{% highlight json %}

{
  "id": "1",
  "type": "application/x.pair+json",
  "content": "Question ?",
  "random": false,
  "penalty": 0.5,
  "rows": 1,
  "items": [
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item A",
      "coordinates": [0, 1]
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item B"
    }
  ]
}


{% endhighlight %}

### With solutions

{% highlight json %}

{
  "id": "1",
  "type": "application/x.pair+json",
  "content": "Question ?",
  "random": false,
  "penalty": 0.5,
  "rows": 1,
  "items": [
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item A",
      "coordinates": [0, 1]
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item B"
    }
  ],
  "solutions": [
    {
      "itemIds": ["3","6"],
      "score": 1.5
    }
  ]
}


{% endhighlight %}

### With feedback

{% highlight json %}

{
  "id": "1",
  "type": "application/x.pair+json",
  "content": "Question ?",
  "random": false,
  "penalty": 0.5,
  "rows": 1,
  "items": [
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item A",
      "coordinates": [0, 1]
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item B"
    }
  ],
  "solutions": [
    {
      "itemIds": ["3","6"],
      "score": 1.5,
      "ordered": true,
      "feedback": "Well done!"
    }
  ]
}


{% endhighlight %}

