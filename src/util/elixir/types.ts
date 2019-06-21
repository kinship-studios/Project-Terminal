import { LogicReturn } from "./logic"

export class Range {
  min: number
  max: number

  constructor (min: number, max: number) {
    this.min = min
    this.max = max
  }

  // Static method
  public static check (input: number, range: Range, error: string): boolean {
    if (input > range.max || input < range.min) {
      throwIfExists(error)
      return false
    } else return true
  }
}

export function runIfExists (func?: Function, param1?: any, param2?: any, param3?: any): LogicReturn {
  if (func) {
    func(param1, param2, param3)
  }

  return new LogicReturn()
}

export function throwIfExists (error: string): LogicReturn {
  if (error) {
    throw new Error(error)
  }

  return new LogicReturn()
}