"use strict";
Object.defineProperty(module.exports, "__esModule", { value: true });
var electron_1 = require("electron");
function ifDocumentExists(run) {
    if (!document == undefined) {
        run();
    }
}
var MainApp = /** @class */ (function () {
    // Constructor
    function MainApp(indexPage, settings, appConfig) {
        if (appConfig === void 0) { appConfig = {}; }
        this.menu = null;
        this.settings = settings;
        this.indexPage = indexPage;
        this.appConfig = appConfig;
    }
    // Functions
    MainApp.prototype.createWindow = function () {
        var _this = this;
        this.window = new electron_1.BrowserWindow(this.settings);
        this.window.loadFile(this.indexPage.path);
        this.window.setMenu(this.menu);
        // Events
        if (this.appConfig.waitToShow) {
            this.window.hide();
            this.window.once('ready-to-show', function () {
                _this.window.show;
            });
        }
        this.window.on('closed', function () {
            _this.window = null;
        });
    };
    MainApp.prototype.startApp = function (onStart) {
        var _this = this;
        electron_1.app.on('ready', function () {
            _this.createWindow();
            if (onStart)
                onStart();
        });
        electron_1.app.on('quit', function () {
            if (process.platform != 'darwin') {
                electron_1.app.quit();
            }
        });
        electron_1.app.on('activate', function () {
            if (_this.window == null) {
                _this.createWindow();
                if (onStart)
                    onStart();
            }
        });
    };
    return MainApp;
}());
module.exports.MainApp = MainApp;
