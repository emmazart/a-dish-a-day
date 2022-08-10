import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardStyles from './favorite.module.css';
import { useNavigate } from 'react-router-dom';

function FavoriteRecipe(props) {
    const { _id, source, author, title, description, currentRecipe, setCurrentRecipe } = props;

    function handleClick() {
        setCurrentRecipe({
            title: `${title}`,
            _id: `${_id}`
        })
    };

    // rerender page when currentRecipe is changed
    useEffect(() => {
        console.log(currentRecipe)
    }, [currentRecipe]);

    let navigate = useNavigate();

  function handleNavigate(e) {
    navigate(`../recipes/${_id}`, { replace: true });  
  }

  return (
    <Card className={cardStyles.card} sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        height="140"
        image={source}
        alt="finished recipe"
      >

      </CardMedia>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Tooltip title="Click for Recipe" placement="top">
          <Typography variant="h5" component="div" onClick={() => handleNavigate()}>
            {title}
          </Typography>
        </Tooltip>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          written by {author}
        </Typography>
        <Typography variant="body2">
         {description}
        </Typography>
      </CardContent>
      <CardActions className={cardStyles.btnContainer}>
        <Button className={cardStyles.btn} onClick={handleClick} size="small">Write a review</Button>
      </CardActions>
    </Card>
  );
}

export default FavoriteRecipe;