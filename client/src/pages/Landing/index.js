import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import styles from './landing.module.css';


function Landing() {

    return(
        <section className={styles.container}>
            <Paper className={styles.hero} elevation={3}>
                <ResponsiveAppBar className={styles.nav}></ResponsiveAppBar>
                <h1>for independent recipe writers <br /> & home chefs</h1>
                <Link to="/login">
                    <Button variant='contained'>Login</Button>
                </Link>
                <Link to="/signup">Don't have an account? Sign Up</Link>
            </Paper>
        </section>

    )
};

export default Landing;