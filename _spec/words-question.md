---
title: Words question
layout: spec
---

# Words question

## Schema

* A words-answer question:

  * must satisfy the [base-question](base-question.html) schema

  * may have a *solutions* property

* The *solutions* property:

  * must be an array

  * must contain at least one solution

  * Each solution:

    * must satisfy the [keyword](keyword.html) schema

    * must be unique

## Examples

### Simple input

{% highlight json %}

{
  "id": "1",
  "type": "application/x.words+json",
  "content": "Question ?"
}

{% endhighlight %}

### Single answer

{% highlight json %}

{
  "id": "1",
  "type": "application/x.words+json",
  "content": "Question ?",
  "solutions": [
    {
      "text": "ipsum",
      "caseSensitive": false,
      "score": 2,
      "feedback": "this is a feedback"
    }
  ]
}

{% endhighlight %}

### Multiple answers

{% highlight json %}

{
  "id": "1",
  "type": "application/x.words+json",
  "content": "Question ?",
  "solutions": [
    {
      "text": "ipsum",
      "caseSensitive": false,
      "score": 2
    },
    {
      "text": "amet",
      "caseSensitive": false,
      "score": 3
    }
  ]
}

{% endhighlight %}

