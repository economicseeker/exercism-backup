const rules: Record<string, string> = {
  A: "U",
  T: "A",
  G: "C",
  C: "G",
};

export function toRna(text: string): string {
  let result = "";

  for (const char of text) {
    if (rules[char] !== undefined) {
      result += rules[char];
    } else {
      throw new Error(`Invalid input DNA.`);
    }
  }

  return result;
}
