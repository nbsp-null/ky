
mes={'name':'王大大','gender':'male','go_time':'2014-02-02','end_time':'2015-02-02','birth':'1996-03-03','school':'北华大学','tel':'13108796752','weixin':'','qq':'1231232132','card':'4305346667778899','report':'语文补习','count':'880','diff':'100','remark':'test','fech_statu':'jqsty'};
function create_n ( mes=[]) 
{
var doc=document;
var body=document.getElementsByTagName('body')[0];
var a=doc.getElementsByClassName('show_student')[0]
c=a.cloneNode(true)
node_e=get_node(c);
node_e.tel.onclick=function(){event.stopPropagation()};
c.addEventListener('click',function(){push(mes)},false)
c.children[1].addEventListener('click',function(){console.log(mes);body.removeChild(this.parentElement.nextSibling);body.removeChild(this.parentElement);event.stopPropagation()},false)
for ( var key in node_e) {						
name = key;value = node_e[key];
check(mes[name],value,name);
} 

touchm(c)
c.style.display="block";
body.insertBefore(c,body.children[body.children.length-11])
function check(str,dom,name) {
if(name=="fech_statu" || name=="gender")
{dom.className=str; }
else if (name=="remark" || name=="go_time" || name=="end_time") 
{
 if(str!=""&&str!=""){dom.innerText=str;}else{dom.parentElement.parentElement.removeChild(dom.parentElement);}
}
else if (name=="diff" || name=="school"||name=="birth") {
if(str!=""&&str!=""){dom.innerText=str;}else{dom.parentElement.removeChild(dom);}
}
else{if(str!=""&&str!=""){dom.innerText=str;}else{dom.parentElement.parentElement.parentElement.removeChild(dom.parentElement.parentElement);}

}
}



function touchm (dom) {
dom.addEventListener('touchstart',start);
dom.addEventListener('touchmove',move);
dom.addEventListener('touchend',end);
var X,Y;
function start(event) {
X=event.touches[0].clientX;
Y=event.touches[0].clientY;
}
function move(event) {
dom.classList.add("swipeout-touching");
//transform: translate3d(-64px
if(Math.abs(event.changedTouches[0].clientX-X)>15)
{
dom.children[0].setAttribute('style','left:'+(event.changedTouches[0].clientX-X)+'px;')
}
}
function end(event) {
if(X-event.changedTouches[0].clientX>=60)
{
dom.children[0].setAttribute('style','left:-60px;')
}
else
{
dom.children[0].setAttribute('style','left:0px;')
}
}
}
br=doc.createElement('br');
body.insertBefore(br,c.nextSibling )


function push(mes){
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
for(var key in mes){if(key in {name:'','tel':'','weixin':'','qq':'','card':'','school':'','report':'','remark':'','birth':''})
{form[key].value=mes[key]}
else if (key=="gender")
{if(mes[key]=="male"){input[1].checked='true'}else{input[2].checked='true'}}
else if(key=="count" || key=="diff")
{form[key].innerText=mes[key];}}
form['discount'].value='10';
form['pay'].value=mes['count']-mes['diff'];
$(add_s).css('display','block');
}

function get_node(c)
{
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
'fech_statu':node_arr.children[6].children[1].children[1]
}
return node_e;
}

}
var mes={'name':'王大大','gender':'male','go_time':'2014-02-02','end_time':'2015-02-02','birth':'1996-03-03','school':'北华大学','tel':'13108796752','weixin':'','qq':'1231232132','card':'4305346667778899','report':'语文补习','count':'880','diff':'100','remark':'test','fech_statu':'jqsty'};
Ctl.intsd(mes)
var mes={'name':'王大','count':'22节','time':'1年','cost':'990','count_r':'','remark':'北华大学'};

Ctl.intco(mes)