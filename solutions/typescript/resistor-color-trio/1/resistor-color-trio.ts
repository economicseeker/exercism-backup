
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

export function decodedResistorValue(colors: Color[]): string {
  const ohmValue = (COLORS.indexOf(colors[0])*10+COLORS.indexOf(colors[1]))*(10**COLORS.indexOf(colors[2]))
  if(ohmValue < 1000) {
    return `${ohmValue} ohms`
  } else if(ohmValue < 1000000) {
    return `${(ohmValue/1000).toFixed(0)} kiloohms`
  } else if(ohmValue < 1000000000) {
    return `${(ohmValue/1000000).toFixed(0)} megaohms`
  } else {
    return `${(ohmValue/1000000000).toFixed(0)} gigaohms`
  }
}
