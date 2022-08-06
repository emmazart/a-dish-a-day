import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import detailStyles from './singlerecipe.module.css';

function SingleRecipe() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <section className={detailStyles.main}>
            {/* <Header /> */}
            <Grid className={detailStyles.container} container spacing={2}>

                {/* recipe title always takes up full 12 columns */}
                <Grid item xs={12}>
                    <Item>Recipe Title and description</Item>
                </Grid>

                {/* recipe image */}
                <Grid item xs={12} md={6} lg={4}>
                    <Item>Image</Item>
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                    <Item>Ingredients</Item>
                </Grid>

                <Grid item xs={12}>
                    <Item>Instructions</Item>
                </Grid>

                {/* REVIEW SECTION */}
                <Grid item xs={12} lg={4}>
                    <Item>review form</Item>
                </Grid>

                <Grid item xs={12} lg={8}>
                    <Item>reviews</Item>
                </Grid>


            </Grid>
            {/* <Footer /> */}
        </section>
    )
}

export default SingleRecipe;