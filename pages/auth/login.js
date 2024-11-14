// pages/auth/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { AuthForm } from '../../components/AuthForm'; // Correct import for named export

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Static login check (for demonstration)
    if (email === 'admin@gmail.com' && password === '1234') {
      // Redirect to dashboard on successful login
      router.push('/dashboard');
    } else {
      router.push('/dashboard');
      //alert('Invalid credentials!');
    }
  };

  return <AuthForm title="Login" onSubmit={handleLogin} formType="login" />;
}

export default Login;
