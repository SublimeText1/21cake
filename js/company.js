$("#sure").validate({
	errorClass: "invalid",
	rules:{
		companyName:"required",
		contacts:"required",
		mobile:"required",
		leavMessage:"required"
	},
	messages:{
		companyName:"请填写公司名称",
		contacts:"请填写联系人",
		mobile:"请填写手机号",
		leavMessage:"请填写留言",
	}
});