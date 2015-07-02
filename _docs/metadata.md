---
title: Metadata
layout: default
---

# Metadata

## Schema

* A metadata block:

  * must be an object

  * may have a *title* property

  * may have a *description* property

  * may have an *authors* property

  * may have a *license* property

* The *title* property:

  * must be a string

* The *description* property:

  * must be a string

* The *authors* property:

  * must be an array

  * must contain at least one item

  * Each author:

    * must be an object

    * must be unique

    * must have a *name* property

    * may have an *email* property

  * The *name* property:

    * must be a string

  * The *email* property:

    * must be a string

    * must hold an email address

* The *license* property:

  * must be a string

## Examples

### Author

{% highlight json %}

{
  "authors": [
    {
      "name": "John Doe"
    }
  ]
}

{% endhighlight %}

### Authors and-license

{% highlight json %}

{
  "authors": [
    {
      "name": "John Doe",
      "email": "john@mail.com"
    },
    {
      "name": "Jane Doe",
      "email": "jane@mail.com"
    }
  ],
  "license": "CC"
}

{% endhighlight %}

### Title and-description

{% highlight json %}

{
  "authors": [
    {
      "name": "John Doe"
    }
  ],
  "title": "Lorem",
  "description": "Lorem ipsum dolor sit amet"
}

{% endhighlight %}

### Extra data

{% highlight json %}

{
  "authors": [
    {
      "name": "John Doe",
      "email": "john@mail.com",
      "avatar": {
        "type": "image/png",
        "url": "http://domain.com/john.png"
      }
    }
  ],
  "license": "CC",
  "created": "2015-06-03",
  "modified": "2015-06-08",
  "views": 1546
}

{% endhighlight %}

