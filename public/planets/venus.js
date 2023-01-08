var Venus = {
    planetBtns: {},
    init: function () {
        sm.set("planets.Venus.hunger", 5)
        sm.set("planets.Venus.naturalheat", -5)
        sm.set("planets.Venus.heat", 0)
        sm.set("planets.Venus.oxygen", 5)

        this.planetBtns = {
            "walk": new Button.Button({
                id: 'walkBtn',
                name: 'Venus.walk',
                text: "coming soon",
                btnClass: 'interBtn',
                click: Venus.takeStep,
                cooldown: 750
            }),
            "eat": new Button.Button({
                id: 'mineBtn',
                name: 'Venus.eat',
                text: "eat",
                btnClass: 'interBtn',
                click: Venus.eatFood,
                cooldown: 10000,
                hover: "Cost 1 Food",
                cost: {
                    'food': 1,
                }
            }),
        }
        Interaction.unlockFeature('Venus.walk')
        this.createCraftButtons();

    },
    createCraftButtons() {
        this.craftPlanetBtns = {
            "flytrap": new Button.Button({
                id: 'flytrapBtn',
                name: 'Venus.flytrap',
                text: "craft flytrap",
                btnClass: 'craftBtn',
                click: Venus.craftFlytrap,
                cooldown: -1,
                hover: "Coming soon",
                cost: {
                    'diamond': 10000,
                    'iron': 10,
                },
            }),
        }
    },
    takeStep: function () {
        sm.add('count.Venus.walk', 1);
        switch (sm.get('count.Venus.walk')) {
            case 1:
                EventLog.addEvent("the air seems less breatheable.");
                break;
            case 2:
                EventLog.addEvent("it's hot.");
                break;
            case 3:
                EventLog.addEvent("it's very hot.");
                break;
            default:
                EventLog.addEvent("walking.")
        }
        
        Inventory.addItem('steps', sm.get("equipment.shoes")?2:1);
        Inventory.addItem('steps', Game.options.godMode?999:0);
        Interaction.unlockFeature('Venus.eat')
    },
    eatFood: function(){
        EventLog.addEvent("refreshing.");
        sm.set('char.stats.heat', sm.get('char.stats.heat')+20)
        sm.set('char.stats.hunger', sm.get('char.stats.hunger')+20)
    },

    craftFlytrap: function(){
        console.log("no traps")
    }

}