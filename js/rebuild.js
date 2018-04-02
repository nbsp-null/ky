
var model=!(function (a){
a.funct=new Object;
a. eve=new Object;
a. Ctl=new Object;
a. doc=document;
a. body=document.getElementsByTagName('body')[0];
a. c1=doc.getElementById('c_t1');
a. c2=doc.getElementById('c_t2');
a. sdt=doc.getElementById('student');
a. cour=doc.getElementById('course');})(window)

Ctl.crt=function(class_n){
var a=doc.getElementsByClassName(class_n)[0];
return a.cloneNode(true)
}

Ctl.cv=function(arr,obj,func,func_z){
 for (var a in arr){
if(funct.sele_obj(obj,arr[a])){if( obj[arr[a]]!=""&&obj[arr[a]]!=null){func();} 
else{func_z();}}}}
Ctl.cvs=function check(node_e,mes) {
for ( var key in node_e) {						
name = key;dom = node_e[key];str=mes[name]
if(funct.sele_arr(['fech_statu','gender'],name))
{dom.className=str; }
else if (funct.sele_arr(['remark','go_time','end_time','count_r','cost'],name)) 
{
 if(str!=""&&str!=""){dom.innerText=str;}else{dom.parentElement.parentElement.removeChild(dom.parentElement);}
}
else if (funct.sele_arr(['diff','school','birth','count','time'],name)) {
if(str!=""&&str!=""){dom.innerText=str;}else{dom.parentElement.removeChild(dom);}
}
else if (funct.sele_arr(['s_all','c_all','m_all','arre_all','arre_mone','re_all','re_arr'],name)) {
if(str!=""&&str!=""){dom.innerText=str;}else{dom.innerText=0}
}
else{if(str!=""&&str!=""){dom.innerText=str;}else{dom.parentElement.parentElement.parentElement.removeChild(dom.parentElement.parentElement);}
}
} 

}
Ctl.pushs=function (mes){
var a=document.getElementById('add_s');
var input=a.getElementsByTagName('input');
var form={
'name':input[0],
'gender':a.children[4],
'tel':input[3],
'weixin':input[4],
'qq':input[5],
'card':input[6],
'school':input[7],
'birth':input[8],
'report':input[9],
'remark':a.getElementsByTagName('textarea')[0],
'count':a.children[12].children[0].children[0].children[1],
'diff':a.children[12].children[3].children[0].children[1],
'discount':input[10],
'pay':input[11],
'ids':a
}

for(var key in mes){if(key in {name:'','tel':'','weixin':'','qq':'','card':'','school':'','report':'','remark':'','birth':''})
{form[key].value=mes[key]}
else if (key=="gender")
{if(mes[key]=="male"){input[1].checked='true'}else{input[2].checked='true'}}
else if(key=="count" || key=="diff")
{form[key].innerText=mes[key];form[key].setAttribute('zja',mes[key]);}else if(key=="ids"){form[key].setAttribute('ids',mes[key]);}}
form['discount'].value='10';
form['pay'].value=mes['count']-mes['diff'];
$(add_s).css('display','block');
}

Ctl.pushc=function (mes){
var a=document.getElementById('add_co');
var input=a.getElementsByTagName('input');
var form={

'name':input[0],
'count':input[3],
'time':input[2],
'cost':input[1],
'remark':a.getElementsByTagName('textarea')[0],
'ids':a
}
for(var key in mes){
	if(key!="count_r" &&key!="ids"  )
	{
	form[key].value=mes[key]
	}
	else if(key=="ids"){form[key].setAttribute('ids',mes[key]);}
}
$(add_co).css('display','block');
}
Ctl.gets=function (){
var a=document.getElementById('add_s');
var input=a.getElementsByTagName('input');
var form={
'name':input[0],
'gender':a.children[4],
'tel':input[3],
'weixin':input[4],
'qq':input[5],
'card':input[6],
'school':input[7],
'birth':input[8],
'report':input[9],
'remark':a.getElementsByTagName('textarea')[0],
'count':a.children[12].children[0].children[0].children[1],
'diff':a.children[12].children[3].children[0].children[1],
'discount':input[10],
'pay':input[11]
}
var mes,fech_statu;
if(Number(form.diff.innerText)>0)
{
	 fech_statu='jqsty'
	 
}
else{
	 fech_statu='qfsty'
	 mes.diff=form.diff.innerText;
	}
mes={'ids':a.getAttribute('ids'),'name':form.name.value,'gender':'male','go_time':'2014-02-02','end_time':'2015-02-02','birth':'1996-03-03','school':'北华大学','tel':form.tel.value,'weixin':form.weixin.value,'qq':form.qq.value,'card':form.card.value,'report':form.report.value,'count':form.count.innerText,'diff':'100','remark':form.remark.value,fech_statu:'jqsty'};
return mes;
}

Ctl.getc=function (){
var a=document.getElementById('add_co');
var input=a.getElementsByTagName('input');
var form={

'name':input[0],
'count':input[3],
'time':input[2],
'cost':input[1],
'remark':a.getElementsByTagName('textarea')[0]
}
var mes={'ids':a.getAttribute('ids'),'name':form.name.value,'count':form.name.value,'time':form.time.value,'cost':form.name.value,'count_r':'','remark':form.remark.value};
return mes;
}


Ctl.stc_ad=function(arr){
	var s_cls=document.getElementsByClassName('static');
	var s={
		s_all:s_cls[0],
		c_all:s_cls[1],
		m_all:s_cls[2],
		arre_all:s_cls[3],
		arre_mone:s_cls[4],
		re_all:s_cls[5],
		re_arr:s_cls[6]
	}
	for (var zz in arr)
	{
		var mes =arr[zz];
		console.log(arr[zz])
		
		if(funct.exist(mes.cost))
	{
		s.c_all.innerText=Number(s.c_all.innerText)+1
		//console.log(1,s.c_all)
	}
	else{
	if (funct.exist(mes.count))
	{
	s.s_all.innerText=Number(s.s_all.innerText)+1
	 s.m_all.innerText=Number(s.m_all.innerText)+Number(mes.count)
	 if(funct.exist(mes.diff))
	 {
		 s.arre_mone.innerText=Number(s.arre_mone.innerText)+Number(mes.diff)
		  s.arre_all.innerText=Number(s.arre_all.innerText)+1
		 if(funct.exist(mes.remark)){
			 s.re_arr.innerText=Number(s.re_arr.innerText)+1
		 }
	 }
	}
	
	if (funct.exist(mes.remark))
	{
	 s.re_all.innerText=Number(s.re_all.innerText)+1
	}
	}
		
	}
	
}

Ctl.stc_init=function (mes){
	var s_cls=document.getElementsByClassName('static');
	var s={
		s_all:s_cls[0],
		c_all:s_cls[1],
		m_all:s_cls[2],
		arre_all:s_cls[3],
		arre_mone:s_cls[4],
		re_all:s_cls[5],
		re_arr:s_cls[6]
	}
	Ctl.cvs(s,mes);
}
	

funct.exist=function(a,func,fune){
	if(a!=null&&a!=""&&a!=undefined)
	{
		return true;
	}
	else
	{
		return false;
	}
	
}
funct.sele_obj=function (obj,str){return str in(obj);}
funct.sele_arr=function (arr,str){
	for(var chi in arr){if(arr[chi]==str){
			return true;}}
	return false;}
funct.delcls=function (class_n){
var b=doc.getElementsByClassName(class_n)
len=b.length;
for(var d=0;d<len;d++)
{b[0].parentElement.removeChild(b[0])}
}
funct.extract=function (arr,func){
	for(var a in arr)
	{
		func(arr[a])
	}
	
}
funct.extobj=function (arr,func){
	for(var a in arr)
	{
		func(a)
	}
	
}
	
eve.touch=function(dom) {
dom.addEventListener('touchstart',start,false);
dom.addEventListener('touchmove',move),false;
dom.addEventListener('touchend',end,false);
var X,Y;
function start(event) {
X=event.touches[0].clientX;
Y=event.touches[0].clientY;
}
function move(event) {
//transform: translate3d(-64px
if(Math.abs(event.changedTouches[0].clientX-X)>15)
{

this.setAttribute('style','left:'+(event.changedTouches[0].clientX-X)+'px;')
}
}
function end(event) {
if(X-event.changedTouches[0].clientX>=100)
{
this.setAttribute('style','left:-60px;')
}
else
{
this.setAttribute('style','')
}
}
}



eve.del=function(){
	window.del_dom=this.parentElement;$.post('del.txt',{'type':this.parentElement.classList.contains('show_cou')?'cou':'std','id':this.parentElement.getAttribute('ids')},function(data,a){if(data=="ok"){if(window.del_dom.classList.contains('show_cou')){c2.innerText=Number(c2.innerText)-1}else{c1.innerText=Number(c1.innerText)-1};window.del_dom.parentElement.removeChild(window.del_dom);}else{alert('删除失败,请重试.')}});event.stopPropagation();}

$(function(){
    var i=0;
	window.aviod =0;
    $("#div").append($(document).height()+' '+$(window).height()+' '+$(document).scrollTop()+"<br/>");
    $(window).scroll(function(){
		if($(document).height()<aviod)
	{
		aviod=0;
	}
        i++;
        $("#div").append(i+'  '+$(document).height()+' '+$(window).height()+' '+$(document).scrollTop()+"<br/>");
        if(  $(document).height() -( $(window).height()+$(document).scrollTop() )<50 && $(document).height() -aviod>50 )
        {	
			aviod=$(document).height();
		   ctune.data.page=ctune.page;
           Ctl.load(ctune.url,ctune.data,2,2);
        }
    });
});
	
Ctl.intsd=function(mes,a=1){
var c=this.crt('show_student');
c.classList.add('show_s_c');
var node_arr=c.children[0].children[0].children[1];
var node_arr_mes=c.children[0].children[0].children[1].children[3];
var node_e={
'name':c.children[0].children[0].children[0].children[0].children[1].children[0],
'gender':c.children[0].children[0].children[0].children[0].children[1].children[1],
'go_time':node_arr.children[0].children[1],
'end_time':node_arr.children[1].children[1],
'birth':node_arr.children[2].children[1].children[0],
'school':node_arr.children[2].children[1].children[1],
'tel':node_arr_mes.children[0].children[1].children[1],
'weixin':node_arr_mes.children[1].children[1].children[1],
'qq':node_arr_mes.children[2].children[1].children[1],
'card':node_arr.children[4].children[1].children[1],
'report':node_arr.children[5].children[1],
'count':node_arr.children[6].children[1].children[0],
'diff':node_arr.children[6].children[1].children[2],
'remark':node_arr.children[7].children[1],
'fech_statu':node_arr.children[6].children[1].children[1],
}
c.setAttribute('ids',mes.ids);
node_e.tel.onclick=function(){event.stopPropagation()};
//console.log(c,c.children[1],)
//['fech_statu',"gender"],['remark',"go_time","end_time"],["diff","school","birth"]
Ctl.cvs(node_e,mes)
c.addEventListener('click',function(){Ctl.pushs(mes);window.cik_this=this;},false)
c.children[1].addEventListener('click',eve.del,false);
c.style.display="block";
switch(a)
{
	case 1:sdt.insertBefore(c,sdt.children[0]);;break;
	case 2:sdt.appendChild(c);;break;
}

eve.touch(c.children[0]);

c1.innerText=Number(c1.innerText)+1
}

Ctl.intco=function(mes,a=1){
var c=this.crt('show_cou');
c.classList.add('show_c_c');
var node_arr=c.children[0].children[0].children[1];
var node_arr_mes=c.children[0].children[0].children[1].children[3];
var node_e={
'name':c.children[0].children[0].children[0].children[0].children[1],
'count':node_arr.children[0].children[1].children[1],
'time':node_arr.children[0].children[1].children[0],
'cost':node_arr.children[1].children[1],
'count_r':node_arr.children[2].children[1],
'remark':node_arr.children[3].children[1]
}
c.setAttribute('ids',mes.ids);
Ctl.cvs(node_e,mes)
c.addEventListener('click',function(){Ctl.pushc(mes);window.cik_this=this;},false)
c.children[1].addEventListener('click',eve.del,false);
c.style.display="block";
eve.touch(c.children[0]);
switch(a)
{
	case 1:cour.insertBefore(c,cour.children[0]);break;
	case 2:cour.appendChild(c);break;
}

c2.innerText=Number(c2.innerText)+1
}

Ctl.search=function (url,date) {
	funct.delcls('show_s_c');funct.delcls('show_c_c');$.post(url,date,function (data) {var c=JSON.parse(data);c2.innerText=0;c1.innerText=0;funct.extract(c.st,function(a){Ctl.intsd(a)});funct.extract(c.co,function(b){Ctl.intco(b)});if(c.continue){window.ctune={'url':url,'data':date,'page':c.page?c.page+1:2}}});
}

Ctl.load=function (url,dta,type=1,type_st=1) {
$.post(url,dta,function (data) {var c=JSON.parse(data);funct.extract(c.st,function(a){Ctl.intsd(a,type)});funct.extract(c.co,function(b){Ctl.intco(b,type)});if(type_st==1){Ctl.stc_ad(c.st);Ctl.stc_ad(c.co)};if(c.continue){window.ctune={'url':url,'data':dta,'page':c.page?c.page+1:2}}})};



 Ctl.srh=!(function(x){
	x.searf=document.getElementById('searchInput');
	x.searf_input=document.getElementById('searchInput').getElementsByTagName('input')[0];
	x.searf_cr=document.getElementById('searf_cr');
	x.conte_s=['你好','王大','最早报名的','欠费最多','所有备注','你好','王大','最早报名的','欠费最多','所有备注'];
	x.conte_c=['听','王大','最早报名的','欠费最多','所有备注'];
	x.search_url='search.txt';
	//x.search_val={"search":searf_input.value};
	
	x. searf_fun=function(a){searf_input.value=a.innerText;searf_shad();$('#searf_cr').removeClass('show');$('#searf_cr').addClass('shadow');Ctl.search(search_url,{"search":searf_input.value});searf_input.blur();searf_shad();$('#searf_cr').removeClass('show');$('#searf_cr').addClass('shadow')}
	
	x. tabbar=function(class_n,a){
		var a,c,cla_s,cla_d=[];var  f;
		funct.delcls('searf');
		////show_cou
		switch(class_n)
		{
			case 1:a=['searchBar','addbar','c_t1','student'];c=['statis','c_t2','course'];f='添加学员';break;
			case 2:a=['searchBar','addbar','c_t2','course'];c=['statis','c_t1','student'];f='添加课程';break;
			case 3:a=['statis'];c=['searchBar','addbar','c_t2','c_t1','student','course'];f='';break;
		}
		for (var b in a){
		var e=document.getElementById(a[b]);
		if(e.classList!=null&&e.classList.contains('shadow')){e.classList.remove('shadow');}
		e.classList.add('show');
		}
		for (var b in c){
		var e=document.getElementById(c[b]);
		if("classList" in e){e.classList.remove('show');}
		e.classList.add('shadow');
		}
		if(f!=""&&f!=null){document.getElementById('addbar').children[0].children[0].innerText=f}
		window.scrollTo(0,0);
	}
	
	var searf_shad=function(){$('#searf_d').removeClass('show');$('#searf_d').addClass('shadow')}
	
	var searf_add=function(arr){
		var a=document.getElementById('searf_d').getElementsByClassName('searf')
		var add=document.getElementById('add');
		if(a .length<=0||!funct.sele_arr(arr,a[0].innerText)){
		for (var z in arr)
		{
		//
		  var p=add_f();
		  p.innerText=arr[z];
		  document.getElementById('searf_d').appendChild(p);
		}
		}
		function add_f(){
		var p=document.createElement('p');
		p.setAttribute('class','searf');
		p.setAttribute('onclick','searf_fun(this)');
		return p;}
		
		}
	
	
	searf.addEventListener('submit',function(){Ctl.search(search_url,search_val);searf_input.blur();searf_shad();$('#searf_cr').removeClass('show');$('#searf_cr').addClass('shadow')})
		
	searf_input.addEventListener('focus',function(){var conte=[];if(add.innerText=='添加学员'){searf_add(conte_s);
	 }else{searf_add(conte_c);};$('#searf_d').removeClass('shadow');$('#searf_d').addClass('show');$('#searf_cr').removeClass('shadow');$('#searf_cr').addClass('show');})
		
	 searf_cr.addEventListener('click',function(){ $('#searf_cr').removeClass('show');$('#searf_cr').addClass('shadow');searf_shad();})
		
	
	
  })(window)

var init=!(function(a){
	 $('#exit').on('click',function(){console.log(this);$(this).parent().css('display','none')});
	 
	 $('#exit_co').on('click',function(){console.log(this);$(this).parent().css('display','none')});
	 
	 $('#add').on('click',function(){if(this.innerText=='添加学员'){$('#add_s').css('display','block');$('#add_s').attr('ids','new');
	 }else{$('#add_co').css('display','block');$('#add_co').attr('ids','new');;}})//添加按钮
	 
	 $("#jn").keyup(function() {document.getElementById('js').innerText= $('#zj').text()-$(this).val();});
	 
	 $("#zs").keyup(function() {if($(this).val()!=0&&$(this).val()!=null){var a =document.getElementById('zj');a.innerText= (a.getAttribute("zja")*$(this).val())/10; document.getElementById('js').innerText= $('#zj').text()-$('#jn').val();}});
		
	$("#showTooltips").click(function() {
	 var a =Ctl.gets();console.log(a);if(funct.sele_arr([a.tel,a.gender,a.report],"")){alert("请至少输入名字、课程、性别和电话")}else{var st_type=1;if(a.ids!="new"){window.cik_this.parentElement.removeChild(window.cik_this);c1.innerText=Number(c1.innerText)-1;st_type=2};Ctl.load('s_c.txt',a,1,st_type);$(this).parent().css('display','none');}
		  });
	$("#showTooltips_co").click(function() {
	  var a =Ctl.getc();if(funct.sele_arr([a.name,a.count,a.time,a.cost],"")){alert("请至少输入名字、费用、时间和课数")}else{var st_type=1;if(a.ids!="new"){window.cik_this.parentElement.removeChild(window.cik_this);c2.innerText=Number(c2.innerText)-1;st_type=2};Ctl.load('s_c.txt',a,1,st_type);$(this).parent().css('display','none');}});
		  
	Ctl.load('search.txt',{},1,1);
		
	tabbar(1);
	 FastClick.attach(document.body);
})(window)
	
Ctl.sele=!(function (){
var sele=doc.getElementById('sele');
var sele_i=doc.getElementById('sele_i');
var sele_c=doc.getElementById('sele_c');
var selc_en=doc.getElementById('selc_en');
var add=document.getElementById('add_s');
var add_c=add.children[12].children[0].children[0].children[1];
var sele_in=doc.getElementById('in');
sele_c.addEventListener('touchstart',start,false);
sele_c.addEventListener('touchmove',move),false;
var X,Y;
function start(event) {
X=event.touches[0].clientX;
Y=event.touches[0].clientY;
}
function move(event) {
if(Math.abs(event.changedTouches[0].clientY-Y)>20)
{
this.setAttribute('style','transform: translate3d(0px,'+(event.changedTouches[0].clientY-Y)/2+'px ,0px);')
var a=Math.round((event.changedTouches[0].clientY-Y)/10);
}}
sele_i.addEventListener('keyup',function(){if(this.value.length>=2){eve.sele_p('2.txt',{'kp':this.value});console.log(this.value)}});
selc_en.addEventListener('click',function(){if(funct.exist(sele_i.getAttribute('data-cost'))){add.getElementsByTagName('input')[9].value=sele_i.value;add_c.innerText=sele_i.getAttribute('data-cost');add_c.setAttribute('zja',sele_i.getAttribute('data-cost'));this.parentElement.parentElement.style.display="none";}else{this.parentElement.parentElement.style.display="none";}});
sele_in.addEventListener('click',function(){sele.style.display="inline-block"})
window.onload=function (){
	body.removeChild(doc.getElementById('load'))
	
}
})()


	
eve.sele_p=function(url,dta){
$.post(url,dta,function(data){
	var selec_i=doc.getElementById('sele_i'); 
	var sele=doc.getElementById('sele_c'); 
	var d=[];
	var e=JSON.parse(data);
	funct.delcls('selec_p');
	for (var c in e )	
	{
		
	var selec_p=doc.createElement('p');
	selec_p.setAttribute("class","selec_p");
	selec_p.innerText=c;
	selec_p.addEventListener('click',function () {
	funct.extract(d,function(a){a.setAttribute('style','opacity:0.5')});
	this.setAttribute('style','font-size:1rem;border-bottom:1px solid white;border-top:0.3px solid white;border-opacity:0.5');
	selec_i.value=this.innerText;selec_i.setAttribute('data-cost',e[c])})
	sele.appendChild(selec_p);
	d.push(selec_p);
}
}
)


}
	

//eve.scrol(doc.getElementById('student'))
	
