import { texts } from '../data/input-texts';
import goldStandard from '../data/gold-standard.json';
import { preprocess } from './preprocessor';
import { evaluate } from './evaluator';

texts.forEach((text, index) => {
  const output = preprocess(text);

  const gold = goldStandard[
    `text${index + 1}` as keyof typeof goldStandard
  ];

  const result = evaluate(output.stemmed, gold);

  console.log(`\n========== Text ${index + 1} ==========`);
  console.log('O:', output.stemmed);
  console.log('G:', gold);
  console.log('O ∩ G:', result.intersection);
  console.log('Precision:', result.precision);
  console.log('Recall:', result.recall);
  console.log('Extra (O - G):', result.extra);
  console.log('Missed (G - O):', result.missed);
});




