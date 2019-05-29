import { Level } from './levels/level';

export interface SavePack {
  meta: {
    name: string,
    lastLoaded: Date
  },

  data: {

  },
  
  levels: {
    [name: string]: Level
  }
}

export let loadedSaves: {[name: string]: SavePack}

export module Save {
  export function load (name?: string) {
    if (name) {
      try {
        return loadedSaves[name]
      } catch (e) {
        console.error(`Could not load save ${name}\nError while loading: ${e}`)
      }
    } else {
      return loadedSaves
    }
  }
}