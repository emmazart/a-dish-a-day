import React from 'react';
import { Paper, Button } from '@mui/material';
import Header from '../../components/Header';

function Landing() {

    return(
        <section className='landing-container'>
            <Paper className='landing-hero' elevation={3}>
                <Header></Header>
                <h1>for independent recipe writers <br /> & home chefs</h1>
                <Button variant='contained' href=''>Login or Signup</Button>
            </Paper>
        </section>

    )
};

export default Landing;