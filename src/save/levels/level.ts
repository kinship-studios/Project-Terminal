
type LevelEvent = [string, string[]]
type LevelChoice = [string, LevelEvent]

export interface Level {
  level: {
    name: string,
    group: string
  },

  text: {
    prompts: string[]
  }
}

export let levels = {}

export module Level.Util {
  export function checkGroup (group: string): boolean {
    if (levels[group]) {
      return true
    } else {
      return false
    }
  }
}