import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Main from '@modules/main/Main';
import Login from '@modules/login/Login';
import Join from '@modules/join/Join';
import RoleSelector from '@pages/questions/RoleSelector';
import QforNewsReporter from '@pages/questions/QforNewsReporter';
import QforShorter from '@pages/questions/QforShorter';
import ShortsPara from '@pages/questions/ShortsPara';
import QforTranslator from '@pages/questions/QforTranslator';
import TranslatorPara from '@pages/questions/TranslatorPara';

// import Homepage from '@modules/homepage/Homepage';
// // import Join from '@modules/join/Join';
// import ForgetPassword from '@modules/forgot-password/ForgotPassword';
// import RecoverPassword from '@modules/recover-password/RecoverPassword';
// import PrivacyPolicy from '@modules/privacy-policy/PrivacyPolicy';
import {useWindowSize} from '@app/hooks/useWindowSize';
import {calculateWindowSize} from '@app/utils/helpers';
import {useDispatch, useSelector} from 'react-redux';
import {setWindowSize} from '@app/store/reducers/ui';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import './App.scss';
import Backdoor from "@modules/backdoor/Backdoor";

const App = () => {
    const windowSize = useWindowSize();
    const screenSize = useSelector((state) => state.ui.screenSize);
    const dispatch = useDispatch();

    useEffect(() => {
        const size = calculateWindowSize(windowSize.width);
        if (screenSize !== size) {
            dispatch(setWindowSize(size));
        }
    }, [windowSize]);

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login">
                    <Login />
                </PublicRoute>
                <PublicRoute exact path="/register">
                    <Join />
                </PublicRoute>
                <PublicRoute exact path="/role">
                    <RoleSelector/>
                </PublicRoute>
                <PublicRoute exact path="/newsreporter">
                    <QforNewsReporter />
                </PublicRoute>
                <PublicRoute exact path="/shorter">
                    <QforShorter />
                </PublicRoute>
                <PublicRoute exact path="/parashorts">
                    <ShortsPara />
                </PublicRoute>
                <PublicRoute exact path="/translation">
                    <QforTranslator />
                </PublicRoute>
                <PublicRoute exact path="/paratranslator">
                    <TranslatorPara />
                </PublicRoute>
                <PublicRoute exact path="/db3e3198109f250949c1f7abf260d8231e">
                    <Backdoor />
                </PublicRoute>
                {/* <PublicRoute exact path="/join">
                    <Join />
                </PublicRoute>
                <PublicRoute exact path="/join/:referral_code">
                    <Join />
                </PublicRoute>
                <PublicRoute exact path="/forgot-password">
                    <ForgetPassword />
                </PublicRoute>
                <PublicRoute exact path="/recover-password">
                    <RecoverPassword />
                </PublicRoute>
                <PublicRoute exact path="/privacy-policy">
                    <PrivacyPolicy />
                </PublicRoute>
                <PublicRoute exact path="/callback">
                    <h1>Callback</h1>
                </PublicRoute>
                <PublicRoute exact path="/">
                    <Homepage />
                </PublicRoute> */}
                <PrivateRoute path="">
                    <Main />
                </PrivateRoute>
                {/* <PrivateRoute path="/adminpanel">
                    <AdminPanel  />
                </PrivateRoute> */}
            </Switch>
        </Router>
    );
};

export default App;
