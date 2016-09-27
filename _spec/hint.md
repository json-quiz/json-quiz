---
title: Hint
layout: spec
---

# Hint

## Schema

* A hint:

  * must be an object

  * must have an *id* property

  * may have a *value* property

  * may have a *penalty* property

* The *id* property:

  * must be a string

* The *value* property:

  * must be a string

* The *penalty* property:

  * must be a number

  * must be greater than zero

## Examples

### No penalty

{% highlight json %}

{
  "id": "2",
  "value": "Ipsum"
}

{% endhighlight %}

### No value

{% highlight json %}

{
  "id": "2",
  "penalty": 1.5
}

{% endhighlight %}

### With penalty

{% highlight json %}

{
  "id": "2",
  "value": "Ipsum",
  "penalty": 1.5
}

{% endhighlight %}

### With value

{% highlight json %}

{
  "id": "2",
  "value": "Ipsum",
  "penalty": 1.5
}

{% endhighlight %}

