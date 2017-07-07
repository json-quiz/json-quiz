---
title: grid answer
layout: spec
---

# grid answer

## Schema

* A grid answer:

  * must be an object

  * A grid answer data:

    * must be an array

    * Each answer:

      * must be an object

      * must be unique

      * must have a *cellId* property

      * must have a *text* property

      * The *cellId* property:

        * must be a string

      * The *text* property:

        * must be a string

## Examples

### Grid answer

{% highlight json %}

{
  "type": "application/x.grid+json",
  "data": [
    {
      "cellId": "1",
      "text": "ipsum"
    },
    {
      "cellId": "2",
      "text": "amet"
    }
  ]
}


{% endhighlight %}

