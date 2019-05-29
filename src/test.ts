import { LevelData } from './save/levels/loadLevels'
import { levels } from './save/levels/level'
import { loadJSON, dataPath } from "./util/loadJSON"
import * as path from 'path'


LevelData.load()

console.log(levels)

console.log(dataPath)
console.log(path.join(dataPath, "./levels"))