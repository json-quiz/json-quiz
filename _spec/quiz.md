---
title: Quiz
layout: spec
---

# Quiz

## Schema

* A quiz:

  * must be an object

  * must have an *id* property

  * must have a *title* property

  * must have a *steps* property

  * may have a *meta* property

* The *id* property:

  * must be a string

* The *title* property:

  * must be a string

* The *steps* property:

  * must be an array

  * Each step:

    * must satisfy the [step](step.html) schema

    * must be unique

* The *meta* property:

  * must satisfy the [metadata](metadata.html) schema

## Examples

### Content and question steps

{% highlight json %}

{
  "id": "1",
  "title": "quiz title",
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
          "content": "Question ?",
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
  "title": "quiz title",
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
          "content": "Question ?",
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

