

all: index.html criteria.html license-types.html reading.html about.html enhanced_compiled.json details_pages sitemap

# .PHONY: clean
# clean:
# 	rm docs/criteria.html
#./data-sources/compiled.json

.PHONY: check
check:
	kwalify -E -m ./scripts/source.schema.yaml
	kwalify -E -f ./scripts/source.schema.yaml ./data-sources/*.yaml

###
### index.html, with the table, has extra compilation steps to take it
### from YAML.
###

compiled.json:
	node ./scripts/yamls2json.js -i ./data-sources/ -o ./data-sources/compiled.json

## The also makes
index.html enhanced_compiled.json summary_graph.json: compiled.json
	node ./scripts/tmp_static_output_gen.js -i ./data-sources/compiled.json -t ./scripts/tmp_static_output_gen.tmpl -o ./docs/index.html -s ./data-sources/enhanced_compiled.json -j ./data-sources/summary_graph.json

###
### All of the details pages are generated from running the compiled
### JSON through a generator step.
###

.PHONY: details_pages
details_pages: enhanced_compiled.json
	node ./scripts/details-assemble.js --in ./data-sources/enhanced_compiled.json --outer-template ./scripts/tmp_static_output_frame.tmpl --body-template ./scripts/tmp_details_pages_output.tmpl --output ./docs

###
### Make a sitemap from the docs directory.
###

sitemap: details_pages
	node ./scripts/make-sitemap.js --io ./docs

###
### criteria.html is the "standard" md -> partial-doc html -> assembled doc.
###

criteria.html.seed:
	node ./scripts/md2html.js -i ./docs/criteria.md -o ./docs/criteria.html.seed

criteria.html: criteria.html.seed
	node ./scripts/mustache-inject.js --template ./scripts/tmp_static_output_frame.tmpl --body ./docs/criteria.html.seed -o ./docs/criteria.html

###
### license-types.html is the "standard" md -> partial-doc html -> assembled doc.
###

license-types.html.seed:
	node ./scripts/md2html.js -i ./docs/license-types.md -o ./docs/license-types.html.seed

license-types.html: license-types.html.seed
	node ./scripts/mustache-inject.js --template ./scripts/tmp_static_output_frame.tmpl --body ./docs/license-types.html.seed -o ./docs/license-types.html

###
### reading.html is the "standard" md -> partial-doc html -> assembled doc.
###

reading.html.seed:
	node ./scripts/md2html.js -i ./docs/reading.md -o ./docs/reading.html.seed

reading.html: reading.html.seed
	node ./scripts/mustache-inject.js --template ./scripts/tmp_static_output_frame.tmpl --body ./docs/reading.html.seed -o ./docs/reading.html

###
### about.html is the "standard" md -> partial-doc html -> assembled doc.
###

about.html.seed:
	node ./scripts/md2html.js -i ./docs/about.md -o ./docs/about.html.seed

about.html: about.html.seed
	node ./scripts/mustache-inject.js --template ./scripts/tmp_static_output_frame.tmpl --body ./docs/about.html.seed -o ./docs/about.html
