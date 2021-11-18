let countries: string[] = ['Thailand', 'Malaysia', 'Singapore']
console.log(countries);
console.log(countries.length)

// for (let i = 0; i < countries.length; i = i + 1) {
//     console.log(countries[i]);
// }

let i: string
for (i in countries) {
    console.log(countries[i]);
}
