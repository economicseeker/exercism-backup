export function hey(message: string): string {
  const trimmed = message.trim()

  if (trimmed.length === 0) {
    return "Fine. Be that way!"
  }

  const hasLetters = /[a-zA-Z]/.test(trimmed)
  const isShouting = hasLetters && trimmed === trimmed.toUpperCase()
  const isQuestion = trimmed.endsWith("?")

  if (isShouting && isQuestion) {
    return "Calm down, I know what I'm doing!"
  }

  if (isQuestion) {
    return "Sure."
  }

  if (isShouting) {
    return "Whoa, chill out!"
  }

  return "Whatever."
}
