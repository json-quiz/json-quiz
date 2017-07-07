---
title: Grid question
layout: spec
---

# Grid question

## Schema

* A grid question:

  * must satisfy the [base-question](base-question.html) schema

  * must have a *penalty* property

  * must have a *cells* property

  * must have a *border* property

  * must have a *rows* property

  * must have a *cols* property

  * may have a *solutions* property

  * may have a *sumMode* property

* The *penalty* property:

  * must be a number

* The *border* property:

  * must be an object

  * must have a *color* property

  * must have a *width* property

  * The *color* property:

    * must be a string

  * The *width* property:

    * must be a number

* The *solutions* property:

  * must be an array

  * Each solution:

    * must be an object

    * must have a *cellId* property

    * must have an *answers* property

    * The *cellId* property:

      * must be a string

    * The *answers* property:

      * must be an array

    * Each answer:

      * must satisfy the [keyword](keyword.html) schema

* The *cells* property:

  * must be an array

  * must contain at least one cell

  * Each cell:

    * must be unique

    * must have an *id* property

    * must have a *coordinates* property

    * must have a *background* property

    * must have a *color* property

    * must have an *input* property

    * may have a *data* property

    * may have a *choices* property

    * The *id* property:

      * must be a string

    * The *coordinates* property:

      * must be an array

    * The *color* property:

      * must be a string

    * The *background* property:

      * must be a string

## Examples

### Basic

{% highlight json %}

{
  "id": "1",
  "type": "application/x.grid+json",
  "content": "Question ?",
  "penalty": 0,
  "cells": [
    {
      "id": "1",
      "input": true,
      "data": "Item A",
      "coordinates": [0, 0],
      "background":  "#fff",
      "color": "#000"
    },
    {
      "id": "2",
      "input": true,
      "coordinates": [1, 0],
      "background":  "#fff",
      "color": "#000",
      "choices": ["lorem", "ipsum", "et", "doloris"]
    },
    {
      "id": "3",
      "input": false,
      "coordinates": [2, 0],
      "background":  "#fff",
      "color": "#000"
    }
  ],
  "rows": 1,
  "cols": 3,
  "border": {
    "width": 1,
    "color": "#00ff00"
  }
}


{% endhighlight %}

### Extended

{% highlight json %}

{
  "id": "1",
  "type": "application/x.grid+json",
  "content": "Question ?",
  "penalty": 0,
  "meta": {
    "authors": [
      {
        "name": "John Doe",
        "status": "Tutor"
      }
    ],
    "license": "CC",
    "created": "2014-06-23"
  },
  "objects": [
    {
      "id": "1",
      "type": "text/html",
      "data": "<p>Lorem ipsum dolor sit amet</p>",
      "meta": {
        "title": "Lorem sample"
      }
    }
  ],
  "resources": [
    {
      "id": "2",
      "type": "application/pdf",
      "url": "http://domain.com/syllabus.txt"
    }
  ],
  "hints": [
    {
      "id": "3",
      "value": "Lorem",
      "penalty": 1
    },
    {
      "id": "5",
      "value": "Ipsum",
      "penalty": 1.5
    }
  ],
  "cells": [
    {
      "id": "1",
      "input": false,
      "data": "Item A",
      "coordinates": [0, 0],
      "background":  "#fff",
      "color": "#000"
    },
    {
      "id": "2",
      "input": true,
      "coordinates": [1, 0],
      "background":  "#fff",
      "color": "#000",
      "choices": ["lorem", "ipsum", "dolor"]
    },
    {
      "id": "3",
      "input": true,
      "coordinates": [2, 0],
      "background":  "#fff",
      "color": "#000"
    }
  ],
  "rows": 1,
  "cols": 3,
  "border": {
    "width": 1,
    "color": "#00ff00"
  },
  "solutions": [
    {
      "cellId": "2",
      "answers": [
        {
          "text": "lorem",
          "caseSensitive": true,
          "score": 2
        },
        {
          "text": "ipsum",
          "caseSensitive": true,
          "score": 2
        },
        {
          "text": "dolor",
          "caseSensitive": false,
          "score": -2
        }
      ]
    },
    {
      "cellId": "3",
      "answers": [
        {
          "text": "consectetur",
          "score": 2,
          "caseSensitive": true,
          "feedback": "fugiat nulla pariatur."
        }
      ]
    }
  ]
}


{% endhighlight %}

### Solutions

{% highlight json %}

{
  "id": "1",
  "type": "application/x.grid+json",
  "content": "Question ?",
  "penalty": 0,
  "sumMode": "row",
  "cells": [
    {
      "id": "1",
      "input": false,
      "data": "Item A",
      "coordinates": [0, 0],
      "background":  "#fff",
      "color": "#000"
    },
    {
      "id": "2",
      "input": true,
      "coordinates": [1, 0],
      "background":  "#fff",
      "color": "#000",
      "choices": ["lorem", "ipsum", "dolor"]
    },
    {
      "id": "3",
      "input": true,
      "coordinates": [2, 0],
      "background":  "#fff",
      "color": "#000"
    }
  ],
  "rows": 1,
  "cols": 3,
  "border": {
    "width": 1,
    "color": "#00ff00"
  },
  "solutions": [
    {
      "cellId": "2",
      "answers": [
        {
          "text": "lorem",
          "caseSensitive": true,
          "score": 2
        },
        {
          "text": "ipsum",
          "caseSensitive": true,
          "score": 2
        },
        {
          "text": "dolor",
          "caseSensitive": true,
          "score": -2
        }
      ]
    },
    {
      "cellId": "3",
      "answers": [
        {
          "text": "consectetur",
          "caseSensitive": false,
          "score": 2
        }
      ]
    }
  ]
}


{% endhighlight %}

### Feedback

{% highlight json %}

{
  "id": "1",
  "type": "application/x.grid+json",
  "content": "Question ?",
  "penalty": 0,
  "cells": [
    {
      "id": "1",
      "input": true,
      "data": "Item A",
      "coordinates": [0, 0],
      "background":  "#fff",
      "color": "#000"
    },
    {
      "id": "2",
      "input": true,
      "coordinates": [1, 0],
      "background":  "#fff",
      "color": "#000",
      "choices": ["lorem", "ipsum", "dolor"]
    },
    {
      "id": "3",
      "input": false,
      "coordinates": [2, 0],
      "background":  "#fff",
      "color": "#000"
    }
  ],
  "rows": 1,
  "cols": 3,
  "border": {
    "width": 1,
    "color": "#00ff00"
  },
  "solutions": [
    {
      "cellId": "2",
      "answers": [
        {
          "text": "lorem",
          "caseSensitive": true,
          "score": 2
        },
        {
          "text": "ipsum",
          "caseSensitive": true,
          "score": 2
        },
        {
          "text": "dolor",
          "caseSensitive": false,
          "score": -2
        }
      ]
    },
    {
      "cellId": "3",
      "answers": [
        {
          "text": "consectetur",
          "score": 2,
          "caseSensitive": true,
          "feedback": "fugiat nulla pariatur."
        }
      ]
    }
  ]
}


{% endhighlight %}

