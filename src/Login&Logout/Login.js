import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {

    }

    return (
        <>
            <form className='login-form' onSubmit={handleSubmit}>
                <h2 className='login-form-title'>Sign in</h2>
                <table className='login-form-table'>
                    <tbody>
                        <tr>
                            <td className='login-form-table-cell'>
                                <b>First Name:</b>
                                <input type='name' name='name' placeholder='First Name' />
                            </td>
                        </tr>
                        <tr>
                            <td className='login-form-table-cell'>
                                <b>Last Name:</b>
                                <input type='name' name='name' placeholder='Last Name' />
                            </td>
                        </tr>
                        <tr>
                            <td className='login-form-table-cell'>
                                <input type='email' name='email' placeholder='Email or Phone' />
                            </td>
                        </tr>
                        <tr>
                            <td className='login-form-table-cell'>
                                <input type='password' name='password' placeholder='Password' />
                            </td>
                        </tr>
                        <tr>
                            <td className='login-form-table-cell-btn'>
                                <button type='submit'>Sign in</button>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
}

export default Login;