var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let newArr = [];

for (i = 0; i < mix.length; i++) {

    let element = mix[i];

    newArr.push(typeof element);
}
 console.log(newArr);