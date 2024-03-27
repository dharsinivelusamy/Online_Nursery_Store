
function validate(){
    var email1=document.myform.email.value;  
    var password1=document.myform.password.value;  
  
if (email1==null || email1==""){   
  return false;  
}else if(password1.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}