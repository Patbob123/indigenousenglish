var Button = {
	Button: function (options) {
		let buttonElement = $('<div>')
			.attr({ id: options.id })
			.addClass('interBtn noselect')
			.text(options.text)
			.click(function () {
				if (!$(this).hasClass('disabled')) {
					Button.startCooldown($(this));
					$(this).data("handler")($(this));
				}
                Status.updateStatus(2)
			})
			.data("handler", options.click);
		// for(let i = 0; i< 4; i++) {
		// 	$('<span>').prependTo(buttonElement)
		// }

		// el.append($("<div>").addClass('cooldown'));

		sm.set('cooldown.' + options.id, options.cooldown);

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

	startCooldown: function (btn) {
		let time = sm.get('cooldown.' + $(btn)[0].id)
		console.log(time, $(btn)[0])
		// if (Game.options.doubleTime) time /= 2;

		$(btn).addClass('disabled');

		$(btn).animate({ 'font-size': '25' }, time *5, 'linear', function () {
			Button.clearCooldown(btn);
		});
	},

	clearCooldown: function (btn) {
		$(btn).removeClass('disabled');
	}
};


// /BUTTON ANIMtTOIN
// GIVE PLANET MODEL ITS OWN PANEL
// ADD EVENTS
// ADD statusbar, temp and oxygen [hunger