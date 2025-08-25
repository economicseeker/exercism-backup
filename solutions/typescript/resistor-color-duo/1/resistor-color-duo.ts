// 1. Define the colors
export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const
export type Color = typeof COLORS[number]

// 2. Define the function
export function decodedValue(colors: Color[]): number {
  return Number(`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`)
}
