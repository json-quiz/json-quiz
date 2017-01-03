---
title: Set question
layout: spec
---

# Set question

## Schema

* A set question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *sets* property

  * must have a *items* property

  * must have a *random* property

  * must have a *penalty* property

  * may have a *solutions* property

* The *sets* property:

  * must be an array

  * must contain at least one item

  * Each item:

    * must be an object

    * must be unique

    * must satisfy the [content](content.html) schema

* The *items* property:

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

  * must be an object

  * must have an *associations* property

  * may have an *odd* property

  * Each association:

    * must be unique

    * must have a *setId* property

    * must have a *itemId* property

    * must have a *score* property

    * may have a *feedback* property

  * The *setId* property:

    * must be a string

  * The *itemId* property:

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
  "type": "application/x.set+json",
  "content": "Question ?",
  "penalty": 1,
  "random": false,
  "sets": [
    {
      "id": "2",
      "type": "text/html",
      "data": "Set A"
    },
    {
      "id": "3",
      "type": "text/html",
      "data": "Set B"
    }
  ],
  "items": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item X"
    },
    {
      "id": "5",
      "type": "text/plain",
      "data": "Item Y"
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item Z"
    }
  ]
}


{% endhighlight %}

### With solutions

{% highlight json %}

{
  "id": "1",
  "type": "application/x.set+json",
  "content": "Question ?",
  "penalty": 1,
  "random": false,
  "sets": [
    {
      "id": "2",
      "type": "text/html",
      "data": "Set A"
    },
    {
      "id": "3",
      "type": "text/html",
      "data": "Set B"
    }
  ],
  "items": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item X"
    },
    {
      "id": "5",
      "type": "text/plain",
      "data": "Item Y"
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item Z"
    }
  ],
  "solutions": {
    "associations": [
      {
        "setId": "2",
        "itemId": "4",
        "score": 3
      },
      {
        "setId": "3",
        "itemId": "5",
        "score": 0.5
      }
    ]
  }
}


{% endhighlight %}

### With feedback

{% highlight json %}

{
  "id": "1",
  "type": "application/x.set+json",
  "content": "Question ?",
  "penalty": 1,
  "random": false,
  "sets": [
    {
      "id": "2",
      "type": "text/html",
      "data": "Set A"
    },
    {
      "id": "3",
      "type": "text/html",
      "data": "Set B"
    }
  ],
  "items": [
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item X"
    },
    {
      "id": "5",
      "type": "text/plain",
      "data": "Item Y"
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item Z"
    }
  ],
  "solutions": {
    "associations": [
      {
        "setId": "2",
        "itemId": "4",
        "score": 3,
        "feedback": "Lorem ipsum"
      },
      {
        "setId": "3",
        "itemId": "5",
        "score": 0.5,
        "feedback": "Lorem ipsum"
      }
    ]
  }


}


{% endhighlight %}

### With odds

{% highlight json %}

{
  "id": "1",
  "type": "application/x.set+json",
  "content": "Question ?",
  "penalty": 1,
  "random": false,
  "sets": [
    {
      "id": "2",
      "type": "text/html",
      "data": "Set A"
    },
    {
      "id": "3",
      "type": "text/html",
      "data": "Set B"
    }
  ],
  "items": [
    {
      "id": "3",
      "type": "text/plain",
      "data": "Item W"
    },
    {
      "id": "4",
      "type": "text/plain",
      "data": "Item X"
    },
    {
      "id": "5",
      "type": "text/plain",
      "data": "Item Y"
    },
    {
      "id": "6",
      "type": "text/plain",
      "data": "Item Z"
    }
  ],
  "solutions": {
    "associations": [
      {
        "setId": "2",
        "itemId": "4",
        "score": 3,
        "feedback": "Lorem ipsum"
      },
      {
        "setId": "3",
        "itemId": "5",
        "score": 0.5,
        "feedback": "Lorem ipsum"
      }
    ],
    "odd": [
      {
        "itemId": "3",
        "score": -1,
        "feedback": "Dolor sit amet"
      }
    ]
  }
}


{% endhighlight %}

