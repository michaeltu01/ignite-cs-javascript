/*
  Rock Paper Scissors (Student Copy)
  IgniteCS Classical High School Afterschool Coding Club

  Created by: Michael Tu, 2024-03-10
  Created using: ChatGPT (https://chat.openai.com/share/5b7b752f-7472-45d5-af1f-fdb050870e94)
*/

// Define global variables
let gameIsStarted = false;
let userWins = 0;
let computerWins = 0;
let ties = 0;

// Get DOM elements
const startButton = document.getElementById("startButton");
const gameArea = document.getElementById("gameArea");
const inputChoice = document.getElementById("inputChoice");
const playButton = document.getElementById("playButton");
const endButton = document.getElementById("endButton");
const statsDiv = document.getElementById("stats");
const messageDiv = document.getElementById("message");

// ------------- Button Click Listeners -------------

// Event listener for the Start button
startButton.addEventListener("click", () => {
  // Set gameIsStarted flag to true
  gameIsStarted = true;
  // Show the game area
  gameArea.style.display = "block";
  // Hide the End button
  endButton.style.display = "none";
});

// Event listener for the Play button
playButton.addEventListener("click", () => {
  // Get user's choice
  const userChoice = inputChoice.value.toLowerCase();
  // Reset text in the input box
  inputChoice.value = '';
  // Check if the input is valid
  if (!isValidInput(userChoice)) {
    // Display error message
    displayErrorMessage();
    return; // Exit the function
  }
  // Generate computer's choice randomly
  const computerChoice = generateComputerChoice();
  // Determine the winner
  const winner = determineWinner(userChoice, computerChoice);
  // Update stats and display
  displayMessage(userChoice, computerChoice, winner);
  updateStats(winner);

  // Show the End button if the game is not tied
  if (winner != "tie") {
    endButton.style.display = "inline-block";
  }
  else {
    endButton.style.display = "none";
  }
});

// Event listener for the End button
endButton.addEventListener("click", () => {
  // Reset game
  gameIsStarted = false;
  // Hide game area
  gameArea.style.display = "none";
  // Reset stats
  userWins = 0;
  computerWins = 0;
  ties = 0;
  // Clear stats display
  statsDiv.innerHTML = "";
  // Clear message display
  messageDiv.innerHTML = "";
});

// ------------- Helper Functions -------------

// Function to display error message
function displayErrorMessage() {
  messageDiv.textContent = "Please enter a valid input: 'R' for Rock, 'P' for Paper, 'S' for Scissors";
  messageDiv.style.color = "red"; // Apply red color to the text
}

// Function to generate computer's choice randomly
function generateComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// ------------- Student Functions -------------

/**
 * Checks if the user's input is valid.
 * @param {string} choice - The user's input choice.
 * @returns {boolean} - True if the input is valid, false otherwise.
 */
function isValidInput(choice) {
  // STUDENT TASK: Implement this function
  // We need to return true if the choice is either "r", "p", or "s"
  return;
}

/**
 * Determines the winner of the game based on user and computer choices.
 * @param {string} userChoice - The user's choice ('r' for Rock, 'p' for Paper, 's' for Scissors).
 * @param {string} computerChoice - The computer's choice ('r' for Rock, 'p' for Paper, 's' for Scissors).
 * @returns {string} - The winner of the game ('user', 'computer', or 'tie').
 */
function determineWinner(userChoice, computerChoice) {
  // STUDENT TASK: Fill out the entire winning logic!
  // Determine who wins!
  // Return "user", "computer", or "tie" based on the result
  if (/* SOME CONDITION */) {
    return;
  } else if (/* SOME CONDITION */) {
    return;
  } else {
    return;
  }
}

/**
 * Updates game statistics and displays them.
 * @param {string} winner - The winner of the game ('user', 'computer', or 'tie').
 */
function updateStats(winner) {
  // STUDENT TASK: Enter the correct conditions to update the player stats!
  if (/* SOME CONDITION */) {
    userWins++;
  } else if (/* SOME CONDITION */) {
    computerWins++;
  } else {
    ties++;
  }
  // Display stats
  statsDiv.innerHTML = `
        <p>Wins: ${userWins}</p>
        <p>Losses: ${computerWins}</p>
        <p>Ties: ${ties}</p>
    `;
}

/**
 * Displays the game message based on the game outcome.
 * @param {string} userChoice - The user's choice ('r' for Rock, 'p' for Paper, 's' for Scissors).
 * @param {string} computerChoice - The computer's choice ('r' for Rock, 'p' for Paper, 's' for Scissors).
 * @param {string} winner - The winner of the game ('user', 'computer', or 'tie').
 */
function displayMessage(userChoice, computerChoice, winner) {
  const choices = { 'r': 'Rock', 'p': 'Paper', 's': 'Scissors' };
  const userPlayed = `You played ${choices[userChoice]}.`;
  const computerPlayed = `The computer played ${choices[computerChoice]}.`;

  let message;
  // STUDENT TASK: Display the correct message based on the winner!
  if (/* SOME CONDITION */) {
    message = '';
  } else if (/* SOME CONDITION */) {
    message = '';
  } else {
    message = '';
  }

  messageDiv.textContent = message;
  messageDiv.style.color = "black"; // Apply black color to the text
}
