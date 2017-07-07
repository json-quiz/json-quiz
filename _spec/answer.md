---
title: Answer
layout: spec
---

# Answer

## Schema

* An answer:

  * must be an object

  * must have an *id* property

  * must have a *questionId* property

  * may have a *tries* property

  * may have a *score* property

  * may have a *feedback* property

  * may have a *data* property

  * may have a *usedHints* property

  * The *id* property:

    * must be a string

  * The *questionId* property:

    * must be a string

  * The *tries* property:

    * must be a number

  * The *score* property:

    * must be a number

  * The *feedback* property:

    * must be a string

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
  "id": "123",
  "questionId": "1",
  "tries": 2,
  "type": "application/x.choice+json"
}


{% endhighlight %}

### With score

{% highlight json %}

{
  "id": "123",
  "questionId": "1",
  "score": 0,
  "type": "application/x.choice+json"
}


{% endhighlight %}

### With feedback

{% highlight json %}

{
  "id": "123",
  "questionId": "1",
  "score": 1,
  "feedback": "this really is a bad score dude !",
  "type": "application/x.choice+json"
}


{% endhighlight %}

### With used hints

{% highlight json %}

{
  "id": "123",
  "questionId": "1",
  "usedHints": [
    {
      "id": "1",
      "value": "Lorem"
    }
  ],
  "type": "application/x.choice+json"
}


{% endhighlight %}

### With data

{% highlight json %}

{
  "id": "123",
  "questionId": "1",
  "data": ["1", "2"],
  "type": "application/x.choice+json"
}


{% endhighlight %}

### Full

{% highlight json %}

{
  "id": "123",
  "questionId": "1",
  "score": 5,
  "tries": 2,
  "usedHints": [
    {
      "id": "1",
      "value": "Lorem"
    }
  ],
  "data": ["1", "2"],
  "type": "application/x.choice+json"
}


{% endhighlight %}

