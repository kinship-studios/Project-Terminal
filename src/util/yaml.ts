import { safeLoad } from 'js-yaml'
import { readFileSync } from 'fs';

export module yaml {
  export function load (filePath): any {
    return safeLoad(readFileSync(filePath, 'utf8'))
  }
}