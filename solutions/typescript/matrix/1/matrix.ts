export class Matrix {
  private _rows: number[][];
  private _columns: number[][];

  constructor(input: string) {
    this._rows = input
      .trim()
      .split('\n')
      .map(line => line.trim().split(/\s+/).map(Number));

    const rowCount = this._rows.length;
    const colCount = this._rows[0]?.length ?? 0;

    this._columns = Array.from({ length: colCount }, (_, j) =>
      Array.from({ length: rowCount }, (_, i) => this._rows[i][j])
    );
  }

  get rows(): number[][] {
    return this._rows.map(r => r.slice());
  }

  get columns(): number[][] {
    return this._columns.map(c => c.slice());
  }
}
