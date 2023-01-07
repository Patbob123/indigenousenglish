var Planet = {

	init: function () {
		this.planet = $('<div>').attr({
			id: 'planet'
		});

		this.menu = $('<div>').attr({
			id: 'menu'
		});
		this.createPlanet(0)
		this.planet.append(this.menu);
		this.planet.prependTo('div#main')
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
				style: "--i:" + i + ";" +
					"background:" + Navigation.planetList[index]["Background"] + ";"
			}))
		}
		planetModel.append($('<div>').addClass('planetTop').attr({
			style: "background:" + Navigation.planetList[index]["Background"] + ";"
		}));
		planetModel.append(sides);
		this.menu.append(planetModel)

	},
}
