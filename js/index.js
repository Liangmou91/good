window.onload=function(){

	//section fir
	var oCon_right=document.getElementsByClassName("con_fir_right")[0];
	var oUl=oCon_right.getElementsByTagName("ul")[0];
	var oLi=oUl.getElementsByTagName("li");
	var oImg=oCon_right.getElementsByTagName("img")[0];
	var lt=oCon_right.getElementsByClassName("lt")[0];
	var gt=oCon_right.getElementsByClassName("gt")[0];
	var pics=["images/20170912165627_59194.jpg","images/20170912165824_26534.jpg","images/20170912165926_73956.jpg","images/20170912165451_81836.jpg"];
	var num=0;
	function show(){
		oImg.src=pics[num];
		for(var i=0;i<oLi.length;i++){
				oLi[i].className="";
			}
		oLi[num].className="on";
	}
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onclick=function(){
			for(var i=0;i<oLi.length;i++){
				oLi[i].className="";
			}
			oLi[this.index].className="on";
			oImg.src=pics[this.index];
		}
	}
	oImg.onmouseover=function(){
		lt.style.opacity="0.5";
		gt.style.opacity="0.5";
	}
	lt.onclick=function(){
		num--;
		if(num<0) num=oLi.length-1;
		show();
	}
	gt.onclick=function(){
		num++;
		if(num==oLi.length) num=0;
		show();
	}

	//section for
	var oCon_for=document.getElementsByClassName('con_for_bot')[0];
			var oShow_img=oCon_for.getElementsByTagName("img")[0];
			var oCon_for_ul=oCon_for.getElementsByTagName("ul")[0];
			var oCon_for_ul1=oCon_for.getElementsByTagName("ul")[1];
			var oFor_li_img=oCon_for_ul.getElementsByTagName("img");
			var oFor_li=oCon_for_ul1.getElementsByTagName("li");
			for(var i=0;i<oFor_li_img.length;i++){
				oFor_li[i].index=i;
				oFor_li[i].onmouseover=function(){
					oShow_img.src=oFor_li_img[this.index].src;
				}
			}
}