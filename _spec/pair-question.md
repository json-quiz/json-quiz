---
title: Pair question
layout: spec
---

# Pair question

## Schema

* A pair question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *left* property

  * must have a *right* property

  * must have a *random* property

  * must have a *penalty* property

  * may have a *solutions* property

* The *left* property:

  * must be an array

  * must contain at least one item

  * Each item:

    * must satisfy the [content](content.html) schema

    * must be unique

* The *right* property:

  * must be an array

  * must contain at least one item

  * Each item:

    * must satisfy the [content](content.html) schema

    * must be unique

* The *random* property:

  * must be a boolean

* The *penalty* property:

  * must be a number

* The *solutions* property:

  * must be an array

  * Each solution:

    * must be unique

    * must have a *leftId* property

    * must have a *rightId* property

    * must have a *score* property

    * may have a *feedback* property

  * The *leftId* property:

    * must be a string

  * The *rightId* property:

    * must be a string

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
  "left": [
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
  ],
  "right": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item X"
    },
    {
      "id": "7",
      "type": "text/plain",
      "data": "Item Y"
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
  "left": [
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
  ],
  "right": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item X"
    },
    {
      "id": "7",
      "type": "text/plain",
      "data": "Item Y"
    }
  ],
  "solutions": [
    {
      "leftId": "3",
      "rightId": "4",
      "score": 1.5
    },
    {
      "leftId": "6",
      "rightId": "7",
      "score": 1
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
  "left": [
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
  ],
  "right": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item X"
    },
    {
      "id": "7",
      "type": "text/plain",
      "data": "Item Y"
    }
  ],
  "solutions": [
    {
      "leftId": "3",
      "rightId": "4",
      "score": 1.5,
      "feedback": "Lorem ipsum"
    },
    {
      "leftId": "6",
      "rightId": "7",
      "score": 1,
      "feedback": "Lorem ipsum 2"
    }
  ]
}

{% endhighlight %}

