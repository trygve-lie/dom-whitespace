/* jshint node: true, strict: true */

"use strict";

var utils = require('./utils.js');



module.exports.remove = function (doc) {

    var toDel = [];

    utils.walker(doc.documentElement, function(depth){
        if (this.nodeType !== 1) {
            if (this.nodeType === 3 && this.nodeValue.replace(/\s/g, '').length === 0) {
                toDel.push(this);
            } 
        } 
        return true;
    });

    var l = toDel.length;
    while (l--) {
        toDel[l].parentNode.removeChild(toDel[l]);
    }

    return doc;
};
