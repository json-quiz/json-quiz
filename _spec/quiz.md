---
title: Quiz
layout: spec
---

# Quiz

## Schema

* A quiz:

  * must be an object

  * must have an *id* property

  * must have a *steps* property

  * may have a *meta* property

* The *id* property:

  * must be a string

* The *steps* property:

  * must be an array

  * should contain at least one step

  * Each step:

    * must be an object

    * must be unique

    * must have an *id* property

    * must have an *items* property

    * The *id* property:

      * must be a string

    * The *items* property:

      * must be an array

      * must contain at least one item

      * Each item:

        * must be unique

        * must satisfy the [content](content.html) or questions schemas

* The *meta* property:

  * must satisfy the [metadata](metadata.html) schema

## Examples

### One question step

{% highlight json %}

{
  "id": "1",
  "steps": [
    {
      "id": "1",
      "items": [
        {
          "id": "1",
          "type": "application/x.choice+json",
          "title": "Question ?",
          "choices": [
            {
              "id": "1",
              "type": "text/plain",
              "data": "True"
            },
            {
              "id": "2",
              "type": "text/plain",
              "data": "False"
            }
          ],
          "random": false,
          "multiple": false
        }
      ]
    }
  ]
}

{% endhighlight %}

### Multiple questions step

{% highlight json %}

{
  "id": "1",
  "steps": [
    {
      "id": "1",
      "items": [
        {
          "id": "1",
          "type": "application/x.choice+json",
          "title": "Question 1 ?",
          "objects": [
            {
              "id": "1",
              "type": "image/png",
              "url": "http://domain.com/image.png"
            }
          ],
          "choices": [
            {
              "id": "2",
              "type": "text/plain",
              "data": "True"
            },
            {
              "id": "3",
              "type": "text/plain",
              "data": "False"
            }
          ],
          "random": false,
          "multiple": false
        },
        {
          "id": "2",
          "type": "application/x.match+json",
          "title": "Question 2 ?",
          "firstSet": [
            {
              "id": "4",
              "type": "text/plain",
              "data": "Item A"
            },
            {
              "id": "5",
              "type": "text/plain",
              "data": "Item B"
            }
          ],
          "secondSet": [
            {
              "id": "6",
              "type": "text/plain",
              "data": "Item C"
            },
            {
              "id": "7",
              "type": "text/plain",
              "data": "Item D"
            }
          ]
        }
      ]
    }
  ]
}

{% endhighlight %}

### Content and question steps

{% highlight json %}

{
  "id": "1",
  "steps": [
    {
      "id": "1",
      "items": [
        {
          "id": "1",
          "type": "text/html",
          "data": "<p>Lorem ipsum dolor <em>sit</em> amet."
        }
      ]
    },
    {
      "id": "2",
      "items": [
        {
          "id": "2",
          "type": "application/x.choice+json",
          "title": "Question ?",
          "choices": [
            {
              "id": "3",
              "type": "text/plain",
              "data": "True"
            },
            {
              "id": "4",
              "type": "text/plain",
              "data": "False"
            }
          ],
          "random": false,
          "multiple": false
        }
      ]
    }
  ]
}

{% endhighlight %}

### Quiz metadata

{% highlight json %}

{
  "id": "1",
  "meta": {
    "authors": [
      {
        "name": "John Doe",
        "email": "john@mail.com"
      }
    ],
    "created": "2015-06-04",
    "license": "CC"
  },
  "steps": [
    {
      "id": "1",
      "items": [
        {
          "id": "1",
          "title": "Question ?",
          "type": "application/x.choice+json",
          "choices": [
            {
              "id": "1",
              "type": "image/png",
              "url": "http://domain.com/image-1.png"
            },
            {
              "id": "2",
              "type": "image/png",
              "data": "http://domain.com/image-2.png"
            },
            {
              "id": "3",
              "type": "image/png",
              "data": "http://domain.com/image-3.png"
            }
          ],
          "random": true,
          "multiple": true
        }
      ]
    }
  ]
}

{% endhighlight %}

