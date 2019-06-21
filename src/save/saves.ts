import { Level } from './levels/level'
import * as path from 'path'
import { loadJSONFile, dataPath } from '../util/loadJSON';
import { Event } from '../util/events/events';

export interface SavePack {
  meta: {
    name: string,
    id: string,
    lastLoaded: Date,

    path: string
  },

  data: any
  
  levelPathList: string[]
  levels: {
    [name: string]: Level
  }
}

export let loadedSaves: {[name: string]: SavePack}

export module Save {
  const saveDir: string = path.join(dataPath, "./saves")

  export function loadLevelPathList (pathList: string[], savePath: string): {[name: string]: Level} {
    let output: {[name:string]: Level}

    for (const levelPath in pathList) {
      const loadedLevel: Level = loadJSONFile(path.join(savePath, levelPath))
      output[loadedLevel.level.name] = loadedLevel
    }

    return output
  }

  export function preLoadAll (): void {
    const savelist: any[] = loadJSONFile(path.join(saveDir))

    for (const save in savelist) {
      const loadingSaveDir: string = path.join(saveDir, save[0])
      const loadingSave: any = loadJSONFile(path.join(loadingSaveDir, "./save.json"))

      let newSave: SavePack = {
        meta: {
          name: loadingSave.meta.name,
          id: loadingSave.meta.id,
          lastLoaded: loadingSave.meta.lastLoaded,

          path: loadingSaveDir
        },
        data: loadingSave.data,
        levelPathList: loadingSave.levelPathList,

        levels: loadLevelPathList(this.levelPathList, loadingSaveDir)
      }
    }
  }

  export function load (name: string): SavePack {
    if (name) {
      try {
        return loadedSaves[name]
      } catch (e) {
        console.error(`Could not load save ${name}\nError while loading: ${e}`)
      }
    }
  }
}

Event.register(new Event("PreloadAll", (args: any[]) => Save.preLoadAll()), undefined, "onStart")