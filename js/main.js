function gtag(){window.dataLayer.push(arguments)}

function onClick(){
  gtag('event', 'forgotPassword');
}
isBool = true;
function showHidden() {
    if (isBool) {
        document.getElementById("account_password").setAttribute("type", "text");
        isBool = false;
        document.getElementById("iconhien").style.display = 'none';
        document.getElementById("iconan").style.display = 'block';
    } else {
        document.getElementById("account_password").setAttribute("type", "password");
        isBool = true;
        document.getElementById("iconhien").style.display = 'block';
        document.getElementById("iconan").style.display = 'none';
    }
}
/* validate email */
function validatEemail()
{
    var emailID = document.getElementById("new_account").username.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID");
        document.getElementById("new_account").username.focus();
        document.getElementById("new_account").username.value ="";
        document.getElementById("new_account").password.value ="";
        return false;
     }
     return( true );
}

function clearText(){
    document.getElementById("new_account").username.value ="";
    document.getElementById("new_account").password.value ="";
}
$('#exampleModal').modal({backdrop: 'static', keyboard: false}) 
