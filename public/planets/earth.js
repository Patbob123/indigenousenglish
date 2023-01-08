var Earth = {
    earthBtns: {},
    init: function () {
        this.planetBtns = {
            "walk": new Button.Button({
                id: 'walkBtn',
                name: 'Earth.walk',
                text: "take a step",
                btnClass: 'interBtn',
                click: Earth.takeStep,
                cooldown: 750
            }),
            "stone": new Button.Button({
                id: 'stoneBtn',
                name: 'Earth.stone',
                text: "pickup stone",
                btnClass: 'interBtn',
                click: Earth.pickupStone,
                cooldown: 2000,
                hover: "Cost 3 Steps",
                cost: {
                    'steps': 3
                }
            }),
            "wood": new Button.Button({
                id: 'woodBtn',
                name: 'Earth.wood',
                text: "gather wood",
                btnClass: 'interBtn',
                click: Earth.gatherWood,
                cooldown: 5000,
                hover: "Cost 4 Steps",
                cost: {
                    'steps': 4,
                },
            }),
            "kill": new Button.Button({
                id: 'killBtn',
                name: 'Earth.kill',
                text: "kill",
                btnClass: 'interBtn',
                click: Earth.kill,
                cooldown: 10000,
                hover: "Cost 6 Steps, 2 Stones",
                cost: {
                    'steps': 6,
                    'stone': 2
                }
            }),
            
        }
        this.craftPlanetBtns = {
            "spear": new Button.Button({
                id: 'spearBtn',
                name: 'Earth.spear',
                text: "craft spear",
                btnClass: 'craftBtn',
                click: Earth.craftSpear,
                cooldown: -1,
                hover: "Cost 10 wood, 3 bones",
                cost: {
                    'wood': 10,
                    'bone': 3,
                },
            }),
            "pickaxe": new Button.Button({
                id: 'pickaxeBtn',
                name: 'Earth.pickaxe',
                text: "craft pickaxe",
                btnClass: 'craftBtn',
                click: Earth.craftPickaxe,
                cooldown: -1,
                hover: "Cost 10 wood, 10 stones",
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

        if (!sm.get('features.tabs') && sm.get('inv.wood') >= 2 ) {
            Tabs.unlockTabs();
        }
        Crafts.unlockCraft('Earth.spear', sm.get('inv.wood') >= 2)
        Crafts.unlockCraft('Earth.pickaxe', sm.get('inv.wood') >= 2)
        
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
        if (sm.get("equipment.spear") == true) {
            Inventory.addRandomItem(['bone'], [1], 1, 1);
            Inventory.addRandomItem(['leather'], [1], 1, 1);
        }
    },

    craftSpear: function () {
        EventLog.addEvent("not the best weapon, but it's good a stabbing.");
        Equipment.addEquipment('spear');
    },

    craftPickaxe: function () {
        EventLog.addEvent("time to get an upgrade.");
        Equipment.addEquipment('pickaxe');
    },


}