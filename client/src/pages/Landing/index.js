import React from 'react';
import { Paper, Button } from '@mui/material';
import Header from '../../components/Header';

function Landing() {

    function handleLogin() {
        // route to SignInOrSignUp page
        // render Login form
    }

    function handleSignup() {
        // route to SignInOrSignUp page
        // render Sign up form
    }

    return(
        <section className='landing-container'>
            <Paper className='landing-hero' elevation={3}>
                <Header></Header>
                <h1>for independent recipe writers <br /> & home chefs</h1>
                <Button variant='contained' onClick={handleLogin}>Login</Button>
                <p onClick={handleSignup}><a>Don't have an account? Sign Up</a></p>
            </Paper>
        </section>

    )
};

export default Landing;