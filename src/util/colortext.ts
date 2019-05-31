import { Color } from './color';

type ColorSet = {[name: string]: Color}

export class ColoredText {
  input: string
  output: string

  colorSet: ColorSet = {
    red: Color.red,
    yellow: Color.yellow,
    green: Color.green,
    blue: Color.blue,
    pink: Color.pink,
    purple: Color.purple,

    white: Color.white,
    gray: Color.gray,
    black: Color.black
  }
}

export module ColoredText {
  export function parse (input: string, colorSet?: ColorSet) {

  }
}