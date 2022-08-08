import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Profile() {
    return (
        <>
        <Header></Header>
            <Typography
                variant='h4'
                color='textPrimary'
                align='center'
                margin='140px 0px 50px 0px'
            >
                My Profile
            </Typography>
        <Footer></Footer>
        </>
    )
}

export default Profile;