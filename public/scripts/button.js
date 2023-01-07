var Button = {
	Button: function (options) {
		if(!options.hasOwnProperty('hover')) options.hover = options.text
		if(!options.hasOwnProperty('condition')) options.condition = () => true;
		if(!options.hasOwnProperty('cost')) options.cost = {};
		let buttonElement = $('<div>')
			.attr({
				id: options.id,
				style: '--time:'+options.cooldown*5+'ms'
			})
			.addClass('interBtn noselect')
			.click(function () {
				if (!$(this).hasClass('disabled') && $(this).data("condition")() && Button.useCost($(this).data("cost"))) {
					$(this).addClass('disabled');
					Button.startCooldown($(this));
					$(this).data("handler")($(this));
				}
                Status.updateStatus("heat", 30)
			})
			.data("handler", options.click)
			.data("condition", options.condition)
			.data("cost", options.cost)
			.data("originalTxt", options.text)
			.data("hoverTxt", options.hover);
		buttonElement.append($('<span>').text(options.text));

		buttonElement.mouseenter(function () {
			if ($(this).hasClass('disabled')) return;
			$(this).animate({ 'opacity': '0' }, 150, 'linear', function () {
				$(this)[0].childNodes[0].innerHTML = options.hover;
				$(this).animate({ 'opacity': '1' }, 150, 'linear', function () {
					if (!$(this).is(':hover')) {
						$(this)[0].childNodes[0].innerHTML = options.text
					}
				});
			});
		}).mouseleave(function () {
			if ($(this).hasClass('disabled')) return;
			$(this)[0].childNodes[0].innerHTML = options.text
		});
		// for(let i = 0; i< 4; i++) {
		// 	$('<span>').prependTo(buttonElement)
		// }

		// el.append($("<div>").addClass('cooldown'));

		sm.set('cooldown.' + options.id, options.cooldown);

		// if(options.width) {
		// 	el.css('width', options.width);
		// }

		return buttonElement;
	},

	useCost: function(costs) {
		if(costs == {}) return true;
		for(let item in costs) {
			if(sm.get('inv.'+item) < costs[item]) return false;
		}
		for(let item in costs) {
			Inventory.addItem(item, costs[item]*-1);
		}
		return true;
	},

	startCooldown: function (btn) {
		let time = sm.get('cooldown.' + $(btn)[0].id)

		if(Game.godMode) {
			time /= 3;
		}
		// console.log(time, $(btn),cooldownElement[0])
		// if (Game.options.doubleTime) time /= 2;

		$(btn)[0].childNodes[0].innerHTML = $(btn).data("originalTxt")
		// console.log($(btn)[0].childNodes[0])
		$(btn).removeClass('interBtn');

		let cooldownElement = $('<div>').addClass('cooldown')
		// cooldownElement.innerHTML = ''
		$(btn).append(cooldownElement)
		cooldownElement.animate({width: '100%'}, time, 'linear', function () {
			// console.log(time)
			Button.clearCooldown(btn);
			cooldownElement.remove();
			if ($(this).is(':hover')) {
				$(btn)[0].childNodes[0].innerHTML = $(btn).data("hoverTxt")
			}
		});
	},

	clearCooldown: function (btn) {
		$(btn).removeClass('disabled');
		$(btn).addClass('interBtn');
	}
};


// /BUTTON ANIMtTOIN
// GIVE PLANET MODEL ITS OWN PANEL
// ADD EVENTS
// ADD statusbar, temp and oxygen [hunger