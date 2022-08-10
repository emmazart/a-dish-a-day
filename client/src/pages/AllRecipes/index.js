import RecipeCard from "../../components/Recipe";
import React, {useState, useEffect} from 'react'
// import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_RECIPES, QUERY_RECIPE_ID } from '../../utils/queries';
import SecondayNav from '../../components/SecondaryNav';
import recipeStyles from './recipes.module.css';

export default function RecipeSearch() {
    // GET RECIPE DATA FROM APOLLO
    const { data, loading, error } = useQuery(QUERY_ALL_RECIPES);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [search, setSearch] = useState('all');
    const [open, setOpen] = useState(false);

    useEffect(() => {
      if (!data) return
      setFilteredRecipes(data.recipes)
    }, [data])
    

    useEffect(() => {
      if (!data) return
      let r = data.recipes;
      if (search !== "all") {
        r = data.recipes.filter(recipe => {
          return recipe.tag.filter(t => {
            return t.tagName === search
          }).length > 0
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


    if (loading) return "loading"
    if (error) return <pre>{error.message}</pre>

    return (
      <div className={recipeStyles.main}>
        <SecondayNav/>
        <FormGroup id="search" className={recipeStyles.filter}>
          <Button className={recipeStyles.btn} sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
            Filter Recipes
          </Button>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel  id="demo-controlled-open-select-label">Search</InputLabel>
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
              <MenuItem value='Chicken'>Chicken</MenuItem>
              <MenuItem value='Seafood'>Seafood</MenuItem>
              <MenuItem value='Beef'>Beef</MenuItem>
              <MenuItem value='Pork'>Pork</MenuItem>
              <MenuItem value='Vegetarian'>Vegetarian</MenuItem>
            </Select>
          </FormControl>
        </FormGroup> 
        <div className={recipeStyles.all}>
        {filteredRecipes.map((recipe, index) => {
          return <RecipeCard recipe={recipe} key={index} />
        })}
        </div>

      </div>
    );
  }

