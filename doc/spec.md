#Metadata

##Structure

A metadata block:

  * must be an object

  * may have a *title* property

  * may have a *description* property

  * may have an *authors* property

  * may have a *license* property

The *title* property:

  * must be a string

The *description* property:

  * must be a string

The *authors* property:

  * must be an array

  * must contain at least one item

  Each author:

    * must be an object

    * must be unique

    * must have a *name* property

    * may have an *email* property

  The *name* property:

    * must be a string

  The *email* property:

    * must be a string

    * must hold an email address

The *license* property:

  * must be a string

##Examples

###author.json

```json

{
  "authors": [
    {
      "name": "John Doe"
    }
  ]
}

```

###authors-and-license.json

```json

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

```

###title-and-description.json

```json

{
  "authors": [
    {
      "name": "John Doe"
    }
  ],
  "title": "Lorem",
  "description": "Lorem ipsum dolor sit amet"
}

```

###extra-data.json

```json

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

```

#Content

##Structure

A content block:

  * must be an object

  * must have an *id* property

  * must have a *type* property

  * must have either a *data* or an *url* property

  * may have a *meta* block

The *id* property:

  * must be a string

The *type* property:

  * must be a string

  * must hold a MIME type

The *url* property:

  * must be a string

  * must hold an URL

The *data* property:

  * must be a string

  * may have an associated *encoding* property

  The *encoding* property:

    * must be a string

The *meta* property:

  * must be a #metadata# block

##Examples

###html.json

```json

{
  "id": "1",
  "type": "text/html",
  "data": "<p>Lorem ipsum dolor sit amet</p>"
}

```

###distant-media.json

```json

{
  "id": "1",
  "type": "image/png",
  "url": "http://domain.com/image-1.png"
}

```

###embedded-media.json

```json

{
  "id": "1",
  "type": "image/png",
  "encoding": "base64",
  "data": "f47544a4211f454e12"
}

```

###metadata.json

```json

{
  "id": "1",
  "type": "image/png",
  "url": "http://domain.com/cat.png",
  "meta": {
    "authors": [
      {
        "name": "John Doe",
        "email": "john@mail.com"
      }
    ],
    "license": "CC",
    "created": "2012-08-09",
    "description": "A black cat"
  }
}

```

#Choice type

##Structure

A choice question:

  * must be an object

  * must have an *id* property

  * must have a *title* property

  * must have a *multiple* property

  * must have a *random* property

  * must have a *choices* property

  * may have an *meta* property

  * may have an *objects* property

  * may have a *resources* property

  * may have a *feedback* property

  * may have a *solutions* property

The *id* property:

  * must be a string

The *title* property:

  * must be a string

The *multiple* property:

  * must be a boolean

The *random* property:

  * must be a boolean

The *choices* property:

  * must be an array

  * must contain at least two choices

  Each choice:

    * must be a #content# block

    * must be unique

The *meta* property:

  * must be a #metadata# block

The *objects* property:

  * must be an array

  * must contain at least one object

  Each object:

    * must be a #content# block

    * must be unique

The *resources* property:

  * must be an array

  * must contain at least one resource

  Each resource:

    * must be a #content# block

    * must be unique

The *hints* property:

  * must be an array

  * must contain at least one hint

  Each hint:

    * must be an object

    * must be unique

    * must have an *id* property

    * must have a *text* property

    * may have a *penalty* property

  The *id* property:

    * must be a string

  The *text* property:

    * must be a string

  The *penalty* property:

    * must be a number

    * must be greater than zero

the *solutions* property:

  * must be an array

  * must contain at least one solution

  Each solution:

    * must be an object

    * must be unique

    * must have an *id* property

    * must have a *score* property

  The *id* property:

    * must be a string

  The *score* property:

    * must be a number

The *feedback* property:

  * must be a string

##Examples

###true-false.json

```json

{
  "id": "1",
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

```

###with-metadata.json

```json

{
  "id": "1",
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

```

###with-object.json

```json

{
  "id": "1",
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
  "title": "Is the previous text written in english ?",
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
}

```

###with-resource.json

```json

{
  "id": "1",
  "title": "Question ?",
  "resources": [
    {
      "id": "1",
      "type": "application/pdf",
      "url": "http://domain.com/syllabus.txt"
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
}

```

###global-feedback.json

```json

{
  "id": "1",
  "title": "Question ?",
  "choices": [
    {
      "id": "1",
      "type": "text/plain",
      "data": "A"
    },
    {
      "id": "2",
      "type": "text/plain",
      "data": "B"
    },
    {
      "id": "2",
      "type": "text/plain",
      "data": "C"
    }
  ],
  "random": false,
  "multiple": false,
  "feedback": "Lorem ipsum dolor sit amet"
}

```

###hints-no-penalty.json

```json

{
  "id": "1",
  "title": "Question ?",
  "choices": [
    {
      "id": "1",
      "type": "image/png",
      "encoding": "base64",
      "data": "f47544a4211f454e12"
    },
    {
      "id": "2",
      "type": "image/png",
      "encoding": "base64",
      "data": "944fc234fdf454a454213"
    }
  ],
  "random": false,
  "multiple": false,
  "hints": [
    {
      "id": "1",
      "text": "Lorem"
    },
    {
      "id": "2",
      "text": "Ipsum"
    }
  ]
}

```

###hints-penalty.json

```json

{
  "id": "1",
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
  "multiple": false,
  "hints": [
    {
      "id": "1",
      "text": "Lorem",
      "penalty": 1
    },
    {
      "id": "2",
      "text": "Ipsum",
      "penalty": 1.5
    }
  ]
}

```

###solutions.json

```json

{
  "id": "1",
  "title": "Question ?",
  "choices": [
    {
      "id": "1",
      "type": "image/png",
      "url": "http://domain.com/image-1.png",
      "meta": {
        "description": "Image 1"
      }
    },
    {
      "id": "2",
      "type": "image/jpg",
      "url": "http://domain.com/image-2.jpg",
      "meta": {
        "description": "Image 2"
      }
    },
    {
      "id": "3",
      "type": "image/png",
      "url": "http://domain.com/image-3.png",
      "meta": {
        "description": "Image 3"
      }
    }
  ],
  "random": false,
  "multiple": false,
  "solutions": [
    {
      "id": "1",
      "score": 2
    },
    {
      "id": "3",
      "score": 1
    }
  ]
}

```

