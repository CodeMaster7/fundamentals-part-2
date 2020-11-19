const populations = [60, 300, 3, 83]
const percentageOfWorld1 = population => Math.round((population / 7900) * 100) / 10
const percentages3 = []

let i = 0
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i])
    percentages3.push(perc)
    i++
}

console.log(percentages3);