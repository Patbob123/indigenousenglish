var sm = {
	MAX_INV_COUNT: 99999,
	state: {},
	init: function () {
		let states = [
			'features',
			'planets',
			'inv',
			'char',
			'count',
			'income',
			'timers',
			'game',
			'wait',
			'cooldown',
			'config'
		];

		for (var name in states) {
			sm.set(states[name], {});
		}
	},

	set: function (stateName, val) {
		if (val > this.MAX_INV_COUNT) val = this.MAX_INV_COUNT;

		try {
			eval('(this.state.' + stateName + ') = val');
			// console.log('(this.state.' + stateName + ')')
		} catch (e) {
			sm.createState(stateName, val);
		}
	},
	add: function (stateName, val) {
		if (sm.get(stateName) + val > this.MAX_INV_COUNT) val = this.MAX_INV_COUNT;

		try {
			if (sm.get(stateName) == false) sm.set(stateName, val);
			else eval('(this.state.' + stateName + ') += val');
		} catch (e) {
			sm.createState(stateName, val);
		}
	},
	get: function (stateName) {
		let whichState = null;
		try {
			eval('whichState = (this.state.' + stateName + ')');
			// console.log(whichState)
		} catch (e) {
			whichState = undefined;
		}

		if ((whichState == {} || whichState == null || whichState == undefined)) return false;
		else return whichState;
	},

	createState: function (stateName, val) {
		let words = stateName.split(".");

		let cur = this.state;
		for (let i = 0; i < words.length - 1; i++) {
			if (cur[words[i]] === undefined) cur[words[i]] = {};
			cur = cur[words[i]];
		}
		cur[words[words.length - 1]] = val;
	},

	unlockPlanet: function (goto) {
		sm.add('planets.unlocked', 1);
		Navigation.addNav(goto);
	}


}