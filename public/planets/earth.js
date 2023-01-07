var Earth = {
    earthBtns: {},
    init: function () {
        this.planetBtns = {
            "walk": new Button.Button({
                id: 'walkBtn',
                text: "take a step",
                click: Earth.takeStep,
                cooldown: 750
            }),
            "stone": new Button.Button({
                id: 'stoneBtn',
                text: "pickup stone",
                click: Earth.pickupStone,
                cooldown: 2000,
                hover: "Cost 5 Steps",
                cost: {
                    'steps': 3
                }
            }),
            "wood": new Button.Button({
                id: 'woodBtn',
                text: "gather wood",
                click: Earth.takeStep,
                cooldown: 5000,
                width: '80px',
                cost: {
                    'steps': 4,
                },
            }),
            "kill": new Button.Button({
                id: 'killBtn',
                text: "KILL",
                click: Earth.takeStep,
                cooldown: 10000,
                cost: {
                    'steps': 12,
                    'stone': 2
                }
            }),
        }
    },
    takeStep: function () {
        sm.add('count.Earth.walk', 1);
        switch (sm.get('count.Earth.walk')) {
            case 1:
                EventLog.addEvent("You begin to start walking.");
                break;
            case 2:
                EventLog.addEvent("You continue to be curious to explore your surroundings and see what this world has to offer.")
                break;
            case 3:
                EventLog.addEvent("As you continue your journey, you come a small pile of stones.");
                break;
        }
        Inventory.addItem('steps', 1);
        Interaction.unlockFeature('Earth.stone', sm.get('inv.steps') >= 5)
    },

    pickupStone: function () {
        sm.add('count.Earth.stone', 1);
        switch (sm.get('count.Earth.stone')) {
            case 1:
                EventLog.addEvent("A stone. A hard solid nonmetallic mineral matter. You begin to wonder about its capabilities.");
                break;
            case 2:
                EventLog.addEvent("These stones seem to hold some special purpose. You continue to gather more.")
                break;
            case 3:
                EventLog.addEvent("You turn around and see your trail of steps. You look around for a place to use them.")
                break;
            case 3:
                EventLog.addEvent("With your handful of stones, you discover a place to use them.")
                Interaction.unlockFeature('Earth.wood');
                Interaction.unlockFeature('Earth.kill');
                break;
        }
        Inventory.addItem('stone', 1);
    }


}