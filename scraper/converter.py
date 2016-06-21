from __future__ import (absolute_import, division, print_function, unicode_literals)

import io
import json
import re
import sys
from argparse import ArgumentParser, ArgumentDefaultsHelpFormatter


def set_up_parser():
    parser = ArgumentParser(description=__doc__,
                            formatter_class=ArgumentDefaultsHelpFormatter)
    parser.add_argument('infile')
    parser.add_argument('--elm', action='store_true')
    return parser


def writeLyric(lyric):
    for line in lyric:
        line = line.strip()
        line = re.sub(r'\[.*\]', '', line)
        line = re.sub(r'-$', '', line)
        line = line.replace(',', ' ,').replace('?', ' ?')
        line = line.replace('(', '( ').replace(')', ' )')
        if not line:
            continue
        print(line)


def main():
    args = set_up_parser().parse_args()
    if args.elm:
        print('[')
        for line in io.open(args.infile, encoding='utf-8'):
            tokens = line.split()
            print('    [' + ', '.join(['"{}"'.format(token) for token in tokens]) + ', "\\n"],')
        print(']')
    else:
        data = json.load(io.open(args.infile, encoding="utf-8"))
        for song in data:
            writeLyric(song["lyric"])


if __name__ == "__main__":
    sys.exit(main())
