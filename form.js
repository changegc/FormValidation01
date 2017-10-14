//表单验证
$(function() {
	//加一个s=0的标记
	//	$('.auth').data({"s":0});
	$('input[name=username]').blur(function() {
		val = this.value;
		if(val.length < 6) {
			//加一个错误的标记
			$(this).data({
				"s": 0
			});
			$(this).next().show();
		} else {
			$(this).data({
				"s": 1
			});
			$(this).next().hide();
		}
	});
	$('input[name=password]').blur(function() {
		val = this.value;
		if(val.length < 8) {
			$(this).data({
				"s": 0
			});
			$(this).next().show();
		} else {
			$(this).data({
				"s": 1
			});
			$(this).next().hide();
		}
	});

	$('input[name=repassword]').blur(function() {
		val1 = $('input[name=password]').val();
		val2 = this.value;
		if(val1 != val2) {
			$(this).data({
				"s": 0
			});
			$(this).next().show();
		} else {
			$(this).data({
				"s": 1
			});
			$(this).next().hide();
		}
	});

	$('input[name=email]').blur(function() {
		val = $(this).val();
		if(!val.match(/^\w+@\w+\.\w+$/)) {
			$(this).data({
				"s": 0
			});
			$(this).next().show();
		} else {
			$(this).data({
				"s": 1
			});
			$(this).next().hide();
		}
	});
	$('input[name=phone]').blur(function() {
		val = $(this).val();
		if(!val.match(/^131\d{8}$/)) {
			$(this).data({
				"s": 0
			});
			$(this).next().show();
		} else {
			$(this).data({
				"s": 1
			});
			$(this).next().hide();
		}
	});

	$('form').submit(function() {
		$('input.auth').blur();
		tot = 0;
		$('.auth').each(function() {
			tot += $(this).data('s');
		});
		if(tot != 5) {
			return false;
		}
	});
})