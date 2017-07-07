---
title: Boolean question
layout: spec
---

# Boolean question

## Schema

* A boolean question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *choices* property

  * may have a *solutions* property

* The *choices* property:

  * must be an array

  * must contain at least two choices

  * must contain two choices max

  * Each choice:

    * must satisfy the [content](content.html) schema

    * must be unique

* the *solutions* property:

  * must be an array

  * must contain at least two solutions

  * must contain two solutions max

  * Each solution:

    * must be an object

    * must be unique

    * must have an *id* property

    * must have a *score* property

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "type": "application/x.boolean+json",
  "content": "Question ?",
  "choices": [
    {
      "id": "1",
      "type": "text/plain",
      "data": "True"
    },
    {
      "id": "2",
      "type": "text/plain",
      "data": "False"
    }
  ]
}


{% endhighlight %}

### Solutions

{% highlight json %}

{
  "id": "1",
  "type": "application/x.boolean+json",
  "content": "Question ?",
  "choices": [
    {
      "id": "1",
      "type": "text/plain",
      "data": "True"
    },
    {
      "id": "2",
      "type": "text/plain",
      "data": "False"
    }
  ],
  "solutions": [
    {
      "id": "1",
      "score": -1,
      "feedback": "Lorem"
    },
    {
      "id": "2",
      "score": 1,
      "feedback": "Ipsum"
    }
  ]
}


{% endhighlight %}

