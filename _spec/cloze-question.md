---
title: Cloze question
layout: default
---

# Cloze question

## Schema

* A cloze question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *text* property

  * may have a *holes* property

  * may have a *solutions* property

* The *text* property:

  * must be a string

* The *holes* property:

  * must be an array

  * must contain at least one hole

  * Each hole:

    * must be an object

    * must be unique

    * must have an *id* property

    * may have a *size* property

    * may have a *placeholder* property

    * may have a *choices* property

    * The *id* property:

      * must be a string

    * The *size* property:

      * must be an integer

      * must be greater than zero

    * The *placeholder* property:

      * must be a string

    * The *choices* property:

      * must be an array

      * must contain at least one choice

      * Each choice:

        * must be a string

* The *solutions* property:

  * must be an array

  * must contain at least one solution

  * must have a *holeId* property

  * must have an *answers* property

  * must have a *score* property

  * Each solution:

    * must be an object

    * must be unique

  * The *holeId* property:

    * must be a string

  * The *answers* property:

    * must be an array

    * must contain at least one item

    * Each answer:

      * must be a string

      * must be unique

  * The score property:

    * must be a number

## Examples

### Simple input

{% highlight json %}

{
  "id": "1",
  "title": "Question ?",
  "text": "Lorem ipsum {{1}} sit amet."
}

{% endhighlight %}

### Hole attributes

{% highlight json %}

{
  "id": "1",
  "title": "Question ?",
  "text": "Lorem {{1}} dolor sit {{2}}.",
  "holes": [
    {
      "id": "1",
      "size": 20
    },
    {
      "id": "2",
      "size": 14,
      "placeholder": "(verb)"
    }
  ]
}

{% endhighlight %}

### Hole choices

{% highlight json %}

{
  "id": "1",
  "title": "Question ?",
  "text": "Lorem {{1}} dolor sit {{2}}.",
  "holes": [
    {
      "id": "1",
      "choices": ["foo", "ipsum", "bar"]
    },
    {
      "id": "2",
      "size": 10
    }
  ]
}

{% endhighlight %}

### Single answer

{% highlight json %}

{
  "id": "1",
  "title": "Question ?",
  "text": "Lorem ipsum {{1}} sit amet.",
  "solutions": [
    {
      "holeId": "1",
      "answers": ["dolor"],
      "score": 2
    }
  ]
}

{% endhighlight %}

### Multiple answers

{% highlight json %}

{
  "id": "1",
  "title": "Question ?",
  "text": "Lorem {{1}} dolor sit {{2}}.",
  "holes": [
    {
      "id": "1",
      "choices": ["foo", "ipsum", "bar"]
    },
    {
      "id": "2",
      "size": 10
    }
  ],
  "solutions": [
    {
      "holeId": "1",
      "answers": ["ipsum"],
      "score": 1.5
    },
    {
      "holeId": "2",
      "answers": ["amet", "consecitur", "nunc"],
      "score": 3.5
    }
  ]
}

{% endhighlight %}

