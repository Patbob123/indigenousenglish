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
                hover: "Cost 3 Steps",
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
                text: "kill",
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
                EventLog.addEvent("take another step.");
                break;
            case 2:
                EventLog.addEvent("keep going.");
                break;
            case 3:
                EventLog.addEvent("a stone, man's first tool.");
                break;
            default:
                EventLog.addEvent("walking.")
        }
        Inventory.addItem('steps', 1);
        Interaction.unlockFeature('Earth.stone', sm.get('inv.steps') >= 3)
    },

    pickupStone: function () {
        sm.add('count.Earth.stone', 1);
        switch (sm.get('count.Earth.stone')) {
            case 1:
                EventLog.addEvent("all stones have purpose.");
                break;
            case 2:
                EventLog.addEvent("that's another one.");
                break;
            case 3:
                EventLog.addEvent("not elegant, but stones will get the job done.")
                break;
            case 4:
                EventLog.addEvent("time to put these stones to use.")
                Interaction.unlockFeature('Earth.wood');
                Interaction.unlockFeature('Earth.kill');
                break;
            default:
                EventLog.addEvent("more. stones.")
        }
        Inventory.addItem('stone', 1);
    },

    gatherWood: function () {
        sm.add('count.Earth.wood', 1)
        switch (sm.get('count.Earth.wood')) {
            default:
                EventLog.addEvent("You gathered wood")
        }
        Inventory.addItem('wood', 1);
    },

    kill: function () {
        sm.add('count.Earth.kill', 1)
        switch (sm.get('count.Earth.kill')) {
            default:
                EventLog.addEvent("You killed an animal")
        }
        Inventory.addRandomItem(['bone'], [1], 1, 1);
        Inventory.addRandomItem(['meat'], [1], 1, 3);
    }


}