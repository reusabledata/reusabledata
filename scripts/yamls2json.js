////
//// Convert a set of source YAML files to the compiled single JSON data file.
////
//// Example usage (amigo/master):
////  node ./scripts/yamls2json.js -i ./data-sources/ -o ./data-sources/compiled.json
////

var us = require('underscore');
var fs = require("fs");
var yaml = require('yamljs');
var path = require('path');

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
var in_directory = argv['i'] || argv['in'];
if( ! in_directory ){
    _die('Option (i|in) is required.');
}else{
    _debug('Will use input YAML files here: ' + in_directory);
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

// Read in the YAML files.
var data_sources = [];
var fnames = fs.readdirSync(in_directory);
each(fnames, function(fname){
  if( path.extname(fname) === '.yaml' ){
    
    var obj = yaml.load(in_directory + '/' + fname);
    data_sources.push(obj);
  }
});

// Sort for easier diffing.
data_sources = data_sources.sort(
  function(a, b){
    var aid = a['id'].toUpperCase();
    var bid = b['id'].toUpperCase();

    var ret = 0;
    if (aid < bid) {
      return -1;
    }else if (aid > bid) {
      return 1;
    }

    return ret;
  });

// Output.
var outstr = JSON.stringify(data_sources, null, 4);
_debug("Output:");
_debug(outstr);
fs.writeFileSync(out_file, outstr);
