import styled from "styled-components";

export const StyledAccordion2 = styled.section`
  width: 100vw;
  position: relative;
  background: #010235;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 90px 0;

  .accordion {
    display: flex;
    flex-wrap: wrap;
    padding: 60px 0px;
    gap: 12px;
  }

  .container {
    h1 {
      color: #fff;
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      margin-bottom: 10px;
    }

    p {
        color: #fff;
      font-family: 'Outfit', sans-serif;
            padding: 10px 0;
    }
  }

  @media screen and (max-width: 577px) {
    padding: 40px;
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h1.title {
        text-align: center;
      }

      p {
        padding: 0px 0px;
        margin: 0px 0px 5px 20px;
      }
    }

    .accordion {
      padding: 10px 0px;
    }
  }

  @media screen and (max-width: 418px) {
    padding: 12px;
    margin-top: 20px;
    .container {
      gap: 10px;
      h1 {
        font-size: 1.6rem;
      }
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  cursor: pointer;
  border-bottom: 0.2px solid grey !important;
  h1 {
    padding: 1rem;
    font-size: 1.1rem !important;
    color: white !important;
    font-family: 'Outfit', sans-serif;
    font-weight: 500 !important;
    margin-bottom: 0px !important;
  }

  &:hover {
    h1 {
      color:  white !important;
    }
  }

  span {
    margin-right: 1.5rem;
    color:  white;
  }

  svg {
    color:  white;
  }

  @media screen and (max-width: 577px) {
    h1 {
      font-size: 0.8rem !important;
      font-weight: 400 !important;
    }
  }
`;

export const Dropdown = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    font-size: 0.8rem;
    font-family: 'Outfit', sans-serif;
    margin-left: 20px;
  }

  @media screen and (max-width: 577px) {
    height: auto;

    p {
      font-size: 0.65rem;
    }
  }
`;
