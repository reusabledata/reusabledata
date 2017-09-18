

all: index.html criteria.html license-types.html reading.html about.html

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

index.html: compiled.json
	node ./scripts/tmp_static_output_gen.js -i ./data-sources/compiled.json -t ./scripts/tmp_static_output_gen.tmpl -o ./docs/index.html

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
