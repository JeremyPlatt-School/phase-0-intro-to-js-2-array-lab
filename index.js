// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop()
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
    return cats;
}
function appendCat(name){
    let newCats = cats.slice();
    newCats.push(name);
    return newCats;
}
function prependCat(name){
    let newCats = cats.slice();
    newCats.unshift(name);
    return newCats
}
function removeLastCat(name){
    let newCats = cats.slice();
    newCats.pop();
    return newCats;
}
function removeFirstCat(name){
    let newCats = cats.slice();
    newCats.shift();
    return newCats;
}