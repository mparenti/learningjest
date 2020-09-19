export default class Battleship {


    location1 = 3;
    location2 = 4;
    location3 = 5;

    guess;
    hits = 0;
    guesses = 0;

    isSunk = false;

    play = function() {
           
        while (isSunk === false) {
            guess = prompt("Ready, Aim, Fire! (enter a number from 0-6):");
            
            if (guess < 0 || guess > 6) {
                alert("Please enter a valid number");
            } else {
                guesses = guesses + 1;
            
                if (guess == location1 || guess == location2 || guess == location3) {
                    alert("HIT!");
                    hits = hits + 1;
                    
                    if (hits === 3) {
                        isSunk = true;
                        alert("You sank my battleship!");
                    } 
                } else {
                        alert("MISS!");
                    } 
            }
        }

        var stats = "You took " + guesses + " guesses to sink my battleship, " + 
                        "which means your shooting accuracy was " + (3/guesses);

        alert(stats);
    }
}