import React from 'react';
import { Container, Paper, Button } from '@mui/material';
// import Header from '../../components/Header';

function Landing() {

    return(
        <Container className='landing-container'>
            <Paper className='landing-hero' elevation={3}>
                <header>
                    <h1>A Dish A Day / Header component coming soon</h1>
                </header>
                <h1>for independent recipe writers <br /> & home chefs</h1>
                <Button variant='contained' href=''>Login or Signup</Button>
            </Paper>
        </Container>

    )
};

export default Landing;