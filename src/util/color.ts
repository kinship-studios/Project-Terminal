// Palette color system, used in Project Terminal
import { Range } from './elixir/types';

const ColorValueRange = new Range(0, 255)

export class Color {
  private _r: number
  get r () { return this._r }
  set r (val: number) {
    if (Range.check(val, ColorValueRange, `Color: r: ${val} doesn't meet range!`)) {
      this._r = val
    }
  }

  private _g: number
  get g () { return this._g }
  set g (val: number) {
    if (Range.check(val, ColorValueRange, `Color: g: ${val} doesn't meet range!`)) {
      this._g = val
    }
  }

  private _b: number
  get b () { return this._b }
  set b (val: number) {
    if (Range.check(val, ColorValueRange, `Color: b: ${val} doesn't meet range!`)) {
      this._b = val
    }
  }

  private _a: number
  get a () { return this._a }
  set a (val: number) {
    if (Range.check(val, new Range(0, 1), `Color: a: ${val} doesn't meet range!`)) {
      this._a = val
    }
  }

  private _render: string
  get render (): string {
    return `rgba(${this.r},${this.g},${this.b}, ${this.a})`
  }

  constructor (r: number, g: number, b: number, a: number = 1) {
    if (r > 255 || g > 255 || b > 255) {
      throw new Error('Color: Max value is 255!')
    } else if (a > 1) {
      throw new Error ('Color: Max alpha value is 1.0!')
    } else {
      this.r = r
      this.g = g
      this.b = b
      this.a = a

      this._render = `rgba(${r},${g},${b}, ${a})`
    }
  }

  // colors
  static readonly red: Color = new Color(255, 0, 0)
  static readonly green: Color = new Color(0, 255, 0)
  static readonly blue: Color = new Color(0, 0, 255)

  static readonly white: Color = new Color(255, 255, 255)
  static readonly black: Color = new Color(0, 0, 0)
  static readonly gray: Color = new Color(128, 128, 128)

  static readonly yellow: Color = new Color(255, 255, 0)
  static readonly pink: Color = new Color(255, 0, 255)
  static readonly purple: Color = new Color(128, 0, 128)
  
}