import RecipeCard from "../../components/Recipe";
import React, {useState, useEffect} from 'react'
// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function RecipeSearch() {
    const [recipes, setRecipes] = useState([
      {title:"the title", ingredients: "ingredients", instructions: "instructions", author: "author", image:{src:"broken/image/link.jpg", alt:"broken iamge text"}}
    ]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [search, setSearch] = useState('all');
    const [open, setOpen] = useState(false);

    useEffect(() => {
      setRecipes(recipes)
      setFilteredRecipes(recipes)
    }, [recipes])
    

    useEffect(() => {
      let r = recipes;
      if (search !== "all") {
        r = recipes.filter(recipe => {
          return recipe.tag === search
        })
      }
      setFilteredRecipes(r)
      
    }, [search])

  
    const handleChange = (event: SelectChangeEvent<typeof search>) => {
      setSearch(event.target.value);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    return (
      <div>
        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
          Filter Recipes
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Search</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={search}
            label="Search"
            onChange={handleChange}
          >
            <MenuItem value='all'>All</MenuItem>
            <MenuItem value='chicken'>Chicken</MenuItem>
            <MenuItem value='seafood'>Seafood</MenuItem>
            <MenuItem value='beef'>Beef</MenuItem>
            <MenuItem value='pork'>Pork</MenuItem>
            <MenuItem value='vegetarian'>Vegetarian</MenuItem>
          </Select>
        </FormControl>

        {filteredRecipes.map((recipe, index) => {
          return <RecipeCard recipe={recipe} key={index} />
        })}

      </div>
    );
  }

