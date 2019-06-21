import { Event, Events } from "./util/events/events";
import { Save } from "./save/saves";

Events["main"] = {}

Event.register(new Event(
  "test",
  (args?: any[]) => {
    console.log("Event Run")
  },
  (args?: any[]) => {
    console.log("Event [onTrigger]")
  },
  (args?: any[]) => {
    console.log ("Event [onRegister]")
  }
))

console.log(`\n ${Events.main.test.toString()} \n`)
  
Event.trigger('test')

Save.preLoadAll()