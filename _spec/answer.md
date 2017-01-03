---
title: Answer
layout: spec
---

# Answer

## Schema

* An answer:

  * must be an object

  * must have a *questionId* property

  * may have a *tries* property

  * may have a *score* property

  * may have a *data* property

  * may have a *usedHints* property

  * The *questionId* property:

    * must be a string

  * The *tries* property:

    * must be a number

  * The *score* property:

    * must be a number

  * The *usedHints* property:

    * must be an array

    * Each item:

      * must be unique

      * must satisfy the [hint](hint.html) schemas

  * The *data* property:

    * must satisfy the [answer-data](answer-data.html) schema

## Examples

### With tries

{% highlight json %}

{
  "questionId": "1",
  "tries": 2
}


{% endhighlight %}

### With score

{% highlight json %}

{
  "questionId": "1",
  "score": 0
}


{% endhighlight %}

### With used hints

{% highlight json %}

{
  "questionId": "1",
  "usedHints": [
    {
      "id": "1",
      "value": "Lorem"
    }
  ]
}


{% endhighlight %}

### With data

{% highlight json %}

{
  "questionId": "1",
  "data": ["1", "2"]
}


{% endhighlight %}

### Full

{% highlight json %}

{
  "questionId": "1",
  "score": 5,
  "tries": 2,
  "usedHints": [
    {
      "id": "1",
      "value": "Lorem"
    }
  ],
  "data": ["1", "2"]
}


{% endhighlight %}

