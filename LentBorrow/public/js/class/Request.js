class Request{
    constructor(bookID,bName,bLoc,bImage,ownerID,oName,tWithID,tWithName,date,time){
        this.bookID = bookID;
        this.bookName = bName;
        this.location = bLoc;
        this.image = bImage;
        this.ownerID = ownerID;
        this.ownerName = oName;
        this.tradeWithID = tWithID;
        this.tradeWithName = tWithName;
        this.date = date;
        this.time = time;
    }
}

class FirebaseRequest{
    constructor(requestID,ownerID,requesterID,bookID,tradeWithID,date,time,status){
        if(requestID != null){
            this.requestID = requestID;
        }
        this.ownerID = ownerID;
        this.requesterID = requesterID;
        this.bookID = bookID;
        this.tradeWithID = tradeWithID;
        this.date = date;
        this.time = time;
        this.status = status;
    }
    isAccepted(){
        return this.status == "accepted";
    }
    isWaitForCheck(){
        return this.status == "wait for check";
    }
}