var Button = {
	Button: function(options) {
		let buttonElement = $('<div>')
			.attr({id: options.id} )
			.addClass('button')
			.text(options.text)
			.click(function() {
				if(!$(this).hasClass('disabled')) {
					Button.startCooldown($(this));
					$(this).data("handler")($(this));
				}
			})
			.data("handler",  options.click)
			.data("remaining", 0)
			.data("cooldown", options.cooldown);

		// el.append($("<div>").addClass('cooldown'));
		
		sm.set('cooldown.'+options.id, options.cooldown);
		Button.startCooldown(buttonElement, 'state');

		// if(options.cost) {
		// 	var ttPos = options.ttPos ? options.ttPos : "bottom right";
		// 	var costTooltip = $('<div>').addClass('tooltip ' + ttPos);
		// 	for(var k in options.cost) {
		// 		$("<div>").addClass('row_key').text(_(k)).appendTo(costTooltip);
		// 		$("<div>").addClass('row_val').text(options.cost[k]).appendTo(costTooltip);
		// 	}
		// 	if(costTooltip.children().length > 0) {
		// 		costTooltip.appendTo(el);
		// 	}
		// }

		// if(options.width) {
		// 	el.css('width', options.width);
		// }

		return buttonElement;
	},

	startCooldown: function(btn) {
		var cd = btn.data("cooldown");
		// var id = 'cooldown.'+ btn.attr('id');
		if(cd > 0) {
			let time = sm.get('cooldown.'+btn.id)

			// if (Game.options.doubleTime) time /= 2;

			$(btn).animate({'font-size': '30'}, time, 'linear', function() {
				Button.clearCooldown(btn);
			});

			btn.addClass('disabled');
		}
	},

	clearCooldown: function(btn) {
		btn.removeClass('disabled');
	}
};