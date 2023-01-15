import styled from "styled-components";

export const StyledHeaderPage = styled.section`
  width: 100vw;
  height: 100vh;
  background: black;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 120px;
    color: white;
    font-family: "Poppins", sans-serif;

    img.logo{
      width: 110px;
      height: 35px;
    }

    h1 {
      font-size: 1.6rem;
    }

  
    ul {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    li {
      list-style: none;
      cursor: pointer;
    }

    li:hover{
      background: linear-gradient(90deg, rgba(106,36,164,1) 7%, rgba(0,212,255,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .item-text{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-top: 18vh;
    color: white;

    h1{
        font-size: 2.35rem;
        font-weight: 900;
        font-family: 'Inter', sans-serif;
    }

    h2{
        font-size: 2.7rem;
        font-weight: 900;
        font-family: 'Inter', sans-serif;
        background: linear-gradient(90deg, rgba(106,36,164,1) 7%, rgba(0,212,255,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p{
        width: 600px;
        text-align: center;
        font-family: 'Poppins';
        opacity: 0.7;
        font-size: 0.9rem;
        margin-top: 12px;
    }

    .btns{
        margin-top: 12px;

        button{
            width: 180px;
            height: 50px;
            cursor:pointer;
            border-radius: 30px;
            border: none;
        }

        button.leftbtn{
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(90deg, rgba(106,36,164,1) 7%, rgba(0,212,255,1) 100%);
          border: none;
          color: white;
        }

        button.rightbtn{
          font-family: 'Poppins', sans-serif;
          margin-left: 12px;
          margin-right: 12px;
          background: transparent;
          border: 1px solid rgba(0,212,255,1);
          background: linear-gradient(90deg, rgba(106,36,164,1) 0%, rgba(0,212,255,1) 55%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; 
          font-weight: 500;       
        }
    } 
  }

  .effect {
    position: absolute;
    bottom: 0;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 773px) {
    li{
      display: none;
    }
  } 
`;
