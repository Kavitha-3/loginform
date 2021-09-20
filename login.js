

function loginfn(){
    let text=document.getElementById('txt').value;
    const email=document.getElementById('email').value;
    const pwd=document.getElementById('pwd').value;
if(text==''){
    window.alert("Enter your name");
}
else if(email==''){
    window.alert("Enter your email");
}
else if(pwd.length<6||pwd.length>6){
    alert("Max and min password length is 6")
}
else{
    alert("Thankyou for login");
    
}
}

    
