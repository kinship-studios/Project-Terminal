
import { app, BrowserWindow, BrowserWindowConstructorOptions, Menu } from 'electron';
import { Page } from './page';


function ifDocumentExists (run: Function): void {
  if (!document == undefined) {
    run()
  }
}

interface MainAppOptions {
  waitToShow?: boolean
}

export class MainApp {
  window: BrowserWindow
  settings: BrowserWindowConstructorOptions

  menu: Menu = null

  // Documents
  indexPage: Page

  // Configuration
  appConfig: MainAppOptions

  // Functions
  private createWindow (): void {
    this.window = new BrowserWindow(this.settings)

    this.window.loadFile(this.indexPage.path)
    this.window.setMenu(this.menu)

    // Events
    if (this.appConfig.waitToShow) {
      this.window.hide()

      this.window.once('ready-to-show', () =>{
        this.window.show
      })
    }

    this.window.on('closed', () => {
      this.window = null
    })
  }
  public startApp (onStart?: VoidFunction): void {
    app.on('ready', ()=>{
      this.createWindow()
      
      if(onStart) onStart()
    })
    app.on('quit', ()=> {
      if (process.platform != 'darwin') {
        app.quit()
      }
    })
    app.on('activate', ()=>{
      if (this.window == null) {
        this.createWindow()

        if(onStart) onStart()
      }
    })
  }

  // Constructor
  constructor (
    indexPage?: Page,
    settings?: BrowserWindowConstructorOptions,
    appConfig: MainAppOptions = {}
  ) {
    this.settings = settings
    this.indexPage = indexPage
    this.appConfig = appConfig
  }
}