var owner_s = "";
var oName_s = "";
var bName_s = "";
var loc_s = "";
var img_s = "";
function setBookDetailElements(bookObj, userObj) {
    if(!bookObj.isBorrowed){
        var name = document.getElementById("bName");
        var nLink = document.getElementById("bNameLink");
        var userName = document.getElementById("uLink");
        var uLink = document.getElementById("uNameLink");

        var loc = document.getElementById("tLocation");
        var cat = document.getElementById("bCategory");
        var img = document.getElementById("bImage");

        bName_s = name.innerHTML = nLink.innerHTML = bookObj.name;

        userName.href = "user.html?id=" + userObj.id;
        owner_s = userObj.id;
        oName_s = userName.innerHTML = userObj.name;

        uLink.href = "user.html?id=" + userObj.id;
        uLink.innerHTML = userObj.name;

        var rate = userObj.rate;
        if (rate == null) {
            rate = 0;
        }
        loc.innerHTML = "Trade location: " + bookObj.locate;
        loc_s = bookObj.locate;
        cat.innerHTML = "Category: " + bookObj.category;
        img_s = img.src = bookObj.image;
        setRate(rate);
        setTradeRequestBox(bookObj.owner);
    }else{
        alert("This book already borrowed!");
        setDisableRequestBox();
    }
}
function setRate(rate) {
    var r = document.getElementById("uRating");
    var i = 0;
    while (i < rate) {
        var star = document.createElement("span");
        star.className = "fa fa-star checked";
        r.appendChild(star);
        i++;
    }
    while (i < 5) {
        var star = document.createElement("span");
        star.className = "fa fa-star-o";
        r.appendChild(star);
        i++;
    }
    var number = document.createElement("label");
    number.innerHTML = " (" + rate + ")";
    r.appendChild(number);
}
function setTradeRequestBox(ownerID) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var root = getCurrentUserRoot();
            if (root != null) {
                getAllLentBooks(root).then(function (books) {
                    console.log(books);
                    //var isUsersBook = false;
                    books.forEach(b => {
                        if(!b.isBorrowed){
                            var option = document.createElement("option");
                            var select = document.getElementById("tradeWith");
                            option.innerHTML = b.name;
                            option.value = b.id;
                            select.appendChild(option);
                            return "Success";
                        }
                    });
                });
                if(ownerID == root){
                    tradeRequestBox(true);
                    
                }else{
                    setEnableRequestBox();
                    setDefaultDateTime();
                }
            }
        } else {
            tradeRequestBox(false);
        }
    })
}
function setDefaultDateTime(){
    var d = new Date();
    var form = document.getElementById("tradingRequest");
}

function setEnableRequestBox(){
    var box = document.getElementById("tradingRequest");
    box.style.visibility = "visible";
}
function setDisableRequestBox(){
    var box = document.getElementById("tradingRequest");
    box.style.visibility = "hidden";
}

function tradeRequestBox(isOwner){
    var box = document.getElementById("tradingRequest");
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
    if(isOwner){
        var label = document.createElement("label");
        label.innerHTML = "This is your book.";
        box.appendChild(label);
    }else{
        var login = document.createElement("a");
        login.className = "add_to_cart_button";
        login.innerHTML = "Login for trade";
        login.href = "login.html";
        box.appendChild(login);
    }
    setEnableRequestBox()
}

function setBookDetail(bookID) {
    getBook(bookID).then(function (b) {
        getUserByRoot(b.owner).then(function (u) {
            setBookDetailElements(b, u);
            
        })
    })
}

function request(){
    var bookID =  getBookIDParam();

    var form = document.getElementById("tradingRequest");
    var sel = form.elements["tradeWith"];
    var tWith = sel.value;
    var tWithName = sel.options[sel.selectedIndex].text;
    var date = form.elements["tDate"].value;
    var time = form.elements["tTime"].value;
    //console.log(owner_l);
    if(tWith != "null"){
        if(date != ""){
            if(time != ""){
                var newRequest = new Request(bookID ,bName_s
                                            ,loc_s ,img_s
                                            ,owner_s ,oName_s
                                            ,tWith, tWithName
                                            ,date ,time);
                var box = new RequestBox(getCurrentUserRoot());
                box.addRequest(newRequest);
                reloadRequestBox();
                alert("Request added!");
                setDisableRequestBox();
                console.log(box);
            }
        }
    }
    var box = new RequestBox(getCurrentUserRoot());
    console.log(box);
}

function getBookIDParam(){
    return getParam("id");
}