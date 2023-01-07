var Planet = {

    init: function () {
        this.planet = $('<div>').attr({
            id: 'planet'
        });

        let planetClip = $('<div>').addClass('planetClip');
        let planetModel = $('<div>').addClass('planetModel');
		let sides = $('<div>');
		for(let i = 0; i < 5; i++){
			sides.append($('<span>').attr({
				style: "--i:"+i
			}))
		}
		planetModel.append($('<div>').addClass('planetTop'));
		planetModel.append(sides);
		planetClip.append(planetModel)
        this.planet.append(planetClip)

        this.planet.prependTo('div#main')
    },
}
