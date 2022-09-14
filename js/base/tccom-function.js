$.fn.layer = function(html) {
	this.find('.modal-body').html(html);
	return this.modal({
		focus:true,
		show:true,
		backdrop:false,
		keyboard:false
	});
}

$.fn.layerUrl = function(url, param, options) {
	if (typeof url === 'string') {
		var $this = $(this);
		var opts = $.extend(true, {
			container: null,
			mode: null, // 'single', 'multi'
			height: null,
			callback: null // callback function name
		}, options);
		
		if (typeof param !== 'string') { param = ''; }
		
		if (typeof opts.mode === 'string') {
			param += '&mode='+opts.mode;
		}
		if (typeof opts.callback === 'string') {
			param += '&callback='+opts.callback;
		}
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'html',
			data: param,
			success: function(html) {
				var container = $this.find('.modal-body');
				if (opts.container != null) {
					container = opts.container;
				}
				container.html(html);
				if (typeof opts.height === 'string') {
					container.css('height', opts.height);
				} else if (typeof opts.height === 'number') {
					container.css('height', opts.height + 'px');
				} 
				
				return $this.modal({
					focus:true,
					show:true,
					backdrop:false,
					keyboard:false
				});
			},
			error: function(a,b,c) {
				console.log(a,b,c);
			}
		});
	}
}

$.fn.PopuplayerUrl = function(url, param, options) {
	if (typeof url === 'string') {
		var $this = $(this);
		var opts = $.extend(true, {
			container: null,
			mode: null, // 'single', 'multi'
			height: null,
			callback: null // callback function name
		}, options);
		
		if (typeof param !== 'string') { param = ''; }
		
		if (typeof opts.mode === 'string') {
			param += '&mode='+opts.mode;
		}
		if (typeof opts.callback === 'string') {
			param += '&callback='+opts.callback;
		}
		if (typeof opts.wSize === 'string' || typeof opts.hSize === 'string') {
			param += '&wSize='+opts.width;
			param += '&hSize='+opts.height;
		}
		if (typeof opts.popSeq === 'number') {
			param += '&popSeq='+opts.popSeq;
		}
		if (typeof opts.popCont === 'string') {
			param += '&popCont='+opts.popCont;
		}
		
		
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'html',
			data: param,
			success: function(html) {
				var body = $this.find('.modal-body');
				var content = $this.find('.modal-content');
				if (opts.body != null) {
					body = opts.body;
				}
				body.html(html);
				if (typeof opts.height === 'string') {
					body.css('width', opts.width);
					body.css('height', opts.height);
					content.css('width', opts.width);
					content.css('height', opts.height);
				} else if (typeof opts.height === 'number') {
					body.css('width', opts.width);
					body.css('height', opts.height);
					content.css('width', opts.width + 'px');
					content.css('height', opts.height + 'px');
				} 
				
				return $this.modal({
					focus:true,
					show:true,
					backdrop:false,
					keyboard:false
				});
			},
			error: function(a,b,c) {
				console.log(a,b,c);
			}
		});
	}
}

$.fn.autoColspan = function(cls) {
	if(cls == null || cls == '') {
		cls = 'auto-colspan';
	}
	$(this).find('.' + cls).each(function(idx, el) {
		var ths = $(this).parents('table').find('thead > tr').children();
		$(this).attr('colspan', ths.length);
		$(this).show();
	});
}
