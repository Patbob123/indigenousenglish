var Game = window.Engine = {

    init: function () {
        sm.init();
        EventLog.init();
        Inventory.init();
        Planet.init();
    }
}

$(function () {
    Game.init();
});