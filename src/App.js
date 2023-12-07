
import React, { useState } from 'react';
import Email from './components/email';
import axios from "axios";
const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin= () => {
          console.log({ email, password })
          axios.post('https://reqres.in/api/login', {
            
            email: email,
            password: password
          }).then(result => {
            
            console.log('success',result.data)
            
          })
            .catch(error => {
              console.log('error',error)
            })
        }

    return (
        <div>
            <h2>Login</h2>
            <Email
                email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleLogin={handleLogin}
            />
        </div>
    );
};

export default App;
