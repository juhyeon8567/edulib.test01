(function($) {
	var FileUploader = function(el, options, callback) {
		this.element = $(el);
		this.callback = callback;
		this.options = $.extend({
			allows: ['jpg','gif','png','hwp','pdf','txt','zip'],
			excepts: ['exe', 'sh', 'class'],
			maxUploadSize: 100, // MB , 0 - unlimited
			maxFileCount: 1, // 0 - unlimited
			showInfo: true
		}, options);
		
		// 이미지 업로드 -> 미리보기
		var $this = this;
		
		var uploadFiles = [];
		var existFiles = [];
		var deleteSeqs = [];
		
		var getfileSize = function(x) {
			var s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];
			var e = Math.floor(Math.log(x) / Math.log(1024));
			return (x / Math.pow(1024, e)).toFixed(2) + " " + s[e];
		};
		
		var lengthCheck = function() {
			if ((uploadFiles.length + existFiles.length) >= $this.options.maxFileCount) {
				$this.element.find('.auto-fileuploader-btn').hide();
				$this.element.find('.auto-fileuploader-info').hide();
			}
		}
		
		var makeFileItem = function(fileName, fileSize, seq, url, bView) {
			var output = [];
			var idx = uploadFiles.length - 1;
			if (!seq) { seq = -1; }
			var removeLink = '<span class="text-danger mr-2 auto-fileuploader-delete" data-index="'+idx+'" data-seq="'+seq+'" data-size="'+fileSize+'"><i class="fas fa-times"></i></span>';
			var downLink = fileName;
			if (url) {
				//downLink = '<a class="downlink" href="'+url+'" target="_blank">'+fileName+'</a>';
				downLink = '<a class="downlink" href="/common/file/download?fileSeq='+seq+'" target="hiddenframe">'+fileName+'</a>';
			}
			if(bView) { removeLink = ''; }
			output.push('<div class="mt-2 mb-2 auto-fileuploader-item">', 
				removeLink, 
				downLink,
				'<span class="text-gray"><span class="m-2">|</span>', 
				getfileSize(fileSize),
				'</span></div>');
			$this.element.children(".auto-fileuploader-list").append(output.join(""));
		}
		
		var init = function() {
			var allow_text = '';
			if ($this.options.allows && $this.options.allows.length > 0) {
				for (var i in $this.options.allows) {
					if (allow_text.length > 1) allow_text += ', ';
					allow_text += $this.options.allows[i].toUpperCase();
				}
				allow_text += ' 만';
			}
			var maxsize_text = '';
			if ($this.options.maxUploadSize > 0) {
				maxsize_text = $this.options.maxUploadSize + ' Mbyte 이하';
			}
			var maxcount_text = '';
			if ($this.options.maxFileCount > 1) {
				maxcount_text = '최대' + $this.options.maxFileCount + '개';
			}
			
			if ($this.options.showInfo && (allow_text.length > 0 || maxsize_text.length > 0 || maxcount_text.length > 0)) {
				var info_html = '<span class="auto-fileuploader-info text-gray ml-1"><i class="fas fa-info-circle"></i> ';
				if (allow_text.length > 0) {
					info_html += allow_text;
				}
				if (maxsize_text.length > 0) {
					if (allow_text.length > 0) {
						info_html += ' / ';
					}
					info_html += maxsize_text;
				}
				if (maxcount_text.length > 0) {
					if (allow_text.length > 0 || maxsize_text.length > 0) {
						info_html += ' / ';
					}
					info_html += maxcount_text;
				}
				
				info_html += ' 업로드 가능</span>';
				$this.element.children(".auto-fileuploader-upload").append(info_html);
			}
			
			$this.element.find(".auto-fileuploader-list > .file-item").each(function(idx, el) {
				var seq = $(el).data('seq');
				var url = $(el).data('url');
				var filename = $(el).data('filename');
				var filesize = $(el).data('filesize');
				existFiles.push({seq:seq, url:url, filename:filename, size:filesize});
				var bView = $(el).closest('.auto-fileuploader-list').hasClass('auto-fileuploader-view');
				makeFileItem(filename, filesize, seq, url, bView);
			});
			
			lengthCheck();
		}
		
		this.element.change(function(evt) {
			var $list_area = $this.element.children('.auto-fileuploader-list');
			if($list_area.length == 0) {
				this.element.append('<div class="auto-fileuploader-list"></div>');
				$list_area = $this.element.children('.auto-fileuploader-list');
			}
			var allows_ext = $this.options.allows.map(function(x) { return x.toUpperCase(); });
			var excepts_ext = $this.options.excepts.map(function(x) { return x.toUpperCase(); });
			
			var uploadedSize = uploadFiles.reduce(function(x, y) { return x + y.size; }, 0);
			var existFileSize = existFiles.reduce(function(x, y) { return x + y.size; }, 0);
			var deleteFileSize = deleteSeqs.reduce(function(x, y) { return x + y.size; }, 0);
			
			var upFileSize = 0;
			for (var i = 0; i < evt.target.files.length; i++) {
				var file = evt.target.files[i];
				upFileSize += file.size;
			}
			
			//console.log('maxUploadSize:'+this.options.maxUploadSize * 1024 * 1024);
			//console.log('uploadedSize:'+uploadedSize);
			//console.log('existFileSize:'+existFileSize);
			//console.log('deleteFileSize:'+deleteFileSize);
			//console.log('upFileSize:'+upFileSize);
			
			if ($this.options.maxUploadSize > 0 &&
					(uploadedSize + existFileSize + upFileSize - deleteFileSize) > $this.options.maxUploadSize * 1024 * 1024) {
				$.alert('최대용량('+$this.options.maxUploadSize+'MB)을 초과하여 등록하실 수 없습니다.');
				return false;
			}
			
			if ($this.options.maxFileCount > 0 &&
					(uploadFiles.length + evt.target.files.length) > $this.options.maxFileCount) {
				$.alert('최대파일수('+$this.options.maxFileCount+'개)를 초과하여 등록하실 수 없습니다.');
				return false;
			}
			
			for (var i = 0; i < evt.target.files.length; i++) {
				var file = evt.target.files[i];
				var fileName = file.name;
				var fileSize = file.size;
				var extension = fileName.substring(fileName.lastIndexOf('.')+1).toUpperCase();
				
				if (excepts_ext.indexOf(extension) > -1) {
					console.log('except extension:' + fileName);
					continue;
				}
				
				if ($this.options.maxUploadSize > 0 
						&& $this.options.maxUploadSize * 1024 * 1024 < fileSize) {
					console.log('filesize over:' + fileSize);
					continue;
				}
				
				if (allows_ext.length == 0 || allows_ext.indexOf(extension) > -1) {
					uploadFiles.push(file);
					makeFileItem(fileName, fileSize);
				}
			};
			
			evt.target.value = null;
			
			lengthCheck();
		});
		
		this.element.on("click", ".auto-fileuploader-delete", function(e) {
			e.preventDefault();
			var obj = $(e.target).closest('.auto-fileuploader-delete');
			var idx = obj.data('index'); //this.element.find('.auto-fileuploader-delete').index(obj);
			var seq = obj.data('seq');
			var size = obj.data('size');
			if (idx > -1) { uploadFiles.splice(idx, 1); }
			if (seq > -1) { 
				deleteSeqs.push({seq:seq, size:size});
				for (var j=0; j<existFiles.length; j++) {
					if (existFiles[j].seq == seq) {
						existFiles.splice(j, 1);
					}
				}
			}
			obj.closest('.auto-fileuploader-item').remove();
			if ((uploadFiles.length + existFiles.length) < $this.options.maxFileCount) {
				$this.element.find('.auto-fileuploader-btn').show();
				if ($this.options.showInfo) {
					$this.element.find('.auto-fileuploader-info').show();
				}
			}
		});
		
		this.clear = function() {
			uploadFiles = [];
			this.element.children(".auto-fileuploader-list").empty();
		}
		
		this.files = function() {
			return uploadFiles;
		}
		
		function log() {
			console.log(uploadFiles, existFiles, deleteSeqs);
		}
		
		this.upload = function(attachKey, callback) {
			var $el = this.element;
			if (uploadFiles.length > 0 || deleteSeqs.length > 0) {
				var resultData = {'resultCode':'FAILURE'};
				var formData = new FormData();
				formData.append('attachKey', attachKey);
				for (var i=0; i<uploadFiles.length; i++) {
					formData.append('files', uploadFiles[i]);
				}
				for (var i=0; i<deleteSeqs.length; i++) {
					formData.append('deleteSeqs', deleteSeqs[i].seq);
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
					//xhr: function () {
						//var myXhr = $.ajaxSettings.xhr();
						//if (myXhr.upload) {
						//	myXhr.upload.addEventListener('progress', that.progressHandling, false);
						//}
						//return myXhr;
					//},
					beforeSend: function(xhr, opts) {
						$el.loading({
							message: 'uploading...'
						});
					},
					success: function (data) {
						resultData = JSON.parse(data);
					},
					error: function (error) {
						console.error(error);
					},
					complete: function() {
						console.log('complete');
						if (typeof callback === 'function') {
							callback(resultData);
						}
						$el.loading('stop');
					}
				});
			} else {
				if (typeof callback === 'function') {
					callback({'resultCode':'SUCCESS'});
				}
			}
		}
		
		init();
		
		return this;
	};

	$.fn.fileuploader = function(options, callback) {
		var implementOptions = $.extend(true, {}, $.fn.fileuploader.defaultOptions, options);
		this.each(function() {
			var el = $(this);
			if (el.data('fileuploader'))
				el.data('fileuploader').remove();
				
			var allows = el.data('allows');
			if (typeof allows === 'string') {
				if (allows.length > 0) {
					implementOptions.allows = allows.split('|');
				} else {
					implementOptions.allows = [];
				}
			}
			var maxsize = el.data('maxUploadSize');
			if (typeof maxsize === 'number') {
				implementOptions.maxUploadSize = parseInt(maxsize,10);
			}
			
			var maxcount = el.data('maxFileCount');
			if (typeof maxcount === 'number') {
				implementOptions.maxFileCount = parseInt(maxcount,10);
			}
			
			var showInfo = el.data('showInfo');
			if (typeof showInfo === 'boolean') {
				implementOptions.showInfo = showInfo;
			}
			
			el.data('fileuploader', new FileUploader(el, implementOptions, callback));
		});
		return this;
	};
})(jQuery);
