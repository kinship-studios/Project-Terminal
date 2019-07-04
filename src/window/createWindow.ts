import { Page } from './palette/page'
import { MainApp } from './palette/mainApp'
import * as path from 'path'

let gamePage: Page = new Page(path.join(__dirname, '../../web/html/game.html'))
export let gameApp: MainApp = new MainApp(gamePage, {

})

gameApp.startApp()