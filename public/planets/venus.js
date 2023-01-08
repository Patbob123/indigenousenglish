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
            
        }


    },
    createButton(id) {
        
    }

}