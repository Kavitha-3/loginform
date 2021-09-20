const txt_name=document.getElementById('txt').Value;
const email=document.getElementById('email').Value;
const pwd=document.getElementById('pwd').Value;
const cpwd=ddocument.getElementById('cpwd').Value;

function signup(){
    if(txt_name==''){
        alert("Enter your name");
    }
    else if(email==''){
        alert("Enter your email");
    }
    else if(pwd.length>6||pwd.length<6){
        alert("Password max and min length is 6");
    }
    else{
        alert("Sucessfully signed in");
        
    }
}