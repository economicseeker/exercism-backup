export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  private static rollDie(): number {
    return Math.floor(Math.random() * 6) + 1; // 1–6
  }

  public static generateAbilityScore(): number {
    const rolls = [
      this.rollDie(),
      this.rollDie(),
      this.rollDie(),
      this.rollDie(),
    ];
    rolls.sort((a, b) => a - b);          // ascending
    return rolls[1] + rolls[2] + rolls[3]; // drop the lowest (rolls[0])
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
