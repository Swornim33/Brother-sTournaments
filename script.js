document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from form fields
    let teamName = document.getElementById('team-name').value.trim();
    let teamLeader = document.getElementById('team-leader').value.trim();
    
    // Basic validation for empty fields
    if (teamName && teamLeader) {
        // Create a new list item
        let teamList = document.getElementById('team-list');
        let newTeam = document.createElement('li');
        newTeam.textContent = teamName + " (Leader: " + teamLeader + ")";
        
        // Append the new team to the list
        teamList.appendChild(newTeam);
        
        // Clear the input fields
        document.getElementById('team-name').value = '';
        document.getElementById('team-leader').value = '';
        
        // Alert user of success
        alert("Team Registered Successfully!");
    } else {
        // Show an alert if fields are empty
        alert("Please fill in both team name and leader.");
    }
});
