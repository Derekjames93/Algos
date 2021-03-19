// Create a JS function to transform the object values to an array
const obj = {
    person: {
        name: 'Andrew',
        age: 28,
        race: 'Asian'
    },
    hobbies: {
        sport: 'Disc Golf',
        game: 'Among Us'
    }
}
function objectToArray(object){
    let array = []

    for(let key in object){
        array.push(object[key])
    }

    return array
}

console.log(objectToArray(obj))