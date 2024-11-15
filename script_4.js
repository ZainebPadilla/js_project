const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log("Qui sont les entrepreneurs nés dans les années 70 ?");
  const filteredEntrepreneurs = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);

console.log(filteredEntrepreneurs);

console.log("Quels sont les nom prenoms des entrepreneurs ?");

  const namesEntrepreneurs = entrepreneurs.map(entrepreneur =>  ({first: entrepreneur.first, last: entrepreneur.last,}));
console.log(namesEntrepreneurs);

console.log("Quel âge ont les entrepreneurs aujourd'hui ?");

const nowadaysAgeOfEnrepreneurs = entrepreneurs.map(entrepreneur => {
    const age = 2024 - entrepreneur.year;
    return {

        first: entrepreneur.first, 
        last: entrepreneur.last, 
        age: age
    };
    });
console.log(nowadaysAgeOfEnrepreneurs)

console.log("Qui sont les entrepreneurs par ordre alphabétique ?");

const sortedEntrepreneurs = entrepreneurs.sort((a, b) => {
    if (a.first < b.first) return -1;
    if (a.first > b.first) return 1;
    return 0;
});

console.log(sortedEntrepreneurs);