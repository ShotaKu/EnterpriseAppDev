class Book{
    constructor(id,name,owner,locate,image,category,requester,isBorrowed,isUsedForRequest,tradeType){
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.locate = locate;
        this.image = image;
        this.category = category;
        this.requester = requester;
        this.isBorrowed = isBorrowed;
        this.isUsedForRequest = isUsedForRequest;
        this.tradeType = tradeType;
    }


    isOwner(userKey) {
        return this.owner == userKey;    
    }

    setResult(id,result){
        this.id = id;
        this.name = result.child("name").val()
        this.owner = result.child("lentBy").val()
        this.locate = result.child("locate").val();
        this.image = result.child("image").val();
        this.category = result.child("category").val();
        this.requester = result.child("requester").val();
        this.isBorrowed = result.child("isBorrowed").val();
        this.isUsedForRequest = result.child("isUsedForRequest").val();
        this.tradeType = result.child("tradeType").val();
    }
}

class lentingBook{
    constructor(key,bookID){
        this.key  = key;
        this.bookID = bookID;
    }
}