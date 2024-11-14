const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

  const rentedBooks = books.every( book => book.rented > 0 );
  if(rentedBooks) {
    console.log("Oui, ils ont tous déjà été empruntés");
  }else {
    console.log("Non, certains n'ont pas été empruntés");
  }


  console.log("Quel est livre le plus emprunté ?");

  const morerentedBooks = books.reduce((max, book) => {

    return (book.rented > max.rented) ? book : max;
    // Si le renter de book est > à max, book devient nouveau max
  }
     
);

console.log(`le livre le plus emprunté est : ${morerentedBooks.title}`);



console.log("Quel est livre le moins emprunté ?");

const lessrentedBooks = books.reduce((min, book) => {

  return (book.rented < min.rented) ? book : min;
  // Si le renter de book est > à max, book devient nouveau max
}
   
);

console.log(`le livre le moins emprunté est : ${lessrentedBooks.title}`);


console.log("Quel livre a l'ID: 873495 ?")
const filteredBooks = books.find(book => book.id === 873495);
console.log(`Il s'agit du livre ${filteredBooks.title}`)

console.log("Supprime donc ce livre")
const index = books.findIndex(book => book.id === 873495);
if (index !== -1) {
books.splice(index, 1); 
}
console.log("le livre a bien été supprimé, comme on peut le voir dans ke tableau ci-dessous");
console.log(books);

console.log("Voici le tableau trié par ordre alphabétique :")

const sortedBooks = books.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
});

console.log(books);