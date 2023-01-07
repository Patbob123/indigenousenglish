var Game = window.Engine = {

    init: function () {
        sm.init();
        EventLog.init();
        Status.init();
        Inventory.init();
        Planet.init();
        Navigation.init();
        Interaction.init();
    }
}

$(function () {
    Game.init();
});