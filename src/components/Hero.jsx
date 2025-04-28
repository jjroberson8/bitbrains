import React from "react";
import {Link} from 'react-router';
import "../styles/HeroStyle.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img alt="HeroImg" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <Link to={props.url} className={props.btnClass}>{props.btnText}</Link>
      </div>
    </div>
  );
}

export default Hero;
