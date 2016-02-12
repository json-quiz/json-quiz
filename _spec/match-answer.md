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

    * must have a *firstSetId* property

    * must have a *secondSetId* property

    * The *firstSetId* property:

      * must be a string

    * The *secondSetId* property:

      * must be a string

## Examples

### Match answer

{% highlight json %}

[
  {
    "firstSetId": "1",
    "secondSetId": "2"
  }
]

{% endhighlight %}

