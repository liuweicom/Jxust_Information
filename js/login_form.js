window.onload=function(){
    var login_in=document.getElementById("login_in");
    var login_form=document.getElementById("login_form");
    var to_login_in=document.getElementById("to_login_in");
    var to_login_form=document.getElementById("to_login_form");
    var login_name=document.getElementById("login_name");
    var id=document.getElementById("id_index");
    var Telephone=document.getElementById("phone");
    var Password2=document.getElementById("inputPassword2");
    var Password3=document.getElementById("Passwordagain");
    var sign=document.getElementById("sign");
    var nameFalse=false;
    var phoneFalse=false;
    var cardFalse=false;
    var passFalse=false;
    $('#login_in').on('hidden.bs.modal', function(e) {
      // do something...
        login_name.value=" ";
      id.value=" ";
      Telephone.value=" ";
      Password2.value=null;
      Password3.value=null;
      $('#login_name').popover('hide');
      $("#phone").popover('hide');
      $("#id_index").popover('hide');
      $("#inputPassword2").popover('hide');
      $("#Passwordagain").popover('hide');
    });
    sign.onclick=function(){
      var name=login_name.value;
      var id_index=$("#id_index").val();
    var phone=$("#phone").val();
    var inputPassword2=$("#inputPassword2").val();
    var inputPassword3=$("#Passwordagain").val();
      // alert(name);
      // alert(id_index);
      if(!name){
        login_name.setAttribute('data-content',"名字不能为空");//添加属性
        $('#login_name').popover('show');
      }else{
        $('#login_name').popover('hide');
        nameFalse=true;
      }
      if(!phone){
        $("#phone").attr('data-content',"电话不能为空"); 
        $("#phone").popover('show');
      }else{
        phoneFalse=true;
        $("#phone").popover('hide');
      }
      if(!id_index){
        $("#id_index").attr('data-content',"一卡通不能为空"); 
        $("#id_index").popover('show');
      }else {
        cardFalse=true;
        $("#id_index").popover('hide');
      }
      if(!inputPassword2){
        $("#inputPassword2").attr('data-content',"密码不能为空");
        $("#inputPassword2").popover('show');
      }else{
        passFalse=true;
        $("#inputPassword2").popover('hide');
        
      }
      if(!inputPassword3){
        $("#Passwordagain").attr('data-content',"密码不能为空");
        $("#Passwordagain").popover('show');
      }else{
        passFalse=true;
        $("#Passwordagain").popover('hide');
        
      };
      if(nameFalse&&phoneFalse&&cardFalse&&passFalse){
        alert("注册成功");
      }else{
        alert("注册失败，请从新输入");
      };
    }
    
    $("#login_name").on("change",function(){
      var name=login_name.value;
      if(!name){
        login_name.setAttribute('data-content',"名字不能为空");//添加属性
        $('#login_name').popover('show');

      }else if(!/\w{2,}/g.test(name)){
        login_name.setAttribute('data-content',"名字不符合命名规则");
        $('#login_name').popover('show');
      }else{
        $('#login_name').removeAttr('data-content');
        $('#login_name').popover('hide');
      }
      
    });
    $("#id_index").on("change",function(){
      
      if(!$("#id_index").val()){
        login_name.setAttribute('data-content',"一卡通不能为空");
        $('#id_index').popover('show');

      }else if(!/\d{10}/g.test($("#id_index").val())){
        // console.log(/\d{10}/g.test(id_index));
        $("#id_index").attr('data-content',"一卡通不正确请再次输入");
        $("#id_index").popover('show');
      }else{
        $("#id_index").popover('hide');
      }
      
    });
    $("#phone").on("change",function(){
      if(!$("#phone").val()){
        $("#phone").attr('data-content',"电话号码不能为空"); 
        $("#phone").popover('show');

      }else if(!/\d{11}/g.test($("#phone").val())){
        $("#phone").attr('data-content',"电话号码不正确请再次输入");
        $("#phone").popover('show');
      }else{
        $("#phone").popover('hide');
      }
    });

    $("#inputPassword2").on("change",function(){
      if(!$("#inputPassword2").val()){
        $("#inputPassword2").attr('data-content',"密码不能为空");
        $("#inputPassword2").popover('show');

      }else{
        $("#inputPassword2").popover('hide');
      }
    });


    $("#Passwordagain").on("change",function(){
      if(!$("#Passwordagain").val()){
        $("#Passwordagain").attr('data-content',"密码不能为空");
        $("#Passwordagain").popover('show');

      }else if($("#Passwordagain").val()!=$("#inputPassword2").val()){
        $("#Passwordagain").attr('data-content',"两次输入的密码不一致");
        $("#Passwordagain").popover('show');
      }else{
        $("#Passwordagain").popover('hide');
      }
    });
    // var name=$("#login_name").value();
    // alert(name);
    // 注册与登入切换
    to_login_in.onclick=function(){
      $('#login_form').modal('hide');
      
    }
    to_login_form.onclick=function(){
      $('#login_in').modal('hide')
    }
    // 登入界面
    var login_name2=document.getElementById("login_name2");
    var isLogin=false;
    var inputPassword1=document.getElementById("inputPassword1");
    $("#btn_login").on("click",function(){
      if($("#login_name2").val()=="1520133307"&&$("#inputPassword1").val()=="123"){
        alert("登入成功！");
        $("#login_name2").popover('hide');
        $('#login_form').modal('hide');
        isLogin=true;
        $("#login_btn").text("已登入").css('color',"red");
        window.sessionStorage.setItem("isLogin",isLogin);
        window.sessionStorage.setItem("id_index","1520133307");
        window.sessionStorage.setItem("login_name","刘薇");
        window.sessionStorage.setItem("password","123");
        window.sessionStorage.setItem("phone","15779712623");
      }else{
        $("#login_name2").attr('data-content',"一卡通或者密码不正确请再次输入");
        $("#login_name2").popover('show');
        window.sessionStorage.setItem("isLogin",isLogin);
      }
    });
    $('#login_form').on('hidden.bs.modal', function(e) {
        login_name2.value=" ";
      inputPassword1.value=null;
      $('#login_name2').popover('hide');
    });
    // 记住密码功能
      var rember_id=document.getElementById("rember_id");
      rember_id.onclick=function(){
        
      }
  }