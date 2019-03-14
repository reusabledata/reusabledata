////
////
////

// Let jshint pass over over our external globals (browserify takes
// care of it all).
/* global jQuery */
/* global Plotly */
/* global global_data */
/* global global_summary_data */

var us = require('underscore');
var cytoscape = require('cytoscape');
var regCose = require('cytoscape-cose-bilkent');
regCose( cytoscape ); // register extension

// Aliases
var each = us.each;

// Code here will be ignored by JSHint, as we are technically
// "redefining" jQuery (although we are not).
/* jshint ignore:start */
// var jQuery = require('jquery');
/* jshint ignore:end */

///
/// ...
///

var DEBUG = true;
function ll(str){
    if(DEBUG){
        console.log(str);
    }
}

///
var SourceTable = function(table_id){

    console.log('Running source table...');

    var tbl = jQuery('#' + table_id).DataTable({
        //{autoWidth: true, "order": [[3, "desc"], [0, "asc"]]}
        autoWidth: true
    });

    console.log('...table init...');

    // Initialize for license commentary popups.
    jQuery(function(){
        jQuery('[data-toggle="popover"]').popover();
    });
    // And on paging redraw (they are separate).
    tbl.on("draw", function(){
        //console.log('DataTable draw event');
        jQuery('[data-toggle="popover"]').popover();
    });

    console.log('...done.');
};

/// High-level summary of curated data resources
var SummaryViewer = function(summary_data, graph_id){

    console.log('In summary graph init...');
    console.log(summary_data);

    var layout = {
        title: 'High-level summary of curated data resources',
        //width: 500,
        //height: 300,
        paper_bgcolor: "rgb(236, 238, 239)",
        plot_bgcolor: "rgb(236, 238, 239)",
        xaxis: {
            //tickangle: -45
            tickangle: -25
        },
        barmode: 'stack'
    };

    Plotly.newPlot(graph_id, summary_data, layout);

    console.log('...done.');
};

/// Licenses used
var LicenseViewer = function(global_data, graph_id){

    // Generate simple tracks.
    var licount = {};
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var nlbl = n['source'];
	    var lic = n['license'];

	    // Ensure.
	    if( typeof(licount[lic]) === 'undefined' ){
		licount[lic] = 0;
	    }

	    licount[lic] = licount[lic] +1;
	}
    });

    var values = [];
    var labels = [];
    each(licount, function(v, k){
	values.push(v);
	labels.push(k);
    });

    var data = [{
	values: values,
	labels: labels,
	hole: '0.37',
	type: 'pie'
    }];

    var layout = {
        title: 'Licenses used',
	height: 500,
	width: 500
    };

    Plotly.newPlot(graph_id, data, layout);

};

/// Overall license reuse categories
var LicenseTypeViewer = function(global_data, graph_id){

    // Generate simple tracks.
    var licount = {};
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var nlbl = n['source'];
	    var lic = n['license-type'];

	    // Ensure.
	    if( typeof(licount[lic]) === 'undefined' ){
		licount[lic] = 0;
	    }

	    licount[lic] = licount[lic] +1;

	}
    });

    var values = [];
    var labels = [];
    each(licount, function(v, k){
	values.push(v);
	labels.push(k);
    });

    var data = [{
	values: values,
	labels: labels,
	hole: '0.37',
	type: 'pie'
    }];

    var layout = {
        title: 'Overall license reuse categories',
	height: 500,
	width: 500
    };

    Plotly.newPlot(graph_id, data, layout);

};

/// Reuse categories for custom (non-standard) licenses
var LicenseCustomTypeViewer = function(global_data, graph_id){

    // Generate simple tracks.
    var licount = {};
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var nlbl = n['source'];
	    var lictype = n['license-type'];
	    var lic = n['license'];

	    // Filter out all non-custom licenses too.
	    if( lic === 'custom' ){
		// Ensure.
		if( typeof(licount[lictype]) === 'undefined' ){
		    licount[lictype] = 0;
		}

		licount[lictype] = licount[lictype] +1;
	    }
	}
    });

    var values = [];
    var labels = [];
    each(licount, function(v, k){
	values.push(v);
	labels.push(k);
    });

    var data = [{
	values: values,
	labels: labels,
	hole: '0.37',
	type: 'pie'
    }];

    var layout = {
        title: 'Reuse categories for custom (non-standard) licenses',
	height: 500,
	width: 500
    };

    Plotly.newPlot(graph_id, data, layout);

};

/// Standard license groups
var LicenseStandardViewer = function(global_data, graph_id){

    // Generate simple tracks.
    var licount = {};
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var nlbl = n['source'];
	    var lictype = n['license-type'];
	    var lic = n['license'];

	    // Figure out what category any license is in.
	    var category_bin = 'unmapped';

	    if( us.contains(['CC0-1.0', 'CC-BY-4.0', 'CC-BY-3.0', 'CC-BY-SA-4.0', 'CC-BY-SA-3.0', 'CC-BY-NC-4.0', 'CC-BY-NC-3.0', 'CC-BY-ND-4.0', 'CC-BY-ND-3.0'], lic) ){
		category_bin = 'Creative Commons';
	    }else if( us.contains(['MIT', 'GPL-3.0'], lic) ){
		category_bin = 'OSI (standard software)';
	    }else if( us.contains(['ODbL-1.0'], lic) ){
		category_bin = 'ODC (standard data)';
	    }else if( lic === 'all rights reserved' || lic === 'unlicensed' ){
		category_bin = 'US copyright (inc. none)';
	    }else if( lic === 'public domain' ){
		category_bin = 'US public domain';
	    }else if( lic === 'custom' ){
		category_bin = 'custom';
	    }else if( lic === 'inconsistent' ){
		category_bin = 'inconsistent';
	    }

	    // We missed something...
	    if( category_bin === 'unmapped' ){
		console.log('WARNING: missed standard license category: '+lic+'!');
	    }

	    // Ensure and count.
	    if( typeof(licount[category_bin]) === 'undefined' ){
		licount[category_bin] = 0;
	    }
	    licount[category_bin] = licount[category_bin] +1;
	}
    });

    var values = [];
    var labels = [];
    each(licount, function(v, k){
	values.push(v);
	labels.push(k);
    });

    var data = [{
	values: values,
	labels: labels,
	hole: '0.37',
	type: 'pie'
    }];

    var layout = {
        title: 'Standard license groups',
	height: 500,
	width: 500
    };

    Plotly.newPlot(graph_id, data, layout);

};

/// Score distribution
var ScoreViewer = function(global_data, graph_id){

    // Base track.
    var x = [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0];

    // Generate size scaling.
    var scount = {};
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var nlbl = n['source'];
	    var score = n['grade-automatic'];

	    // Ensure.
	    if( typeof(scount[score]) === 'undefined' ){
		scount[score] = 0;
	    }

	    scount[score] = scount[score] +1;
	}
    });
    var size = [];
    each(x, function(t){
	var cnt = 0;
	if( typeof(scount[t]) !== 'undefined' ){
	    //mag = scount[t.toString()] * 10;
	    cnt = scount[t];
	}
	size.push(cnt);
    });

    console.log(x);
    console.log(size);

    // Assemble trace.
    var trace = {
	x: x,
	y: size,
	marker: {
	    color: 'rgb(158,202,225)',
	    opacity: 0.6,
	    line: {
		color: 'rbg(8,48,107)',
		width: 1.5
	    },
	},
	type: 'bar'
    };
    var data = [trace];

    var layout = {
	title: 'Score distribution',
	xaxis: {
	    title: "Score",
	    autotick: false,
	    dtick: 0.5
	},
	yaxis: {title: "Count"}
    };

    Plotly.newPlot(graph_id, data, layout);
};

/// Resource interactions
var InteractionViewer = function(global_data, graph_id){

    var graph_layout = 'circle'; // default
    //var graph_layout = 'cose-bilkent'; // default
    var elements = []; // for cytoscape

    // We are trying to grossly gauge the ability to reuse other
    // licenses with:
    //  1) not requiring a change in our own license and
    //  2) only having a minimal of extra work involved, such as
    //     adding attribution, etc.
    //  3) Can redistribute under similar terms as self, or have complete
    //     control in the case of USC, etc.
    var ability_to_reuse = {
	'public domain': { // PD not intl portable?
	    'public domain': true
	},
	'CC0-1.0': { // PD-style
	    'public domain': true,
	    'CC0-1.0': true,
	},
	'MIT': { // attribution-only licenses
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true
	},
	'CC-BY-4.0': { // attribution-only licenses
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true
	},
	'CC-BY-3.0': { // attribution-only licenses
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true
	},
	'CC-BY-SA-4.0': { // copyleft licenses can absorb lesser; CC group compatible?
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true,
	    'CC-BY-SA-4.0': true,
	    'CC-BY-SA-3.0': true
	},
	'CC-BY-SA-3.0': { // copyleft licenses can absorb lesser; CC group compatible?
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true,
	    'CC-BY-SA-4.0': true,
	    'CC-BY-SA-3.0': true
	},
	'GPL-3.0': { // copyleft licenses can absorb lesser; GPL compatible
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true,
	    'GPL-3.0': true
	},
	'ODbL-1.0': { // copyleft licenses can absorb lesser; ODbL compatible
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true,
	    'ODbL-1.0': true
	},
	'CC-BY-NC-4.0': { // NC can take anything "weaker" and weaker CC?
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true,
	    'CC-BY-NC-4.0': true
	},
	'CC-BY-ND-3.0': { // ND can take anything "weaker" and weaker CC?
	    'public domain': true,
	    'CC0-1.0': true,
	    'MIT': true,
	    'CC-BY-4.0': true,
	    'CC-BY-3.0': true,
	    'CC-BY-NC-3.0': true
	},
	'all rights reserved': {
	    'public domain': true,
	    'CC0-1.0': true
	},
	'unlicensed': {
	    'public domain': true,
	    'CC0-1.0': true
	},
	'inconsistent': {
	    'public domain': true,
	    'CC0-1.0': true
	},
	'custom': {
	    'public domain': true,
	    'CC0-1.0': true
	}
    };

    // Capture/cache license<->resource info.
    var license2idlist = {};
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var lic = n['license'];

	    // Save who is in what group for licensing interactions.
	    if( ! license2idlist[lic] ){
		license2idlist[lic] = [];
	    }
	    license2idlist[lic].push(nid);
	}
    });

    // Okay, one more time around, this time looking at licensing info
    // for interactions (edges). Collect degree i/o info along the way.
    var in_degree = {};
    var out_degree = {};
    var max_in = 1;
    var max_out = 1;
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var nlbl = n['source'];
	    var lic = n['license'];

	    if( ! ability_to_reuse[lic] ){
		console.log('WARNING: somehow missed interaction for: ' + lic);
	    }else{

		each( us.keys(ability_to_reuse[lic]), function(okay_lic){

		    each( license2idlist[okay_lic], function(cohort_id){
			if( nid !== cohort_id ){

			    // Ensure the data structure for capturing
			    // out degree.
			    if( typeof(out_degree[nid]) === 'undefined' ){
				out_degree[nid] = 0;
			    }
			    // Ensure the data structure for capturing in degree.
			    if( typeof(in_degree[cohort_id]) === 'undefined' ){
				in_degree[cohort_id] = 0;
			    }
			    out_degree[nid] = out_degree[nid] + 1;
			    in_degree[cohort_id] = in_degree[cohort_id] + 1;

			    // Get the maxes for range.
			    if( out_degree[nid] > max_out ){
				max_out = out_degree[nid];
			    }
			    if( in_degree[cohort_id] > max_in ){
				max_in = in_degree[cohort_id];
			    }

			    // console.log('degrees ('+ nid +'/'+ cohort_id +'): '+
			    // 		out_degree[nid] +', '+ in_degree[cohort_id]);

			    // Push edge data.
			    elements.push({
				group: 'edges',
				data: {
				    source: nid,
				    target: cohort_id,
				    predicate: 'ability_to_reuse',
				    label: 'could reuse',
				    color: '#009999',
				    glyph: 'triangle'
				}
			    });
			}
		    });
		});
	    }
	}
    });

    // console.log(us.keys(in_degree).length);
    // console.log(in_degree);
    // console.log(max_in);

    // Finally, translate into something cytoscape can understand for
    // nodes.
    each(global_data, function(n){

	if( n['status'] === 'complete' ){

	    var nid = n['id'];
	    var nlbl = n['source'];
	    var lic = n['license'];

	    // Trim and special labels for overly long/weird ones.
	    if( nlbl.indexOf('(') !== -1 ){
		nlbl = nlbl.slice(0, nlbl.indexOf('(') -1);
	    }
	    if( nid === 'panther' ){
		nlbl = 'PANTHER';
		// }else if( nid === 'clinvar' ){
		//     nlbl = '';
	    }

	    // Push into cytoscape struct.
	    // console.log('degrees (' + nid + '): ' +
	    // 		in_degree[nid] + ', ' + out_degree[nid]);
	    elements.push({
		group: 'nodes',
		data: {
		    id: nid,
		    label: nlbl,
		    idegree: in_degree[nid],
		    odegree: out_degree[nid]
		}
	    });
	}
    });

    // Setup possible layouts.
    var layout_opts = {
	'cose': {
	    name: 'cose',
	    padding: 10,
	    //animate: false,
	    animate: true,
	    'directed': true,
	    'fit': true
	    // //'maximalAdjustments': 0,
	    // 'circle': false,
	    //'roots': cyroots
	},
	'cose-bilkent': {
	    name: 'cose-bilkent',
	    // // Called on `layoutready`
	    // ready: function () {
	    // },
	    // // Called on `layoutstop`
	    // stop: function () {
	    // },
	    // // Whether to include labels in node dimensions. Useful for avoiding label overlap
	    // nodeDimensionsIncludeLabels: false,
	    // // number of ticks per frame; higher is faster but more jerky
	    // refresh: 30,
	    // // Whether to fit the network view after when done
	    // fit: true,
	    // // Padding on fit
	    // padding: 10,
	    // // Whether to enable incremental mode
	    randomize: true//,
	    // // Node repulsion (non overlapping) multiplier
	    // nodeRepulsion: 4500,
	    // // Ideal (intra-graph) edge length
	    //		idealEdgeLength: 150,
	    // // Divisor to compute edge forces
	    // edgeElasticity: 0.45,
	    // // Nesting factor (multiplier) to compute ideal edge length for inter-graph edges
	    // nestingFactor: 0.1,
	    // // Gravity force (constant)
	    // gravity: 0.25,
	    // // Maximum number of iterations to perform
	    // numIter: 2500,
	    // // Whether to tile disconnected nodes
	    // tile: true,
	    // // Type of layout animation. The option set is {'during', 'end', false}
	    // animate: 'end',
	    // // Amount of vertical space to put between degree zero nodes during tiling (can also be a function)
	    // tilingPaddingVertical: 10,
	    // // Amount of horizontal space to put between degree zero nodes during tiling (can also be a function)
	    // tilingPaddingHorizontal: 10,
	    // // Gravity range (constant) for compounds
	    // gravityRangeCompound: 1.5,
	    // // Gravity force (constant) for compounds
	    // gravityCompound: 1.0,
	    // // Gravity range (constant)
	    // gravityRange: 3.8,
	    // // Initial cooling factor for incremental layout
	    // initialEnergyOnIncremental:0.8
	},
	'random': {
	    name: 'random',
	    fit: true
	},
	'grid': {
	    name: 'grid',
	    fit: true,
	    padding: 30,
	    rows: undefined,
	    columns: undefined
	},
	'circle': {
	    name: 'circle',
	    fit: true,
	    // sort: function(a, b){
	    // 	var ai = a.data('idegree') || 1;
	    // 	var bi = b.data('idegree') || 1;
	    // 	var ao = (a.data('odegree') || 0) * 0.1;
	    // 	var bo = (b.data('odegree') || 0) * 0.1;
	    // 	//console.log('sort: ' + ai + ', ' + bi);
	    // 	return (ai + ao) - (bi + bo);
	    // }
	},
	'breadthfirst': {
	    name: 'breadthfirst',
	    directed: true,
	    fit: true,
	    //nodeDimensionsIncludeLabels: true,
	    spacingFactor: 1.0,// 1.75,
	    padding: 30,// 30,
	    //maximalAdjustments: 0,
	    circle: false//,
	    //roots: root_ids
	}
	// 'arbor': {
	// 	name: 'arbor',
	// 	fit: true, // whether to fit to viewport
	// 	padding: 10 // fit padding
	// },
    };

    // Ramp up view.
    var cy = cytoscape({
	// UI loc
	container: document.getElementById(graph_id),
	// actual renderables
	elements: elements,
	layout: layout_opts[graph_layout],
	style: [
	    {
		selector: 'node',
		style: {
		    'content': 'data(label)',
		    //			'width': 150,
		    //			'height': 100,
		    'width': 50,
		    'height': 35,
		    'background-color': 'mapData(idegree, 0, '+max_in+', yellow, green)',
		    //'color': 'mapData(odegree, 0, 100, blue, red)',
		    //'background-color': 'white',
		    //'background-color': 'black',
                    'color': 'black',
		    'border-width': 1,
		    'border-color': 'black',
		    //'font-size': 14,
		    'font-size': 8,
		    'min-zoomed-font-size': 3, //10,
                    'text-valign': 'center',
		    'shape': 'roundrectangle',
		    //'shape': show_shape,
		    //'text-outline-width': 1,
		    //'text-outline-color': '#222222',
		    'text-wrap': 'wrap',
		    'text-max-width': '48px'
		}
	    },
	    {
		selector: 'edge',
		style: {
		    // NOTE/WARNING: From
		    // http://js.cytoscape.org/#style/edge-line
		    // and other places, we need to use 'bezier'
		    // here, rather than the default 'haystack'
		    // because the latter does not support glyphs
		    // on the endpoints. However, this apparently
		    // incurs a non-trivial performance hit.
		    'curve-style': 'bezier',
		    'text-rotation': 'autorotate',
		    'text-margin-y': '-6px',
		    'target-arrow-color': 'data(color)',
		    'target-arrow-shape': 'data(glyph)',
		    'target-arrow-fill': 'filled',
		    'line-color': 'data(color)',
		    'content': 'data(label)',
		    'font-size': 6,
		    'min-zoomed-font-size': 3, //10,
                    'text-valign': 'center',
                    'color': 'white',
		    //			'width': 6,
                    'text-outline-width': 1,
		    'text-outline-color': '#222222'
		}
	    }
	],
	// initial viewport state:
	//zoom: 1,
	//pan: { x: 0, y: 0 },
	// interaction options:
	minZoom: 0.1,
	maxZoom: 3.0,
	zoomingEnabled: true,
	userZoomingEnabled: true,
	wheelSensitivity: 0.25,
	panningEnabled: true,
	userPanningEnabled: true,
	boxSelectionEnabled: true,
	selectionType: 'single',
	touchTapThreshold: 8,
	desktopTapThreshold: 4,
	autolock: false,
	autoungrabify: false,
	autounselectify: false,
	ready: function(){
	    ll('interaction graph ready for: ' + graph_id);
	}
    });

    //
    cy.viewport({
	//zoom: 2//,
	//pan: { x: 100, y: 100 }
    });
};

///
/// ...
///

module.exports = {
    'LicenseViewer': LicenseViewer,
    'LicenseTypeViewer': LicenseTypeViewer,
    'LicenseCustomTypeViewer': LicenseCustomTypeViewer,
    'LicenseStandardViewer': LicenseStandardViewer,
    'ScoreViewer': ScoreViewer,
    'SummaryViewer': SummaryViewer,
    'InteractionViewer': InteractionViewer,
    'SourceTable': SourceTable
};

///
/// ...
///

jQuery(document).ready(function(){
    console.log('JQuery/page ready...');
    if( jQuery("#licensegraph") && jQuery("#licensegraph").length ){
        console.log('Running license graph...');
        window.RUD.LicenseViewer(global_data, 'licensegraph');
    }
    if( jQuery("#licensetypegraph") && jQuery("#licensetypegraph").length ){
        console.log('Running license type graph...');
        window.RUD.LicenseTypeViewer(global_data, 'licensetypegraph');
    }
    if( jQuery("#licensecustomtypegraph") && jQuery("#licensecustomtypegraph").length ){
        console.log('Running custom license type graph...');
        window.RUD.LicenseCustomTypeViewer(global_data, 'licensecustomtypegraph');
    }
    if( jQuery("#licensestandardgraph") && jQuery("#licensestandardgraph").length ){
        console.log('Running license standard graph...');
        window.RUD.LicenseStandardViewer(global_data, 'licensestandardgraph');
    }
    if( jQuery("#scoregraph") && jQuery("#scoregraph").length ){
        console.log('Running score graph...');
        window.RUD.ScoreViewer(global_data, 'scoregraph');
    }
    if( jQuery("#summarygraph") && jQuery("#summarygraph").length ){
        console.log('Running summary graph...');
        window.RUD.SummaryViewer(global_summary_data, 'summarygraph');
    }
    if( jQuery("#interactiongraph") && jQuery("#interactiongraph").length ){
        console.log('Running interaction graph...');
        window.RUD.InteractionViewer(global_data, 'interactiongraph');
    }
    if( jQuery("#sourcestable") && jQuery("#sourcestable").length ){
        console.log('Running source table...');
        window.RUD.SourceTable('sourcestable');
    }
});
