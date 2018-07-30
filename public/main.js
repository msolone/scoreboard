// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)


const updateHometeamName = () => {
  // Finding the current name on the 'home-banner'
  const currentName = document.querySelector('.home-banner').textContent
  // Finding the name that was inputted into the 'home-input' bar
  const newName = document.querySelector('.home-input').value
  // changing the 'home-banner' to the newName
  document.querySelector('.home-banner').textContent = newName

}

// when 'update-hometeam-name' button is clicked the updateHometeamName function runs
document.querySelector('.update-hometeam-name').addEventListener('click', updateHometeamName)



const updateAwayteamName = () => {
  // Finding the current name on the 'home-banner'
  const currentName = document.querySelector('.away-banner').textContent
  // Finding the name that was inputted into the 'home-input' bar
  const newName = document.querySelector('.away-input').value
  // changing the 'home-banner' to the newName
  document.querySelector('.away-banner').textContent = newName

}

// when 'update-hometeam-name' button is clicked the updateHometeamName function runs
document.querySelector('.update-awayteam-name').addEventListener('click', updateAwayteamName)



const addHometeamScore = () => {
  // Finding the Home Teams current score
  const currentScore = parseInt(document.querySelector('.home-score-numbers').textContent)
  // Setting newScore to currentScore + 1
  const newScore = currentScore + 1
  // Changing the home-score-numbers to what the new score is
  document.querySelector('.home-score-numbers').textContent = newScore

}
// when 'add-hometeam-score' button is clicked, the 'addHometeamScore' function will run
document.querySelector('.add-hometeam-score').addEventListener('click', addHometeamScore) 



const subtractHometeamScore = () => {
  // Finding the Home Teams current score
  const currentScore = parseInt(document.querySelector('.home-score-numbers').textContent)
  // Setting newScore to currentScore - 1
  const newScore = currentScore - 1
  // Changing the home-score-numbers to what the new score is
  document.querySelector('.home-score-numbers').textContent = newScore

}
// when 'subtract-hometeam-score' button is clicked, the 'subtractHometeamScore' function will run
document.querySelector('.subtract-hometeam-score').addEventListener('click', subtractHometeamScore) 


const addAwayteamScore = () => {
  // Finding the Away Teams current score
  const currentScore = parseInt(document.querySelector('.away-score-numbers').textContent)
  // Setting newScore to currentScore + 1
  const newScore = currentScore + 1
  // Changing the away-score-numbers to what the new score is
  document.querySelector('.away-score-numbers').textContent = newScore

}
// when 'add-awayteam-score' button is clicked, the 'addAwayteamScore' function will run
document.querySelector('.add-awayteam-score').addEventListener('click', addAwayteamScore) 


const subtractAwayteamScore = () => {
  // Finding the Away Teams current score
  const currentScore = parseInt(document.querySelector('.away-score-numbers').textContent)
  // Setting newScore to currentScore - 1
  const newScore = currentScore - 1
  // Changing the away-score-numbers to what the new score is
  document.querySelector('.away-score-numbers').textContent = newScore

}
// when 'subtract-awayteam-score' button is clicked, the 'subtractAwayteamScore' function will run
document.querySelector('.subtract-awayteam-score').addEventListener('click', subtractAwayteamScore)