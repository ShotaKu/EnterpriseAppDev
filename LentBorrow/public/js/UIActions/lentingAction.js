function showMybooks(){
    var id = getCurrentUserRoot();
    if(id != null){
        getAllLentBooks(id).then(function(books){
            if(0<books.length){
                var myBooks = document.getElementById("my books");
                var i = 0;
                books.forEach(book => {
                    if(!book.isBorrowed){
                        var table = new TableFactory("book"+book.bookID);
                        table.appendButton("btn btn-primary"
                                            ,"X",function(){removeBook(book,book.bookID);}
                                            ,"background-color:red")
                            .appendImage(book.image,"search-result")
                            .appendA(book.name,"book.html?id="+book.id)
                            .appendSpan(book.category)
                            .appendSpan(book.locate)
                            .appendSpan(book.tradeType)
                            .appendSpan((book.isUsedForRequest)?"YES":"NO")
                            .appendButton("btn btn-primary","Edit",function(){editBook(book)});
                        myBooks.appendChild(table.build());
                    }
                    i++;
                });
                if(books.length <= i){
                    finishLoading("Book");
                }
            }else{
                finishLoading("Book");
            }
            
        })
    }
}

function showRequestBox(){
    var id = getCurrentUserRoot();
    if(id != null){
        getRequestByUserID(id).then(function(requests){
            if(0<requests.length){
                var i = 0;
                requests.forEach(request => {
                    if(request.isWaitForCheck()){
                        getBook(request.bookID).then(function(book){
                            getBook(request.tradeWithID).then(function(tradeBook){
                                console.log(book);
                                console.log(tradeBook);
                                console.log(request);
                                getUserByRoot(request.requesterID).then(function(user){
                                    var requestBox = document.getElementById("requestBox");
                                    var table = new TableFactory("requestBox"+i);
                                    table.appendButton("btn btn-primary","X"
                                                        ,function(){rejectRequestAction(request.requestID,i);}
                                                        ,"background-color:red")
                                        .appendImage(tradeBook.image,"search-result")
                                        .appendA(book.name,"book.html?id="+book.id)
                                        .appendA(tradeBook.name,"book.html?id="+tradeBook.id)
                                        .appendA(user.name,"user.html?id="+user.id)
                                        .appendSpan("on<br>"+request.date+"<br>"+request.time)
                                        .appendButton("btn btn-primary"
                                                    ,"Accept"
                                                    ,function(){acceptRequestAction(request.requestID,i,book,tradeBook)});
                                    requestBox.appendChild(table.build());
                                    finishLoading("Box");
                                })
                            })
                        })
                    }
                    i++;
                });
                if(requests.length <= i){
                    finishLoading("Box");
                }
            }else{
                finishLoading("Box");
            }
        })
    }
}

function finishLoading(type){
    var l = document.getElementById("load"+type);
    l.style.visibility = "hidden";
}

function removeBook(book,tableIndex){
    var r = confirm("Are you sure to remove "+book.name+"?");
    alert("Now deleting...");
    if (r == true) {
        deleteBook(book).then(function(){
            removeTable("book"+tableIndex);
            //document.location = "lenting.html";
        });
    }
}



function editBook(book){
    document.location = "editBook.html?id="+book.id;
}

function rejectRequestAction(id,tableIndex){
    rejectRequest(id);
    removeTable("requestBox"+tableIndex);
}
function acceptRequestAction(id,tableIndex,book,tradeBook){
    acceptRequest(id);
    setBookBorrowedStatus(book.id,true);
    setBookBorrowedStatus(tradeBook.id,true);
    removeTable("requestBox"+tableIndex);
}
function removeTable(id){
    var t = document.getElementById(id);
    t.remove();
}