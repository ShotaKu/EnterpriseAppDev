var nowUser = null;
function login(email, password) {
	return firebase.auth().signInWithEmailAndPassword(email, password)
		.then(function () {
			return true;
		}).catch(function (error) {
			var errorMessage = error.message;
			console.log(errorMessage);
			return false;
		}).then(function (result) {
			if (result) {
				//console.log(getUser().email);
				return true;
			}else{
				return false;
			}
			
		})
		.catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
			return false;
		})
}
function isLogin(){
	var isLogin = getCurrentUserRoot();
	var authLog = firebase.auth().currentUser;
	//authLog always return null????
	
	return (0 < isLogin.length 
		&& null != isLogin 
		&& undefined != isLogin);
}

//Can
// function checkLoginFunc() {
// 	var user = firebase.auth().currentUser
// 	if (user) {
// 		// User is signed in.
// 		return getCurrentUserRoot();
// 	} else {
// 		// No user is signed in.
// 		saveUserRoot("");
// 		return "";
// 	}

// }

function logout(){
	return firebase.auth().signOut().then(function() {
		// Sign-out successful.
		saveUserRoot("");
		
		return true;
	}).catch(function(error) {
		// An error happened.
		alert(error.errorMessage);
		return false;
	});
}


function registration(name, email,phone, userName, password) {
	return firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function (s) {
			return {
				userName: userName,
				name: name,
				phone:phone,
				email: email,
				message: "Success"
			}

		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			return error;
		}).then(function (result) {
			if (result.message == "Success") {
				firebase.database().ref("User").push(result);
				return true;
			}
			else{
				alert(result.message);
				return false;
			}
		});
}

function checkNoEmpty(strArray){
	strArray.forEach(element => {
		if(element.length<=0){
			return false;
		}
	});
	return true;
}

function isUserExist(userName) {
	var ref = firebase.database().ref("User");
	if (0 < userName.length) {
		var func =
			ref.once("value").then(function (users) {
				var isExist = false;
				users.forEach(function (user) {
					var name = user.child("userName").val()
					if (name == userName) {
						isExist = false;
					}
				});
				return isExist;
			}).catch(function (error) {
				alert('error:  ' + error);
			});
		return func;
	}
}

function saveUserRoot(userRoot){
	localStorage.setItem("userRoot", userRoot);
}

function getCurrentUserRoot(){
	return localStorage.getItem("userRoot");
}

function getUser(){
	return firebase.auth().onAuthStateChanged();
}
