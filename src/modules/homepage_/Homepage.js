import React from 'react';
// import avatar from '../../../public/img/homepage.png';
import avatar from './homepage.png';
// import avatar from '../assets/images/newlogo.png';

function Homepage() {
    return (
        <>
            <img
                src={avatar}
                margin="auto"
                width="100%"
                // height={30}
                alt="Sidebar-logo"
            />
        </>
    );
}

export default Homepage;
