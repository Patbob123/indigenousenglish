var Earth = {
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
                cost: function () {
                    return {
                        'steps': 5
                    };
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
                cost: function () {
                    return {
                        'steps': 15,
                        'stone': 2,
                    };
                },
                width: '80px',
            }),
        }


    },
    takeStep: function() {
        sm.add('inv.steps',1);
        if(sm.get('inv.steps') >= 5) sm.set('features.Earth.stone', true);
    }
    

}