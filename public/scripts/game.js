var Game = window.Engine = {

    init: function () {
        sm.init();
        EventLog.init();
        Inventory.init();
        Planet.init();
        Navigation.init();
        Interaction.init();
    }
}

$(function () {
    Game.init();
});