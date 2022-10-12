var label=createlabels("label","for","first name","Firstname");
var br1=createlinebreak("br");
var br9=createlinebreak("br");
var input=createinput("input","text","firstname","id","firstname");
var br2=createlinebreak("br");

var label1=createlabels("label","for","middle name"," Middlename");
var br3=createlinebreak("br");
var input1=createinput("input","text","middlename","id","middl;ename");
var br4=createlinebreak("br");

var label2=createlabels("label","for","last name","Lastname");
var br5=createlinebreak("br");
var input2=createinput("input","text","lastname","id","lastname");
var br6=createlinebreak("br");

var password=createlabels("label","number","number","Phonenumber");
var br7=createlinebreak("br");
var passinput=createinput("input","type","Number","id","number");
var br8=createlinebreak("br");


document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,password,br7,passinput,br8,br9);


function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}
function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
function createlinebreak(tagname){
var ele=document.createElement(tagname);
return ele;
}
