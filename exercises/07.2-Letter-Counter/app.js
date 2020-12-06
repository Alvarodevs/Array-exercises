let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let parNoSpaces = par.replace(/\s/g, "");

for (i = 0; i <= parNoSpaces.length; i++) {

    var letters = parNoSpaces[i];
    
    if (letters == {}){
        counts[letter] = 1;
    }

   console.log(letters);


}
// your code here

//console.log(counts);