import styled from "styled-components";
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import { useEffect, useState } from "react";



const Cuisine = () => {

    const [cuisine, setCuisine] = useState([]);
    let params=useParams;

    const getCuisine = async (name) => {
        const apiKey = '75a3c8c477a64f2a831716c669efb335';
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&cuisine=${name}`);
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(()=>{
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);
    return (
        <Grid>
            <h4>Cuisine</h4>
        </Grid>

    )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;`;

const Card = styled.div`
img {
    width: 100%;
    border-radius:2rem;
}
a{
    text-decoration: none;

}
h4{
    text-align: center;
    padding: 1rem;
}`;


export default Cuisine;