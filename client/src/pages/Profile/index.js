import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
    <TextField
          id="filled-helperText"
          label=""
          defaultValue=""
          helperText="User Name"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label=""
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label=""
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
    </Box>
        <Footer></Footer>
        </>
    )
}

export default Profile;