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
                click: Earth.gatherWood,
                cooldown: 5000,
                hover: "Cost 4 Steps",
                cost: {
                    'steps': 4,
                },
            }),
            "kill": new Button.Button({
                id: 'killBtn',
                text: "kill",
                click: Earth.kill,
                cooldown: 10000,
                hover: "Cost 12 Steps, 3 Stones",
                cost: {
                    'steps': 12,
                    'stone': 2
                }
            }),
            "spear": new Button.Button({
                id: 'spearBtn',
                text: "craft spear",
                click: Earth.craftSpear,
                cooldown: -1,
                hover: "Cost 10 wood, 3 bones",
                cost: {
                    'wood': 10,
                    'bone': 3,
                },
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
                EventLog.addEvent("gathered wood.")
        }
        Inventory.addItem('wood', 1);
    },

    kill: function () {
        sm.add('count.Earth.kill', 1)
        switch (sm.get('count.Earth.kill')) {
            case 1:
                EventLog.addEvent("that's a way to get some meat.");
            default:
                EventLog.addEvent("sacrifices are neccessary.")
        }
        Inventory.addRandomItem(['bone'], [1], 1, 1);
        Inventory.addRandomItem(['meat'], [1], 1, 3);
        if(sm.get("equipment.spear")==true){
            Inventory.addRandomItem(['bone'], [1], 1, 1);
            Inventory.addRandomItem(['leather'], [1], 1, 1);
        }
    },

    craftSpear: function(){
        EventLog.addEvent("not the best weapon, but it's good a stabbing.");
        Equipment.addEquipment('spear');
    },


}