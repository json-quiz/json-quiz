---
title: Keyword
layout: spec
---

# Keyword

## Schema

* A keyword:

  * must be an object

  * must have a *text* property

  * must have a *caseSensitive* property

  * must have a *score* property

  * may have a *feedback* property

* The text property:

  * must be a string

* The caseSensitive property:

  * must be a boolean

* The score property:

  * must be a number

* The feedback property:

  * must be a string

## Examples

### Basic

{% highlight json %}

{
  "text": "lorem ipsum",
  "caseSensitive": false,
  "score": 2
}

{% endhighlight %}

### With feedback

{% highlight json %}

{
  "text": "lorem ipsum",
  "caseSensitive": false,
  "score": 2,
  "feedback": "This is the feedback"
}

{% endhighlight %}

