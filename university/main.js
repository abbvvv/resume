/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-10 16:47:59
 * @version $Id$
 */
// $(function(){
// 	university();
// });
// function university(){
//  	$("#div4").hide("slow");
// }
window.onload=init;


	
	function init(){
		

		var div8=document.getElementById("div8");
	var imgs=div8.getElementsByTagName("img");
	imgs[0].onmouseover=function(){
		move(0);
	};
	imgs[1].onmouseover=function(){
		move(-312);
		
	};
	imgs[2].onmouseover=function(){
		move(-622);
	};
	imgs[3].onmouseover=function(){
		move(-932);
	};
		
	}
	

var step=5;
var time=null;
function move(endx){
	window.clearTimeout(time);
	var div7=document.getElementById("div7");
	var x=parseInt(div7.style.left);
	if(x>endx){
		//x=x-step;
		x=x-Math.ceil(Math.abs(x-endx)/10);
	}
	if(x<endx){
		//x=x+step;
		x=x+Math.ceil(Math.abs(x-endx)/10);
	}
	div7.style.left=x+"px";
	time=window.setTimeout("move("+endx+")",20);
}