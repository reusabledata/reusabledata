////
//// Temporarily create a static page from a GH-flavored Markdown
//// file; still want the one-page app.
////
//// Example usage:
////  node ./scripts/md2html.js -i ./docs/criteria.md -o ./docs/criteria.html.seed
////

var us = require('underscore');
var fs = require("fs");
var md = require('markdown');

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

//
var in_data = argv['i'] || argv['in'];
if( ! in_data ){
    _die('Option (i|in) is required.');
}else{
    _debug('Will use input JSON file: ' + in_data);
}

//
var out_file = argv['o'] || argv['out'];
if( ! out_file ){
    _die('Option (o|out) is required.');
}else{
    _debug('Will use output file: ' + out_file);
}

///
/// Main.
///

var md_raw = fs.readFileSync(in_data).toString();
var html = md.markdown.toHTML(md_raw);

// Convert the escaped HTML back.
var rehtml = html.replace(/\&gt\;/g, '>');
rehtml = rehtml.replace(/\&lt\;/g, '<');
rehtml = rehtml.replace(/\&quot\;/g, '"');

fs.writeFileSync(out_file, rehtml);
