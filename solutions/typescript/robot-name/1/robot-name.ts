export class Robot {
  private static usedNames = new Set<string>();
  private _name: string;

  constructor() {
    this._name = Robot.generateUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = Robot.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  // ---- private helpers ----
  private static generateUniqueName(): string {
    if (Robot.usedNames.size >= 26 * 26 * 1000) {
      throw new Error("All possible robot names have been used");
    }

    let newName: string;
    do {
      newName = Robot.generateRandomName();
    } while (Robot.usedNames.has(newName));

    Robot.usedNames.add(newName);
    return newName;
  }

  private static generateRandomName(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterPart =
      letters[Math.floor(Math.random() * 26)] +
      letters[Math.floor(Math.random() * 26)];
    const numberPart = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
    return letterPart + numberPart;
  }
}
