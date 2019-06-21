import { runIfExists } from "../elixir/types";

type EventArgs = any[]
export type EventFunction = (args?: EventArgs) => void

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
      this.onTrigger = (args?: EventArgs) => {
        return undefined
      }
    }

    if (onRegister) {
      this.onRegister = onRegister
    }
  }

  // Static Methods
  public static register (event: Event, args?: EventArgs, eventList: string = "main"): void {
    if (Events[eventList]) {
      Events[eventList][event.name] = event
      event.onRegister(args)
    } else {
      throw new Error("registerEvent: eventList doesn't exist")
    }
  }

  public static trigger (event: String | Event, args?: EventArgs, onTriggerArgs?: EventArgs, eventList: string = "main") {
    if (typeof event == "string") {
      runIfExists(Events[eventList][event].onTrigger, onTriggerArgs)
      Events[eventList][event].event(args)
    } else if (event instanceof Event) {
      event.event()
    }
  }
  public static async triggerAsync (event: String | Event, args?: EventArgs, onTriggerArgs?: EventArgs, eventList: string = "main") {
    this.trigger(event, args, onTriggerArgs, eventList)
  }
}

export class Trigger {
  name: string
  events: EventGroup

  onTrigger: EventFunction  

  constructor (name: string, events?: EventGroup, onTrigger?: EventFunction ) {
    this.name = name
    this.events = events
    
    this.onTrigger = onTrigger
  }

  public trigger (eventArgs?: EventArgs, triggerArgs?: EventArgs) {
    for (const i in this.events) {
      this.events[i].onTrigger(triggerArgs)
      this.events[i].event(eventArgs)
    }
  }

  public async triggerAsync (eventArgs?: EventArgs, triggerArgs?: EventArgs) {
    for (const i in this.events) {
      this.events[i].onTrigger(triggerArgs)
      this.events[i].event(triggerArgs)
    }
  }

  // Add trigger (static)
  public static add (trigger: Trigger, onAdd?: EventFunction) {
    Triggers[trigger.name] = trigger
    runIfExists(onAdd)
  }
}

module EventUtil {
  export function searchForEvent (event: string | Event) {
    let searchFor: string
    if (typeof event == 'string') {
      searchFor = event
    } else if (event instanceof Event) {
      searchFor = event.name
    }

    for (const i in Events) {
      
    }
  }
}

type EventGroup = {[name: string]: Event}
type EventHolder = {[name: string]: EventGroup}

export let Events: EventHolder = {}
Events.main = {}
export let Triggers: {[name: string]: Trigger} = {}

Trigger.add(new Trigger("default"))
