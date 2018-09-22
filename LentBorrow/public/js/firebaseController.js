//Common function
function uploadImage(imageFile,fileName){
    const storage = firebase.storage().ref();
    const metadata = { contentType: imageFile.type };
    if (imageFile != null) {
        //Upload file to storage
        return storage.child(fileName).put(imageFile, metadata)
                .then(snapshot => snapshot.ref.getDownloadURL());
    }
    return null;
}
function pushAt(at,object){
	var database = firebase.database();
    var ref = database.ref(at);
    return ref.push(object).getKey();
}
function setAt(at,object){
	var database = firebase.database();
	var ref = database.ref(at);
	ref.set(object);
    return at;
}
function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//User function
function getUserRootID(email){
	return getUserByEmail(email).then(function(user){
        return user.ref.key;
    });
}
function isUserExist(userName) {
	var ref = firebase.database().ref("User");
	if (0 < userName.length) {
		var func =
			ref.once("value").then(function (users) {
				var result = null;
				users.forEach(function (user) {
					var name = user.child("userName").val()
					if (name == userName) {
                        result = user;
						return true;
					}
                });
                return result;
			}).catch(function (error) {
				alert('error:  ' + error);
			});
		return func;
	}
}
function getUserByEmail(email) {
	var ref = firebase.database().ref("User");
	if (0 < email.length) {
		var func =
			ref.once("value").then(function (users) {
				var result = null;
				users.forEach(function (user) {
					var mail = user.child("email").val()
					if (mail == email) {
                        result = user;
						return true;
					}
                });
                return result;
			}).catch(function (error) {
                alert('error:  ' + error);
                return null;
			});
		return func;
	}else{

	}
}
function getUserByRoot(root) {
	if(root!=null){
		if (0 < root.length && root != null) {
			var ref = firebase.database().ref("User/"+root);
			var func =
				ref.once("value").then(function (user) {
					var result = null;
					if(user != null){
						var books = [];
						user.child("Lending").forEach(function(book){
							books.push(book.key);
						})
						result = {
							id:root
							,email:user.child("email").val()
							,name:user.child("name").val()
							,userName:user.child("userName").val()
							,books:books
						};
					}
					return result;
				}).catch(function (error) {
					alert('error:  ' + error);
					return null;
				});
			return func;
		}
	}
}
function getUserByUserName(userName) {
	var ref = firebase.database().ref("User");
	if (0 < userName.length) {
		var func =
			ref.once("value").then(function (users) {
				var isExist = false;
				users.forEach(function (user) {
					var name = user.child("userName").val()
					if (name == userName) {
						return user;
					}
				});
			}).catch(function (error) {
                alert('error:  ' + error);
                return null;
			});
		return func;
	}
}
function getUserLentBook(userID){
	var ref = firebase.database().ref("User/"+userID+"/Lending");
	if(ref != null){
		return ref.once("value").then(function(lbooks) {
			var lents = [];
			lbooks.forEach(function(l){
				var lent = new lentingBook(l.key,l.val());
				lents.push(lent);
			})
			return lents;
		});
	}
	return function(){return []};
	
}
function deleteLenting(userID, lentKey){
	setAt("User/"+userID+"/Lending/"+lentKey,null);
}

//Book function
function createNewBook(userRootID,name,locate,category,trade,image){
	if(image != null){
		return uploadImage(image,guid()).then(function(url){
			return {
				name:name
				,lentBy:userRootID
				,locate:locate
				,category:category
				,tradeType:trade
				,image:url
				,isBorrowed:false
				,requester:"N/A"
				,isUsedForRequest:false
			}
		}).then(function(newBook){
			return pushAt("Book",newBook);
		}).then(function(newBookID){
			pushAt("User/"+userRootID+"/Lending",newBookID);
			return newBookID		
		}).then(function(result){
			var rand = getRandomInt(0,5);
			return setAt("Latest/"+rand,{bookID:result,user:userRootID})
		});
	}
}
function setBook(bookID,name,locate,category,trade,image){
	if(image != null){
		return uploadImage(image,guid()).then(function(url){
			setAt("Book/"+bookID+"/name",name);
			setAt("Book/"+bookID+"/locate",locate);
			setAt("Book/"+bookID+"/category",category);
			setAt("Book/"+bookID+"/tradeType",trade);
			setAt("Book/"+bookID+"/image",url);
			return true;
		});
	}else{
		setAt("Book/"+bookID+"/name",name);
		setAt("Book/"+bookID+"/locate",locate);
		setAt("Book/"+bookID+"/category",category);
		setAt("Book/"+bookID+"/tradeType",trade);
		return function(){return true};
	}
}
function getLatestBook(){
}
function getBook(id){
	var ref = firebase.database().ref("Book/"+id);
	return ref.once("value").then(function(result){
		if(result != null){
			var book = new Book(
				// ,result.child("name").val()
				// ,result.child("lentBy").val()
				// ,result.child("locate").val()
				// ,result.child("image").val()
				// ,result.child("category").val()
				// ,result.child("requester").val()
				// ,result.child("isBorrowed").val()
				// ,result.child("isUsedForRequest").val()
			);
			book.setResult(id,result);
			return book;
		}else{
			return null;
		}
	})
}
function getAllLentBooks(userID){
	var query = firebase.database().ref("User/"+userID+"/Lending");
	return query.once("value")
  		.then(function(snapshot) {
			var bList = [];
    		snapshot.forEach(function(childSnapshot) {
			// key will be "ada" the first time and "alan" the second time
			var key = childSnapshot.key;
			// childData will be the actual contents of the child
			var childData = childSnapshot.val();
			bList.push(childData);
			//console.log(key+":"+childData);
			
			});
			return getBooks(alphabeticalSort(bList));
		});
}
function getLentBook(userID,bookID){
	var query = firebase.database().ref("User/"+userID+"/Lending");
	return query.once("value")
  		.then(function(lents) {
			var result = null;
    		lents.forEach(function(lent) {
				var id = lent.val();
				if(id == bookID){
					result = {
						key:lent.key
						,id:id
					}
				}
				return result;
			});
			return result;
		});
}
function getBooks(bookIDList){
	var query = firebase.database().ref("Book").orderByKey();
	return query.once("value")
  		.then(function(snapshot) {
			var books = [];
				snapshot.forEach(function(result) {
					var lookAt = result.key;
					if(bookIDList[0]==lookAt){
						var newBook = new Book();
						newBook.setResult(result.key,result);
						books.push(newBook);
						bookIDList.shift();
					}
				})
			return books;
  		});
	
}
function searchBookByName(key,includeUsedForRequest){
	if(0 < key.length){
		var query = firebase.database().ref("Book").orderByKey();
		return query.once("value")
			.then(function(snapshot) {
				var books = [];
					snapshot.forEach(function(result) {
						var lookAt = result.child("name").val();
						var isRequestUsed = result.child("isUsedForRequest").val()
						if(isRequestUsed = !includeUsedForRequest){
							if(lookAt.indexOf(key) !== -1){
								var book = new Book();
								book.setResult(result.key,result);
								books.push(book);
							}
						}
					})
				return books;
			});
	}
	return null;
}
function setIsUsedForRequest(bookID,isUsed){
	setAt("Book/"+bookID+"/isUsedForRequest",isUsed);
}
function deleteBook(book){
	var userID = getCurrentUserRoot();
    return getUserLentBook(userID).then(function(lents){
            // if user request other books by using this book
            if(book.isUsedForRequest){
                getRequestByTradeWithID(book.id).then(function(requests){
                    deleteRequests(requests);
                })
            }
        }).then(function(){
            //Delete all requests to this book
            getRequestByBookID(book.id).then(function(requests){
				getLentBook(userID, book.id).then(function(lent){
					deleteRequests(requests);
					//delete book at last
					setAt("Book/"+book.id,null)
					deleteLenting(userID, lent.key);
					console.log("delete book: "+book.id);
					return true;
				})
            })
    });
}
function setBookBorrowedStatus(bookID,isBorrowed){
	setAt("Book/"+bookID+"/isBorrowed",isBorrowed);
}

//request
function pushRequest(userID,reqObj){
	var ref = firebase.database().ref("Request");
	var obj = new FirebaseRequest(null
								,reqObj.ownerID
								,userID
								,reqObj.bookID
								,reqObj.tradeWithID
								,reqObj.date
								,reqObj.time
								,"wait for check")
	ref.push(obj);
}
function getRequestByUserID(userID){
	var ref = firebase.database().ref("Request");
	return ref.once("value").then(function (snapshot) {
		var request = [];
		snapshot.forEach(function (result) {
			var lookAt = result.child("ownerID").val();
			if (userID == lookAt) {
				var newReq = new FirebaseRequest(result.key
												,result.child("ownerID").val()
												,result.child("requesterID").val()
												,result.child("bookID").val()
												,result.child("tradeWithID").val()
												,result.child("date").val()
												,result.child("time").val()
												,result.child("status").val())
				request.push(newReq);
			}
		})
		return request;
	});
}
function getRequestByRequesterID(userID){
	var ref = firebase.database().ref("Request");
	return ref.once("value").then(function (snapshot) {
		var request = [];
		snapshot.forEach(function (result) {
			var lookAt = result.child("requesterID").val();
			if (userID == lookAt) {
				var newReq = new FirebaseRequest(result.key
												,result.child("ownerID").val()
												,result.child("requesterID").val()
												,result.child("bookID").val()
												,result.child("tradeWithID").val()
												,result.child("date").val()
												,result.child("time").val()
												,result.child("status").val())
				request.push(newReq);
			}
		})
		return request;
	});
}

function getRequestByBookID(bookID){
	var ref = firebase.database().ref("Request");
	return ref.once("value").then(function (snapshot) {
		var request = [];
		snapshot.forEach(function (result) {
			var lookAt = result.child("bookID").val();
			if (bookID == lookAt) {
				var newReq = new FirebaseRequest(result.key
												,result.child("ownerID").val()
												,result.child("requesterID").val()
												,result.child("bookID").val()
												,result.child("tradeWithID").val()
												,result.child("date").val()
												,result.child("time").val()
												,result.child("status").val())
				request.push(newReq);
			}
		})
		return request;
	});
}
function getRequestByTradeWithID(tradeWithID){
	var ref = firebase.database().ref("Request");
	return ref.once("value").then(function (snapshot) {
		var request = [];
		snapshot.forEach(function (result) {
			var lookAt = result.child("tradeWithID").val();
			if (tradeWithID == lookAt) {
				var newReq = new FirebaseRequest(result.key
												,result.child("ownerID").val()
												,result.child("requesterID").val()
												,result.child("bookID").val()
												,result.child("tradeWithID").val()
												,result.child("date").val()
												,result.child("time").val()
												,result.child("status").val())
				request.push(newReq);
			}
		})
		return request;
	});
}
function setRequestStatus(requestID,status){
	setAt("Request/"+requestID+"/status",status);
}
function acceptRequest(requestID){
	setRequestStatus(requestID,"accepted");
}
function rejectRequest(requestID){
    setRequestStatus(requestID,"rejeced");
}
function deleteRequest(requestID){
	setRequestStatus(requestID,"book deleted");
	console.log("Delete request: "+requestID);
}
function deleteRequests(requests){
    requests.forEach(request => {
        deleteRequest(request.requestID);
    });
}