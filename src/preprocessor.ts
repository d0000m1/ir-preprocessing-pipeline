import { tokenize } from './tokenizer';
import { normalize } from './normalizer';
import { removeStopWords } from './stopwords';
import { stem } from './stemmer';

export function preprocess(text: string) {
  const tokens = tokenize(text);
  const normalized = normalize(tokens);
  const filtered = removeStopWords(normalized);
  const stemmed = stem(filtered);

  return {
    tokens,
    normalized,
    filtered,
    stemmed,
  };
}


