////
//// Attempt to check the data file for conceptual inconsistencies.
////
//// Example usage:
////  node ./scripts/inconsistency_check.js -i ./data-sources/compiled.json
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

var inconsistent_count = 0;
function note_inconsistency(src, msg){
    console.log('In ' + src['id'] +
		'(' + src['license'] + '/' + src['license-type'] + '): ' +
		msg);
    inconsistent_count++;
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

///
/// Main.
///

var data_sources = JSON.parse(fs.readFileSync(in_data, 'utf-8'));
_debug('data', data_sources);

///
/// Consistency checking.
///

// Do primary consistency checking.
// See: https://github.com/reusabledata/reusabledata/issues/100
us.each(data_sources, function(source){

    // The tools we need.
    var sid = source['id'];
    var lic = source['license'];
    var lictype = source['license-type'];
    var violations = {};
    us.each(source['license-issues'], function(issue){
	var crit = issue['criteria'];
	violations[crit] = true;
    });

    if( lic === 'unlicensed' ){
	if( lictype !== 'copyright' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['A.1.2'] || violations['A.1.1'] || violations['A.2.1'] || violations['A.2.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'inconsistent' ){
	if( lictype !== 'unknown' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['A.1.1'] || violations['A.1.2'] || violations['A.2.1'] || violations['A.2.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'all rights reserved' ){
	if( lictype !== 'copyright' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['D.1.2'] || ! violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'custom' ){
	// Anything possible for lictype.
	//
	if( violations['A.1.1'] || violations['A.1.2'] || violations['A.2.1'] || ! violations['A.2.2'] ){
	    //console.log(violations);
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC-BY-ND-3.0' ){
	if( lictype !== 'restrictive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['D.1.2'] || ! violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC-BY-NC-4.0' ){
	if( lictype !== 'restrictive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['D.1.1'] || ! violations['E.1.1'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'GPL-3.0' ){
	if( lictype !== 'copyleft' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['D.1.2'] || ! violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC-BY-SA-3.0' ){
	if( lictype !== 'copyleft' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['D.1.2'] || ! violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC-BY-SA-4.0' ){
	if( lictype !== 'copyleft' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['D.1.2'] || ! violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'ODbL-1.0' ){
	if( lictype !== 'copyleft' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['D.1.2'] || ! violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC-BY-3.0' ){
	if( lictype !== 'permissive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( violations['D.1.1'] || violations['E.1.1'] || violations['D.1.2'] || violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC-BY-4.0' ){
	if( lictype !== 'permissive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( violations['D.1.1'] || violations['E.1.1'] || violations['D.1.2'] || violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'MIT' ){
	if( lictype !== 'permissive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( violations['D.1.1'] || violations['E.1.1'] || violations['D.1.2'] || violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC-BY' ){
	if( lictype !== 'permissive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( violations['D.1.1'] || violations['E.1.1'] || violations['D.1.2'] || violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'CC0-1.0' ){
	if( lictype !== 'permissive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( violations['D.1.1'] || violations['E.1.1'] || violations['D.1.2'] || violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( lic === 'public domain' ){
	if( lictype !== 'permissive' ){
	    note_inconsistency(source, 'lic/type mismatch');
	}
	if( ! violations['A.2.1'] || violations['A.1.1'] || violations['A.1.2'] || violations['A.2.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
	if( violations['D.1.1'] || violations['E.1.1'] || violations['D.1.2'] || violations['E.1.2'] ){
	    note_inconsistency(source, 'req violation issue');
	}
    }else if( violations['A.2.1'] ){ // Double check PD is being used right.
	if( lic === 'public domain' ){
	    note_inconsistency(source, 'vio/lic mismatch');
	}
    }else{
	//_die('License without consistency template.');
	note_inconsistency(source, 'no matching template');
    }
});

//
if( inconsistent_count === 0 ){
    console.log('Free of known inconsistencies.');
}else{
    _die('Inconsistent count: ' + inconsistent_count);
}
