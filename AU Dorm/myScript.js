function myFunction(a,b)
{
    return a +b;
}

function getAllDormitoryInformation(dataRef)
{
    //var dataRef = database.ref('Dormitory');
    dataRef.once("value")
        .then(function(snapshot){
            var i = 0;
            //var dorms = [];
            snapshot.forEach(function(childSnapshot) {
                console.log(childSnapshot.key);    
                    childSnapshot.forEach(function(childSnapshot){
                        console.log("Ｌ"+childSnapshot.key + ":" + childSnapshot.val());
                    
                }); 
            });
        })
    return dorms;
}