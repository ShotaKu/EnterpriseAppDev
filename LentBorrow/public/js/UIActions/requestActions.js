function showAllRequest(){

}

function showRecommend(){

}

var request = 0;
function addNewRequest(borrow,lend,requester,date){
    var requestBox = document.getElementById("requestBox");
    if(requestBox != undefined){

        //create table
        var tr = document.createElement("tr");
        tr.className = "cart_item";
        tr.id = "request" + request;

        //create item remove button
        var remove = createTd("product-remove");
        var reA = document.createElement("a");
        reA.title="Reject this request";
        reA.className="remove";
        reA.onclick = rejectItem;
        remove.appendChild(reA);
        tr.appendChild(remove);

        var borr = createBookNameElement(borrow);
        var lender = createBookNameElement(lend);
        tr.appendChild(borr,lender);

        var userName = createUserElement(requester);
        tr.appendChild(userName)

    /* <td class="product-quantity">
            <span class="amount">2018/09/15 5 p.m.</span>
        </td> */
        var time = createTd("product-quantity");
        var sp = document.createElement("span");
        span.innerHTML = date;
        time.appendChild(sp);
        tr.appendChild(time);

        /**<td class="product-subtotal">
            <input type="button" class="add_to_cart_button" value="Accept">
        </td> */
        var accept = createTd("product-subtotal");
        var button = document.createElement("input");
        button.type = "button";
        button.className = "add_to_cart_button";
        button.value = "Accept";
        accept.appendChild(button);
        tr.appendChild(accept);

        requestBox.appendChild(tr);
        request++;
    }
}

function createTd(cName){
    var td = document.createElement("td");
    td.className = cName;
    return td;
}

function createUserElement(userObj){
    // <td class="product-name">
    //     <a href="lenting.html">Ship Your Idea</a>
    // </td>
    return createNameElement("user",userObj.name,userObj.ID);
}

function createBookNameElement(bookObj){
    // <td class="product-name">
    //     <a href="lenting.html">Ship Your Idea</a>
    // </td>
    return createNameElement("book",bookObj.name,bookObj.ID);
}

function createNameElement(html,inner,ID){
    // <td class="product-name">
    //     <a href="html.html?id=ID">inner</a>
    // </td>
    var td = document.createElement("td");
    td.className = "product-name";
    var a = document.createElement("a");
    a.href = html+".html?id=" + ID;
    a.innerHTML = inner;
    td.appendChild(a);
    return td;
}
/* 
<tr class="cart_item" id="request1">
    <td class="product-remove">
        <a title="Remove this item" class="remove" onclick="">×</a>
    </td>

    <td class="product-name">
        <a href="lenting.html">Ship Your Idea</a>
    </td>

    <td class="product-name">
        <a href="lenting.html">Ship Your Idea</a>
    </td>

    <td class="product-price">
        <span class="amount">User name</span>
    </td>

    <td class="product-quantity">
        <span class="amount">2018/09/15 5 p.m.</span>
    </td>

    <td class="product-subtotal">
        <input type="button" class="add_to_cart_button" value="Accept">
    </td>
</tr> */
function searchAndShow(){

}