var sm = {
    MAX_INV_COUNT: 99999,
    state: {},
	init: function() {
		var states = [
			'features',     
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
			if(!$SM.get(states[name])) $SM.set(states[name], {});
		}
	},

    set: function(stateName, val) {
        if(val > this.MAX_INV_COUNT) val = this.MAX_INV_COUNT;

		try{
			eval('('+fullPath+') = value');
		} catch (e) {
			//parent doesn't exist, so make parent
			$SM.createState(stateName, value);
		}
    },

    createState(stateName, val) {
		let words = stateName.split(".");
        
        let cur = this.state;
        for(let i = 0; i < words.length-1; i++) {
            if(cur[words[i] === undefined]) cur[words[i]] = {};
            cur = cur[words[i]];
        }
        cur[words.length-1] = val;
    }


}