export function evaluate(
  output: string[],
  goldStandard: string[]
) {
  const outputSet = new Set(output);
  const goldSet = new Set(goldStandard);

  const intersection = new Set(
    [...outputSet].filter((term) => goldSet.has(term))
  );

  const extra = [...outputSet].filter(
    (term) => !goldSet.has(term)
  );

  const missed = [...goldSet].filter(
    (term) => !outputSet.has(term)
  );

  const precision =
    outputSet.size === 0
      ? 0
      : intersection.size / outputSet.size;

  const recall =
    goldSet.size === 0
      ? 0
      : intersection.size / goldSet.size;

  return {
    intersection: [...intersection],
    precision,
    recall,
    extra,
    missed,
  };
}

