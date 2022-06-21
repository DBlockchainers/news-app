import React from 'react';
import {DateTime} from 'luxon';

const Footer = () => {
    return (
        <footer className="main-footer">
            <strong>
                <span>
                    © {DateTime.now().toFormat('y')} &nbsp; {' '}
                </span>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sa-footerlink"
                >
                    DBCN
                </a>
                <span className="font-weight-normal">. All Rights reserved.</span>
            </strong>
        </footer>
    );
};

export default Footer;
