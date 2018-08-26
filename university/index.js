/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-09 14:15:58
 * @version $Id$
 */
function verify(){
    		var myname=document.getElementById("myname");
    		var studentid=document.getElementById("studentid");
    		if(myname.value==""){
    			alert("请输入你的姓名");
    			myname.focus();
    			return;
    		}else if(studentid.value==""){
    			alert("请输入你的学号");
    			return;
    		}else if((myname.value=="许思航")&&(studentid.value=="07160739")){
    			alert("登录成功！");
    			window.location.href="main.html";
    		}else{
    			alert("登录失败，请检查你的姓名和学号是否有误！");
    			return;
    		}
    		return true;
    	}
function register(){
	alert("欢迎注册！");
    window.location.href="register.html";
}

$(function(){
	
	window.setTimeout("W()",500);
	window.setTimeout("e()",1000);
	window.setTimeout("l()",1500);
	window.setTimeout("c()",2000);
	window.setTimeout("o()",2500);
	window.setTimeout("m()",3000);
	window.setTimeout("E()",3500);
	shenglue();
	tip();

})

function W(){
	$("#W").animate({left: "300px", top: "100px",height:"200px",width:"200px"},1000);
}
function e(){
	$("#e").animate({left: "450px", top: "115px",height:"200px",width:"200px"},1000);
}
function l(){
	$("#l").animate({left: "550px", top: "98px",height:"200px",width:"200px"},1000);
}
function c(){
	$("#c").animate({left: "643px", top: "115px",height:"200px",width:"200px"},1000);
}
function o(){
	$("#o").animate({left: "760px", top: "115px",height:"200px",width:"200px"},1000);
}
function m(){
	$("#m").animate({left: "900px", top: "115px",height:"200px",width:"200px"},1000);
}
function E(){
	$("#E").animate({left: "1030px", top: "115px",height:"200px",width:"200px"},1000);
}
function shenglue(){
	$(".shenglue").animate({width:"200px"},2000,function(){
		$(".shenglue").animate({width:"0px"},2000);
	});
	window.setTimeout("shenglue()",4000);
}
function tip(){
	$(".tip").animate({left: "460px", top: "270px",height:"50px",width:"600px"},1000);
}

