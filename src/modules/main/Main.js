import React, {useState, useEffect, useCallback} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import {loadUser, logoutUser} from '@store/reducers/auth';
import {toggleSidebarMenu} from '@app/store/reducers/ui';

import Dashboard from '@pages/Dashboard';
// import Blank from '@pages/Blank';
// import SubMenu from '@pages/SubMenu';
// import Profile from '@pages/profile/Profile';
// import View from '@pages/View';
// import Update from '@pages/Update';
import ViewProfile from '@pages/ViewProfile';
// import EditProfile from '@pages/EditProfile';
import AdminPanel from '@pages/AdminPanel';
import Earnings from '../../pages/Earnings';

// import ReferalIncome from '@pages/ReferalIncome';
// import LevelIncome from '@pages/LevelIncome';
// import StakingIncome from '@pages/StakingIncome';
// import WithdrawNow from '@pages/WithdrawNow';
// import WithdrawHistory from '@pages/WithdrawHistory';
// import MyTeam from '@pages/MyTeam';
// import MyDLB from '@pages/MyDLB';
// import News from '@pages/News';
// import Gallery from '@pages/Gallery';
// import Support from '@pages/Support';
import Header from './header/Header';
import Footer from './footer/Footer';
import MenuSidebar from './menu-sidebar/MenuSidebar';
import PageLoading from '../../components/page-loading/PageLoading';

const Main = () => {
    const dispatch = useDispatch();
    const isSidebarMenuCollapsed = useSelector(
        (state) => state.ui.isSidebarMenuCollapsed
    );
    const screenSize = useSelector((state) => state.ui.screenSize);
    const [isAppLoaded, setIsAppLoaded] = useState(false);

    const handleToggleMenuSidebar = () => {
        dispatch(toggleSidebarMenu());
    };

    const fetchProfile = async () => {
        try {
            const response = await Gatekeeper.getProfile();
            dispatch(loadUser(response.data.data));
            setIsAppLoaded(true);
        } catch (error) {
            dispatch(logoutUser());
            setIsAppLoaded(true);
        }
    };

    useEffect(async () => {
        document.getElementById('root').classList.remove('register-page');
        document.getElementById('root').classList.remove('login-page');
        document.getElementById('root').classList.remove('hold-transition');

        document.getElementById('root').classList.add('sidebar-mini');
        document.getElementById('root').classList.add('layout-fixed');

        //await fetchProfile();
        setIsAppLoaded(true);
        return () => {
            document.getElementById('root').classList.remove('sidebar-mini');
            document.getElementById('root').classList.remove('layout-fixed');
        };
    }, []);

    useEffect(() => {
        document.getElementById('root').classList.remove('sidebar-closed');
        document.getElementById('root').classList.remove('sidebar-collapse');
        document.getElementById('root').classList.remove('sidebar-open');
        if (isSidebarMenuCollapsed && screenSize === 'lg') {
            document.getElementById('root').classList.add('sidebar-collapse');
        } else if (isSidebarMenuCollapsed && screenSize === 'xs') {
            document.getElementById('root').classList.add('sidebar-open');
        } else if (!isSidebarMenuCollapsed && screenSize !== 'lg') {
            document.getElementById('root').classList.add('sidebar-closed');
            document.getElementById('root').classList.add('sidebar-collapse');
        }
    }, [screenSize, isSidebarMenuCollapsed]);

    const getAppTemplate = useCallback(() => {
        if (!isAppLoaded) {
            return <PageLoading />;
        }
        return (
            <>
                <Header toggleMenuSidebar={handleToggleMenuSidebar} />

                <MenuSidebar />

                <div className="content-wrapper">
                    <section className="content">
                        <Switch>
                             {/* <Route
                                exact
                                path="/dashboard/editprofile"
                                component={EditProfile}
                            /> */}
                             <Route
                                exact
                                path="/profile"
                                component={ViewProfile}
                            />
                            <Route
                                exact
                                path="/earnings"
                                component={Earnings}
                            />
                            <Route
                                
                                path="/workspace"
                                component={AdminPanel}
                            /> 
                            <Route
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                            
                        </Switch>
                    </section>
                </div>
                <Footer />
                <div
                    id="sidebar-overlay"
                    role="presentation"
                    onClick={handleToggleMenuSidebar}
                    onKeyDown={() => {}}
                />
            </>
        );
    }, [isAppLoaded]);

    return <div className="wrapper">{getAppTemplate()}</div>;
};

export default Main;
