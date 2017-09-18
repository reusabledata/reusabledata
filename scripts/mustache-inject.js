////
//// Temporarily create a static page listing concerns; still want the
//// one-page app.
////
//// Example usage:
////  node ./scripts/mustache-inject.js --template ./scripts/tmp_static_output_frame.tmpl --body ./docs/criteria.html.seed -o ./docs/criteria.html
////

var us = require('underscore');
var fs = require("fs");
var yaml = require('yamljs');
var mustache = require('mustache');
var pug = require('pug');

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

// Templte to apply against.
var in_tmpl = argv['t'] || argv['template'];
if( ! in_tmpl ){
    _die('Option (t|template) is required.');
}else{
    _debug('Will use input JSON file: ' + in_tmpl);
}

// jumbotron as html file.
var in_jumbotron = '';
var in_jumbotron_fname = argv['j'] || argv['jumbotron'];
if( in_jumbotron_fname ){
  in_jumbotron = fs.readFileSync(in_jumbotron_fname).toString();
}

// body as html file.
var in_body = '';
var in_body_fname = argv['b'] || argv['body'];
if( in_body_fname ){
  in_body = fs.readFileSync(in_body_fname).toString();
}

// title as string
var title_str = argv['a'] || argv['title'];
if( ! title_str ){
    title_str = '(Re)usable Data Project';
}

// outfile
var out_file = argv['o'] || argv['out'];
if( ! out_file ){
    _die('Option (o|out) is required.');
}else{
    _debug('Will use output file: ' + out_file);
}

///
/// Main.
///

// Mustache for final.
var template = fs.readFileSync(in_tmpl, 'utf-8');
_debug('template', template);

var outstr = mustache.render(template, {
  "title": title_str, 
  "jumbotron": in_jumbotron,
  "body": in_body
});

fs.writeFileSync(out_file, outstr);
