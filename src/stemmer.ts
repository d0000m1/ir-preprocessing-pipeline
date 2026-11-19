import natural from 'natural';

const stemmer = natural.PorterStemmer;

export function stem(tokens: string[]): string[] {
  return tokens.map((token) => stemmer.stem(token));
}

