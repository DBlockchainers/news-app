import React, {useEffect, useState} from 'react';
import {ContentHeader} from '@components';
import '../App.scss';
import {CCol, CRow, CButton} from '@coreui/react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import moment from 'moment';
import {API_URL, JWT_TOKEN} from '../config';

const Update = () => {
    let history = useHistory();

    useEffect(async () => {
        await register();
    }, []);

    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: '',
        country: '',
        last_update_date: ''
    });

    const [investor, setInvestor] = useState({
        wallet: '',
        sponsor: '',
        referral_code: '',
    });

    async function register() {
        try {
            const response = await axios.get(API_URL.fetch_investor_summary, {
                headers: {
                    'x-auth-token': JWT_TOKEN,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.status) {

                const _investor = response.data.data.investor
                const _profile = response.data.data.profile

                setInvestor({
                    wallet: _investor.wallet,
                    sponsor: _investor.sponsor,
                    referral_code: _investor.referral_code,
                })

                setProfile({
                    first_name: _profile.first_name,
                    last_name: _profile.last_name,
                    username: _profile.username,
                    email: _profile.email,
                    phone: _profile.phone,
                    country: _profile.country,
                    last_update_date: _profile.last_updated_on,
                })

            }
        } catch (error) {
            console.error(error);
        }
    }

    function redirectTo() {
        history.push('/dashboard/update')
        history.go(1)
    }

    return (
        <div>
            <ContentHeader title="View Profile" />

            <div
                style={{
                    background: '#323232',
                    padding: '40px',
                    borderRadius: '20px'
                }}
                className="d-flex flex-column"
            >
                <div className="profilepic1">
                    <div className="profilepic">
                        <img
                            src="/img/avatar.png"
                            height={100}
                            width={100}
                            alt=""
                        />
                    </div>
                    <div className="savebtnlg">
                        <CButton
                            color="warning"
                            variant="outline"
                            style={{
                                color: 'white'
                            }}
                            onClick={() => history.push('/dashboard/update')}
                        >
                            Edit
                        </CButton>
                    </div>
                </div>
                <div className="col-xs-12 d-flex flex-column-reverse">
                    <div>
                        <CButton
                            color="warning"
                            variant="outline"
                            style={{
                                color: 'white',
                                width: '100%',
                                marginTop: '10px'
                            }}
                            className="savebtn col-xs-12"
                            onClick={ redirectTo() }
                        >
                            Edit
                        </CButton>
                    </div>
                    <div>
                        <CRow>
                            <CCol
                                className="padding mt-3 col-12"
                            >
                                <h6 className="profile-label">My Wallet</h6>
                                <h5 className="profile-name">
                                    {investor.wallet}
                                </h5>
                            </CCol>
                            <CCol
                                className="padding mt-3 col-12"
                            >
                                <h6 className="profile-label">Sponsor</h6>
                                <h5 className="profile-name">
                                    {investor.sponsor}
                                </h5>
                            </CCol>
                            <CCol
                                className="padding mt-3 col-12"
                            >
                                <h6 className="profile-label">Referral Link</h6>
                                <h5 className="profile-name">
                                    https://coinspacex.co/join/{investor.referral_code}
                                </h5>
                            </CCol>
                        </CRow>
                        <hr/>
                        <CRow>
                            <CCol
                                md={6}
                                className="padding mt-3 col-md-6 col-sm-12"
                            >
                                <h6 className="profile-label">User Name</h6>
                                <h5 className="profile-name">
                                    {profile.username}
                                </h5>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol
                                md={6}
                                className="padding mt-3 col-md-6 col-sm-12"
                            >
                                <h6 className="profile-label">First Name</h6>
                                <h5 className="profile-name">
                                    {profile.first_name}
                                </h5>
                            </CCol>
                            <CCol
                                md={6}
                                className="padding mt-3 col-md-6 col-sm-12"
                            >
                                <h6 className="profile-label">Last Name</h6>
                                <h5 className="profile-name">
                                    {profile.last_name}
                                </h5>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol
                                md={6}
                                className="padding mt-3 col-md-6 col-sm-12"
                            >
                                <h6 className="profile-label">Email</h6>
                                <h5 className="profile-name">
                                    {profile.email}
                                </h5>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol
                                md={6}
                                className="padding mt-3 col-md-6 col-sm-12"
                            >
                                <h6 className="profile-label">Phone Number</h6>
                                <h5 className="profile-name">
                                    {profile.phone}
                                </h5>
                            </CCol>
                            <CCol
                                md={6}
                                className="padding mt-3 col-md-6 col-sm-12"
                            >
                                <h6 className="profile-label">Country</h6>
                                <h5 className="profile-name">
                                    {profile.country}
                                </h5>
                            </CCol>
                        </CRow>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
