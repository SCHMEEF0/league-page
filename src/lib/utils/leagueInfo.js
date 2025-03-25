

async function fetchLeagueManagers() {
    try {
        const response = await fetch(`https://api.sleeper.app/v1/league/${1197651994358054912}/users`);
        const managers = await response.json();
        
        // Extract usernames
        const usernames = Object.keys(managers).map(userId => managers[userId].display_name);
        
        console.log(usernames);
        return usernames; // Array of usernames
    } catch (error) {
        console.error('Error fetching league managers:', error);
    }
}

// Call the function to fetch usernames
fetchLeagueManagers();
