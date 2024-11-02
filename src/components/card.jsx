import React from "react";

const Card = ({name, position, profile, inst="#", link="#", git="#"}) => { 
    return (
        <div className="cont">
            <img src={`./../public/${profile}.jpg`} className="image"/>
            <div className="name">{name}</div> 
            <div className="position">{position}</div>
            <div className="logo">
                <a href={`https://www.instagram.com/${inst}`}>
                    <img src="./../public/inst.png"/>    
                </a>
                <a href={`https://www.lnikedin.com/in/${link}`}>
                    <img src="./../public/link.png"/>    
                </a>
                <a href={`https://www.github.com/${git}`}>
                    <img src="./../public/git.png"/>
                </a>
            </div>
        </div>  
    )
}

export default Card;
