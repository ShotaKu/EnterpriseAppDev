var id = "";
var password = "";
function login(ref){
    if(id == ""){
        var tempID = document.getElementById("ownerID").value;
        var tempPass = document.getElementById("password").value;

        if(0<tempID.length){
            if(0<tempPass.length){
                ref.once("value")
                .then(function(snapshot){
                    var isExist = false;
                    var isCollectPass = false;
                    var i = 0;
                    while(i<snapshot.child.length){
                        var dorm = snapshot.child(i);
                        var user = dorm.child("Owner");
                        var dbid = user.child("id").val();

                        console.log("now: "+dbid);

                        var email = user.child("email").val();
                        var pass = user.child("password").val();
                        if(dbid == tempID || email == tempID){
                            if(pass == tempPass){
                                console.log("conform id　by owner!");
                                isExist = true;
                                isCollectPass = true;
                                id = tempID;
                                break;
                            }
                            else{
                                console.log("Invarid passwords: "+tempPass);
                                break;
                            }
                        }
                        if(!isExist){
                            var staffList = dorm.child("Staff");
                            var j = 0;
                            while(j<staffList.length){
                                dbid = staff.child("id").val();
                                email = staff.child("email").val();
                                pass = staff.child("password").val();
                                if(dbid == tempID || email == tempID){
                                    if(pass == tempPass){
                                        console.log("conform id　by staff!");
                                        id = tempID;
                                        isExist = true;
                                        break;
                                    }else{

                                    }
                                }
                                j++;
                            }
                            if(isExist){
                                break;
                            }
                        }
                        i++;
                    }
                    if(isExist){
                        logined();
                        setLocalValue(id,password);
                    }
                    return isExist;
                });
            }
        }
    }else{
        logined();
    }

}

function logined(){
    //delete login function
    var loginElement = document.getElementById("login_controller");
    while (loginElement.firstChild) {
        loginElement.removeChild(loginElement.firstChild);
    }

    var welcome = document.createElement("logined_message");
    welcome.innerHTML = "Hi, "+id+"!";

    //create logout button
    var logoutBtn = document.createElement("button");
    logoutBtn.className = "submit_btn";
    logoutBtn.innerHTML = "Logout";

    //create edit dorm information button
    var editDormBtn = document.createElement("button");
    editDormBtn.className = "submit_btn";
    editDormBtn.innerHTML = "Edit dorm";

    var editRoomBtn = document.createElement("button");
    editRoomBtn.className = "submit_btn";
    editRoomBtn.innerHTML = "Edit dorm";

    //add as child
    loginElement.appendChild(welcome);
    loginElement.appendChild(editDormBtn);
    loginElement.appendChild(editRoomBtn);
    loginElement.appendChild(logoutBtn);
}

function logout(){
    id = "";
    password = "";
    setLocalValue("","","");
    Logouted();
}

function setLocalValue(id,password){
    
    sessionStorage.setItem("id",id);
    sessionStorage.setItem("password",password);
}

function getLocalValue(){
    var value = {id:"", password:""};
    value.id = sessionStorage.getItem("id");
    value.password = sessionStorage.getItem("password");

    return value;
}

function Logouted(){
    // <label>Owner ID:</label><input type="text" id="ownerID" name="email" class="input_field" />
    var loginElement = document.getElementById("login_controller");
    var ownerID = document.createElement("label");
    ownerID.innerHTML = "Owner ID:"
    var IDinput = document.createElement("input");
    IDinput.type = "text";
    IDinput.id = "ownerID";
    IDinput.name = "email";
    IDinput.className = "input_field";

    // <label>Password:</label><input type="password" id="password" name="password" class="input_field" />
    var password = document.createElement("label");
    password.innerHTML = "Owner ID:"
    var passInput = document.createElement("input");
    passInput.type = "password";
    passInput.id = "password";
    passInput.name = "password";
    passInput.className = "input_field";

    // <input type="submit" value="Login" name="submit" class="submit_btn" onclick="loginByOwner()" />
    var submit = document.createElement("input");
    submit.type = "submit"
    submit.value = "Login";
    submit.id = "login"
    submit.name = "submit";
    submit.className = "submit_btn";

    submit.onclick = function(){ loginByOwner() };

    loginElement.appendChild(ownerID);
    loginElement.appendChild(IDinput);
    loginElement.appendChild(password);
    loginElement.appendChild(passInput);
    loginElement.appendChild(submit);
    // setLocalValue(id, password);
}

function checkLoginStatus()
{
    var local = getLocalValue();
    if(local.id == "" || local.id == null){
        Logouted();
    }
    else{
        id = local.id;
        password = local.password;
        logined();
    }
}