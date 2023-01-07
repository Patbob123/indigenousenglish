var Interaction = {
    init: function () {
        this.inter = $('<div>').attr({
            id: 'interaction'
        });

        $('#menu').append(this.inter)
        Earth.init();
        sm.set('features.Earth.walk', true)

        this.addInter()
    },

    addInter: function () {

        let curPlanet = sm.get('planets.curPlanet') == -1 ? 0 : sm.get('planets.curPlanet')
        let planetBtns = eval(Navigation.planetList[curPlanet]["Name"]).planetBtns;

        for (let i in planetBtns) {
            if (sm.get('features.' + Navigation.planetList[curPlanet]["Name"] + "." + i) == true) {
                // let a = $('<a>')
                let interBtn = planetBtns[i]
                // interBtn.append(a)
                // interBtn.animate({ opacity: 1 }, 1000, 'linear');
                this.inter.append(interBtn)
            } else {
                sm.set('features.' + Navigation.planetList[curPlanet]["Name"] + "." + i, false)
            }
        }

    }
}

