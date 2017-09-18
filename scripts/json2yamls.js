////
//// Convert a compiled JSON file (for app use) into the constituent
//// source YAML files. Good for trying to do bulk updates using Emacs
//// keyboard macros or something as well.
////
//// Example usage (amigo/master):
////  node ./scripts/json2yamls.js -i ./data-sources/compiled.json -o ./data-sources/
////

var us = require('underscore');
var fs = require("fs");
var yaml = require('yamljs');

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
var in_file = argv['i'] || argv['in'];
if( ! in_file ){
    _die('Option (i|in) is required.');
}else{
    _debug('Will use input JSON file: ' + in_file);
}

//
var out_directory = argv['o'] || argv['out'];
if( ! out_directory ){
    _die('Option (o|out) is required.');
}else{
    _debug('Will use output directory: ' + out_directory);
}

///
/// Main.
///

var data_source_list = JSON.parse(fs.readFileSync(in_file, 'utf-8'));

each(data_source_list, function(src){

    var ystr = yaml.stringify(src);
    var id = src['id'];

    var outfstr = out_directory + '/' + id + '.yaml';
    _debug('outfile: ' + outfstr);
    fs.writeFileSync(outfstr, ystr);
});
