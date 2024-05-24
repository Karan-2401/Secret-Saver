if(sessionStorage.getItem("user")== null ){
    location.replace("../../../Project1.html");
}else{

let btn= document.getElementById("play");
let video= document.getElementById("video");
btn.onclick = function(){
   if(btn.className == "fa fa-play-circle a"){
    video.play();
    btn.className = "fa fa-pause-circle a";
   }
   else if(btn.className =="fa fa-pause-circle a"){
    video.pause();
    btn.className = "fa fa-play-circle a";
   }
 }
/* karan's method.
 let btn= document.getElementById("play");
let videoo= document.getElementById("video");
btn.onclick = function z(){
   if(btn.className = "fa fa-play-circle a"){
    videoo.play();
    btn.className = "fa fa-pause-circle a";
    btn.onclick= function(){
      videoo.pause();
      btn.className = "fa fa-play-circle a"
      btn.onclick = function(){
        z();
      }
    }

  }
  else{
      }
   
 }
 */

 // progress coding

 video.ontimeupdate= function(){
  let c = this.currentTime/60;
  let d = this.duration/60;
  let t = document.getElementById("timing");
  let cc = this.currentTime - parseInt(this.currentTime/60)*60; 
  let dd = this.duration - parseInt(this.duration/60)*60;
  t.innerHTML = parseInt(c)+":"+parseInt(cc)+" / "+parseInt(d)+":"+parseInt(dd);
  let w = c*100/d;
  document.getElementById("box33").style.width= w+"%";

  if(cc==dd){
    btn.className = "fa fa-play-circle a";
  }
 }
 
 let add = document.getElementById("add");
 add.onclick= function(){
  if(add.className == "fa fa-plus-circle"){
    let a = document.getElementById("add_video_box");
    a.className = "animate__animated animate__fadeIn";
    a.style.display = "block";
    add.className = "fa fa-times-circle";
    
  }
  else if(add.className == "fa fa-times-circle"){
    let a = document.getElementById("add_video_box");
    a.style.display = "none";
    add.className = "fa fa-plus-circle";
    
    
  }
 }

 let addbtn = document.getElementById("btnv");
  addbtn.onclick = function(){
    let ses = sessionStorage.getItem("user");
    let nvalue = document.getElementById("vn").value;
    let vvalue= document.getElementById("url").value;
    let data = {
      name:nvalue,
      url:vvalue
    }
    let data2= JSON.stringify(data);
    localStorage.setItem(ses+"_video"+data.name,data2);
    
      document.getElementById("vn").value = "";
      document.getElementById("url").value = "";
      location.reload();
 }

 function vo() {
    let ses = sessionStorage.getItem("user");
    let i;
      for(i = 0; i < localStorage.length; i++){
        let a =localStorage.key(i);
        
        if(a.match(ses+"_video")){
          let data = localStorage.getItem(a);    
          let data2 = JSON.parse(data);
          
          let div = document.createElement("DIV");
          div.setAttribute("id","box222_2");
          
          let p = document.createElement("P");
          p.setAttribute("id","text");
          p.className="dddd";
          p.innerHTML = data2.name;

          let b = document.createElement("BUTTON");
          b.setAttribute("id","b1");
          b.setAttribute("url",""+data2.url+"");
          b.className= "play";
          b.innerHTML = "Play";
          let bb = document.createElement("BUTTON");
          bb.setAttribute("id","b2");
          bb.setAttribute("url","data2.url");
          bb.className="del";
          bb.innerHTML = "Delete";

          div.appendChild(p);
          div.appendChild(b);
          div.appendChild(bb);

          let r =document.getElementById("box222");  
          r.appendChild(div);
        }
    }
 }
 vo();

 //play video

 function a(){
  let a = document.getElementsByClassName("play");
  let i;
  for(i=0; i<a.length; i++){
    a[i].onclick = function(){
      clear();
      let url = this.getAttribute("url");
      let v = document.getElementById("karan");
      v.setAttribute("src",url);
      let vv =document.getElementById("video");
      vv.load();
      vv.play();
      this.innerHTML="Playing";
      document.getElementById("play").className = "fa fa-pause-circle a";
    }
  }
 }

 a(); 

 function clear(){
  let a = document.getElementsByClassName("play");
  let i ;
  for(i=0; i<a.length; i++){
    a[i].innerHTML="Play";
  }
 }
}

//next video btn

function next(){
  let btn = document.getElementById("right");
  btn.onclick = function(){
    let btnn = document.getElementsByClassName("play");
    let i;
    for(i=0; i<btnn.length; i++)
    {
      let a = btnn[i];
      if(a.innerHTML=="Playing"){
        let aa = a.parentElement.nextSibling;
        aa.getElementsByClassName("play")[0].click();
        //aa.getElementById("b1").click();
        return false;

      }
    }
}
}
next();

//previous video btn


function pre(){
  let btn = document.getElementById("left");
  btn.onclick = function(){
    let btnn = document.getElementsByClassName("play");
    let i;
    for(i=0; i<btnn.length; i++)
    {
      let a = btnn[i];
      if(a.innerHTML=="Playing"){
        let aa = a.parentElement.previousSibling;
        aa.getElementsByClassName("play")[0].click();
        //aa.getElementById("b1").click();
        return false;
      }
    }
}
}
pre();

//delete 

function del(){
  let a = document.getElementsByClassName("del");
  let i;
  for(i=0; i<a.length; i++){
    a[i].onclick = function(){
      let pe= this.parentElement;
      pe.className = "animate__bounceOut";
      let pep = pe.getElementsByClassName("dddd")[0];
      let ses = sessionStorage.getItem("user");
      localStorage.removeItem(ses+"_video"+pep.innerHTML);
      setTimeout(function(){
        pe.remove();
      },700);
    }
  }
}
del();

//volume

function volume(){
  let btn  = document.getElementById("volume");
  btn.onclick = function(){
    let r = document.getElementById("range");
    if(r.style.display == "none"){
      r.style.display = "block";
      r.oninput = function(){
        let v= document.getElementById("video");
        v.volume=r.value;
      }
    }
    else{
      r.style.display = "none";
    }
  }
}
volume();

//player range

function range(){
  let btn= document.getElementById("box3");
  btn.onclick = function(event){
    let a = event.offsetX/this.offsetWidth;
    let v = document.getElementById("video");
    v.currentTime = a*v.duration;
  }
}
range();

// full screen

function fs(){
  let btn = document.getElementById("screen");
  btn.onclick= function(){
    let v = document.getElementById("video");
    v.requestFullscreen();
  }
}
fs();

//speed range

function sr(){
  let btn = document.getElementById("setting");
  btn.onclick = function(){
    let r = document.getElementById("srange");
    if(r.style.display == "none"){
      r.style.display="block";
      r.oninput= function(){
        let v = document.getElementById("video");
        v.playbackRate = r.value;
      }
    }
    else{
      r.style.display="none";
    }    
  }
}
sr();

//search 

function ser(){
  let btn = document.getElementById("ser");
  btn.oninput = function(){
      let d = document.getElementsByClassName("dddd");
      let a;
      for(a=0; a<d.length; a++){
        if(d[a].innerHTML.toUpperCase().match(btn.value.toUpperCase())){
          d[a].parentElement.style.display="block";
        }
        else{
          d[a].parentElement.style.display="none";
        }
      } 
    }

  }
ser();