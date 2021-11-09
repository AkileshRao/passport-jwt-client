import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

function Protected() {
    let navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:5000/protected", {
            headers: {
                Authorization: token,
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err);
            navigate('/login')
        })
    }, [])
    return (
        <div>
            <h1>Protected</h1>
        </div>
    )
}

export default Protected
