//STEP 1
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator']
// console.log(movies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Fight Club'
// movies[1] = 'Alien'
// movies[2] = 'The Matrix'
// movies[3] = 'Interstellar'
// movies[4] = 'Gladiator'
// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Fight Club'
// movies[1] = 'Alien'
// movies[2] = 'The Matrix'
// movies[3] = 'Interstellar'
// movies[4] = 'Gladiator'
// movies.splice(2,0,'Godzilla')
// console.log(movies.length)

//STEP 4
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator']
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator', 'Godzilla', 'Terminator 2']
// for (movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator', 'Godzilla', 'Terminator 2']
// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator', 'Godzilla', 'Terminator 2']
// for (movie in movies.sort()) {
//     console.log(movies[movie])
// }

//STEP 8
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator', 'Godzilla', 'Terminator 2']
// console.log('Movies I Like:')
// console.log('')
// for (movie in movies) {
//     console.log(movies[movie])
// }

// console.log('')

// console.log('Movies I regret watching:')
// console.log('')
// let leastFavMovies = ['Arrival', 'Vesper', 'The Green Knight']
// for (movie in leastFavMovies) {
//     console.log(leastFavMovies[movie])
// }

//STEP 9
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator', 'Godzilla', 'Terminator 2']
// movies = movies.concat('Arrival', 'Vesper', 'The Green Knight')
// for (movie in movies.sort().reverse()) {
//     console.log(movies[movie])
// }

//STEP 10
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator', 'Godzilla', 'Terminator 2']
// movies = movies.concat('Arrival', 'Vesper', 'The Green Knight')
// console.log(movies.pop())

//STEP 11
// let movies = ['Fight Club', 'Alien', 'The Matrix', 'Interstellar', 'Gladiator', 'Godzilla', 'Terminator 2']
// movies = movies.concat('Arrival', 'Vesper', 'The Green Knight')
// console.log(movies.shift())

//STEP 12
// let movies = ['Fight Club', 'Alien', 'The Green Knight', 'The Matrix', 'Interstellar', 'Vesper', 'Gladiator', 'Godzilla', 'Arrival', 'Terminator 2']
// console.log(movies) //To compare before and after

// let leastFavMovies = ['Arrival', 'Vesper', 'The Green Knight']
// let moreLikedMovies = ['Constantine', 'Scarface', 'The Thing']
// let i = 0
// for (let movie of movies) {
//     for (let badMovie of leastFavMovies) {
//         if (badMovie === movie) {
//             movies[movies.indexOf(badMovie)] = moreLikedMovies[i]
//             i++
//         }
//     }
// }
// console.log(movies) //To compare before and after

//STEP 13
// let moviesAndRating = [
//     ['Fight Club', 3],
//     ['Alien', 1],
//     ['The Matrix', 2],
//     ['Interstellar', 4],
//     ['Gladiator', 5]
// ]

// let justMovies = []

// for (let obj of moviesAndRating) {
//     console.log(
//         obj.filter((item) => {
//             return typeof item === 'string'
//         })[0]
//     )
// }

//STEP 14
// let employees = ['Sally Sanderson', 'Frank Ash', 'Haul Pollywood', 'Timothy Timerson', 'Alice Wonderton']
// let displayListContents = (list) => {
//     for (let item of list) {
//         console.log(item)
//     }
// }
// displayListContents(employees)

//STEP 15
// function filterValues(arrayOfItemsToRemove, arrayToFilter) { //two parameters (arrays) to make the function more modular; one array with the items to filter out, then the array to be filtered
//     let filteredArray =[] //initialize the filtered array that will be returned
//     for (let item of arrayToFilter) { //loop through each item in the array to be filtered
//         if (!arrayOfItemsToRemove.includes(item)) { //check to see if the current item being analyzed is also in the array of item to be removed/filtered out
//             filteredArray.push(item) //append the item to the filtered array if it does not match any of the entries in the array of items to exclude
//         }
//     }
//     console.log(filteredArray) //print to console to see the result
//     return filteredArray //return the filtered array to be used later in the script
// }

// let testData = [58, '', 'abcd', true, null, false, 0] //sample data to test the filter on
// let arrayOfItemsToRemove = [false, null, 0, ''] //array holding the items to be filtered out of the sample data
// testData = filterValues(arrayOfItemsToRemove, testData) //Replaces the sample array with the filter result, use a different variable if the original array needs to be preserved

//STEP 16
// function randomArrayItem(entryArray) {
//     let randIndex = Math.floor(Math.random()*entryArray.length)
//     console.log(entryArray[randIndex])
// }

// testData = ['a','b','c','d','e','f','g', true, false, null, 434]
// randomArrayItem(testData)

//STEP 17
// function largestNum(entryArray) {
//     console.log(Math.max.apply(null,entryArray))
// }

// entryArray = [1,32,112,5435,999,453,12,12,433,908,12]
// largestNum(entryArray)