

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/github';
  };

  return (
    <button onClick={handleLogin}>Login with GitHub</button>
  );
};

export default Login;
