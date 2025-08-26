export function isPangram(sentence: string): boolean {
  const letters = new Set<string>();

  for (const ch of sentence.toLowerCase()) {
    if (ch >= 'a' && ch <= 'z') {
      letters.add(ch);
      if (letters.size === 26) return true; // early exit
    }
  }

  return letters.size === 26;
}