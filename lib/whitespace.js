/* jshint node: true, strict: true */

"use strict";

var utils = require('./utils.js');



module.exports.remove = function (doc) {

    var minified = doc.createDocumentFragment();

    utils.walker(doc.documentElement, function(depth){

        // Clone only #element nodes and #text nodes which is not only whitespace

        if ((this.nodeType === 1) || (this.nodeType === 3 && this.nodeValue.replace(/\s/g, '').length)) {
            var clone   = this.cloneNode(false),
                child   = minified,
                i       = 0;

            for (i = 0; i < depth; i += 1) {
                child = child.lastChild;
            }

            child.appendChild(clone);
        }

        return true;
    });
    
    utils.removeChildren(doc.documentElement);
    doc.appendChild(minified);

    return doc;
};
