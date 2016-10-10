---
title: Open question
layout: spec
---

# Open question

## Schema

* An open question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *contentType* property

  * may have a *maxLength* property

  * The *contentType* property:

    * must be a enum

  * The *maxLength* property:

    * must be a number

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "type": "application/x.open+json",
  "content": "Question ?",
  "contentType": "text"
}

{% endhighlight %}

### With max length

{% highlight json %}

{
  "id": "1",
  "type": "application/x.open+json",
  "content": "Question ?",
  "contentType": "text",
  "maxLength": 1024
}

{% endhighlight %}

