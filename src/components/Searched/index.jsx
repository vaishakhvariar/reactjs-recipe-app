import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";


const Searched = () => {

    const [searchResults, setSearchResults] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const apiKey = '75a3c8c477a64f2a831716c669efb335';
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&query=${name}`);
        const recipes = await data.json();
        setSearchResults(recipes.results);
    }

    useEffect(()=>{
        getSearched(params.searchTerm);

    }, [params.searchTerm])
    return(
        <Grid>
            {searchResults.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={"/recipe/"+item.id}>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })}
        </Grid>
        )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
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


export default Searched;