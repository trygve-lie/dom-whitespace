# dom-whitespace

Safe removal of whitespace from a DOM. 

Removes whitespace from a HTML document by doing propper DOM manipulating on 
the document. This modules is intended to be used together with server side 
DOM tools such as [jsdom](https://github.com/tmpvar/jsdom) or [phantomjs](http://phantomjs.org/).

Though, this module will work in the browser also.

One example of usage is together with the [gulp-dom](https://github.com/trygve-lie/gulp-dom)
where it can be used to remove whitespace in a [build process](https://github.com/trygve-lie/gulp-dom/tree/master/examples/remove-whitespace).



## Basic example

Example of running this module on a document provided by [jsdom](https://github.com/tmpvar/jsdom):

```js
var whitespace = require('dom-whitespace'),
    jsdom = require('jsdom');

jsdom.env('https://github.com', function(error, window){
    var minified = whitespace.remove(window.document);
    console.log(jsdom.serializeDocument(minified));
    window.close();
});
```



## Installation

```bash
$ npm install dom-whitespace
```



## Tests

```bash
$ npm test
```

Tests are written in [mocha](http://visionmedia.github.io/mocha/).



## License 

The MIT License (MIT)

Copyright (c) 2014 - Trygve Lie - post@trygve-lie.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
