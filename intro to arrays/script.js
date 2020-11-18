const populations = [60, 300, 3, 83]
console.log(populations.length === 4);

const percentageOfWorld1 = population => Math.round((population / 7900) * 100) / 10

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]

console.log(percentages);
