import React from 'react';
// import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {MenuItem} from '@components';
import group3 from '../menu-sidebar/Group 3.png'

export const MENU = [
   
    {
        name: 'Profile',
        path: '/profile',
        icon: <i class="fas fa-user padding5" aria-hidden="true" />
    },
    {
        name: 'menusidebar.label.dashboard',
        path: '/dashboard',
        icon: <i className="fas fa-tachometer-alt padding5" />
    },
    {
        name: 'Workspace',
        path: '/workspace',
        icon: <i class="fas fa-address-card padding5" aria-hidden="true"  />
    },
    {
        name: 'My Earnings',
        path: '/earnings',
        icon: <i class="fas fa-address-card padding5" aria-hidden="true"  />
    },
    // {
    //     name: 'menusidebar.label.myprofile',
    //     icon: <i className="fas fa-user-alt padding5"></i>,
    //     children: [
    //         {
    //             name: 'menusidebar.label.view',
    //             path: '/dashboard/view',
    //             ename: 'View Profile'
    //         },
    //         {
    //             name: 'menusidebar.label.update',
    //             path: '/dashboard/update',
    //             ename: 'Edit Profile'
    //         }
    //     ]
    // }
    // {
    //     name: 'menusidebar.label.myprofile',
    //     icon: <i className="fab fa-bitcoin padding5" />,
    //     children: [
    //         {
    //             name: 'menusidebar.label.viewprofile',
    //             path: '/dashboard/viewprofile',
    //             ename: 'View Profile'
    //         },
            
    //         {
    //             name: 'menusidebar.label.editprofile',
    //             path: '/dashboard/editprofile',
    //             ename: 'Edit Profile',
    //         }
    //     ]
    // }
    // {
    //     name: 'menusidebar.label.income',
    //     icon: <i className="fas fa-dollar-sign padding5"></i>,
    //     children: [
    //         {
    //             name: 'menusidebar.label.referalincome',
    //             path: '/dashboard/referalincome',
    //             ename: 'Referral Income'
    //         },

    //         {
    //             name: 'menusidebar.label.levelincome',
    //             path: '/dashboard/levelincome',
    //             ename: 'Level Income'
    //         },
    //         {
    //             name: 'menusidebar.label.stakingincome',
    //             path: '/dashboard/stakingincome',
    //             ename: 'Staking Income'
    //         }
    //     ]
    // },
    // {
    //     name: 'menusidebar.label.withdraw',
    //     icon: <i className="fas fa-hand-holding-usd padding5"></i>,
    //     children: [
    //         {
    //             name: 'menusidebar.label.withdrawnow',
    //             path: '/dashboard/withdrawnow',
    //             ename: 'Withdraw'
    //         },

    //         {
    //             name: 'menusidebar.label.withdrawhistory',
    //             path: '/dashboard/withdrawhistory',
    //             ename: 'Withdrawal History'
    //         }
    //     ]
    // },
    // {
    //     name: 'menusidebar.label.team',
    //     icon: <i className="fas fa-user-friends padding5"></i>,
    //     children: [
    //         {
    //             name: 'menusidebar.label.myteam',
    //             path: '/dashboard/myteam',
    //             ename: 'My Team'
    //         },

    //         {
    //             name: 'menusidebar.label.mydlb',
    //             path: '/dashboard/mydlb',
    //             ename: 'My DLB'
    //         }
    //     ]
    // },
    // {
    //     name: 'menusidebar.label.others',
    //     icon: <i className="fas fa-compact-disc padding5"></i>,
    //     children: [
    //         {
    //             name: 'menusidebar.label.news',
    //             path: '/dashboard/news',
    //             ename: 'News'
    //         },

    //         {
    //             name: 'menusidebar.label.gallery',
    //             path: '/dashboard/gallery',
    //             ename: 'Gallery',
    //         },
    //         {
    //             name: 'menusidebar.label.support',
    //             path: '/dashboard/support',
    //             ename: 'Support',
    //         }
    //     ]
    // }
];

const MenuSidebar = () => {
    // const user = useSelector((state) => state.auth.currentUser);

    return (
        <aside className="main-sidebar  elevation-4">
            <Link to="/dashboard" className="brand-link">
                <img
                    src={group3}
                    alt="DBCN"
                    className="brand-image elevation-3 img-fluid"
                    style={{opacity: '.8'}}
                />
                <span className="brand-text text-warning font-weight-bold">DBCN</span>
            </Link>
            <div className="sidebar">
                <nav className="mt-2" style={{overflowY: 'hidden'}}>
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        role="menu"
                        data-widget="treeview"
                        data-accordion="false"
                    >
                        {MENU.map((menuItem) => (
                            <MenuItem key={menuItem.name} menuItem={menuItem} />
                        ))}
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default MenuSidebar;



// import React from 'react';
// // import {Link} from 'react-router-dom';
// // import {useTranslation} from 'react-i18next';
// // import Messages from './messages-dropdown/MessagesDropdown';
// import Notifications from './notifications-dropdown/NotificationsDropdown';
// // import Languages from './languages-dropdown/LanguagesDropdown';
// import User from './user-dropdown/UserDropdown';
// // import userIcon from "..//news-frontend\src\pages\newsapp-icons\icons\user dashboard icons\icons8-admin-settings-male-50 1.png"

// const Header = ({toggleMenuSidebar}) => {
//     // const [t] = useTranslation();
//     return (
//         <nav className="main-header navbar navbar-expand ">
//             {/* Left navbar links */}
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <button
//                         onClick={() => toggleMenuSidebar()}
//                         type="button"
//                         className="nav-link sa-lines"
//                     >
//                         <i className="fas fa-bars" />
//                     </button>
//                 </li>
//             </ul>
//             <ul className="navbar-nav">
//                 <div className="d-flex text-center">
//                     <div>
//                         <h4 className="text-warning font-weight-bold">
//                             DBCN - DBlockchainers NEWS
//                         </h4>
//                     </div>
//                     <div>
//                         <div
//                             style={{
//                                 height: '40px',
//                                 width: '2px',
//                                 backgroundColor: '#ffc107'
//                             }}
//                         ></div>
//                     </div>
//                     <div >
//                         <img src="userIcon"  />
//                     </div>
//                     <div>
//                         <p className='text-warning'>john doe</p>
//                         <p className='text-warning'>shorts creator</p>
//                     </div>
//                     <div>
                        
//                     </div>
//                 </div>
//                 {/* <li className="nav-item">
//                     <button className="nav-link" type="button">
//                         <i className="fas fa-search" />
//                     </button>
//                     <div className="navbar-search-block">
//                         <form className="form-inline">
//                             <div className="input-group input-group-sm">
//                                 <input
//                                     className="form-control form-control-navbar"
//                                     type="search"
//                                     placeholder="Search"
//                                     aria-label="Search"
//                                 />
//                                 <div className="input-group-append">
//                                     <button
//                                         className="btn btn-navbar"
//                                         type="submit"
//                                     >
//                                         <i className="fas fa-search" />
//                                     </button>
//                                     <button
//                                         className="btn btn-navbar"
//                                         type="button"
//                                         data-widget="navbar-search"
//                                     >
//                                         <i className="fas fa-times" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </li> */}
//                 {/*   <Messages />
//                 <Languages />  */}
//                 {/* <Notifications /> */}
//                 <User />
//             </ul>
//         </nav>
//     );
// };

// export default Header;
