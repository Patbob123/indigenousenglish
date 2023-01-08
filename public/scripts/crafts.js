var Crafts = {
    init: function () {
        this.craft = $('<div>').attr({
            id: 'crafts'
        });
    },

    newCraft: function () {

        let curPlanet = sm.get('planets.curPlanet') == -1 ? 0 : sm.get('planets.curPlanet')
        let craftPlanetBtns = eval(Navigation.planetList[curPlanet]["Name"]).craftPlanetBtns;

        Button.addListeners(craftPlanetBtns)

        for (let i in craftPlanetBtns) {
            if(sm.get('crafts.' + Navigation.planetList[curPlanet]["Name"] + "." + i + 'Btn') == true) continue;
            if (sm.get('crafts.' + Navigation.planetList[curPlanet]["Name"] + "." + i) == true) {
                let craftBtn = craftPlanetBtns[i].css('opacity', 0)
                this.craft.append(craftBtn)
                craftBtn.animate({ opacity: 1 }, 1000, 'linear');
            } else {
                sm.set('crafts.' + Navigation.planetList[curPlanet]["Name"] + "." + i, false)
            }
        }
    },

    addCraft: function (craft) {
        craft = craft.split('.')
        console.log(craft)
        let craftPlanetBtns = eval(craft[0]).craftPlanetBtns;

        Button.addListeners([craftPlanetBtns[craft[1]]])

        let craftBtn = craftPlanetBtns[craft[1]].css('opacity', 0)
        this.craft.append(craftBtn)
        craftBtn.animate({ opacity: 1 }, 1000, 'linear');

    },

    planetChanged: function() {
        this.craft.animate({opacity: 0}, 1000, 'linear', function() {
            Crafts.newCraft();
            Crafts.craft.animate({opacity: 1}, 1000, 'linear');
        })
    },

    unlockCraft(craft, condition = true) {
        console.log(sm.get('crafts.' + craft))
        if (condition && !sm.get('crafts.' + craft)) {
            sm.set('crafts.' + craft, true);
            this.addCraft(craft)
            return true;
        } else return false;
    },
}

