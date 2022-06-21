import React from 'react';
// import {Link} from 'react-router-dom';
// import {useTranslation} from 'react-i18next';
// import Messages from './messages-dropdown/MessagesDropdown';
// import Notifications from './notifications-dropdown/NotificationsDropdown';
// import Languages from './languages-dropdown/LanguagesDropdown';
// import User from './user-dropdown/UserDropdown';
import userIcon from '../header/icons8-admin-settings-male-50 1.png';
import bellIcon from '../header/icons8-notification-50 1.png';

const Header = ({toggleMenuSidebar}) => {
    // const [t] = useTranslation();
    return (
        <nav className="main-header">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <div className='row align-items-center'>
                    <div className='col-2'>
                        <li className="nav-item">
                            <button
                                onClick={() => toggleMenuSidebar()}
                                type="button"
                                className="nav-link sa-lines"
                            >
                                <i className="fas fa-bars" />
                            </button>
                        </li>
                    </div>
                    <div className="col-5">
                        <h3 className="text-warning font-weight-bold">
                            DBCN - DBlockchainers NEWS
                        </h3>
                    </div>
                    <div
                        className="col-5"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <div
                            style={{
                                height: '40px',
                                width: '2px',
                                backgroundColor: '#ffc107'
                            }}
                        ></div>
                        <div>
                            <img className="bg-info mx-3" src={userIcon} style={{width:"35px",height:"35px"}} />
                        </div>
                        <div className='mx-3'>
                            <p className="text-warning ">john doe</p>
                            <p className="text-warning">shorts creator</p>
                        </div>
                        <div className='mx-3'>
                            <img className="bg-info" src={bellIcon} style={{width:"30px",height:"30px"}} />
                        </div>
                    </div>
                </div>
            </ul>
            
        </nav>
    );
};

export default Header;
