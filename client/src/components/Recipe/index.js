import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import recipeStyles from './recipe.module.css';
import Tooltip from '@mui/material/Tooltip';
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
        recipeId: recipe_id,
        userId: user_id
      }
    }).then (result => {
      console.log('added');
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
      <Tooltip title="Click for Recipe" placement="top">
        <div>
          <CardHeader title={recipe.recipeTitle} onClick={() => handleNavigate()} />
        </div>
      </Tooltip>
      <CardMedia
        component="img"
        height="194"
        image={recipe.img}
        alt="Some alt"
      />
      <CardContent>
       
      </CardContent>
      <CardActions disableSpacing>
        <IconButton className={recipeStyles.icon} aria-label="add to favorites" onClick={handleFavoriteClick}>
          <FavoriteIcon />
        </IconButton>
        <IconButton className={recipeStyles.icon} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className={recipeStyles.icon}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
        {recipe.description}
        </Typography>
          <Typography>
           `Submitted by {recipe.author}`
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}