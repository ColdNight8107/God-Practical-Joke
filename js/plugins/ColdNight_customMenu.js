//======================================
/*:
* @plugindesc ColdNight_customMenu.js v0.5 自訂菜單樣式
* @author 凜冰雪徹
@SIAKO.Mobi教學：https://www.youtube.com/watch?v=CwBpVa0jLX0
*/
//======================================

(function () {
    //初始化建立菜單
    Scene_Menu.prototype.create = function () {
        Scene_MenuBase.prototype.create.call(this);
        this.createCommandWindow();
        this.createGoldWindow();
        this.createStatusWindow();
    };

    Scene_Menu.prototype.start = function () {
        Scene_MenuBase.prototype.start.call(this);
        this._statusWindow.refresh();
    };

    //菜單功能綁定
    Scene_Menu.prototype.createCommandWindow = function () {
        this._commandWindow = new Window_MenuCommand(0, 0);
        this._commandWindow.setHandler('item', this.commandItem.bind(this));//道具
        this._commandWindow.setHandler('skill', this.commandPersonal.bind(this));//技能
        this._commandWindow.setHandler('equip', this.commandPersonal.bind(this));//裝備
        this._commandWindow.setHandler('status', this.commandPersonal.bind(this));//狀態
        this._commandWindow.setHandler('formation', this.commandFormation.bind(this));//隊形
        this._commandWindow.setHandler('options', this.commandOptions.bind(this));//選項
        this._commandWindow.setHandler('save', this.commandSave.bind(this));//存檔
        this._commandWindow.setHandler('load', this.commandLoad.bind(this));//讀檔
        this._commandWindow.setHandler('gameEnd', this.commandGameEnd.bind(this));//遊戲結束
        this._commandWindow.setHandler('cancel', this.popScene.bind(this));//取消
        this.addWindow(this._commandWindow);
    };

    //新增讀取進度功能作用
    Scene_Menu.prototype.commandLoad = function () {
        SceneManager.push(Scene_Load);    
    }

    //產生遊戲中的選單介面
    Window_MenuCommand.prototype.makeCommandList = function () {
        this.addMainCommands();
        this.addFormationCommand();
        this.addOriginalCommands();
        this.addOptionsCommand();
        this.addSaveCommand();
        this.addLoadCommand();  //讀取進度
        this.addGameEndCommand();
    };

    //新增讀取進度選項
    Window_MenuCommand.prototype.addLoadCommand = function () {
        this.addCommand('讀取進度','load',true);
    };

    // //標題畫面的選單（by：rpg_scenes.js)
    // Scene_Title.prototype.createCommandWindow = function () {
    //     this._commandWindow = new Window_TitleCommand();
    //     this._commandWindow.setHandler('newGame', this.commandNewGame.bind(this));
    //     this._commandWindow.setHandler('continue', this.commandContinue.bind(this));
    //     this._commandWindow.setHandler('options', this.commandOptions.bind(this));
    //     this.addWindow(this._commandWindow);
    // };
})();