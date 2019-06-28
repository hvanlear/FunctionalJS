function CreateSuspectObjects(name){
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log('my name is ', name)
        }
    }
}

let suspects = ['miss scarlet', 'colnel mustard', 'mr.white']
let suspectList = [];

// for (var i = 0; i < suspects.length; i++){
//     suspectList.push(CreateSuspectObjects(suspects[i]));
//     // suspect = CreateSuspectObjects(suspects[i]);
//     //  suspectList.push(suspect);
// }

// using the _.each methode

_.each(suspects, function(name){
    suspectList.push(CreateSuspectObjects(name));
    })