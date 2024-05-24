    let a = sessionStorage.getItem("user");
    if(sessionStorage.getItem("user") == null){
        location.replace("../project1.html");
    }
    else if(localStorage.getItem(a+"image") != null){
        document.getElementById("container").style.display= "none";
        document.getElementById("page2").style.display = "block";
        let data = sessionStorage.getItem("user");
        let data2 = localStorage.getItem(data);
        let datapic = localStorage.getItem(data+"image");
        let data3 = JSON.parse(data2);
        document.getElementById("k").innerHTML= atob(data3.name);
        let pic = document.getElementById("profile-pic2");
        let picc = data+"image";
        pic.style.backgroundImage = "url("+datapic+")";
        pic.style.backgroundSize = "cover";
        pic.style.backgroundPosition = "center";

        let logout = document.getElementById("logout");
        logout.onclick = function (){
            setTimeout(lo,2000);
            document.getElementById("lo").innerHTML = "Please wait..";
        function lo(){
            sessionStorage.clear();
            window.open("apps/contact/contact.html","_parent");
        }
        
    }

    let play = document.getElementById("player");
    play.onclick = function(){
        location.assign("apps/player/player.html");
    }

    let contact = document.getElementById("con");
    contact.onclick= function(){
        location.assign("apps/contact/contact.html");
    }

    }
    else{
        let name = sessionStorage.getItem("user");
        let n = localStorage.getItem(name);
        let nn = JSON.parse(n);
        let nnn = atob(nn.name);
        let un = document.getElementById("h1");  
        un.innerHTML = nnn;
                
        let input= document.getElementById("pic");
        input.onchange = function(){
            let reader= new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = function(){
                let data= reader.result;
                let img = document.getElementById("box-2");
                img.style.backgroundImage = "url("+data+")";
                img.style.backgroundSize= "cover";
                img.style.backgroundRepeat= "no-repeat";
                img.style.backgroundPosition= "center";
                document.getElementById("logo").style.display="none";
                document.getElementById("p").style.display = "none";
                document.getElementById("h1").style.marginTop = "13px";
                document.getElementById("next").disabled = false;
                document.getElementById("next").style.background = "linear-gradient(to right, #E100FF, #7F00FF)";

                let btn = document.getElementById("next");
                btn.onclick = function(){
                    let name = sessionStorage.getItem("user");
                    localStorage.setItem(name+"image",data);
                    document.getElementById("container").style.display= "none";
                }
            }            
        }
    }
