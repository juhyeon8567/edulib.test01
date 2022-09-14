$(function () {
	//$('[data-toggle="popover"]').popover();

	$('.auto-calendar-single').each(function(idx, el) {
		$(el).daterangepicker({ singleDatePicker:true, autoApply:true });
	});
	$('.auto-calendar-range').each(function(idx, el) {
		$(el).daterangepicker();
	});
	
	$('.auto-calendar-rangeTime').each(function(idx, el) {
		$(el).daterangepicker({
			locale: {
				"format": 'YYYY-MM-DD HH:mm',			// 일시 노출 포맷
			},
			timePicker: true,						// 시간 노출 여부
			autoApply: true,						// 확인/취소 버튼 사용여부
			timePicker24Hour: true					// 24시간 노출 여부(ex> true : 23:50, false : PM 11:50)
		});
	});
	
	$('.auto-editor').each(function(idx, el) {
		$(el).summernote({ 
			height: $(el).css('height'),
			toolbar: [
				['style', ['style']],
				['font', ['bold', 'underline', 'strikethrough', 'clear']],
				['fontsize', ['fontsize']],
				['color', ['color']],
				['para', ['ul', 'ol', 'paragraph']],
				['table', ['table']],
				['insert', ['link', 'picture', 'video']],
				['view', ['fullscreen', 'codeview', 'help']]
			],
			callbacks: {
				onImageUpload: function(files) {
					if (files != null && files.length > 0) {
						var formData = new FormData();
						for (var i=0; i<files.length; i++) {
							formData.append('files', files[i]);
						}
						
						$.ajax({
							type: "POST",
							url: "/common/file/upload",
							async: false,
							data: formData,
							cache: false,
							contentType: false,
							processData: false,
							timeout: 60000,
							success: function (data) {
								resultData = JSON.parse(data);
								console.log(resultData);
								if (resultData != null && resultData.resultCode === 'SUCCESS') {
									var items = resultData.items;
									for (var i in items) {
										var item = items[i];
										console.log('url:'+item.fileUrl);
										$(el).summernote('insertImage', '/download'+item.fileUrl);
									}
								}
								console.log(resultData);
							},
							error: function (error) {
								console.error(error);
								$.error('서버 에러가 발생하였습니다.');
							}
						});
					}
				},
				onPaste: function(e) {
					var clipboardData = e.originalEvent.clipboardData;
					if (clipboardData && clipboardData.items && clipboardData.items.length) {
						var item = clipboardData.items[0];
						if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
							e.preventDefault();
						}
					}
				}
			}
		});
	});
	$('.auto-editor-simple').each(function(idx, el) {
		$(el).summernote({ 
			height: $(el).css('height'),
			toolbar: [
				['font', ['bold', 'underline', 'strikethrough', 'clear']],
				['fontsize', ['fontsize']],
				['color', ['color']],
				['insert', ['link']],
				['view', ['codeview', 'help']]
			]
		});
	});
	
	$('.auto-editor-view').each(function(idx, el) {
		var h = $(el).data('height');
		var height = '';
		if (h === 'full') {
			height = '0px';
		} else {
			height = h + 'px';
		}
		$(el).after('<iframe frameborder="0" width="100%" height="'+height+'" style="border:1px solid #e9ecef;"></iframe>');
		var iframe = $(el).siblings('iframe');
		var iframeBody = iframe.contents().find('body');
		iframeBody.html($('<div/>').html($(el).html()).text());
		if (h === 'full') {
			setTimeout(function() {
				var doc = (iframe[0].contentDocument) ? iframe[0].contentDocument : iframe[0].contentWindow.document;
				iframe.height(doc.body.scrollHeight);
				console.log(doc.body.scrollHeight);
			}, 10);
		}
	});
	
	$('.auto-fileuploader').each(function(idx, el) {
		$(el).fileuploader();
	});
	
	$('.auto-colspan').each(function(idx, el) {
		var ths = $(this).parents('table').find('thead > tr').children();
		$(this).attr('colspan', ths.length);
		$(this).show();
	});
	
	$('.auto-sortable-area').each(function(idx, el) {
		$(this).sortable({
			handle: '.auto-sortable-icon',
			cursor: 'move'
		});
		$(this).disableSelection();
	});
});
