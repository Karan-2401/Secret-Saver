if(sessionStorage.getItem("user") == null){
    location.replace("../../../project1.html");
}
else{
    location.reload;
    window.onload=  function(){
        let data = sessionStorage.getItem("user");
        let data2 = localStorage.getItem(data+"image");
        let pic = document.getElementById("img");
        pic.style.backgroundImage = "url("+data2+")";
        pic.style.backgroundSize = "cover";
        pic.style.backgroundPosition = "center"
    }
    
    let btn = document.getElementById("add");
    btn.onclick = function(){
        let page =  document.getElementById("up");
        page.style.display = "block";
        document.getElementById("cn").value = null;
        document.getElementById("cnum").value = null;        
        document.getElementById("ch").innerHTML = "Add Contact";
        document.getElementById("btn1").value="add";
    }

    let btn2 = document.getElementById("btn2");
    btn2.onclick= function(){
        let page =  document.getElementById("up");
        page.style.display = "none";
    }

   
    let btn3 = document.getElementById("btn1");
    btn3.onclick = function(){
        let un = document.getElementById("cn");
        let unum = document.getElementById("cnum");
        if(un.value != "" && unum.value != ""){
            let a = un.value;
            let b = unum.value;
            let fu = {
                name:a, num:b
            }
            let data = JSON.stringify(fu);
            let d = sessionStorage.getItem("user");
            let xxx = JSON.parse(data);
            localStorage.setItem(d + "_contact"+xxx.name, data);
        }
        else{
            un.style.borderBottom = "2px solid red";
            unum.style.borderBottom = "2px solid red";
            let num = document.getElementById("cnum");
            let btn = document.getElementById("btn1");
            let btn2 = document.getElementById("btn2");
            let war = document.getElementById("w");
            let warr = document.getElementById("wa");
            war.style.display = "block";
            warr.style.display = "block";
            num.style.marginTop = "10px";
            btn.style.marginTop = "15px";
            btn2.style.marginTop = "15px";       
            return false;
           
        }

    }

    let search = document.getElementById("sn");
    search.oninput = function(){
            let snow = document.getElementsByClassName("ser");
            let nn;
            for(nn=0; nn < snow.length; nn++){
                if(snow[nn].innerHTML.toUpperCase().match(search.value.toUpperCase())){
                    snow[nn].parentElement.style.display = "block";
                }
                else{
                    snow[nn].parentElement.style.display = "none";
                }
                
            }
    }

    function con(){
    let lp;
    for(lp =0; lp <  localStorage.length; lp++)
    {
            let a = localStorage.key(lp);

            if(a.match(sessionStorage.getItem("user")+"_contact"))
            {
                
            let data = localStorage.getItem(a);
            let data2 = JSON.parse(data);

            let div1 = document.createElement("DIV");
                div1.setAttribute("id","contact");

            let p1 = document.createElement("P"); 
            let i1 = document.createElement("I");
                p1.setAttribute("class","ser");
                i1.setAttribute("class","fa fa-user");
                i1.setAttribute("aria-hidden","true");

            let tool = document.createElement("DIV");
                tool.setAttribute("id","tool");

            let i2 = document.createElement("I");
                i2.setAttribute("class","fas fa-edit add");
            
            let i3 = document.createElement("I");
                i3.setAttribute("class","fas fa-trash bug");

            let line = document.createElement("HR");
                line.setAttribute("width","70%");
                line.setAttribute("size","2px");

            let p2 = document.createElement("P");
            let i4 = document.createElement("i");
                i4.setAttribute("class","fas fa-mobile-alt m");

            p1.appendChild(i1);
            p1.innerHTML += " "+data2.name;

            tool.appendChild(i2);
            tool.appendChild(i3);

            p2.appendChild(i4);
            p2.innerHTML += " "+data2.num;

            div1.appendChild(p1);
            div1.appendChild(tool);
            div1.appendChild(line);
            div1.appendChild(p2);

            let box = document.getElementById("box2");
            box.appendChild(div1);
            
            }
        }
    }
    
    con();

    //special class delete

    let del= document.getElementsByClassName("bug");
    let i;
    for(i=0; i<del.length; i++){
        del[i].onclick = function(){
            let r = this.parentElement.parentElement;
            let a = sessionStorage.getItem("user");
            let na = r.getElementsByClassName("ser")[0].innerHTML.replace('<i class="fa fa-user" aria-hidden="true"></i>','').trim();
            localStorage.removeItem(a+"_contact"+na);
            r.className = "animate__bounceOut";
            setTimeout(function(){
            r.remove();
            },700);
        }
    }

   //special class delete

   //special class edit//
   let addc= document.getElementsByClassName("add");
   let ad;
   for(ad=0; ad<addc.length; ad++){
    addc[ad].onclick = function(){
        let x= this.parentElement.parentElement;
        let usernum = x.getElementsByTagName("P");
        let u =usernum[0].innerHTML.replace('<i class="fa fa-user" aria-hidden="true"></i>','').trim();
        let n = usernum[1].innerHTML.replace('<i class="fas fa-mobile-alt m"></i>','').trim();
        let nn =Number(n);
        document.getElementById("ch").innerHTML = "Edit Contact";
        document.getElementById("btn1").value="update";
        document.getElementById("cn").value = u;
        document.getElementById("cnum").value = nn;
        let ls = localStorage.removeItem(sessionStorage.getItem("user")+"_contact"+u);
        document.getElementById("btn2").style.display= "none";
        
        let page =  document.getElementById("up");
        page.style.display = "block";
    }
   }
   //special class edit//
}
