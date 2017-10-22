////
//// Create static pages for all resources.
////
//// Example usage:
////  node ./scripts/details-assemble.js --in ./data-sources/compiled.json --outer-template ./scripts/tmp_static_output_frame.tmpl --body-template ./scripts/tmp_details_pages_output.tmpl --output ./docs
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

// Getthe pre-compiled data sources.
var in_data = argv['i'] || argv['in'];
if( ! in_data ){
    _die('Option (i|in) is required.');
}else{
    _debug('Will use input JSON file: ' + in_data);
}

// Outer/framing template to apply against.
var outer_tmpl = argv['t'] || argv['outer-template'];
if( ! outer_tmpl ){
    _die('Option (t|outer-template) is required.');
}else{
    _debug('Will use outer_tmpl: ' + outer_tmpl);
}

// Inner/body template to apply against.
var body_tmpl = argv['b'] || argv['body-template'];
if( ! body_tmpl ){
    _die('Option (b|body-template) is required.');
}else{
    _debug('Will use body_tmpl: ' + body_tmpl);
}

// Input/output path.
var opath = argv['o'] || argv['output'];
if( ! opath ){
    _die('Option (o|output) is required.');
}else{
    _debug('Will use output path: ' + opath);
}

///
/// Main.
///

// Read on out templates.
var outer_template = fs.readFileSync(outer_tmpl, 'utf-8');
_debug('outer_template', outer_template);
var body_template = fs.readFileSync(body_tmpl, 'utf-8');
_debug('body_template', body_template);

// Cycle through the data sources to apply them to the inner, then
// outer, templates, then output.
var data_sources = JSON.parse(fs.readFileSync(in_data, 'utf-8'));
_debug('data', data_sources);

us.each(data_sources, function(source){

  var sid = source['id'];
  var slbl = source['source'] || sid;

  // Title.
  var title_str = slbl + '(' + sid + ')';
  
  // First, create the path/name of the output file.
  var out_fname = opath + '/' + sid + '.html';

  // Template in the detail body and the JSON.
  var in_body = mustache.render(body_template, source);

  // Template the created body into the shared frame.
  var outstr = mustache.render(outer_template, {
    "title": title_str, 
    "jumbotron": '',
    "body": in_body
  });

  fs.writeFileSync(out_fname, outstr);
  console.log('Write details page: ' + out_fname);
});

