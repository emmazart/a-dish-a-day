import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Typography } from '@mui/material';

function NoMatch() {

    return(
        <section>
            <Header />
            <Typography>
            Oops, we couldn't find that page.
            </Typography>
            <Footer />
        </section>
    )
};

export default NoMatch;