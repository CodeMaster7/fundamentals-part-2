const myCountry = {
    country: 'USA',
    capital: 'Washington',
    language: 'English',
    population: 300,
    neighbours: ['Canada', 'Mexico'],
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false
    }
}

myCountry.describe()
myCountry.checkIsland()
console.log(myCountry);