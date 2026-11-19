export function tokenize(text: string): string[] {
  const pattern =
    /(?:[a-z]\.){2,}|[a-z]+(?:-[a-z]+)*(?:['’]s)?/gi;

  const matches = text.match(pattern) ?? [];

  return matches.map((token) =>
    token.replace(/['’]s$/i, '')
  );
}

