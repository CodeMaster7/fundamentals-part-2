function describeCountry (country, population, capitalCity) {
    return `${country} has ${population} milllion people and its capital city is ${capitalCity}`
}

const usa = describeCountry('usa', 300, 'washington')
const italy = describeCountry('italy', 60, 'rome')
const africa = describeCountry('africa', 100, 'zimbabue')

console.log(usa);
console.log(italy);
console.log(africa);
