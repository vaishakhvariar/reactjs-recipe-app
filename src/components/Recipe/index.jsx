import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    let params = useParams();

    const fetchDetails = async (name) => {
        const apiKey = import.meta.env.VITE_RECIPE_APP_API_KEY;
        const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}&number=12`);
        const detailedData = await data.json();
        setDetails(detailedData);
    }

    useEffect(()=>{
        fetchDetails(params.name);
    }, [params.name]);

    return (
        <DetailWrapper>
            {console.log(details)}
            <div>
            <h2>{details.title}</h2>
            <ImageWrapper>
            <img src={details.image} alt={details.title} />
            </ImageWrapper>
            </div>
            <Info>
                <Button className = {activeTab==='instructions'? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
                <Button className = {activeTab==='ingredients'? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab === "instructions" && (
            <div>
                {/* <p dangerouslySetInnerHTML={{__html: details.summary}}></p> */}
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div> 
            )}
            {activeTab === "ingredients" && (
            <ul>
                {details.extendedIngredients && details.extendedIngredients.map((ingredient) => {
                   return <li key={ingredient.id}>{ingredient.original}</li>
                }) }
            </ul>
            )}
            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
margin: 2rem 0;
display: flex;
flex-direction: column;
align-items:center;

// img{
//     border-radius: 50px;
//     width: 100%;
//     max-width: 400px;
//     height: auto;
//     object-fit: cover;
//     margin-top: 1rem;
// }
h2{
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 2.5rem;
    text-align: center;
}
li{
    font-size: 1.5rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
    padding: 0;

}

@media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
      line-height: 1.8rem;
      margin-top:0;
    }

    li {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  img {
    border-radius: 50px;
    width: 100%;
    max-width: 400px;
    height: auto;
    object-fit: cover;
  }
`;

const Button = styled.button`
// position: absolute;
padding: 1rem 2rem;
color: #313131;
background: #white;
border: 2px solid black;
margin-bottom: 1rem;
font-weight: 600;
cursor: pointer;

&.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`

const Info = styled.div`
text-align: center;
margin-top: 1rem;
`

export default Recipe;