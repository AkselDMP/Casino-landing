import React, {useState} from "react";
import { StyledHeaderPage } from "./StyledHeader";
import Effect from "./ressource/effect.svg";
import Discord from "./ressource/discord.svg";
import Twitter from "./ressource/twitter.svg";

const Header = () => {
  return (
    <StyledHeaderPage>
      <nav>
        <img className="logo" src="https://cupwager.com/static/media/logo-wide.c755ebbc.png" />
        <ul>
          {/* <li>Aksel</li>
          <li>Aksel</li>
          <li>Aksel</li> */}
        </ul>
        <div className="social-media">
          <img src={Discord} />
          <img src={Twitter} />
        </div>
      </nav>
      <div className="item-text">
      <h2>Cryptocurrency Casino</h2>
        <h1>Most Fun and Fair</h1>
        <p>Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
        <div className="btns">
          <button className="leftbtn">Get started</button>
          <button className="rightbtn">Join our discord</button>
        </div>
      </div>
      <div className="effect">
        <img src={Effect} />
      </div>
    </StyledHeaderPage>
  );
};

export default Header;
