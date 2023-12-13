import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

const Vegetarian = () => {
    const [veg, setVeg] = useState([]);
    const [error, setError] = useState(null);
    const [splideOptions, setSplideOptions] = useState({
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '1rem',
    });

    useEffect(() => {
        getVeg();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const newPerPage = window.innerWidth < 768 ? 2 : 4;
        setSplideOptions((prevOptions) => ({ ...prevOptions, perPage: newPerPage }));
    };

    const getVeg = async () => {
        try {
            const apiKey = import.meta.env.VITE_RECIPE_APP_API_KEY_1;
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=12&tags=vegetarian`);
            const data = await api.json();
            setVeg(data.recipes);
            setError(null); 
        } catch (error) {
            console.error(error);
            setError('API limit reached for the day');
        }
    };

    return (
        <Wrapper>
            <h3>Vegetarian Picks</h3>
            {error ? (
                <h4>{error}</h4>
            ) : (
                <Splide options={splideOptions}>
                    {veg.map((recipe) => (
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={"/recipe/" + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                    <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    ))}
                </Splide>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 50px;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Vegetarian;
