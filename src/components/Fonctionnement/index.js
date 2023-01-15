import React from 'react';
import styled from 'styled-components';


const Fonctionnement = () => {
    const op = [
        {
            numero: '1',
            title: 'olivia cole',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        },
        {
            numero: '2',
            title: 'olivia cole',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        },
        {
            numero: '3',
            title: 'olivia cole',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.'
        },
    ]
  return (
    <Styledfonctionnement>
        <div className='container'>
            <h2>testimonials</h2>
            <h1>Read what others Have to say</h1>
            <div className='cards'>
                {
                    op.map((info) => 
                    (
                        <div className='card'> 
                            <h2>{info.numero}</h2>
                            <h1>{info.title}</h1>
                            <p>{info.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className='join'>
                <p>ARE YOU READY ?</p>
                <h1>Be a part of the next big thing</h1>
                <button>GET STARTED</button>
            </div>
        </div>
    </Styledfonctionnement>
  )
}

export default Fonctionnement


export const Styledfonctionnement = styled.section`
    width: 100vw;
    height: auto;
    padding: 150px 0;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Outfit', sans-serif;
    color: white;

    .join{
        margin-top: 80px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        width: 90%;
        background: #010236;
        padding: 30px;

        h1{
            color: white !important;
        }

        p{
            color: #92CCC8;
        }

        button{
            width: 230px;
            height: 60px;
            font-family: 'Outfit', sans-serif;
            border: none;
            border-radius: 30px;
            background: #548C86;
            color: white;
            cursor:pointer;
        }
    }

    .container{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h2{
            color: #92CCC8;
            font-weight: 700;
            font-size: 1.2rem;
        }

        h1{
            color: #010236;
            font-size: 2.5rem;
            font-weight: 900;
            width: 400px;
            text-align: center;
        }
    }


    .cards{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin-top: 50px;
    }

    .card{
        width: 280px;
        height: 220px;
        background: #010236;
        font-family: 'Outfit', sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        border-radius: 30px;

        h2{
            width: 35px;
            height: 35px;
            background: white;
            border-radius: 100%;
            color: #010236;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight: 800;
            opacity: 1 !important;
        }

        h1{
            color: #fff;
        }
    }
`