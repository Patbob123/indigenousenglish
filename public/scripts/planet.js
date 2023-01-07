var Planet = {

    init: function () {
        this.planet = $('<div>').attr({
            id: 'planet'
        });

        this.createPlanet(1)
        this.planet.prependTo('div#main')
    },
	createPlanet: function(index){
console.log()
		let planetModel = $('<div>').addClass('planetModel').attr({
			style: "--size:"+Navigation.planetList[index]["Size"]+"vh;"+
			"--halfsize:"+Navigation.planetList[index]["Size"]/2+"vh;"+
			"--color1:"+Navigation.planetList[index]["Color1"]+";"+
			"--color2:"+Navigation.planetList[index]["Color2"]
		});
		let sides = $('<div>');
		for(let i = 0; i < 5; i++){
			sides.append($('<span>').attr({
				style: "--i:"+i
			}))
		}
		planetModel.append($('<div>').addClass('planetTop'));
		planetModel.append(sides);
        this.planet.append(planetModel)


		// Navigation.planetList[index]["Color1"] = 
		// Navigation.planetList[index]["Color2"]
		// Navigation.planetList[index]["Name"]
		
	}
}
