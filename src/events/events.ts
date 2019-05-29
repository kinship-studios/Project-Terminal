export type EventFunction = (args?: any[]) => void

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
      this.onTrigger = (args?: any[]) => {
        return undefined
      }
    }
  }

  // Static Methods
  public static registerEvent (event: Event, eventList: string = "main"): void {
    Events[eventList][event.name] = event
  }

  public static trigger(event: String | Event, eventList: string = "main") {
    if (typeof event == "string") {
      Events[eventList][event].event()
    } else if (event instanceof Event) {
      event.event()
    }
  }
}

type EventList = {[name: string]: Event}
type EventsHolder = {[name: string]: EventList}

export let Events: EventsHolder = {}