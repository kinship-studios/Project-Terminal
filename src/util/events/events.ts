export type EventFunction = (args?: any[]) => void

export class Event {
  name: string

  event: EventFunction 
  onTrigger: EventFunction
  onRegister: EventFunction

  constructor (
    name: string,
    event: EventFunction,
    onTrigger?: EventFunction,
    onRegister?: EventFunction
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

    if (onRegister) {
      this.onRegister = onRegister
    }
  }

  // Static Methods
  public static registerList (name: string) {
    Events[name] = {}
  }
  public static registerEvent (event: Event, args?: any[], eventList: string = "main"): void {
    if (Events[eventList]) {
      Events[eventList][event.name] = event
      event.onRegister(args)
    } else {
      throw new Error("registerEvent: eventList doesn't exist")
    }
  }

  public static trigger(event: String | Event, args?: any[], triggerArgs?: any[], eventList: string = "main") {
    if (typeof event == "string") {
      Events[eventList][event].onTrigger(args)
      Events[eventList][event].event(args)
    } else if (event instanceof Event) {
      event.event()
    }
  }
}

export class Trigger {
  name: string
  events: {[name: string]: Event}

  public trigger (args?: any[]) {

  }
}

type EventGroup = {[name: string]: Event}
type EventsHolder = {[name: string]: EventGroup}

export let Events: EventsHolder = {}

Event.registerList("main")