let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let parNoSpaces = par.replace(/\s/g, "");

for (let i = 0; i < parNoSpaces.length; i++) {

    var letters = parNoSpaces[i].toLowerCase();
    
    if (counts[letters] == undefined){
        counts[letters] = 1;
    } else {counts[letters] = counts[letters] + 1} 
}
// your code here
console.log(counts);
