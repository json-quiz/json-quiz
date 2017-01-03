---
title: Step
layout: spec
---

# Step

## Schema

* A step:

  * must be an object

  * must have an *id* property

  * must have an *items* property

  * may have a *meta* property

  * may have a *parameters* property

* The *id* property:

  * must be a string

* The *items* property:

  * must be an array

  * Each item:

    * must be unique

    * must satisfy the [content](content.html) or questions schemas

* The *parameters* property:

  * must be an object

* The *meta* property:

  * must satisfy the [metadata](metadata.html) schema

## Examples

### One question

{% highlight json %}

{
  "id": "1",
  "items": [
    {
      "id": "1",
      "type": "application/x.choice+json",
      "content": "Question ?",
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

{% endhighlight %}

### One content

{% highlight json %}

{
  "id": "1",
  "items": [
    {
      "id": "1",
      "type": "text/html",
      "data": "<p>Lorem ipsum dolor <em>sit</em> amet."
    }
  ]
}

{% endhighlight %}

### Multiple questions

{% highlight json %}

{
  "id": "1",
  "items": [
    {
      "id": "1",
      "type": "application/x.choice+json",
      "content": "Question 1 ?",
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
      "content": "Question 2 ?",
      "random": false,
      "penalty": 2,
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


{% endhighlight %}

### Step metadata

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

{% endhighlight %}

### With parameters

{% highlight json %}

{
  "id": "1",
  "parameters": {
    "maxAttempts": 0,
    "randomOrder": "once",
    "randomPick": "once",
    "pick": 1
  },
  "items": [
    {
      "id": "1",
      "type": "text/html",
      "data": "<p>Lorem ipsum dolor <em>sit</em> amet."
    }
  ]
}

{% endhighlight %}

