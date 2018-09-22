function getParam(name)
{
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
    return "";
else
    return results[1];
}

function alphabeticalSort(arr){
    arr.sort(function(a, b){
        a = a.toString().toLowerCase();
        b = b.toString().toLowerCase();
        if(a < b){
            return -1;
        }else if(a > b){
            return 1;
        }
        return 0;
    });
    return arr;
}