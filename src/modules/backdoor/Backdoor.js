import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from '../../config';
import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

function Backdoor() {

    const history = useHistory()

    const [localVal, setLocalVal] = useState({
        has_error: false,
        error_message: '',
        wallet_address: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLocalVal({
            ...localVal,
            [name]: value
        });
    };

    async function login_function() {
        try {

            const wallet_id = localVal.wallet_address
            const url = API_URL.login + '?wallet=' + wallet_id;

            const response = await axios.get(url);
            if (response.data.status) {
                Cookies.set('jwt_token', response.data.data.token, {
                    expires: 1
                });
                history.push('/dashboard')
                history.go(1)
            } else {
                setLocalVal({
                    has_error: true,
                    error_message: response.data.message,
                })
            }
        } catch (error) {
            // setErr('no data');
            console.error(error);
            setLocalVal({
                has_error: true,
                error_message: "Connection error!",
            })
        }
    }
    useEffect(() => {

        // eslint-disable-next-line
    }, []);
    return (
        <div className=" sa-old min-vh-100  justify-content-center align-items-center  sa-loginclr ">
            <div className=" sa-previous m-3 p-2 justify-content-center align-items-center  ">
                <img
                    className="abhi "
                    src="/img/weblogin.png"
                    alt="loginimage"
                />
            </div>
            <div className="d-flex flex-column m-3 p-2  justify-content-center align-items-center ">
                <img
                    className="loginimg"
                    src="/img/favicon.png"
                    alt="coinspceximg"
                />
                <h5 className="sa-Logintext">Login to CoinSpaceX</h5>
                <div className="form-group w-100">
                    <div className="textOnInput ">
                        <label htmlFor="inputText">
                            Wallet Address
                        </label>
                        <input
                            className="form-control  sa-register-input"
                            type="text"
                            style={{background: '#323232'}}
                            id="wallet_address"
                            name="wallet_address"
                            onChange={handleChange}
                            value={localVal.wallet_address}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-warnin btn-mtx btn-block"
                    onClick={login_function}
                >
                    Click Here To Login
                </button>
                <p className="text-danger text-center">
                    { localVal.error_message }
                </p>
            </div>{' '}
        </div>
    );
}
export default Backdoor;
