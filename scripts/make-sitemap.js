////
//// Create a sitemap.
////
//// Example usage:
////  node make-sitemap.js --io ./docs/
////

var us = require('underscore');
var glob = require('glob');
var fs = require("fs");
var path = require("path");
var mustache = require("mustache");

///
/// Helpers.
///

// Aliases.
var each = us.each;

function _ll(arg1){
    console.log(arg1);
}

var debug = false;
function _debug(arg1){
    if( debug ){
	console.log(arg1);
    }
}

// Two or one  args.
function _die(m1, m2){
    if( typeof(m2) !== 'undefined' ){
	console.error('ERROR:', m1, m2);
    }else{
	console.error('ERROR:', m1);
    }
    process.exit(-1);
}

///
/// Opts.
///

var argv = require('minimist')(process.argv.slice(2));

// Add extra "debugging" messages.
debug = argv['d'] || argv['debug'];
if( debug ){
    _debug('Debugging is on.');
}else{
}

// Output path.
var iopath = argv['io'];
if( ! iopath ){
    _die('Option (io) is required.');
}else{
    _debug('Will use input/output directory: ' + iopath);
}

///
/// Main.
///

var all_pages = glob.sync(iopath + '/*.html');

// Just filename.
all_pages = us.map(all_pages, function(p){ return path.basename(p); });

var template = fs.readFileSync('scripts/sitemap.tmpl', 'utf-8');
var body = mustache.render(template, {'pages': all_pages});
fs.writeFileSync(iopath + '/sitemap.xml', body);

console.log('Wrote sitemap.xml.');
