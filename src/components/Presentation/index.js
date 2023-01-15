import React from 'react';
import styled from 'styled-components';
import Img from './ressources/img.svg';

const Presentation = () => {
  return (
    <StyledPresentation>
        <div className='container'>
            <img src={Img} />
            <div className='item-text'>
                <h2>ANALYTICS</h2>
                <h1>Built-in analytics to track your nfts</h1>
                <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time. </p>
                <button>View our princing</button>
            </div>
        </div>
    </StyledPresentation>
  )
}

export default Presentation


export const StyledPresentation = styled.section`
    width: 100vw;
    height: 85vh;
    display: flex;
    /* background: #000235; */
    background: #000000;
    justify-content: center;

    .container{
        display: flex;
        align-items: center;

        img{
            width: 70%;
        }
    }

    .item-text{
        display: flex;
        align-items: left;
        flex-direction: column;
        color: white;
        font-family: 'Outfit', sans-serif;
        gap: 12px;

        h1{
            font-size: 3rem;
            font-weight: 900;
            line-height: 1;
        }

        p{
            width: 400px;
            font-size: 1rem;
        }

        button{
            width: 230px;
            height: 60px;
            font-family: 'Outfit', sans-serif;
            border: none;
            border-radius: 30px;
            background: #548C86;
            color: white;
        }

        h2{
            color: black;
            font-size: 1rem;
        }
    }

    @media screen and (max-width:1272px ){
        .container{
            img{
                display: none;
            }
        }

        .item-text{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;

            p{
                width: 100%;
                padding: 10px;
            }
        }
    }
`