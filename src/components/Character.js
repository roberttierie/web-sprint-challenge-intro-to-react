// Write your Character component here

import React from 'react';
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
100% {
  opacity:1;

}
`


const Character = (props) => {
    const H2 = styled.h2`
    color: orangered;
    border: 2px solid black;
    background-color:black;
    margin-bottom: 10px;
    border-radius: 25%;
    display:flex;
    justify-content:center;
    flex: 1 1 20em;
    margin-top: 25px;
    margin-left: 600px;
    margin-right: 600px;
    animation: ${kf} 2.5s ease-in-out;
    opacity:60%;
    transition: all 0.25s ease-in-out;

    &:hover {
        text-decoration:underline;
        color:yellow;
        transform: scale(2);
        opacity:100%;
        
    }
    
  `
  
    return (
      <div className="App">
        <H2>{props.name}</H2> 
      </div>
    );
  }

export default Character;