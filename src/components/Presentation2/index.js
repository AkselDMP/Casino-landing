import React from 'react';
import styled from 'styled-components';
import Img from './ressources/img.svg';

const Presentation2 = () => {
  return (
    <StyledPresentation>
        <div className='container'>
            <div className='item-text'>
                <h2>ANALYTICS</h2>
                <h1>Built-in analytics to track your nfts</h1>
                <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time. </p>
                <button>View our princing</button>
            </div>
            <img src={Img} />
        </div>
    </StyledPresentation>
  )
}

export default Presentation2


export const StyledPresentation = styled.section`
    width: 100vw;
    height: 80vh;
    display: flex;
    background: #010236;
    justify-content: center;

    .container{
        display: flex;
        align-items: center;

        img{
            width: 65%;
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
            width: 600px;
            font-size: 1rem;
        }

        button{
            width: 230px;
            height: 60px;
            font-family: 'Outfit', sans-serif;
            border: none;
            border-radius: 30px;
            background: #AAD9D9;
            color: white;
        }

        h2{
            color: #AAD9D9;
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

    @media screen and (max-width: 916px){
        .item-text{
            h1{
                font-size: 2.5rem;
            }
        }
    }
`