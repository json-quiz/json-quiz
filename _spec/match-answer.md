---
title: Match answer
layout: spec
---

# Match answer

## Schema

* A match answer:

  * must be an array

  * Each answer:

    * must be an object

    * must be unique

    * must have a *firstId* property

    * must have a *secondId* property

    * The *firstId* property:

      * must be a string

    * The *secondId* property:

      * must be a string

## Examples

### Match answer

{% highlight json %}

[
  {
    "firstId": "1",
    "secondId": "2"
  }
]

{% endhighlight %}
