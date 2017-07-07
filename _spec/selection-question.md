---
title: Selection question
layout: spec
---

# Selection question

## Examples

### Highlight

{% highlight json %}

{
  "id": "1",
  "type": "application/x.selection+json",
  "content": "Question ?",
  "text": "Lorem ipsum sit amet.",
  "mode": "highlight",
  "colors": [
    {
      "id": "color1",
      "code": "#0000FF"
    },
    {
      "id": "color2",
      "code": "#B0E0E6"
    }
  ],
  "selections": [
    {
      "id": "select1",
      "begin": 0,
      "end": 4
    }
  ],
  "solutions": [
    {
      "selectionId": "select1",
      "answers": [
        {
          "score": 1,
          "colorId": "color1"
        },
        {
          "score": -1,
          "colorId": "color2"
        }
      ]
    }
  ]
}


{% endhighlight %}

### Select

{% highlight json %}

{
  "id": "1",
  "type": "application/x.selection+json",
  "content": "Question ?",
  "text": "Lorem ipsum sit amet.",
  "mode": "select",
  "selections": [
    {
      "id": "select1",
      "begin": 0,
      "end": 4
    },
    {
      "id": "select2",
      "begin": 5,
      "end": 10
    }
  ],
  "solutions": [
    {
      "selectionId": "select1",
      "score": 1
    }
  ]
}


{% endhighlight %}

### Find

{% highlight json %}

{
  "id": "1",
  "type": "application/x.selection+json",
  "content": "Question ?",
  "text": "Lorem ipsum sit amet.",
  "mode": "find",
  "tries": 10,
  "solutions":  [
    {
      "selectionId": "select1",
      "score": 1,
      "begin": 0,
      "end": 4
    }
  ]
}


{% endhighlight %}

### Penalties

{% highlight json %}

{
  "id": "1",
  "type": "application/x.selection+json",
  "content": "Question ?",
  "text": "Lorem ipsum sit amet.",
  "mode": "highlight",
  "penalty": 1,
  "colors": [
    {
      "id": "color1",
      "code": "#0000FF"
    },
    {
      "id": "color2",
      "code": "#B0E0E6"
    }
  ],
  "selections": [
    {
      "id": "select1",
      "begin": 0,
      "end": 4
    }
  ],
  "solutions": [
    {
      "selectionId": "select1",
      "answers": [
        {
          "score": 1,
          "colorId": "color1"
        }
      ]
    }
  ]
}


{% endhighlight %}

## The *mode* property

* must be an [[select|find|highlight]]

