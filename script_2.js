let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
number = parseInt(number);

function factorielle(x){
    if (x === 0) {
        return 1;
    }
    else {
        return x * factorielle(x-1)
    }
}

console.log(`le nombre factoriel de ${number} est ${factorielle(number)}`)