import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  let params = useParams();

  const getSearched = async (name) => {
    try {
      const apiKey = import.meta.env.VITE_RECIPE_APP_API_KEY_1;
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&query=${name}`
      );
      const recipes = await data.json();
      setSearchResults(recipes.results);
    } catch (error) {
      console.error("Error fetching searched recipes:", error);
      setError("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    getSearched(params.searchTerm);
  }, [params.searchTerm]);

  return (
    <Grid>
      {error ? (
        <h4>{error}</h4>
      ) : searchResults?.length > 0 ? (
        searchResults.map((item) => (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        ))
      ) : (
        // <h4>No results found</h4>
        <></>
      )}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
