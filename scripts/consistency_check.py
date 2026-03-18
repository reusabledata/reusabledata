#!/usr/bin/env python3
####
#### Attempt to check the data file for conceptual inconsistencies.
####
#### Example usage:
####  python3 scripts/consistency_check.py -i ./data-sources/compiled.json
####

import argparse
import json
import sys

###
### Helpers.
###

debug = False


def _debug(msg):
    if debug:
        print(msg)


inconsistent_count = 0


def note_inconsistency(src, msg):
    global inconsistent_count
    print('In {}({}/{}): {}'.format(
        src['id'], src['license'], src['license-type'], msg))
    inconsistent_count += 1


###
### Opts.
###

parser = argparse.ArgumentParser(
    description='Check compiled JSON for conceptual inconsistencies.')
parser.add_argument('-i', '--in', dest='input_file', required=True,
                    help='Input compiled JSON file')
parser.add_argument('-d', '--debug', action='store_true', default=False,
                    help='Add extra debugging messages')
args = parser.parse_args()

debug = args.debug
if debug:
    _debug('Debugging is on.')

in_data = args.input_file
_debug('Will use input JSON file: ' + in_data)

###
### Main.
###

with open(in_data, 'r') as f:
    data_sources = json.load(f)

_debug('data: {}'.format(data_sources))

###
### Consistency checking.
###

# See: https://github.com/reusabledata/reusabledata/issues/100
for source in data_sources:

    sid = source['id']
    lic = source['license']
    lictype = source['license-type']
    violations = {}
    for issue in source.get('license-issues', []):
        crit = issue['criteria']
        violations[crit] = True

    if lic == 'unlicensed':
        if lictype != 'copyright':
            note_inconsistency(source, 'lic/type mismatch')
        if ('A.1.2' not in violations or 'A.1.1' in violations
                or 'A.2.1' in violations or 'A.2.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'inconsistent':
        if lictype != 'unknown':
            note_inconsistency(source, 'lic/type mismatch')
        if ('A.1.1' not in violations or 'A.1.2' in violations
                or 'A.2.1' in violations or 'A.2.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'all rights reserved':
        if lictype != 'copyright':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'custom':
        # Anything possible for lictype.
        if ('A.1.1' in violations or 'A.1.2' in violations
                or 'A.2.1' in violations or 'A.2.2' not in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY-ND-3.0':
        if lictype != 'restrictive':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY-NC-4.0':
        if lictype != 'restrictive':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.1' not in violations or 'E.1.1' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY-NC-SA-4.0':
        if lictype != 'restrictive':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'GPL-3.0':
        if lictype != 'copyleft':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'LGPL-2.0-or-later':
        if lictype != 'copyleft':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY-SA-3.0':
        if lictype != 'copyleft':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY-SA-4.0':
        if lictype != 'copyleft':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'ODbL-1.0':
        if lictype != 'copyleft':
            note_inconsistency(source, 'lic/type mismatch')
        if 'D.1.2' not in violations or 'E.1.2' not in violations:
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY-3.0':
        if lictype != 'permissive':
            note_inconsistency(source, 'lic/type mismatch')
        if ('D.1.1' in violations or 'E.1.1' in violations
                or 'D.1.2' in violations or 'E.1.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY-4.0':
        if lictype != 'permissive':
            note_inconsistency(source, 'lic/type mismatch')
        if ('D.1.1' in violations or 'E.1.1' in violations
                or 'D.1.2' in violations or 'E.1.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC-BY':
        if lictype != 'permissive':
            note_inconsistency(source, 'lic/type mismatch')
        if ('D.1.1' in violations or 'E.1.1' in violations
                or 'D.1.2' in violations or 'E.1.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'MIT':
        if lictype != 'permissive':
            note_inconsistency(source, 'lic/type mismatch')
        if ('D.1.1' in violations or 'E.1.1' in violations
                or 'D.1.2' in violations or 'E.1.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'CC0-1.0':
        if lictype != 'permissive':
            note_inconsistency(source, 'lic/type mismatch')
        if ('D.1.1' in violations or 'E.1.1' in violations
                or 'D.1.2' in violations or 'E.1.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif lic == 'public domain':
        if lictype != 'permissive':
            note_inconsistency(source, 'lic/type mismatch')
        if ('A.2.1' not in violations or 'A.1.1' in violations
                or 'A.1.2' in violations or 'A.2.2' in violations):
            note_inconsistency(source, 'req violation issue')
        if ('D.1.1' in violations or 'E.1.1' in violations
                or 'D.1.2' in violations or 'E.1.2' in violations):
            note_inconsistency(source, 'req violation issue')

    elif 'A.2.1' in violations:
        # Double check PD is being used right.
        if lic != 'public domain':
            note_inconsistency(source, 'vio/lic mismatch')

    else:
        note_inconsistency(source, 'no matching template')

###
### Summary.
###

if inconsistent_count == 0:
    print('Free of known inconsistencies.')
    sys.exit(0)
else:
    print('ERROR: Inconsistent count: {}'.format(inconsistent_count),
          file=sys.stderr)
    sys.exit(-1)
