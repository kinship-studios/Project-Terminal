
export class LogicReturn {
  public else (func: VoidFunction): LogicReturn {
    func()
    return new LogicReturn()
  }
  public elseIf (condition: boolean, func: VoidFunction): LogicReturn {
    if (condition) {
      func()
    }

    return new LogicReturn()
  }
}