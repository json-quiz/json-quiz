---
title: Ordering question
layout: spec
---

# Ordering question

## Schema

* An ordering question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *penalty* property

  * must have an *items* property

  * may have a *solutions* property

* The *penalty* property:

  * must be a number

* The *solutions* property:

  * must be an array

  * Each solution:

    * must be an object

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "type": "application/x.ordering+json",
  "content": "Question ?",
  "penalty": 0,
  "mode": "inside",
  "direction": "vertical",
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

### Solutions

{% highlight json %}

{
  "id": "1",
  "type": "application/x.ordering+json",
  "content": "Question ?",
  "penalty": 0,
  "mode": "inside",
  "direction": "vertical",
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
  ],
  "solutions": [
    {
      "itemId": "2",
      "position": 2,
      "score": 1
    },
    {
      "itemId": "3",
      "position": 1,
      "score": 1
    }
  ]
}


{% endhighlight %}

### Feedback

{% highlight json %}

{
  "id": "1",
  "type": "application/x.ordering+json",
  "content": "Question ?",
  "penalty": 0,
  "mode": "inside",
  "direction": "vertical",
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
  ],
  "solutions": [
    {
      "itemId": "2",
      "position": 2,
      "score": 1,
      "feedback": "lorem"
    },
    {
      "itemId": "3",
      "position": 1,
      "score": 1,
      "feedback": "ipsum"
    }
  ]
}


{% endhighlight %}

