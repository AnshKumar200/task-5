import React from "react";

const Card = ({name, position, profile, inst="#", link="#", git="#"}) => { 
    return (
        <div className="cont">
            <img src={`/${profile}.jpg`} className="image"/>
            <div className="name">{name}</div> 
            <div className="position">{position}</div>
            <div className="logo">
                <a href={`https://www.instagram.com/${inst}`}>
                    <img src="/inst.png"/>    
                </a>
                <a href={`https://www.lnikedin.com/in/${link}`}>
                    <img src="/link.png"/>    
                </a>
                <a href={`https://www.github.com/${git}`}>
                    <img src="/git.png"/>
                </a>
            </div>
        </div>  
    )
}

export default Card;
