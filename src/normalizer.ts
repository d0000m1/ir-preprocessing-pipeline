export function normalize(tokens: string[]): string[] {
  return tokens.map((token) => {
    return token
      .toLowerCase()
      .replace(/\./g, '');
  });
}

