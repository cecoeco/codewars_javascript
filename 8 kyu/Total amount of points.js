function points(games) {
  // Initialize a variable to keep track of the total points
  var totalPoints = 0;
  
  // Iterate through the games array
  for (var i = 0; i < games.length; i++) {
    // Split the match result into two parts, x and y
    var matchResult = games[i].split(":");
    var x = parseInt(matchResult[0]);
    var y = parseInt(matchResult[1]);
    
    // Determine the points based on the match result
    if (x > y) {
      totalPoints += 3; // Win, so add 3 points
    } else if (x === y) {
      totalPoints += 1; // Tie, so add 1 point
    }
    // If x < y, it's a loss, and no points are added (0 points).
  }
  
  return totalPoints;
}
