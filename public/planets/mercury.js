var Mercury = {
    earthBtns: {},
    init: function () {
        this.planetBtns = {
            "walk": new Button.Button({
                id: 'walkBtn',
                text: "take a step",
                click: Earth.takeStep,
                cooldown: 1000,
                width: '80px',
            }),
            "stone": new Button.Button({
                id: 'stoneBtn',
                text: "pickup stone",
                click: Earth.takeStep,
                cooldown: 2000,
                hover: "Cost 5 Steps",
                cost: {
                    'steps': 5
                },
                width: '80px',
            }),
            "wood": new Button.Button({
                id: 'woodBtn',
                text: "gather wood",
                click: Earth.takeStep,
                cooldown: 5000,
                width: '80px',
            }),
            "kill": new Button.Button({
                id: 'killBtn',
                text: "KILL",
                click: Earth.takeStep,
                cooldown: 10000,
                cost: {
                    'steps': 15,
                    'stone': 2
                },
                width: '80px',
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