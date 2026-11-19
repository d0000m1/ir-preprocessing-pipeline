# IR Preprocessing Pipeline

A simple TypeScript project that cleans raw English text for Information Retrieval (IR) and checks the accuracy against a gold standard.

## How It Works

The pipeline (`src/preprocessor.ts`) processes text in 4 steps:

1. **Tokenize (`src/tokenizer.ts`)** – Splits text into words and acronyms, and removes `'s`.
2. **Normalize (`src/normalizer.ts`)** – Makes all letters lowercase and removes dots (e.g., `U.S.A.` → `usa`).
3. **Remove Stopwords (`src/stopwords.ts`)** – Deletes common words like `the`, `is`, and `at`.
4. **Stem (`src/stemmer.ts`)** – Reduces words to their root form using Porter Stemmer (`natural`).

## Evaluation

`src/evaluator.ts` compares the pipeline output with `data/gold-standard.json` and calculates:

- **Intersection** – Matched words
- **Precision** – How many output words are correct
- **Recall** – How many expected words were found

## Project Files

- `data/input-texts.ts` – 7 sample sentences for testing
- `data/gold-standard.json` – Expected output for each sentence
- `src/index.ts` – Runs the pipeline and prints the results
- `src/preprocessor.ts` – Connects the 4 text-cleaning steps
- `src/evaluator.ts` – Scores the results

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the code:

   ```bash
   npx tsx src/index.ts
   ```
