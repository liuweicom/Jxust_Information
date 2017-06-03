// 导航条组件代码

// $('#myTabs a').click(function (e) {
//   e.preventDefault()；
//   $(this).tab('show')；
// });
// 隐藏弹框
 // $(window).on('resize',resize).trigger('resize');
$(function () {
	//悬浮时将隐含的文字显示出来
   // $('[data-toggle="tooltip"]').tooltip();	

   $('#myModal').on('shown.bs.modal', function () {
  $('#login_form').focus()
})
});
