import React from 'react';
import './Gallery.css';
import roadside from './images/2019/20190829_074130.jpg';
import shed from './images/2019/20190122_081157.jpg';
import branch from './images/2019/20190117_081054.jpg';
import orange from './images/2019/20190326_082211.jpg';
import zinc from './images/2019/20190122_090743.jpg';
import narrow from './images/2019/20190228_065929.jpg';
import bailey from './images/2019/20190509_072331.jpg';
import bus from './images/2019/20190404_101640.jpg';
import post from './images/2019/20190115_080018.jpg';
import dew from './images/2019/20190312_072149.jpg';
import oldwindow from './images/2020/20200102_120715.jpg';
import colonialbuild from './images/2020/20200102_120742.jpg';
import townsquare from './images/2020/20200102_120751.jpg';
import leaf from './images/2020/20200112_121404.jpg';
import raindrop from './images/2020/20201006_074023.jpg';


const Gallery = () => {
    return(
        <div className="collection">
            
            <h2 className="tc">2019 Collection</h2>
            <section>
                <img alt="road" src={roadside} className=" view h-20 w-20"/> 
                <img alt="shed" src={shed} className=" view h-20 w-20"/>
                <img alt="branch" src={branch} className=" view h-20 w-20" />
                <img alt="orange"  src={orange} className=" view h-20 w-20"/>
                <img alt="zinc" src={zinc} className="view h-20 w-20"/>
                <img alt="narrow" src={narrow} className=" view h-20 w-20" />
            </section>
            <section >
                <img  alt="bailey" src={bailey} className="view h-20 w-20"/>
                <img alt="bus" src={bus} className="view h-20 w-20"/>
                <img alt="post" src={post} className=" view h-20 w-20"/>
                <img alt="dew" src={dew} className=" view h-20 w-20"/>
            </section>

            <h2 className=" grid tc">2020 Collection</h2>
            <section >
                <img alt="oldwindow" src={oldwindow} className=" view h-20 w-20" />
                <img alt="colonialbuild" src={colonialbuild} className=" view h-20 w-20" />
                <img alt="townsquare" src={townsquare} className="view h-20 w-20" />
                <img alt="leaf" src={leaf} className="view h-20 w-20" />
                <img alt="raindrop" src={raindrop} className="view h-20 w-20" />
            </section>
            
        </div>
    );
}

export default Gallery;