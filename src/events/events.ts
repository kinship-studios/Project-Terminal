

export type EventFunction = (args: any[]) => void

export class Event {
  name: string

  event: EventFunction 
  onTrigger: EventFunction

  constructor (
    name: string,
    event: EventFunction,
    onTrigger?: EventFunction
  ) {
    this.name = name
    this.event = event

    if (onTrigger) {
      this.onTrigger = onTrigger
    } else {
      this.onTrigger = (args: any[]) => {
        return undefined
      }
    }
  }
}

export let Events = {
  registerEvent: function (event: Event, eventList?: string) {

  }
}