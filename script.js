document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let teamName = document.getElementById('team-name').value.trim();
    let teamLeader = document.getElementById('team-leader').value.trim();
    
    // Check if both fields have values
    if (teamName !== "" && teamLeader !== "") {
        let teamList = document.getElementById('team-list');
        let newTeam = document.createElement('li');
        newTeam.textContent = `${teamName} (Leader: ${teamLeader})`; // Template literal for cleaner code
        teamList.appendChild(newTeam);
        
        // Clear the input fields
        document.getElementById('team-name').value = '';
        document.getElementById('team-leader').value = '';
        
        alert("Team Registered Successfully!");
    } else {
        // Optional: You can add this alert if you want to make sure the user fills out both fields
        alert("Please fill in both team name and leader.");
    }
});
