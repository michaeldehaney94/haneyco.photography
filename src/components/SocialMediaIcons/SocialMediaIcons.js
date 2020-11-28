import React from 'react';
import instagram from './instagram.png';
import behance from './behance.png';
import './SocialMediaIcons.css';
//use png file type with css file, it's more responsive

const SocialMediaIcons =() =>{
    return(
        <div className="nav" >
                <a href={'https://www.instagram.com/michael_dehaney/'} >
                    <img alt='ig' src={instagram} className="hover-bg-light-purple" />
                </a> 
                <a href={'https://www.behance.net/michaeljdehaney'}>
                    <img alt='be' src={behance} className="hover-bg-light-purple"/>
                </a>
        </div>
    );
}

export default SocialMediaIcons;