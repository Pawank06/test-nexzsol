/* eslint-disable no-unused-vars */
;
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const WebhookSetup = () => {
  const location = useLocation();
  const repo = new URLSearchParams(location.search).get('repo');

  const handleSetupWebhook = async () => {
    const response = await axios.post('http://localhost:3001/webhook', {
      repository: repo,
      // Other necessary data
    });
    alert('Webhook setup successfully!');
  };

  return (
    <div>
      <h1>Set Up Webhook for {repo}</h1>
      <button onClick={handleSetupWebhook}>Set Up Webhook</button>
    </div>
  );
};

export default WebhookSetup;
