---
title: Short question
layout: spec
---

# Short question

## Schema

* A short-answer question:

  * must satisfy the [base-question](base-question.html) schema

  * may have a *solutions* property

* The *solutions* property:

  * must be an array

  * must contain at least one solution

  * Each solution:

    * must be an object

    * must be unique

    * must have a *value* property

    * must have a *score* property

    * The value property:

      * must be a string

    * The score property:

      * must be a number

## Examples

### Simple input

{% highlight json %}

{
  "id": "1",
  "type": "application/x.short+json",
  "title": "Question ?"
}

{% endhighlight %}

### Single answer

{% highlight json %}

{
  "id": "1",
  "type": "application/x.short+json",
  "title": "Question ?",
  "solutions": [
    {
      "value": "ipsum",
      "score": 2
        
    }
  ]
}

{% endhighlight %}

### Multiple answers

{% highlight json %}

{
  "id": "1",
  "type": "application/x.short+json",
  "title": "Question ?",
  "solutions": [
    {
      "value": "ipsum",
      "score": 2
    },
    {
      "value": "amet",
      "score": 3
    }
  ]
}

{% endhighlight %}

