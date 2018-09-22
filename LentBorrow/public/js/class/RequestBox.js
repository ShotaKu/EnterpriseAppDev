class RequestBox{
    constructor(userID){
        this.requests = [];
        this.userID = "";
        this.loadRequests();
        if(userID != this.userID){
            this.userID = userID;
            this.requests = [];
        }
    }

    addRequest(request) {
        var b = this.getRequestByBookName(request.bookName)
        if(b == null){
            var t = this.getRequestByTradeBookName(request.tradeWith);
            if(t == null){
                this.requests.push(request);
                this.saveRequests();
            }else{
                alert("That book already use for trade")
            }
        }else{
            alert("That book already in request box");
        }
    }

    removeRequest(index){
        if(0<=index&&index<this.requests.length){
            this.requests.splice(index);
            this.saveRequests();
        }
    }

    acceptRequest(index){
        var result = null;
        if(0<=index&&index<this.requests.length){
            result = {requester:this.userID
                        ,time:this.requests[index].time
                        ,date:this.requests[index].date
                        ,tradeWith:this.requests[index].tradeWith
                        ,bookID:this.requests[index.bookID]}
            this.removeRequest(index);
        }
        return result;
    }

    search(func){
        var i = 0;
        var result = null;
        while(i<this.requests.length){
            if(func(this.requests[i])){
                result = this.requests[i];
                break;
            }
            i++;
        }
        return result;
    }

    Count(){
        return this.requests.length;
    }

    get(index){
        if(0<=index&&index<this.requests.length){
            return this.requests[index];
        }
        return null;
    }

    getRequestByBookName(name){
        var func =  function (request){
            if(request.bookName == name){
                return true;
            }
        };
        return this.search(func);
    }

    getRequestByTradeBookName(name){
        var func = function (request){
            if(request.tradeWith == name){
                return true;
            }
        };
        return this.search(func);
    }

    loadRequests(){
        var box = sessionStorage.getItem("cart");
        if(box != null){
            var json = JSON.parse(box);
            this.requests = json.requests;
            this.userID = json.userID;
        }
    }

    saveRequests(){
        var obj = JSON.stringify(this);
        console.log(obj);
        sessionStorage.setItem("cart",obj);
    }
    
    resetBox(){
        this.requests = [];
        this.saveRequests();
    }
}