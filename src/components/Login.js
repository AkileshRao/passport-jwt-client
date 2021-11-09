import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';

function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:5000/protected", {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            console.log(res)
            navigate('/protected')
        }).catch(err => {
            console.log(err);
            navigate('/login')
        })
    }, [])

    const submit = () => {
        console.log(username, password)
        axios.post("http://localhost:5000/login", { username, password }).then(user => {
            console.log(user);
            localStorage.setItem('token', user.data.token)
            navigate('/protected')
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <input type="text" placeholder="Enter Username" value={username} onChange={event => setUsername(event.target.value)} />
            <input type="password" placeholder="Enter Password" value={password} onChange={event => setPassword(event.target.value)} />
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default Login
