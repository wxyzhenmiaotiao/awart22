getRem(750, 100);
window.onresize = function() {
	getRem(750, 100)
};

function getRem(pwidth, prem) {
	var html = document.getElementsByTagName("html")[0];
	//获取视窗宽度
	//下面的代码是为了考虑兼容性
	//在IE7、IE8、Firefox中，document.body.clientWidth以及 document.body.clientHeightzhi值为0，此时，可以使用 document.documentElement.clientHeight等代替。
	var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
	html.style.fontSize = oWidth / pwidth * prem + "px";
}
