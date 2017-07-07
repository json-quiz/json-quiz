---
title: Pair answer
layout: spec
---

# Pair answer

## Schema

* A pair answer:

  * must be an object

  * A pair answer data:

    * must be an array

    * Each pair:

      * must be an array

      * must be unique

      * Each item:

        * must be a string

        * must be unique

## Examples

### Pair answer

{% highlight json %}

{
  "type": "application/x.pair+json",
  "data": [
    ["123", "456"],
    ["759", "895"]
  ]
}


{% endhighlight %}

