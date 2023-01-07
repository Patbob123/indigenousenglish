var sm = {
    MAX_INV_COUNT: 99999,
    state: {},
	init: function() {
		let states = [
			'features',  
			'planets',   
			'inv',    
			'char',   
			'income',
			'timers',
			'game',         
			'wait',			
			'cooldown',     
			'config'
		];

		for(var name in states) {
			if(!sm.get(states[name])) sm.set(states[name], {});
		}
	},

    set: function(stateName, val) {
        if(val > this.MAX_INV_COUNT) val = this.MAX_INV_COUNT;

		try{
			eval('(this.state'+stateName+') = val');
		} catch (e) {
			//parent doesn't exist, so make parent
			sm.createState(stateName, val);
		}
    },
	add: function(stateName, val) {
        if(sm.get(stateName)+val > this.MAX_INV_COUNT) val = this.MAX_INV_COUNT;

		try{
			eval('(this.state'+stateName+') += val');
		} catch (e) {
			//parent doesn't exist, so make parent
			sm.createState(stateName, val);
		}
    },
	get: function(stateName) {
		let whichState = null;
		//catch errors if parent of state doesn't exist
		try{
			eval('whichState = (this.state'+stateName+')');
		} catch (e) {
			whichState = undefined;
		}

		if((!whichState || whichState == {})) return 0;
		else return whichState;
	},

    createState: function(stateName, val) {
		let words = stateName.split(".");
        
        let cur = this.state;
        for(let i = 0; i < words.length-1; i++) {
            if(cur[words[i] === undefined]) cur[words[i]] = {};
            cur = cur[words[i]];
        }
        cur[words.length-1] = val;
    },

	unlockPlanet: function(goto) { 
        sm.add('planets.unlocked', 1);
		Navigation.addNav(goto);
	}


}