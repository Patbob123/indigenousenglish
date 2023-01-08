var Game = window.Engine = {

    options: {},

    init: function () {
        this.options.godMode = true;

        sm.init();
        EventLog.init();
        Status.init();
        Inventory.init();
        Equipment.init();
        Planet.init();
        Navigation.init();
        Interaction.init();
        Crafts.init();
    }
}

$(function () {
    Game.init();
});