var isLogined = false;


function login(){
    var email = $("#ownerID")[0].value;
    var password = $("#password")[0].value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
        logined();
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage+" !");
    });
}

function logout(){
    firebase.auth().signOut().then(function() {
        alert("Login success full");
        Logouted();
    }).catch(function(error){
        alert("Error: " + error);
    });
}

function getUserProfile(){
    var user = firebase.auth().currentUser;

    if (user != null) {
        console.log(user.name+"logined now")
    }
    return user;
}

function isUserExist(database,userName){
    var ref = database.ref("Staff");
    if(0<userName.length){
        var func = 
        ref.once("value").then(function(snapshot){
            var isExist = false;
            snapshot.forEach(function(staffTable){
                var owner = staffTable.child("owner");
                var staffs = staffTable.child("staff");
                if(owner != null){
                    var name = owner.child("userName").val()
                    if(name == userName){
                        isExist = true;
                        break;
                    }
                }

                if(staffs != null){
                    staffs.forEach(function(staff){
                        var name = staff.child("userName").val()
                        if(name == userName){
                            isExist = true;
                            break;
                        }
                    })
                }
                if(isExist){
                    break;
                }
            });
            return isExist;
        }).catch(function(error){
            alert('error:  ' + error);
        });
        return func;
    }
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
    //submit.type = "submit"
    submit.value = "Login";
    submit.id = "login"
    // submit.name = "submit";
    submit.className = "submit_btn";
    submit.onclick = function(){ login() };

    loginElement.appendChild(ownerID);
    loginElement.appendChild(IDinput);
    loginElement.appendChild(password);
    loginElement.appendChild(passInput);
    loginElement.appendChild(submit);
    // setLocalValue(id, password);
}

function checkLoginStatus()
{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("Already logined")
          logined();
        } else {
            console.log("not login yet")
            Logouted();
        }
    });

}