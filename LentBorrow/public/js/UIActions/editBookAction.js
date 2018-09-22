var id = "";
var form = null;
var bName = null;
var loc = null;
var cat = null;
var trade = null;
var image = null;
var newImage = null;

function getBookIDParam(){
    id = getParam("id");
    var user = getCurrentUserRoot();
    if(id == ""){
        alert("Please do not redirect edit page");
        document.location = "index.html";
    }
    if(user = ""){
        alert("Please Login first");
        //document.location = "login.html";
    }
}

function showBookValues(){
    form = document.getElementById("newBook");
    bName = form.elements["bName"];
    loc = form.elements["dLocation"];
    cat = form.elements["bCategorie"];
    trade = form.elements["bTradeType"];
    image = document.getElementById("oldImage");
    newImage = form.elements["bookimage"];
    var user = getCurrentUserRoot();
    getBook(id).then(function(book){
        if(book.owner == user){
            bName.value = book.name;
            loc.value = book.locate;
            cat.value = book.category;
            trade.value = book.tradeType;
            image.src = book.image;
        }else{
            alert("This is not your book!");
            document.location = "lenting.html";
        }
    })
}

function updateBook(){
    if(0<id.length){
        var update = setBook(id,bName.value,loc.value,cat.value,trade.value,newImage.files[0]);
        update.then(function(result){
            if(result){
                document.location = "lenting.html";
            }
        })
    }
}