let sbtn = document.getElementById("formsign");
sbtn.onsubmit = function(){
    let uname= btoa(document.getElementById("name").value);
    let email=btoa(document.getElementById("gmail").value);
    let ph= btoa(document.getElementById("phone").value);
    let password= btoa(document.getElementById("password").value);

    let data = {
        name:uname,
        gmail:email,
        phone:ph,
        pass:password,
    };

    let data2 = JSON.stringify(data);
    localStorage.setItem(data.gmail,data2);
    let btn = document.getElementById("sbtn");
    btn.style.background = "#14b129";
    btn.innerHTML= "<i class='fa fa-check-circle' aria-hidden='true'></i> Sign up done";
    setTimeout(function(){
        btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)";
        btn.innerHTML= "Sign up";
        sbtn.reset();
    },2000)  

    return false;
}
let gmail = document.getElementById("gmail");
let warning = document.getElementById("enotice");
let warningbtn = document.getElementById("sbtn");

gmail.onchange = function(){
    let encode = btoa(gmail.value);
    if(localStorage.getItem(encode) != null){
        warning.style.display= "block";
        warningbtn.disabled = true;
        warningbtn.style.background = "#ccc";

        gmail.onclick = function() {
            warning.style.display= "none";
            warningbtn.disabled = false ;
            warningbtn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)";
            gmail.value=""
        }
    }
}

// login side code
let lbtn = document.getElementById("loginfm");
lbtn.onsubmit = function(){
    let email = document.getElementById("email");
    let password = document.getElementById("pass");
    let lew=  document.getElementById("lew");
    let encode = btoa(email.value);
    if(localStorage.getItem(encode) == null){
        lew.style.display = "block";
        email.style.borderBottomColor = "red";

        email.onclick = function(){
            lew.style.display = "none";
            email.style.borderBottomColor = "#ccc";
            email.value="";
        }

    }   
    else{
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass");
        let data = localStorage.getItem(btoa(email));
        let data2 = JSON.parse(data);
        let pel = document.getElementById("pel");
        if(btoa(pass.value) != data2.pass){
            pel.style.display = "block";
            pass.style.borderBottomColor = "red";

            pass.onclick = function(){
                pel.style.display = "none";
                pass.style.borderBottomColor = "#ccc";
                pass.value= null;
            }
        }
        else{
            location.replace("profile/profile_page.html");
            sessionStorage.setItem("user",btoa(email));
        }
    } 

    return false;
}

// login side code
