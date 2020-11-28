import React from 'react';
import Tilt from 'react-tilt';
import profile from './profile.jpg';
import './ProfileImage.css';
import MediaQuery from 'react-responsive';

const ProfileImage = () => {
    return(
        <div className="intro">
            <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 395, width: 500 }} >
                <div className="Tilt-inner"> 
                    <img alt="profile" src={profile}  />
                </div>
                </Tilt> 
                {/* <MediaQuery minDeviceWidth={1224}> */}
                    <article >
                        <h2>Hi, I'm Mikie.</h2>
                        <p className="measure lh-copy">
                            In the meantime while studying to be a Programmer, I'm a Digital Photographer in my free time. 
                            I was introduced to photography at 19, when I went on a photography class field trip to 
                            Port Royal, Jamaica. Since then, I have been using my trusted Samsung Galaxy camera because of the 
                            range of quality it affords me to take. As I explorer the different environments around me, I to 
                            capture something that will tell a story.
                        </p>
                    </article>
                {/* </MediaQuery> */}
            </MediaQuery>
        </div>
    );
}

export default ProfileImage;