
export class Range {
  min: number
  max: number

  constructor (min: number, max: number) {
    this.min = min
    this.max = max
  }

  // Static method
  public static check (input: number, range: Range, error?: string): boolean {
    if (input > range.max) {
      if (error) {
        throw new Error (error)
      } else {
        return false
      }
    } else if  (input < range.min) {
      if (error) {
        throw new Error (error)
      } else {
        return false
      }
    } else {
      return true
    }
  }
}
