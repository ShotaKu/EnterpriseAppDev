function addNewRequest(request,i){
    var tr = document.createElement("tr");
    tr.className="cart_item";
    tr.id="request"+i;

    var tdR = createTd("cart_item");
    var remove = createButton("btn btn-primary"
                            ,"X",function(){removeRequest(i)}
                            ,"background-color:red");
    tdR.appendChild(remove);
    tr.appendChild(tdR);
    
    var tdN = createSpanTd(request.bookName,("book.html?id="+request.bookID));
    var tdL = createSpanTd(request.tradeWithName);
    var tdO = createSpanTd(request.ownerName,("user.html?id="+request.ownerID));
    var tdD = createTd("product-quantity");
    var label = document.createElement("label");
    label.innerHTML = "On<br>"+request.date+"<br>"+request.time;
    tdD.appendChild(label);

    var tdA = createTd("product-subtotal");
    var accept = createButton("btn btn-primary","Send",function(){sendRequest(i)});
    tdA.appendChild(accept);

    tr.appendChild(tdN);
    tr.appendChild(tdL);
    tr.appendChild(tdO);
    tr.appendChild(tdD);
    tr.appendChild(tdA);

    var table = document.getElementById("requests");
    table.appendChild(tr);
}
function createTd(className){
    var td = document.createElement("td");
    td.className = className;
    return td;
}
function createButton(className,value,onclick,style=null){
    var button = document.createElement("input");
    button.type = "button";
    button.className = className;
    button.onclick = onclick;
    button.value = value;

    if(style != null){
        button.style = style;
    }
    return button;
}
function createSpanTd(inside,aLink=null){
    var td = createTd("product-name");
    var span = document.createElement("span");
    
    if(aLink != null){
        var a = createA(inside,aLink);
        span.appendChild(a);
    }else{
        span.innerHTML = inside;
    }

    td.appendChild(span);
    return td;
}
function createA(inside,link){
    var a = document.createElement("a");
    a.innerHTML  = inside;
    a.href = link;
    return a;
}
function loadRequestsAction(){
    var i = 0;
    var r = new RequestBox(getCurrentUserRoot());
    r.requests.forEach(request =>{
        addNewRequest(request,i);
        i++;
    })
}
function removeRequest(n){
    var box = new RequestBox(getCurrentUserRoot());
    box.removeRequest(n);
    var dom = document.getElementById("request"+n);
    dom.remove();
    reloadRequestBox();
}

function showRequestStetus(){
    var userID = getCurrentUserRoot();
    getRequestByRequesterID(userID).then(function(requests){
        if(0<requests.length){
            var table = document.getElementById("Request result")
            requests.forEach(request => {
                var i = request.requestID;
                getBook(request.bookID).then(function(book){
                    getBook(request.tradeWithID).then(function(tradeBook){
                        getUserByRoot(book.owner).then(function(owner){
                            var newRow = new TableFactory("rResult"+i);
                        newRow.appendA(book.name,"book.html?id="+book.id)
                            .appendA(tradeBook.name,"book.html?id="+tradeBook.id)
                            .appendA(owner.name,"book.html?id="+book.ownerID)
                            .appendSpan("On<br>"+request.date+"<br>"+request.time)
                            .appendSpan("At<br>"+book.locate)
                            .appendSpan(request.status);
                        table.appendChild(newRow.build());
                        })
                    })
                })
            });
        }
    })
    getRequestByUserID(userID).then(function(requests){
        if(0<requests.length){
            var table = document.getElementById("Request result")
            requests.forEach(request => {
                if(!request.isWautForCheck){
                    var i = request.requestID;
                    getBook(request.bookID).then(function(book){
                        getBook(request.tradeWithID).then(function(tradeBook){
                            getUserByRoot(book.owner).then(function(owner){
                                var newRow = new TableFactory("rResult"+i);
                            newRow.appendA(book.name,"book.html?id="+book.id)
                                .appendA(tradeBook.name,"book.html?id="+tradeBook.id)
                                .appendA(owner.name,"book.html?id="+book.ownerID)
                                .appendSpan("On<br>"+request.date+"<br>"+request.time)
                                .appendSpan("At<br>"+book.locate)
                                .appendSpan(request.status);
                            table.appendChild(newRow.build());
                            })
                        })
                    })
                }
            });
        }
    });
}


//Request
function sendRequest(index){
    var userID = getCurrentUserRoot();
    var box = new RequestBox(userID);
    var request = box.get(index);
    var bookID = request.bookID;
    var tradeID = request.tradeWithID;
    getBook(tradeID).then(function(trade){
        return getBook(bookID).then(function(book){
            if(trade.isUsedForRequest){
                alert("That book already used for requesting other book!")
            }
            if(book.isBorrowed){
                alert("That book already borrowed!");
            }
            return !trade.isUsedForRequest && !book.isBorrowed;
        })
    }).then(function(isAvailable){
        if(isAvailable){
            setIsUsedForRequest(tradeID,true);
            pushRequest(userID,request);
            box.removeRequest(index);
            document.location = document.location;
        }
        else{
            //Remove request and reload
            box.removeRequest(index);
            document.location = document.location;
        }
    });
}

function cancelRequest(index){

}


/* <tr class="cart_item">


            <td class="product-subtotal">
                <input type="button" value="Send" class="btn btn-primary">
            </td>
</tr> */