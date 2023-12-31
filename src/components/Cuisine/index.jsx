import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [error, setError] = useState(null);
  let params = useParams();

  const getCuisine = async (name) => {
    try {
      const apiKey = import.meta.env.VITE_RECIPE_APP_API_KEY_1;
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=12&cuisine=${name}`
      );
      const recipes = await data.json();
      setCuisine(recipes.results);
    } catch (error) {
      console.error("Error fetching cuisine:", error);
      setError("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {error ? (
        <h4>{error}</h4>
      ) : (
        cuisine?.length > 0 ? (
          cuisine.map((item) => (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          ))
        ) : (
        //   <h4>API limit reached for the day</h4>
        <></>
        )
      )}
    </Grid>
  );
};

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1rem;
  }
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

export default Cuisine;
