var Game = window.Engine = {

    init: function () {
        $SM.init();
        EventLog.init();
        Inventory.init();
        Planet.init();
    }
}

$(function () {
    Game.init();
});