import styled from "styled-components";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';



const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
        console.log('hey');
    }



    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
            <FaSearch />
            <input onChange={(e)=>setInput(e.target.value)} type='text' value={input} />
            </div>
            {/* <h1>{input}</h1> */}
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin: 1rem 10rem;
div{
    position: relative;
    width: 100%;
}

input{
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    width: 100%;
    border-radius: 50px;
    outline: none;
}
svg{
    position: absolute;
    top:50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}
@media (max-width: 768px) {
    margin: 1rem auto; 
    width: 100%;
  }



`

export default Search;