import { Level, levels } from './level'
import { loadJSON, dataPath } from '../../util/loadJSON'
import * as path from 'path'

export class GroupData {
  private static GroupPath = path.join(dataPath, "/groups")

  static groups: string[]
  
  static load (): void {
    this.groups = loadJSON(this.GroupPath)[0]

    this.groups.forEach((group: string) => {
      levels[group] = {}
    })
  }
}

export class LevelData {
  static LevelPath: string = path.join(dataPath, "/levels")

  static load (): void {
    let levelJSON: Level[] = loadJSON(this.LevelPath)

    GroupData.load()

    levelJSON.forEach((loadedLevel: Level) => {
      if (Level.Util.checkGroup(loadedLevel.level.group)) {
        levels[loadedLevel.level.group][loadedLevel.level.name] = loadedLevel
      } else {
        throw new Error(`Level group ${loadedLevel.level.group} is not defined in [groups.json]`)
      }
    })
  }
}