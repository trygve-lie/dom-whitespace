/* jshint node: true, strict: true */
/* global describe: true, it: true, before: true */

"use strict";

var fs          = require('fs'),
    mocha       = require('mocha'),
    assert      = require('chai').assert,
    jsdom       = require('jsdom'),
    whitespace  = require('../');



function readFixtures(filePrefix, callback) {
    fs.readFile('./test/fixtures/' + filePrefix + '.source.html', 'utf8', function(err, source){
        fs.readFile('./test/fixtures/' + filePrefix + '.result.html', 'utf8', function(er, result){
            callback(source, result);
        });
    });
}



describe('whitespace.remove()', function(){

    describe('foo', function(){

        before(function(done){
            readFixtures('a', function(source, result){
                this.source = source;
                this.result = result;
                done();
            }.bind(this));
        });

        it('bar', function(done){

            jsdom.env(this.source, function(error, window){
                var minified = whitespace.remove(window.document);
                assert.equal(this.result, jsdom.serializeDocument(minified));
                done();
            }.bind(this));

        });

    });

});
