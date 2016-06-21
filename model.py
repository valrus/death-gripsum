import os
import sys
from argparse import ArgumentParser, ArgumentDefaultsHelpFormatter
from collections import Counter, defaultdict
from json import dumps
from itertools import chain

from nltk import trigrams
from nltk.probability import ConditionalFreqDist, ConditionalProbDist, KneserNeyProbDist
from nltk.tokenize import TweetTokenizer
from nltk.util import everygrams

LYRICS_FILE = os.path.join(os.path.dirname(__file__), 'data', 'lyrics.txt')


class NgramTree(object):
    def __init__(self, value=0):
        self.value = value
        self.children = defaultdict(NgramTree)

    def insert(self, ngram, count):
        head, rest = ngram[0], ngram[1:]
        self.children[head].value += count
        if rest:
            self.children[head].insert(rest)


def set_up_parser():
    parser = ArgumentParser(description=__doc__,
                            formatter_class=ArgumentDefaultsHelpFormatter)
    return parser


def context(ngram):
    return tuple(ngram[:-1])


def get_cfdist(sentences):
    cfdist = ConditionalFreqDist(
        (context(ngram), ngram[-1])
        for ngram in chain.from_iterable(everygrams(sentence, max_len=3)
                                         for sentence in sentences)
    )
    return cfdist


def main():
    args = set_up_parser().parse_args()
    tokenizer = TweetTokenizer()
    with open(LYRICS_FILE) as lyrics_file:
        lyrics_tokens = [tokenizer.tokenize(line.lower()) for line in lyrics_file]
    vocab = Counter(chain(*lyrics_tokens))
    cfdist = get_cfdist(lyrics_tokens)
    cfdict = {' '.join(key): value for key, value in cfdist.items()}
    print(dumps(cfdict))


if __name__ == "__main__":
    sys.exit(main())
