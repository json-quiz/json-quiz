---
title: Choice answer
layout: spec
---

# Choice answer

## Schema

* A choice answer:

  * must be an object

  * A choice answer data:

    * must be an array

    * Each answer:

      * must be a string

      * must be unique

## Examples

### Choice answer

{% highlight json %}

{
  "type": "application/x.choice+json",
  "data": ["41", "42"]
}


{% endhighlight %}

