import React from 'react';
import instagram from './instagram.png';
import behance from './behance.png';
import './footer.css';

const Footer = () => {
    return(
        <div>
            <footer className="footer tr mr7 mt7">
                <article>
                    <p className="tc">Email</p>
                    <span>dehaney21@gmail</span>
                </article>
                
                <article>
                    <p className="tc">Follow</p>
                    <a href={'https://www.instagram.com/michael_dehaney/'} >
                        <img alt='ig' src={instagram}  className="hover-bg-light-purple"/>
                    </a> 
                    <a href={'https://www.behance.net/michaeljdehaney'}>
                        <img alt='be' src={behance} className="hover-bg-light-purple"/>
                    </a>
                </article>
            </footer><br/>
            <p className="tc">Developed by Michael Dehaney</p>
        </div>
    );
}

export default Footer;