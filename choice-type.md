#Choice type

##Structure

* A choice question:

  * must satisfy #question-common# schema

  * must have a *multiple* property

  * must have a *random* property

  * must have a *choices* property

  * may have a *solutions* property

* The *multiple* property:

  * must be a boolean

* The *random* property:

  * must be a boolean

* The *choices* property:

  * must be an array

  * must contain at least two choices

  * Each choice:

    * must satisfy #content# schema

    * must be unique

* the *solutions* property:

  * must be an array

  * must contain at least one solution

  * Each solution:

    * must be an object

    * must be unique

    * must have an *id* property

    * must have a *score* property

  * The *id* property:

    * must be a string

  * The *score* property:

    * must be a number

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

###full.json

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
  "title": "Question ?",
  "choices": [
    {
      "id": "3",
      "type": "image/png",
      "encoding": "base64",
      "data": "f47544a4211f454e12"
    },
    {
      "id": "4",
      "type": "image/png",
      "encoding": "base64",
      "data": "944fc234fdf454a454213"
    },
    {
      "id": "5",
      "type": "image/png",
      "encoding": "base64",
      "data": "ce5423f23e51a45454962"
    }
  ],
  "random": false,
  "multiple": false,
  "hints": [
    {
      "id": "3",
      "text": "Lorem",
      "penalty": 1
    },
    {
      "id": "5",
      "text": "Ipsum",
      "penalty": 1.5
    }
  ]
}

```

