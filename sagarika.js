

// Eligible Js start 


var sort_num=0;
var num=1;
var l=2;
var reg_arr=[12000000,];
var batch_arr=["CSE","ECE","CIVIL","MECH","BIO","FASHION"];
function gen_man(){
    document.getElementById("GR1").style.display = "none";
    let x=parseInt(document.getElementById("GM").value);
    for(i=1;i<=x;i++) {
        abc();
    }
}
function get_ran() {
    document.getElementById("GM1").style.display = "none";
    let x=parseInt(document.getElementById("GR").value);
    for(i=1;i<=x;i++) {
        abc1();
    }
}
function abc(){
    num++;
    var a=document.getElementById("main_table");
    const b= document.createElement("tr");
    b.setAttribute("id",num);
    b.className=num;
    const c= document.createElement("td");
    c.setAttribute("id",num+"S");
    c.innerHTML=num;
    const d= document.createElement("td");
    d.setAttribute("id",num+"d1");
    const i=document.createElement("input");
    i.setAttribute("id",num+"N");
    d.appendChild(i);
    const e= document.createElement("td");
    e.setAttribute("id",num+"d2");
    const j=document.createElement("input");
    j.setAttribute("id",num+"R");
    j.maxLength="8";
    e.appendChild(j);
    const m= document.createElement("td");
    m.setAttribute("id",num+"d3");
    const n=document.createElement("input");
    n.setAttribute("id",num+"B");
    m.appendChild(n);
    const o= document.createElement("td");
    o.setAttribute("id",num+"d4");
    const p=document.createElement("input");
    p.setAttribute("id",num+"Br");
    o.appendChild(p);
    const f= document.createElement("td");
    f.setAttribute("id",num+"d5");
    const k=document.createElement("input");
    k.setAttribute("id",num+"C");
    k.maxLength="4";
    f.appendChild(k);
    const g= document.createElement("td");
    g.setAttribute("id",num+"d6");
    const l=document.createElement("input");
    l.setAttribute("id",num+"A");
    l.maxLength="3";
    l.type=Number;
    g.appendChild(l);
    const h= document.createElement("td");
    h.setAttribute("id",num+"E");
    h.className=num+"E";
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    b.appendChild(m);
    b.appendChild(o);
    b.appendChild(f);
    b.appendChild(g);
    b.appendChild(h);
    a.appendChild(b);
}
function abc1(){
    num++;
    var a=document.getElementById("main_table");
    const b= document.createElement("tr");
    b.setAttribute("id",num);
    b.className=num;
    const c= document.createElement("td");
    c.setAttribute("id",num+"S");
    c.innerHTML=num;
    const d= document.createElement("td");
    d.setAttribute("id",num+"d1");
    d.innerText=random_name();
    const e= document.createElement("td");
    e.setAttribute("id",num+"d2");
    e.innerText=random_reg_no(12000000,12020000);
    const i=document.createElement("td");
    i.setAttribute("id",num+"d3");
    i.innerText=random_reg_no(2017,2022);
    const j=document.createElement("td");
    j.setAttribute("id",num+"d4");
    j.innerText=random_batch();
    //j.innerText=random_reg_no(2017,2022);
    const f= document.createElement("td");
    f.setAttribute("id",num+"d5");
    f.innerText=random_CGPA(0,10);
    const g= document.createElement("td");
    g.setAttribute("id",num+"d6");
    g.innerText=random_Atten(50,100);
    const h= document.createElement("td");
    h.setAttribute("id",num+"E");
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    b.appendChild(i);
    b.appendChild(j);
    b.appendChild(f);
    b.appendChild(g);
    b.appendChild(h);
    a.appendChild(b);
}
function random_name(){
    let res = "";
    const x=random_Atten(4,10);
    for(let i = 0; i <x; i++){
        if(i==0){
            const random = random_Atten(65,89);
            res += String.fromCharCode(random);
        }
        else {
            const random = random_Atten(97,121);
            res += String.fromCharCode(random);
        }
};
return res;
}
function random_reg_no(min_n,max_n){ 
    const a = Math.floor(Math.random() * (max_n - min_n + 1)) + min_n;
    let i=0;
    for(i=0;i<reg_arr.length;i++){
            if(reg_arr.includes(a)==true)
                break;
        }
    if(i!=reg_arr.length){
        random_reg_no(min_n,max_n);
    }
    else{
        return a;
    }
}
function random_Atten(min_n,max_n){ 
    const a = Math.floor(Math.random() * (max_n - min_n + 1)) + min_n;
    return a;
}
function random_CGPA() {
    let x = Math.random() * 5+5;
    return x.toFixed(1);
}
function random_batch(){
    return batch_arr[Math.floor(Math.random()*batch_arr.length)];
}
function get_Gen_Man() {
    for(a=l;a<=num;a++){
        document.getElementById(a+"d1").innerHTML=document.getElementById(a+"N").value;
        b=parseFloat(document.getElementById(a+"C").value);
        c=parseInt(document.getElementById(a+"A").value);
        document.getElementById(a+"d2").innerHTML=document.getElementById(a+"R").value;
        reg_arr.push(parseInt(document.getElementById(a+"d2").innerText));
        document.getElementById(a+"d3").innerHTML=document.getElementById(a+"B").value;
        document.getElementById(a+"d4").innerHTML=document.getElementById(a+"Br").value;
        document.getElementById(a+"d5").innerHTML=document.getElementById(a+"C").value;
        document.getElementById(a+"d6").innerHTML=document.getElementById(a+"A").value;
        if(b > 7.5 && c > 75){
            document.getElementById(a+"E").innerHTML="Yes";
        }
        else {
            document.getElementById(a+"E").innerHTML="No";
        }
    }
    l=a;
    document.getElementById("GR1").style.display = "inline";
    console.log(reg_arr);
}
function get_Gen_Ran() {
    for(a=l;a<=num;a++){
        b=parseFloat(document.getElementById(a+"d5").innerText);
        c=parseInt(document.getElementById(a+"d6").innerText);
        if(b > 7.5 && c > 75){
            document.getElementById(a+"E").innerHTML="Yes";
        }
        else {
            document.getElementById(a+"E").innerHTML="No";
        }
    }
    l=a;
    document.getElementById("GM1").style.display = "inline";
    console.log(reg_arr);
}
for(i=1;i<10;i++){
            abc1();
        }
get_Gen_Ran();
document.getElementById("2d1").innerText="Prashant Kumar";
document.getElementById("2d3").innerText="2020";
document.getElementById("2d4").innerText="CSE";
reg_arr.push(parseInt(document.getElementById("2d2").innerText));
document.getElementById("3d1").innerText="Saksham Kumar Singh";
document.getElementById("3d3").innerText="2020";
document.getElementById("3d4").innerText="CSE";
reg_arr.push(parseInt(document.getElementById("3d2").innerText));
document.getElementById("4d1").innerText="Amardeep Singh";
document.getElementById("4d3").innerText="2020";
document.getElementById("4d4").innerText="MECH";
reg_arr.push(parseInt(document.getElementById("4d2").innerText));
document.getElementById("5d1").innerText="Aditya Verma";
document.getElementById("5d3").innerText="2020";
document.getElementById("5d4").innerText="CSE";
reg_arr.push(parseInt(document.getElementById("5d2").innerText));
document.getElementById("6d1").innerText="Pratyush Mishra";
document.getElementById("6d3").innerText="2020";
document.getElementById("6d4").innerText="CSE";
reg_arr.push(parseInt(document.getElementById("6d2").innerText));
document.getElementById("7d1").innerText="Akshit";
document.getElementById("7d3").innerText="2022";
document.getElementById("7d4").innerText="CSE";
reg_arr.push(parseInt(document.getElementById("7d2").innerText));
document.getElementById("8d1").innerText="Ankit";
document.getElementById("8d3").innerText="2021";
document.getElementById("8d4").innerText="ECE";
reg_arr.push(parseInt(document.getElementById("8d2").innerText));
document.getElementById("9d1").innerText="ujwal";
document.getElementById("9d3").innerText="2020";
document.getElementById("9d4").innerText="CSE";
reg_arr.push(parseInt(document.getElementById("9d2").innerText));
document.getElementById("10d1").innerText="Saurabh";
document.getElementById("10d3").innerText="2020";
document.getElementById("10d4").innerText="CSE";
reg_arr.push(parseInt(document.getElementById("10d2").innerText));
function sorting() {
    console.log(sort_num);
    var x=document.getElementById("Gen").value;
    console.log(x);
    // const divWithClassExists = document.querySelectorAll(
    //     'div#Sorted'
    //    ).length > 0;

    // if (divWithClassExists) {
    //     console.log('✅ Div with class exists');
    // } else {
    //     console.log('⛔️ Div with class does not exist');
    //     var nn=document.createElement("div");
    //     nn.setAttribute("id","Sorted");
    //     nn.className="Sorted_table";
    //     document.body.appendChild(nn);
    // }
    if(sort_num == 0){
    if(x=="Batch") {
        var a=document.getElementById("main_div");
        var b=document.createElement("div");
        b.setAttribute("id","Sort_div");
        var c=document.createElement("label");
        c.innerText="Give Batch Year :";
        b.appendChild(c);
        var d=document.createElement("input");
        d.setAttribute("id","batch");
        b.appendChild(d);
        var g=document.createElement("span");
        g.style.marginLeft="25px";
        b.appendChild(g);
        var e=document.createElement("button");
        var f=document.createTextNode("Sort Table");
        e.appendChild(f);
        e.addEventListener('click',sort_table_b);
        e.setAttribute("id","branch_sort");
        b.appendChild(e);
        a.appendChild(b);
    }
    else if(x=="Branch"){
        var a=document.getElementById("main_div");
        var b=document.createElement("div");
        b.setAttribute("id","Sort_div");
        var c=document.createElement("label");
        c.innerText="Give Branch :";
        b.appendChild(c);
        var d=document.createElement("input");
        d.setAttribute("id","branch");
        b.appendChild(d);
        var g=document.createElement("span");
        g.style.marginLeft="25px";
        b.appendChild(g);
        var e=document.createElement("button");
        var f=document.createTextNode("Sort Table");
        e.appendChild(f);
        e.addEventListener('click',sort_table_br);
        e.setAttribute("id","branch_sort");
        b.appendChild(e);
        a.appendChild(b);
    }
    sort_num=1;
    }
    else if(sort_num == 1){
        sort_num=0;
        document.getElementById("Sorted").remove();
    }
    console.log(sort_num);
}

var element=document.getElementById("main_table");
    var clone=element.cloneNode(true);
    clone.setAttribute("id","Sorted_table");
    var main=document.getElementById("main_body");
    main.after(clone);
    document.getElementById("Sorted_table").style.opacity="0";


// Eligible Js end



// slide show start
let si = 0;
Slides();
function Slides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  si++;
  if (si > slides.length) {si = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[si-1].style.display = "block";  
  dots[si-1].className += " active";
  setTimeout(Slides, 3000);
}
// slide show end