---
title: Paper
layout: spec
---

# Paper

## Schema

* A paper:

  * must be an object

  * must have an *id* property

  * must have a *startDate* property

  * must have a *structure* property

  * may have a *user* property

  * may have a *score* property

  * may have an *endDate* property

  * may have a *finished* property

  * may have an *answers* property

* The *id* property:

  * must be a string

* The *user* property:

  * must be an object

  * must have a *name* property

  * The *name* property:

    * must be a string

* The *startDate* property:

  * must be a string

* The *endDate* property:

  * must be a string

* The *finished* property:

  * must be a boolean

* The *score* property:

  * must be a number

* The *structure* property:

  * must be an array

  * must contain at least one step

  * Each item:

    * must be an object

    * must be unique

    * must have an *id* property

    * must have an *items* property

    * The *id* property:

      * must be a string

    * The *items* property:

      * must be an array

      * Each item:

        * must be unique

        * must be a string

* The *answers* property:

  * must be an array

  * Each item:

    * must be unique

    * must contain at least one answer

    * must satisfy the [answer](answer.html) schema

## Examples

### Minimal

{% highlight json %}

{
  "id": "123",
  "startDate": "2016-12-13T12:00:00",
  "structure": [
    {
      "id": "1",
      "items": ["1", "2"]
    }
  ]
}


{% endhighlight %}

### Full

{% highlight json %}

{
  "id": "123",
  "user": {
    "name": "John Doe"
  },
  "startDate": "2016-12-13T12:00:00",
  "endDate": "2016-12-13T14:00:00",
  "finished": true,
  "score": 14,
  "structure": [
    {
      "id": "1",
      "items": ["1", "2"]
    }
  ],
  "answers": [
    {
      "id": "123",
      "questionId": "1",
      "data": "Lorem ipsum"
    },
    {
      "id": "1234",
      "questionId": "2",
      "data": ["1", "2"]
    }
  ]
}


{% endhighlight %}

### With user

{% highlight json %}

{
  "id": "123",
  "startDate": "2016-12-13T12:00:00",
  "user": {
    "name": "John Doe"
  },
  "structure": [
    {
      "id": "1",
      "items": ["1", "2"]
    }
  ]
}


{% endhighlight %}

### With end date

{% highlight json %}

{
  "id": "123",
  "startDate": "2016-12-13T12:00:00",
  "endDate": "2016-12-13T14:00:00",
  "structure": [
    {
      "id": "1",
      "items": ["1", "2"]
    }
  ]
}


{% endhighlight %}

### With score

{% highlight json %}

{
  "id": "123",
  "startDate": "2016-12-13T12:00:00",
  "score": 14,
  "structure": [
    {
      "id": "1",
      "items": ["1", "2"]
    }
  ]
}


{% endhighlight %}

### With finished

{% highlight json %}

{
  "id": "123",
  "startDate": "2016-12-13T12:00:00",
  "endDate": "2016-12-13T14:00:00",
  "finished": true,
  "structure": [
    {
      "id": "1",
      "items": ["1", "2"]
    }
  ]
}


{% endhighlight %}

### With answers

{% highlight json %}

{
  "id": "123",
  "startDate": "2016-12-13T12:00:00",
  "structure": [
    {
      "id": "1",
      "items": ["1", "2"]
    }
  ],
  "answers": [
    {
      "id": "123",
      "questionId": "1",
      "data": "Lorem ipsum"
    },
    {
      "id": "1234",
      "questionId": "2",
      "data": ["1", "2"]
    }
  ]
}


{% endhighlight %}

