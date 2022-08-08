//working 8/4//

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import Ratings from '../Rating';
import recipeStyles from './recipe.module.css';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_FAVORITE } from '../../utils/mutations';

//recipe card//
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeCard({recipe}) {
  const [expanded, setExpanded] = React.useState(false);
  const [addFavorite, { data, loading, error }] = useMutation(ADD_FAVORITE);

  const handleFavoriteClick = () => {
    if (!Auth.loggedIn()) {
      console.log("redirecting")
      window.location.replace("/login");
      
    } 

    const user = Auth.getProfile();
    const recipe_id = recipe._id;
    const user_id = user.data._id;

    addFavorite({
      variables: {
        recipe_id: recipe_id,
        user_id: user_id
      }
    }).then (result => {
      alert(result.data.addFavorite)
    });
  };

  let navigate = useNavigate();

  function handleNavigate(e) {
    navigate(`../recipes/${recipe._id}`, { replace: true });  
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 
  return (
    <>
    <Card className={recipeStyles.card} sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={recipe.recipeTitle}
        onClick={() => handleNavigate()}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.img}
        alt="Some alt"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {recipe.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Ingredients:</Typography>
          <Typography paragraph>{recipe.ingredient}</Typography>
           <Typography>Instructons:</Typography>
          <Typography paragraph>{recipe.preparationStep}</Typography>
          <Typography>
           `Submitted by {recipe.author}`
          </Typography>
            <Rating/>
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}