function showSearchResult(key){
    loadSearchResult(key).then(function(books){
        books.forEach(book => {
            if(!book.isBorrowed){
                getUserByRoot(book.owner).then(function(owner){
                    var newTable = new TableFactory();
                    var result = document.getElementById("results")
                    newTable.appendImage(book.image,"search-result")
                            .appendA(book.name,"book.html?id="+book.id)
                            .appendSpan(book.tradeType)
                            .appendSpan(book.locate)
                            .appendSpan(book.category)
                            .appendA(owner.name,"user.html?id="+owner.id);
    
                    result.appendChild(newTable.build());
                })
            }
        })
        finishLoading();
        if(0<books.length){
            showNoExist();
        }
    })
}

function loadSearchResult(key){
    return searchBookByName(key,false).then(function(books){
        if(0 < books.length){
            books.forEach(book => {
                console.log(book);
            });
            return books;
        }else{
            return [];
        }
    });    
}

function finishLoading(){
    var loading = document.getElementById("nowLoading");
    loading.style.visibility = "hidden";
}

function showNoExist(){
    var loading = document.getElementById("nowLoading");
    loading.innerHTML = "No books exist";
}