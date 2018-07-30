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



const TouchdownHometeamScore = () => {
  // Finding the Home Teams current score
  const currentScore = parseInt(document.querySelector('.home-score-numbers').textContent)
  // Setting newScore to currentScore + 1
  const newScore = currentScore + 6
  // Changing the home-score-numbers to what the new score is
  document.querySelector('.home-score-numbers').textContent = newScore

}
// when 'touchdown' button is clicked, the 'TouchdownHometeamScore' function will run
document.querySelector('.touchdown').addEventListener('click', TouchdownHometeamScore) 



const extraPointHometeam = () => {
  // Finding the Home Teams current score
  const currentScore = parseInt(document.querySelector('.home-score-numbers').textContent)
  // Setting newScore to currentScore + 1
  const newScore = currentScore + 1
  // Changing the home-score-numbers to what the new score is
  document.querySelector('.home-score-numbers').textContent = newScore
}
// when 'extra-point' button is clicked, the 'extrapointHometeamScore' function will run
document.querySelector('.extra-point').addEventListener('click', extraPointHometeam)



const goForTwoHometeam = () => {
  // Finding the Home Teams current score
  const currentScore = parseInt(document.querySelector('.home-score-numbers').textContent)
  // Setting newScore to currentScore + 2
  const newScore = currentScore + 2
  // Changing the home-score-numbers to what the new score is
  document.querySelector('.home-score-numbers').textContent = newScore
}
// when 'field-goal' button is clicked, the 'fieldgoalHometeamScore' function will run
document.querySelector('.go-for-two').addEventListener('click', goForTwoHometeam)




const fieldgoalHometeam = () => {
  // Finding the Home Teams current score
  const currentScore = parseInt(document.querySelector('.home-score-numbers').textContent)
  // Setting newScore to currentScore + 3
  const newScore = currentScore + 3
  // Changing the home-score-numbers to what the new score is
  document.querySelector('.home-score-numbers').textContent = newScore
}
// when 'field-goal' button is clicked, the 'fieldgoalHometeamScore' function will run
document.querySelector('.field-goal').addEventListener('click', fieldgoalHometeam)






const TouchdownAwayteamScore = () => {
  // Finding the Away Teams current score
  const currentScore = parseInt(document.querySelector('.away-score-numbers').textContent)
  // Setting newScore to currentScore + 1
  const newScore = currentScore + 6
  // Changing the away-score-numbers to what the new score is
  document.querySelector('.away-score-numbers').textContent = newScore

}
// when 'touchdown2' button is clicked, the 'TouchdownAwayteamScore' function will run
document.querySelector('.touchdown2').addEventListener('click', TouchdownAwayteamScore) 



const extraPointAwayteam = () => {
  // Finding the Away Teams current score
  const currentScore = parseInt(document.querySelector('.away-score-numbers').textContent)
  // Setting newScore to currentScore + 1
  const newScore = currentScore + 1
  // Changing the away-score-numbers to what the new score is
  document.querySelector('.away-score-numbers').textContent = newScore
}
// when 'extra-point2' button is clicked, the 'extrapointHometeamScore' function will run
document.querySelector('.extra-point2').addEventListener('click', extraPointAwayteam)



const goForTwoAwayteam = () => {
  // Finding the Away Teams current score
  const currentScore = parseInt(document.querySelector('.away-score-numbers').textContent)
  // Setting newScore to currentScore + 2
  const newScore = currentScore + 2
  // Changing the away-score-numbers to what the new score is
  document.querySelector('.away-score-numbers').textContent = newScore
}
// when 'go-for-two2' button is clicked, the 'fieldgoalAwayteamScore' function will run
document.querySelector('.go-for-two2').addEventListener('click', goForTwoAwayteam)




const fieldgoalAwayteam = () => {
  // Finding the Away Teams current score
  const currentScore = parseInt(document.querySelector('.away-score-numbers').textContent)
  // Setting newScore to currentScore + 3
  const newScore = currentScore + 3
  // Changing the away-score-numbers to what the new score is
  document.querySelector('.away-score-numbers').textContent = newScore
}
// when 'field-goal2' button is clicked, the 'fieldgoalAwayteamScore' function will run
document.querySelector('.field-goal2').addEventListener('click', fieldgoalAwayteam)








 


