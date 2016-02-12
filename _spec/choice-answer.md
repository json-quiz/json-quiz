---
title: Choice answer
layout: spec
---

# Choice answer

## Schema

* A choice answer:

  * must be an array

  * Each answer:

    * must be an object

    * must be unique

    * must have a *choiceId* property

    * The *choiceId* property:

      * must be a string

## Examples

### Choice answer

{% highlight json %}

[
  {
    "choiceId": "41"
  },
  {
    "choiceId": "62"
  }
]


{% endhighlight %}

