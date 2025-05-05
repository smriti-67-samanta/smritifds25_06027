
function finalScores(scores){

let nscores=scores.map(Number)

let passingScores=nscores.filter(scores=> scores>=40)


passingScores.sort((a,b)=>(b-a))

console.log( passingScores.join(","));

}
finalScores([" 85 ", " 39", "76", "90", " 42 ", " 55", "20", " 100"])

