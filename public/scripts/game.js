var Game = window.Engine = {

    init: function () {
        EventLog.init();
        Inventory.init();
        Planet.init();
    }
}

$(function () {
    Game.init();
});