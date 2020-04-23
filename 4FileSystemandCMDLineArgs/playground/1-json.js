const fs = require('fs')


// const book = {
//     titile: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }


// const bookJSON = JSON.stringify(book);
// console.log(bookJSON)
// // console.log(book.titile)
// // console.log(bookJSON.titile)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON);


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// console.log(dataBuffer.toString())
// const data = JSON.parse(dataJSON)
// console.log(dataJSON.title)
// console.log(data.titile)

// const data = JSON.parse(dataBuffer.toString());
// console.log(data)



// const probaBuffer = fs.readFileSync('1-json.json', 'utf-8');
// const proba = JSON.parse(probaBuffer.toString());
// console.log(proba)


// CHALLENGE

const ivanBuffer = fs.readFileSync('1-json.json');
const ivanData = JSON.parse(ivanBuffer.toString())
console.log(ivanData)
ivanData.name = 'Ivan';
ivanData.age = 28;
console.log(ivanData)
const userJson = JSON.stringify(ivanData);
fs.writeFileSync('1-json.json', userJson)



