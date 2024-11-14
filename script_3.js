console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");


function pyramide(lines){
    for(let x = 1; x <= lines; x++){ //x=1 pour initialiser à 1
   // x <= lines : La boucle continue tant que x est inférieur ou égal au nombre choisi de ligne
   //x++ : Incrémente x de 1 à chaque itération, passant ainsi à la ligne suivante de la pyramide
        let spaces = ' '.repeat(lines - x);
        let hashtags = '#'.repeat(x);

        console.log(spaces + hashtags);
    }
}

let numberOfLines = prompt("Choisi un chiffre");
console.log(`Tu as choisi le chiffre ${numberOfLines}`);

pyramide(numberOfLines);