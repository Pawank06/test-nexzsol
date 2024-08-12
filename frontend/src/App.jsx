
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import WebhookSetup from './components/WebhookSetup';
import CommentDetails from './components/CommentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/webhook" element={<WebhookSetup />} />
        <Route path="/comments" element={<CommentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
