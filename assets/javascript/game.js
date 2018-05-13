var computerChoice = Math.random();
// Why doesn't this always return rock? Or sometimes both items? It feel like I should have to tell the else if 
// statement to act within (0.34 <= computerChoice <= 0.67)
if (computerChoice <= 0.33 ){
    computerChoice = "rock";
}

else if (computerChoice <= 0.67) {
    computerChoice = "paper";
}

else {
 computerChoice = "scissors"
}
    







console.log(computerChoice);








// else if

// else