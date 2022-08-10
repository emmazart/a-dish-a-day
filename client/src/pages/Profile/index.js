import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import { useUserContext } from '../../utils/GlobalState'
import { useQuery } from "@apollo/client";
import { QUERY_USER_ID } from '../../utils/queries';




function Profile() {
  // const [state, dispatch] = useUserContext();
  let user = localStorage.getItem('user');
  console.log(user);

  // query database for single recipe
  const { error, loading, data } = useQuery(QUERY_USER_ID, {
    variables: { id: user }
});

    if (loading) return "loading"
    if (error) return <pre>{error.message}</pre> 

  console.log(data.user);

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
      margin='0px 0px 40px 0px'
    >
    <div>
    <TextField
          id="filled-read-only-input"
          label="User Name"
          defaultValue={data.user.username}
          color='primary'
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
         <TextField
          id="filled-read-only-input"
          label="Email"
          defaultValue={data.user.email}
          color='primary'
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
      </div>
    </Box>
        <Footer></Footer>
        </>
    )
}

export default Profile;