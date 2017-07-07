---
title: Selection answer
layout: spec
---

# Selection answer

## Examples

### Highlight

{% highlight json %}

{
  "type": "application/x.selection+json",
  "data": {
    "mode": "highlight",
    "highlights": [
      {
        "selectionId": "selection1",
        "colorId": "color1"
      },
      {
        "selectionId": "selection2",
        "colorId": "color2"
      }
    ]
  }
}


{% endhighlight %}

### Select

{% highlight json %}

{
  "type": "application/x.selection+json",
  "data": {
    "mode": "select",
    "selections": ["selectionId1", "selectionId2"]
  }
}


{% endhighlight %}

### Find

{% highlight json %}

{
  "type": "application/x.selection+json",
  "data": {
    "mode": "find",
    "positions": [4, 8, 15, 16, 23, 42],
    "tries": 77
  }
}


{% endhighlight %}

### No click

{% highlight json %}

{
  "type": "application/x.selection+json",
  "data": {
    "mode": "find",
    "positions": [],
    "tries": 0
  }
}


{% endhighlight %}

### Empty

{% highlight json %}

{
  "type": "application/x.selection+json",
  "data": {
    "mode": "select",
    "selections": []
  }
}


{% endhighlight %}

