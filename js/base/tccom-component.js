$.alert = function(msg, options) {
	this.options = $.extend(true, {
		text: {
			title: '알림',
			button: {
				ok: '확인',
			}
		},
		fnOk: null
	}, options);
	
	var template = $('#modal-common-alert');
	template.find('.modal-header').removeClass('bg-primary bg-warning bg-danger');
	template.find('.modal-header').addClass('bg-primary');
	template.find('.modal-title').html(this.options.text.title);
	template.find('.modal-body').html(msg);
	template.find('.modal-footer > .ok-btn').html(this.options.text.button.ok);
	template.off('hidden.bs.modal');
	if (typeof this.options.fnOk === 'function') {
		template.one('hidden.bs.modal', this.options.fnOk)
	}
	
	template.modal({
		focus:true,
		show:true,
		backdrop:'static',
		keyboard:false
	});
	return this;
}

$.warn = function(msg, options) {
	this.options = $.extend(true, {
		text: {
			title: '알림',
			button: {
				ok: '확인',
			}
		},
		fnOk: null
	}, options);
	
	var template = $('#modal-common-alert');
	template.find('.modal-header').removeClass('bg-primary bg-warning bg-danger');
	template.find('.modal-header').addClass('bg-warning');
	template.find('.modal-title').html(this.options.text.title);
	template.find('.modal-body').html(msg);
	template.find('.modal-footer > .ok-btn').html(this.options.text.button.ok);
	template.off('hidden.bs.modal');
	if (typeof this.options.fnOk === 'function') {
		template.one('hidden.bs.modal', this.options.fnOk)
	}
	
	template.modal({
		focus:true,
		show:true,
		backdrop:'static',
		keyboard:false
	});
	return this;
}

$.error = function(msg, options) {
	this.options = $.extend(true, {
		text: {
			title: '에러',
			button: {
				ok: '확인',
			}
		},
		fnOk: null
	}, options);
	
	var template = $('#modal-common-alert');
	template.find('.modal-header').removeClass('bg-primary bg-warning bg-danger');
	template.find('.modal-header').addClass('bg-danger');
	template.find('.modal-title').html(this.options.text.title);
	template.find('.modal-body').html(msg);
	template.find('.modal-footer > .ok-btn').html(this.options.text.button.ok);
	template.off('hidden.bs.modal');
	if (typeof this.options.fnOk === 'function') {
		template.one('hidden.bs.modal', this.options.fnOk)
	}
	
	template.modal({
		focus:true,
		show:true,
		backdrop:'static',
		keyboard:false
	});
	return this;
}

$.confirm = function(msg, options) {
	this.options = $.extend(true, {
		text: {
			title: '알림',
			button: {
				cancel: '취소',
				ok: '확인',
			}
		},
		fnCancel: null,
		fnOk: null
	
	}, options);
	
	var template = $('#modal-common-confirm');
	template.find('.modal-title').html(this.options.text.title);
	template.find('.modal-body').html(msg);
	template.find('.modal-footer > .cancel-btn').html(this.options.text.button.cancel);
	template.find('.modal-footer > .ok-btn').html(this.options.text.button.ok);
	template.off('click', '.cancel-btn');
	template.off('click', '.ok-btn');
	if (typeof this.options.fnCancel === 'function') {
		template.one('click', '.cancel-btn', this.options.fnCancel);
	}
	if (typeof this.options.fnOk === 'function') {
		template.one('click', '.ok-btn', this.options.fnOk);
	}
	
	template.modal({
		focus:true,
		show:true,
		backdrop:'static',
		keyboard:false
	});
	return this;
}
