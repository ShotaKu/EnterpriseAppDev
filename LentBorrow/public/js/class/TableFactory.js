class TableFactory{
    constructor(id=null,className=null){
        this.elements = [];
        this.className = className;
        this.id = id;
    }

    append(element){
        this.elements.push(this.createTd(element));
        return element;
    }

    createTd(element){
        var td = document.createElement("td");
        td.appendChild(element);
        return td;
    }
    
    appendEmptyTd(className){
        var td = document.createElement("td");
        td.className = className;
        this.append(td);
        return this;
    }
    
    appendButton(className,value,onclick,style=null){
        var button = document.createElement("input");
        button.type = "button";
        button.className = className;
        button.onclick = onclick;
        button.value = value;
    
        if(style != null){
            button.style = style;
        }
        this.append(button);
        return this;
    }
    
    appendSpan(inside,aLink=null){
        var span = document.createElement("span");
        
        if(aLink != null){
            var a = appendA(inside,aLink);
            span.appendChild(a);
        }else{
            span.innerHTML = inside;
        }
        this.append(span);
        return this;
    }
    
    appendA(inside,link){
        var a = document.createElement("a");
        a.innerHTML  = inside;
        a.href = link;
        this.append(a);
        return this;
    }

    appendImage(src,className){
        var img = document.createElement("img");
        if(className != ""){
            img.className = className;
        }
        img.src  = src;
        this.append(img);
        return this;
    }

    build(){
        var tr = document.createElement("tr");
        this.elements.forEach(element => {
            tr.appendChild(element);
        });
        if(this.className != null){
            tr.className = this.className;
        }
        if(this.id != null){
            tr.id = this.id;
        }
        return tr;
    }
}