var Venus = {
    earthBtns: {},
    init: function () {
        this.earthBtns = {
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
                text: _("pickup stone"),
                click: Outside.gatherWood,
                cooldown: 2000,
                cost: function () {
                    return {
                        'steps': 5
                    };
                },
                width: '80px'
            }),
            "wood": new Button.Button({
                id: 'woodBtn',
                text: _("gather wood"),
                click: Outside.gatherWood,
                cooldown: 5000,
                width: '80px'
            }),
            "kill": new Button.Button({
                id: 'killBtn',
                text: _("KILL"),
                click: Outside.gatherWood,
                cooldown: 10000,
                cost: function () {
                    return {
                        'steps': 15,
                        'stone': 2,
                    };
                },
                width: '80px'
            }),
        }


    },
    createButton(id) {
        
    }

}