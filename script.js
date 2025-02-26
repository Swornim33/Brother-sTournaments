document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let teamName = document.getElementById('team-name').value;
    let teamLeader = document.getElementById('team-leader').value;
    
    if (teamName && teamLeader) {
        let teamList = document.getElementById('team-list');
        let newTeam = document.createElement('li');
        newTeam.textContent = teamName + " (Leader: " + teamLeader + ")";
        teamList.appendChild(newTeam);
        
        document.getElementById('team-name').value = '';
        document.getElementById('team-leader').value = '';
        alert("Team Registered Successfully!");
    }
});



