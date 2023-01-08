var Mercury = {
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
                hover: "Cost 12 Steps, 3 Stones",
                cost: {
                    'steps': 12,
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
        }


    },
    takeStep: function () {
        EventLog.addEvent("You Took A Step.");
        Inventory.addItem('steps', 1);
        console.log(sm.get('inv.steps'))
        console.log(sm.get('inv'))
        Interaction.unlockFeature(sm.get('inv.steps') == 5, 'Earth.stone')
    }


}