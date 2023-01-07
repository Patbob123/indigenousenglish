var Navigation = {
	planetList: [
		{
			Name: "Earth",
			Size: "16" //rem,
		},
		{
			Name: "Venus",
			Size: "16" //rem,
		},
		{
			Name: "Mercury",
			Size: "16" //rem,
		},
		{
			Name: "Venus",
			Size: "16" //rem,
		}
	],

    init: function () {
        this.nav = $('<div>').attr({
            id: 'navigation'
        });

        sm.set('planets.curPlanet', 0);
        sm.set('planets.unlocked', -1);
        sm.unlockPlanet(true);
        sm.unlockPlanet(false);
        sm.unlockPlanet(false);

        $('#planet').append(this.nav)
    },

    addNav: async function(goto) { 
        let planedIndex =  sm.get('planets.unlocked')
        let nextPlanet = this.planetList[planedIndex];   
        let navBtn = await $('<button>').addClass('navBtn')
            .attr({
                id: 'nav'+nextPlanet.Name,
                index: planedIndex
            })
            .text(nextPlanet.Name)
            .css('opacity', 0)
            .click(this.changePlanet)
		navBtn.animate({opacity: 1}, 1000, 'linear');
        this.nav.append(navBtn)

		if(goto) Navigation.changePlanet(planedIndex)
    },

    changePlanet: function(e) {
        $('#nav' + Navigation.planetList[sm.get('planets.curPlanet')].Name)[0].classList.remove('selectedPlanet')

        let newPlanetIndex = typeof e == "number" ? e : e.currentTarget.getAttribute('index');
        sm.set('planets.curPlanet', newPlanetIndex);
        $('#nav' + Navigation.planetList[sm.get('planets.curPlanet')].Name).addClass('selectedPlanet')
        // Planet.changePlanet
    }
}
