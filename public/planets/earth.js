var Earth = {
    earthBtns: {},
    init: function () {
        sm.set("planets.Earth.hunger", 5)
        sm.set("planets.Earth.naturalheat", 0)
        sm.set("planets.Earth.heat", 5)
        sm.set("planets.Earth.oxygen", -100)

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
                    'steps': 2
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
                    'steps': 2,
                },
            }),
            "kill": new Button.Button({
                id: 'killBtn',
                name: 'Earth.kill',
                text: "kill",
                btnClass: 'interBtn',
                click: Earth.kill,
                cooldown: 10000,
                hover: "Cost 3 Steps, 2 Stones",
                cost: {
                    'steps': 6,
                    'stone': 2
                }
            }),
            "mine": new Button.Button({
                id: 'mineBtn',
                name: 'Earth.mine',
                text: "mine",
                btnClass: 'interBtn',
                click: Earth.mine,
                cooldown: 10000,
            }),
            "cookmeat": new Button.Button({
                id: 'mineBtn',
                name: 'Earth.cookmeat',
                text: "cook meat",
                btnClass: 'interBtn',
                click: Earth.cookMeat,
                cooldown: 10000,
                hover: "Cost 5 Meat, 1 Coal",
                cost: {
                    'meat': 5,
                    'coal': 1,
                }
            }),
            
        }
        this.createCraftButtons();
    },
    createCraftButtons: function () {
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
            "shoes": new Button.Button({
                id: 'shoesBtn',
                name: 'Earth.shoes',
                text: "craft shoes",
                btnClass: 'craftBtn',
                click: Earth.craftShoes,
                cooldown: -1,
                hover: "Cost 10 leather",
                cost: {
                    'leather': 10,
                },
            }),
            "spaceship": new Button.Button({
                id: 'spaceBtn',
                name: 'Earth.spaceship',
                text: "repair spaceship",
                btnClass: 'craftBtn',
                click: Earth.repairSpaceship,
                cooldown: -1,
                hover: "Cost 30 Iron, 10 Coal, 5 Sulfur",
                cost: {
                    'iron': 30,
                    'coal': 10,
                    'sulfur': 5,
                },
            }),
            "spacehelmet": new Button.Button({
                id: 'spaceBtn',
                name: 'Earth.spacehelmet',
                text: "craft spacehelmet",
                btnClass: 'craftBtn',
                click: Earth.craftSpacehelmet,
                cooldown: -1,
                hover: "Cost 1 Diamond, 10 Iron",
                cost: {
                    'diamond': 1,
                    'iron': 10,
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
        
        Inventory.addItem('steps', sm.get("equipment.shoes")?2:1);
        Inventory.addItem('steps', Game.options.godMode?999:0);
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
        Inventory.addRandomItem(['bone'], [1], [1], [1]);
        Inventory.addRandomItem(['meat'], [1], [1], [3]);
        if (sm.get("equipment.spear") == true) {
            Inventory.addRandomItem(['bone'], [1], [1], [1]);
            Inventory.addRandomItem(['leather'], [1], [1], [1]);
        }
    },

    craftSpear: function () {
        EventLog.addEvent("not the best weapon, but it's good a stabbing.");
        Equipment.addEquipment('spear');
        Crafts.unlockCraft('Earth.shoes')
    },

    craftPickaxe: function () {
        EventLog.addEvent("time to get an upgrade.");
        Equipment.addEquipment('pickaxe');
        Interaction.unlockFeature('Earth.mine');
    },

    mine: function () {
        sm.add('count.Earth.mine', 1)
        switch (sm.get('count.Earth.mine')) {
            case 1:
                EventLog.addEvent("shiny.");
            break;
            case 20:
                EventLog.addEvent("something crashed nearby.");
                Crafts.unlockCraft('Earth.spaceship')
            break;
            default:
                EventLog.addEvent("a new haul of ores.")
        }
        if (sm.get("equipment.pickaxe") == true) {
            Inventory.addRandomItem(['iron'], [1], [1], [4]);
            Inventory.addRandomItem(['coal'], [1], [1], [0], 80);
            Inventory.addRandomItem(['sulfur'], [1], [1], [2], 30);
            Inventory.addRandomItem(['diamond'], [1], [1], [0], 2);
        }
        if(sm.get('inv.coal')==1){
            EventLog.addEvent("coal generates heat.");
            Interaction.unlockFeature('Earth.cookmeat')
        }
        if(sm.get('inv.diamond')==1){
            EventLog.addEvent("a diamond can generate oxygen.");
            Crafts.unlockCraft('Earth.spacehelmet')
        }
    },

    craftShoes: function () {
        EventLog.addEvent("shoes protect the feet.");
        Equipment.addEquipment('shoes');
    },
    

    repairSpaceship: function(){
        EventLog.addEvent("the abandoned ship is no longer abandoned.");
        Equipment.addEquipment('spaceship');
    },

    craftSpacehelmet: function(){
        EventLog.addEvent("oxygen depletes slower.");
        Equipment.addEquipment('spacehelmet');
    },
    
    cookMeat: function(){
        EventLog.addEvent("the aroma of meat is mouth watering.");
        Inventory.addItem('cooked meat', 5);
    },
}