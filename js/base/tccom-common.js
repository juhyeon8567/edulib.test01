var tccom = function() {};

tccom.common = {
	fn: {
		list: {
			adjustList: function(pagingInfo, options) {
				// ----------------------------------------
				// [how to use function - 1]
				// [required] action.form.search
				// [required] action.fn.search
				
				// tccom.common.fn.adjuctList(result.pagingInfo, { action: 'sampleList' });
				
				// ----------------------------------------
				// [how to use function - 2]
				
				// tccom.common.fn.adjustList(result.pagingInfo, {
				// 	actionName: 'sampleList',
				// 	header: $('#list-header'),
				// 	paging: $('#list-footer'),
				// 	fn: {
				// 		headerName: 'sampleList.fn.changeRows',
				// 		pagingName: 'sampleList.fn.paging'
				// 	}
				// });
				
				var opts = $.extend(true, {
					actionName: null,
					header: null,
					paging: null,
					fn: {
						headerName: null,
						pagingName : null
					},
					useTotal: true,
					useRows: true
				}, options);
				
				if (pagingInfo != null) {
					if (opts.header != null) {
						if (typeof opts.fn.headerName === 'string') {
							tccom.common.fn.list.drawListHeader(pagingInfo, {
								container: opts.header,
								funcName: opts.fn.headerName,
								useTotal: opts.useTotal,
								useRows: opts.useRows
							});
						} else if (typeof opts.actionName === 'string') {
							tccom.common.fn.list.drawListHeader(pagingInfo, {
								actionName: opts.actionName,
								container: opts.header,
								useTotal: opts.useTotal,
								useRows: opts.useRows
							});
						}
					}
					if (opts.paging != null) {
						if (pagingInfo.pageNo > 0) {
							if (typeof opts.fn.pagingName === 'string') {
								tccom.common.fn.list.drawPaging(pagingInfo, {
									container: opts.paging,
									funcName: opts.fn.pagingName
								});
							} else if (typeof opts.actionName === 'string') {
								tccom.common.fn.list.drawPaging(pagingInfo, {
									actionName: opts.actionName,
									container: opts.paging
								});
							}
						}
					}
				}
			},
			makeRowNumber: function(pagingInfo, index) {
				return pagingInfo.totalRowCount+1 - ((pagingInfo.pageNo-1) * pagingInfo.pageRowSize + (index+1));
			},
			drawListHeader: function(pagingInfo, options) {
				var opts = $.extend(true, {
					actionName: null,
					container: null,
					funcName: null,
					useTotal: true,
					useRows: true,
					rows: [10,50,100,300]
				}, options);
				
				if (opts.container !== null) {
					var html = '';
					html += '<div class="row mb-2 justify-content-between">';
					html += '	<div class="col-sm-4 text-left align-self-center">';
					html += '		<h3>총  <span class="total-row-count">'+pagingInfo.totalRowCount+'</span>건</h3>';
					html += '	</div>';
					
					if (opts.useRows && pagingInfo.pageNo > 0 && pagingInfo.totalRowCount > 0) {
						html += '	<div class="col-sm-4 text-right">';
						
						if (typeof opts.funcName === 'string') {
							html += '<select class="custom-select page-row-select" style="width:150px;" onChange="'+opts.funcName+'(this.value);">';
						} else if (typeof opts.actionName === 'string') {
							html += '<select class="custom-select page-row-select" style="width:150px;" onChange="tccom.common.fn.list.changeRows('+opts.actionName+', this.value);">';
						}
						
						for (var i in opts.rows) {
							html += '<option value="'+opts.rows[i]+'" ';
							if (pagingInfo.pageRowSize == opts.rows[i]) {
								html += 'selected="selected"';
							}
							html += '>'+opts.rows[i]+'개씩 보기</option>';
						}
						
						html += '		</select>';
						html += '	</div>';
					}
					html += '</div>';
					
					$(opts.container).html(html);
				}
			},
			drawPaging: function(pagingInfo, options) {
				var opts = $.extend(true, {
					actionName: null,
					container: null,
					funcName: null
				}, options);
				
				if (opts.container != null) {
					var html = '';
					
					function makePagingFunction(no) {
						if (typeof opts.funcName === 'string') {
							return opts.funcName + '(' + no + ')';
						} else if (typeof opts.actionName === 'string') {
							return 'tccom.common.fn.list.paging(' + opts.actionName + ', ' + no + ')';
						} else {
							return '';
						}
					}
					
					if (pagingInfo.totalRowCount > 0) {
						html += '<div class="row mt-3">';
						html += '	<div class="col clearfix">';
						html += '		<ul class="pagination pagination m-0 float-right page-paging">';
						
						if (pagingInfo.startColNo-1 > 0) {
							html += '<li class="page-item"><a class="page-link" href="javascript:'+makePagingFunction(pagingInfo.startColNo - 1)+';">&laquo;</a></li>';
						} else {
							html += '<li class="page-item"><a class="page-link" href="javascript:void(0);">&laquo;</a></li>';
						}
						
						for (var i = pagingInfo.startColNo; i < pagingInfo.endColNo+1; i++) {
							if (pagingInfo.pageNo == i) {
								html += '<li class="page-item active"><a class="page-link" href="javascript:void(0);">'+i+'</a></li>';
							} else {
								html += '<li class="page-item"><a class="page-link" href="javascript:'+makePagingFunction(i)+';">'+i+'</a></li>';
							}
						}
						
						if (pagingInfo.totalColCount > pagingInfo.endColNo) {
							html += '<li class="page-item"><a class="page-link" href="javascript:'+makePagingFunction(pagingInfo.endColNo+1)+';">&raquo;</a></li>';
						} else {
							html += '<li class="page-item"><a class="page-link" href="javascript:void(0);">&raquo;</a></li>';
						}
						
						html += '		</ul>';
						html += '	</div>';
						html += '</div>';
					}
					$(opts.container).html(html);
				}
			},
			changeRows: function(action, rows) {
				//console.log('tccom.common.fn.list.changeRows()');
				if(rows > 0) {
					action.form.search.find('input[name="pagingInfo.pageRowSize"]').val(rows);
					action.form.search.find('input[name="pagingInfo.pageNo"]').val(1);
				}
				action.fn.search();
			},
			paging: function(action, no) {
				//console.log('tccom.common.fn.list.paging()');
				if(no > 0) {
					action.form.search.find('input[name="pagingInfo.pageNo"]').val(no);
				}
				action.fn.search();
			},
			setRangeDate: function(thisObject, id, type, num) {
				var obj = $(thisObject);
				var types = {'D':'day', 'W':'week', 'M':'month', 'Y':'year'};
				var drp = $('#'+id).data('daterangepicker');
				if (drp) {
					drp.setStartDate(moment().subtract(num, types[type]).startOf('day'));
					drp.setEndDate(moment().endOf('day'));
					$('#'+id).trigger('apply.daterangepicker', drp);
					obj.siblings('button').removeClass('hover');
					obj.addClass('hover');
				}
			},
			checkAll: function(thisObject, name) {
				var obj = $(thisObject);
				obj.closest('table').find('input:checkbox[name="'+name+'"]').prop('checked', obj.is(':checked'));
			}
		},
		edit: {
			applyTemplate: function(templateId, item) {
				var template = $('#'+templateId);
				var text = template.text();
				console.log(typeof item);
				if (typeof item === 'object') {
					for (var key in item) {
						text = text.replaceAll('#'+key+'#', item[key]);
					}
				}
				return text;
			}
		}
	},
	util: {
		getFuncByName: function(fnName) {
			var arrNames = fnName.split('.');
			var fnObj = null;
			for (var i in arrNames) {
				if (fnObj) {
					fnObj = fnObj[arrNames[i]];
				} else {
					fnObj = window[arrNames[i]];
				}
			}
			return fnObj;
		},
		onEnter: function(e, func) {
			if(e.keyCode == 13 && typeof func === 'function') {
				func();
			}
		}
	}
}

tccom.layer = {
	member: function(mbrSeq) {
		$('#member-detail-layer').layerUrl('/mbr/mbr/memberDetailLayer', 'mbrSeq='+mbrSeq, {
			container: $('#member-detail-layer-body'),
			height: '820px'
		});
	}
}