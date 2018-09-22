function logoutAction(){
    logout().then(function(r){
        if(r){
            location.replace("login.html");
        }else{

        }
    })
}
function checkLogin(){
    var login = document.getElementById("login");
    var lend = document.getElementById("lendingAnker");
    var bor = document.getElementById("borrowingAnker");
    
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            login.innerHTML = "Logout";
            login.onclick = logoutAction;
            reloadRequestBox();
            
            if(document.location == "index.html"){
                lend.href = "lenting.html";
                bor.href = "borrowing.html";
            }
        } else {
            // No user is signed in.
            lend.href = "login.html";
            bor.href = "login.html";
        }
    })
}

function reloadRequestBox(){
    var n = document.getElementById("requestNumber");
    var box = new RequestBox(getCurrentUserRoot());
    n.innerHTML = box.Count() + " books";
}
