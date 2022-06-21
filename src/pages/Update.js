import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import '../App.scss';
import {useHistory} from 'react-router-dom';
import {JWT_TOKEN, API_URL} from '../config';
import axios from 'axios';

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
    });

    const [profileError, setProfileError] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: '',
        country: '',
    });

    const [localVal, setLocalVal] = useState({
        has_error: false,
        error_message: '',
        setup_profile: false,
    })

    async function register() {
        try {
            const response = await axios.get(API_URL.get_profile, {
                headers: {
                    'x-auth-token': JWT_TOKEN,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.status) {
                setProfile({
                    first_name: response.data.data.first_name,
                    last_name: response.data.data.last_name,
                    email: response.data.data.email,
                    phone: response.data.data.phone,
                    country: response.data.data.country,
                    username: response.data.data.username,
                });

            }else{

                setLocalVal({
                    ...localVal,
                    setup_profile: true,
                    has_error: true,
                    error_message: "Setup CoinSpaceX Profile!",
                })

            }
        } catch (error) {
            console.error(error);
            setLocalVal({
                ...localVal,
                has_error: true,
                error_message: "Network error! Check you internet connection!",
            })
        }

    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const checkValidity = async (e) => {
        const {name, value} = e.target;
        if (name === 'email' || name === 'username') {
            try {
                const res = await axios.post("https://api.coinspacex.co/secure/validate_info", {
                    field: name,
                    field_value: value
                }, {
                    headers: {
                        'x-auth-token': JWT_TOKEN,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                });

                if(!res.data.status) {
                    setProfileError({
                        ...profileError,
                        [name]: res.data.message,
                    })
                }else{
                    setProfileError({
                        ...profileError,
                        [name]: '',
                    })
                }

            } catch (e) {
                console.error(e);
                setProfileError({
                    ...profileError,
                    [name]: '',
                })
            }
        }
        else if(name === 'phone') {
            let v = String(value).trim()
            if(v.split(' ').length > 1 || v.length !== 10) {
                setProfileError({
                    ...profileError,
                    phone: "Phone cannot have space and should be 10 digit without country code."
                })
            }else{
                setProfileError({
                    ...profileError,
                    phone: ''
                })
            }
        }

    };

    async function updateProfile() {
        try {
            let dataObj = {
                first_name: profile.first_name,
                last_name: profile.last_name,
                phone: profile.phone,
                country: profile.country,
                email: profile.email,
            };
            if(localVal.setup_profile) {
                dataObj['password'] = '';
                dataObj['username'] = profile.username;
            }

            const response = await axios.post(API_URL.set_profile, dataObj, {
                headers: {
                    'x-auth-token': JWT_TOKEN,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });

            if (response.data.status) {
                history.push('/dashboard/view');
                history.go(1);
            } else {
                setLocalVal({
                    ...localVal,
                    has_error: true,
                    error_message: response.data.message,
                })
            }
        } catch (error) {
            setLocalVal({
                ...localVal,
                has_error: true,
                error_message: "Network error! Check you internet connection!",
            })
        }
    }

    return (
        <div>
            <ContentHeader title="Update Profile" />
            <div className="layout-update s-container mb-5 ">
                <div>
                    <div className="container-profilepic card rounded-circle overflow-hidden">
                        <div className="photo-preview card-img w-100 h-100" />
                        <div className="middle-profilepic text-center card-img-overlay d-none flex-column justify-content-center">
                            <div className="text-profilepic text-success">
                                <div className="input--file">
                                    <span>
                                        <i className="fas fa-camera">
                                            {' '}
                                            <input
                                                name="Select File"
                                                type="file"
                                            />{' '}
                                        </i>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="textOnInput">
                                <label htmlFor="inputText">Email</label>
                                <input
                                    className="form-control sa-update_input"
                                    type="email"
                                    style={{background: '#323232'}}
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={checkValidity}
                                    value={
                                        profile.email
                                    }
                                />
                            </div>
                            <p className="text-warning" hidden={profileError.email === ''} ><small>{profileError.email}</small></p>
                        </div>

                        <div className="form-group col-md-12">
                            <div className="textOnInput">
                                <label htmlFor="inputText">Username</label>
                                <input
                                    className="form-control sa-update_input"
                                    type="text"
                                    style={{background: '#323232'}}
                                    id="username"
                                    name="username"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={checkValidity}
                                    value={
                                        profile.username
                                    }
                                />
                            </div>
                            <p className="text-warning" hidden={profileError.username === ''} ><small>{profileError.username}</small></p>
                        </div>


                        <div className="form-group col-md-6">
                            <div className="textOnInput">
                                <label htmlFor="inputText">First Name</label>
                                <input
                                    className="form-control sa-update_input"
                                    type="text"
                                    style={{background: '#323232'}}
                                    id="first_name"
                                    name="first_name"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={checkValidity}
                                    value={
                                        profile.first_name
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="textOnInput">
                                <label htmlFor="name">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control sa-update_input"
                                    style={{background: '#323232'}}
                                    id="name"
                                    name="last_name"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={checkValidity}
                                    value={
                                        profile.last_name
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="textOnInput">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control sa-update_input"
                                    style={{background: '#323232'}}
                                    id="phone"
                                    name="phone"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={checkValidity}
                                    value={profile.phone}
                                />
                            </div>
                            <p className="text-warning" hidden={profileError.username === ''} ><small>{profileError.username}</small></p>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="textOnInput">
                                <label htmlFor="country">Country</label>
                                <input
                                    type="text"
                                    className="form-control sa-update_input"
                                    style={{background: '#323232'}}
                                    id="country"
                                    name="country"
                                    autoComplete="off"
                                    onChange={handleChange}
                                    onBlur={checkValidity}
                                    value={profile.country}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-center h-100 justify-content-center align-items-center" style={{
                        marginBottom: '100px',
                    }}>
                        <button
                            type="submit"
                            onClick={updateProfile}
                            className="btn btn-warning text-white col-6 save-button">
                            Save
                        </button>
                        <p className="text-danger font-weight-normal py-3"> { localVal.error_message } </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
