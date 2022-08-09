import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import landingStyles from './landing.module.css';


function Landing() {

    return(
        <section className={landingStyles.container}>
            <Paper className={landingStyles.hero} elevation={3}>
                <ResponsiveAppBar></ResponsiveAppBar>
                <h1>for independent recipe writers <br /> & home chefs</h1>
                <Link to="/login">
                    <Button className={landingStyles.btn} variant='contained'>Login</Button>
                </Link>
                <Link to="/signup" className={landingStyles.signup}>Don't have an account? Sign Up</Link>
            </Paper>
        </section>

    )
};

export default Landing;