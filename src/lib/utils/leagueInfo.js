
import { useEffect, useState } from 'react';

const Home = () => {
    const [usernames, setUsernames] = useState([]);

    useEffect(() => {
        const fetchLeagueManagers = async () => {
            const leagueID = "1197651994358054912"; // Your league ID
            try {
                const response = await fetch(`https://api.sleeper.app/v1/league/${1197651994358054912}/users`);
                const managers = await response.json();
                const usernames = Object.keys(managers).map(userId => managers[userId].display_name);
                setUsernames(usernames);
            } catch (error) {
                console.error('Error fetching league managers:', error);
            }
        };

        fetchLeagueManagers();
    }, []);

    return (
        <div>
            <h1>League Usernames</h1>
            <ul>
                {usernames.map((username, index) => (
                    <li key={index}>{username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
