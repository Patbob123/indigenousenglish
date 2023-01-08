var Planet = {

	init: function () {
		this.planet = $('<div>').attr({
			id: 'planet'
		});

		this.menu = $('<div>').attr({
			id: 'menu'
		});
		this.planetPanel = $('<div>').attr({
			id: 'planetPanel'
		});
		this.stores = $('<div>').attr({
			id: 'stores'
		});
		this.stores.prependTo(this.menu);
		this.planetPanel.prependTo(this.menu);

		this.planet.append(this.menu);
		this.planet.prependTo('div#main')
		this.createPlanet(0)
	},
	createPlanet: function (index) {
		$('.planetModel').remove()
		let planetModel = $('<div>').addClass('planetModel').attr({
			style: "--size:" + Navigation.planetList[index]["Size"] + "vh;" +
				"--halfsize:" + Navigation.planetList[index]["Size"] / 2 + "vh;"
		});
		let sides = $('<div>');
		for (let i = 0; i < 5; i++) {
			sides.append($('<span>').attr({
				style: "--i:" + i + ";"+
				"background-image:url(public/ima1ges/"+Navigation.planetList[index]["Name"]+".png"
					// "background:" + Navigation.planetList[index]["Background"] + ";"
			}))
		}
		planetModel.append($('<div>').addClass('planetTop').attr({
			style: "background-image:url(public/ima1ges/"+Navigation.planetList[index]["Name"]+".png"
		}));
		planetModel.append(sides);
		this.planetPanel.prepend(planetModel)

	},
}
