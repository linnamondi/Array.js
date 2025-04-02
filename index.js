const arr1 = [3,7,34,90,12];
let num=arr1[arr1.length-1]
console.log({num})

const myPets = ["Cow", "Bird", "Snake", "Dog"];
let newpets=myPets.toString()
console.log({newpets})

var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let newarr3=arr3.sort()
console.log(newarr3)

let arr = ["boy", "man", "girl", "school", "girl", "woman"];
function removeAndFindDuplicates(arr) {
    let uniqueArr = [...new Set(arr)];
    let duplicatesArr = arr.filter(item => arr.indexOf(item) !== arr.lastIndexOf(item));
    return { uniqueArr, duplicatesArr };
}
let { uniqueArr, duplicatesArr } = removeAndFindDuplicates(arr);
console.log("Array without duplicates:", uniqueArr);
console.log("Array with duplicates:", duplicatesArr);



let arr5 = ["the", "way", "x", 4];
if(arr5.includes("food")){
    console.log("is present")
}
else{
    console.log("the search word was not found")
}

let word = "renniw"
let newword=word.split('').sort().join('')
console.log((newword))

let fruits=["mango","apple","thornmelon","Kiwi","banana","orange","melon","pineaple","cherrygrape","date"]
 fruits[5]="Tomato"
 console.log({fruits})

