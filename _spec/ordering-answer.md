---
title: ordering answer
layout: spec
---

# ordering answer

## Schema

* An ordering answer:

  * must be an object

  * An ordering answer data:

    * must be an array

    * Each answer:

      * must be an object

      * must be unique

      * must have a *itemId* property

      * The *itemId* property:

        * must be a string

      * The *position* property:

        * must be a number

## Examples

### Ordering answer

{% highlight json %}

{
  "type": "application/x.ordering+json",
  "data": [
    {
      "itemId": "1",
      "position": 1
    },
    {
      "itemId": "2",
      "position": 2
    }
  ]
}


{% endhighlight %}

