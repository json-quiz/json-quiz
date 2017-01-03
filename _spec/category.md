---
title: Category
layout: spec
---

# Category

## Schema

* A category:

  * must be an object

  * must have an *id* property

  * must have a *name* property

  * may have a *default* property

* The *id* property:

  * must be a string

* The *name* property:

  * must be a string

* The *default* property:

  * must be a boolean

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "name": "Category A"
}


{% endhighlight %}

### Extended

{% highlight json %}

{
  "id": "1",
  "name": "Category A",
  "default": false
}


{% endhighlight %}

