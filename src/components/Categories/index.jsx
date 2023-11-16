import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks, GiIndiaGate} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Categories = () => {
    return (
        <List>
            <StyledLink to={'/cuisine/Indian'}>
                <GiIndiaGate />
                <h4>Indian</h4>
            </StyledLink>
            <StyledLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </StyledLink>
            <StyledLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </StyledLink>
            <StyledLink to={'/cuisine/Chinese'}>
                <GiNoodles />
                <h4>Chinese</h4>
            </StyledLink>
            <StyledLink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </StyledLink>
        </List>
    )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0;

`

const StyledLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50px;
margin:1rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 5rem;
height:5rem;
cursor: pointer;
transform: scale(0.8);

h4{
    color: white;
    font-size: 0.8rem;
}

svg{
    color: white;
    font-size:1.5rem;
}

&.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
        color:white;
    }
    h4{
        color: white;
    }
}

`


export default Categories;