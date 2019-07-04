"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(module.exports, "__esModule", { value: true });
var page_1 = require("./palette/page");
var mainApp_1 = require("./palette/mainApp");
var path = __importStar(require("path"));
var gamePage = new page_1.Page(path.join(__dirname, '../../web/html/game.html'));
module.exports.gameApp = new mainApp_1.MainApp(gamePage, {});
module.exports.gameApp.startApp();
