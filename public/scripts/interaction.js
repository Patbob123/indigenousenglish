var Interaction = {
    init: function () {
        this.inter = $('<div>').attr({
            id: 'interaction'
        });

        $('#stores').append(this.inter)
        sm.set('features.Earth.walk', true)

        // this.newInter()
    },

    newInter: function () {
        this.inter.empty();

        let curPlanet = sm.get('planets.curPlanet') == -1 ? 0 : sm.get('planets.curPlanet')
        let planetBtns = eval(Navigation.planetList[curPlanet]["Name"]).planetBtns;

        for (let i in planetBtns) {
            if (sm.get('features.' + Navigation.planetList[curPlanet]["Name"] + "." + i) == true) {
                let interBtn = planetBtns[i].css('opacity', 0)
                this.inter.append(interBtn)
                interBtn.animate({ opacity: 1 }, 1000, 'linear');
            } else {
                sm.set('features.' + Navigation.planetList[curPlanet]["Name"] + "." + i, false)
            }
        }
    },

    addInter: function (feature) {
        feature = feature.split('.')
        let planetBtns = eval(feature[0]).planetBtns;

        let interBtn = planetBtns[feature[1]].css('opacity', 0)
        this.inter.append(interBtn)
        interBtn.animate({ opacity: 1 }, 1000, 'linear');

    },

    planetChanged: function() {
        this.inter.animate({opacity: 0}, 1000, 'linear', function() {
            Interaction.newInter();
            Interaction.inter.animate({opacity: 1}, 1000, 'linear');
        })
        if(sm.get('planets.curPlanet') == 0) {
            Status.updateStatus("oxygen", 100);
        }
    },

    unlockFeature(feature, condition = true) {
        if (condition && !sm.get('features.' + feature)) {
            sm.set('features.' + feature, true);
            this.addInter(feature)
            return true;
        } else return false;
    }
}

