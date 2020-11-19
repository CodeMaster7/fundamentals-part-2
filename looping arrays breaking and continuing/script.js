const populations = [60, 300, 3, 83]
const percentageOfWorld1 = population => Math.round((population / 7900) * 100) / 10
const percentages2 = []

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i])
    percentages2.push(perc)
}

console.log("percentages2", percentages2)
