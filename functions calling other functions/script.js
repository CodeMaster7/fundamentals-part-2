const percentageOfWorld1 = population => Math.round((population / 7900) * 100) / 10
console.log("percentageOfWorld1", percentageOfWorld1)

const describePopulation = (country, population) => {
    const percent = percentageOfWorld1(population)

    return `The ${country} has ${population} million people, which is about ${percent}% of the world`
}

console.log(describePopulation('USA', 300));