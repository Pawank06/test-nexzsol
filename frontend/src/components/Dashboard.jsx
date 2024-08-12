import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('access_token');
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRepos(response.data);
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>Your Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            {repo.name}
            <a href={`/webhook?repo=${repo.name}`}>Set Up Webhook</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
