const favoriteThings = ["Kamma", "🍺", 420, true]


// Task: Write a foreach loop
favoriteThings.forEach((favoriteThing) => console.log(favoriteThing)) 
    
// Task: turn them all to Strings and make then say: "Ooh i like" + favoriteThing

// let prepend = "Ooh i like"
// favoriteThings.forEach(favoriteThing => {
//     favoriteThing.toString()
//     favoriteThing = prepend + favoriteThing
// })

const prependList = favoriteThings.map(favoriteThing => `ooh i like ${favoriteThing} `)
prependList.forEach((element) => console.log(element)) 

console.log(favoriteThings.filter(favoriteThing => favoriteThing.length > 1))








