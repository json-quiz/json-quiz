---
title: Cloze answer
layout: spec
---

# Cloze answer

## Schema

* A cloze answer:

  * must be an object

  * A cloze answer data:

    * must be an array

    * Each answer:

      * must be an object

      * must be unique

      * must have a *holeId* property

      * must have a *answerText* property

      * The *holeId* property:

        * must be a string

      * The *answerText* property:

        * must be a string

## Examples

### Cloze answer

{% highlight json %}

{
  "type": "application/x.cloze+json",
  "data": [
    {
      "holeId": "41",
      "answerText": "ipsum"
    },
    {
      "holeId": "62",
      "answerText": "amet"
    }
  ]
}


{% endhighlight %}

