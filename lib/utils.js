/* jshint node: true, strict: true */

"use strict";



/** 
  * Helper for walking down a DOM tree and call a callback on each node. 
  * Shamelessly copied from https://gist.github.com/958000
  */

module.exports.walker = function (node, callback) {
    var depth = 0,
        skip, 
        tmp;

    do {
        if (!skip) {
            skip = callback.call(node, depth) === false;
        }

        if (!skip && (tmp = node.firstChild)) {
            depth++;

        } else if ((tmp = node.nextSibling)) {
            skip = false;

        } else {
            tmp = node.parentNode;
            depth--;
            skip = true;
        }

        node = tmp;

    } while (depth > 0);
};



/** 
  * Helper for removing all child elements of a DOM node
  */

module.exports.removeChildren = function (node) {
    if (node.hasChildNodes()) {
        while (node.childNodes.length >= 1) {
            node.removeChild(node.firstChild);
        }
    }
};
