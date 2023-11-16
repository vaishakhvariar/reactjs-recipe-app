import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instuctions');

    let params = useParams();

    const fetchDetails = async (name) => {
        const apiKey = '75a3c8c477a64f2a831716c669efb335';
        const data = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}&number=12`);
        const detailedData = await data.json();
        setDetails(detailedData);
    }

    useEffect(()=>{
        fetchDetails(params.name);
    }, [params.name]);

    return (
        <DetailWrapper>
            <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
            </div>
            <Info>
                <Button className = {activeTab==='instructions'? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
                <Button className = {activeTab==='ingredients'? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
            </Info>
            <div>
                <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
            {/* <ul>
                {details.extendedIngredients.map((ingredient) => {
                    <li key={ingredient.id}>{ingredient.original}</li>
                }) }
            </ul> */}
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
img{
    width: 100%;
}
h2{
    margin-bottom: 1rem;
    font-size: 32px;
    line-height: 2rem;
}
li{
    font-size: 1.2rem;
    line-height: 2.5rem;
}
ul{
    margin-top: 2rem;
}
`

const Button = styled.button`
padding: 1rem 1rem;
color: #313131;
background: #white;
border: 2px solid black;
margin-right: 1rem;
font-weight: 600;
`

const Info = styled.div`
margin-left: 5rem;
`

export default Recipe;