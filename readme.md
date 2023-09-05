# jQuery & Ajax

## Objectives

- Explain what jQuery is and why it's useful
- Use jQuery to manipulate the DOM
- Use jQuery to make AJAX requests

## What is jQuery?

jQuery is a JavaScript library that makes it easier to write JavaScript. It's
a collection of functions that make it easier to do common tasks like
manipulating the DOM, making AJAX requests, and handling events.

## Why use jQuery?

jQuery is a very popular library. It's used by many popular websites, and
many popular JavaScript libraries depend on jQuery. It's also very easy to
learn and use.

## Using jQuery

To use jQuery, you need to include the jQuery library in your HTML. You can
do this by adding a `<script>` tag to your HTML:

```html
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
```

This will include the jQuery library in your HTML. You can then use jQuery
by writing JavaScript code that uses the `$` function. For example, you can
use jQuery to select an element on the page:

```js
$('h1')
```

This will return a jQuery object that contains all of the `h1` elements on
the page. You can then use jQuery methods to manipulate the elements. For
example, you can use the `text` method to change the text of the `h1`
elements:

```js
$('h1').text('Hello, world!')
```

## Manipulating the DOM

jQuery makes it easy to manipulate the DOM. For example, you can use jQuery
to add a new element to the page:

### Ready

```js
$(document).ready(function() {
  // your code here
})
```

### Text

```js
$('h1').text('Hello, world!')
```

### Hide

```js
$('h1').hide()
```

### Show

```js
$('h1').show()
```

### Empty

```js
$('h1').empty()
```

### Append

```js
$('h1').append('<p>Hello, world!</p>')
```

### HTML

```js
$('h1').html('<p>Hello, world!</p>')
```

## Handling events

jQuery makes it easy to handle events. For example, you can use jQuery to
handle a click event:

```js
$('h1').on('click', function() {
  console.log('h1 was clicked!')
})
```

You can also use jQuery to handle a form submission event:

```js
$('form').on('submit', function() {
  console.log('form was submitted!')
})
```

or

```js
$('form').submit(function() {
  console.log('form was submitted!')
})
```

## Making AJAX requests

jQuery makes it easy to make AJAX requests. For example, you can use jQuery
to make a `GET` request to a URL:

```js
$.get('http://example.com', function(data) {
  console.log(data)
})
```

You can also use jQuery to make a `POST` request to a URL:

```js
$.post('http://example.com', {name: 'Avi Flombaum'}, function(data) {
  console.log(data)
})
```

## Demo

### Dom Manipulation

- [ ] .ready()
- [ ] .text()
- [ ] .hide()
- [ ] .show()
- [ ] .empty()
- [ ] .append()
- [ ] .html()

### Event Handling

- [ ] button
- [ ] form

### Ajax

- [ ] get
- [ ] post
- [ ] delete
- [ ] cors (server-side)

## Resources

- [jQuery](https://jquery.com/)
- [jQuery API Documentation](https://api.jquery.com/)
- [jQuery Cheat Sheet](http://oscarotero.com/jquery/)