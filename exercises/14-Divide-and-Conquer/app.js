let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

function mergeTwolist (list_of_numbers) {

    var even = [];
    var odd = [];

    for (var i = 0; i < list_of_numbers.length; i++){

        even = list_of_numbers.filter(number => number % 2 == 0);

        odd = list_of_numbers.filter(number => number % 2 != 0);

    return odd.concat(even);
    }
}
console.log(mergeTwolist(list_of_numbers))


