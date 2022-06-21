/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import './withdraw.css';
import {ContentHeader} from '@components';
import {JWT_TOKEN, API_URL} from '../config';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const WithdrawNow = () => {
    const history = useHistory()
    const [showOtp, setshowOtp] = useState(false);
    const [showConW, setshowConW] = useState(true);
    const showOTP = () => {
        setshowOtp(true);
        setshowConW(false);
    };

    // Handling Data For Withdraw
    const [userData, setUserData] = useState({
        amount: '',
        otp: '',
        dsf_price: 0,
        receiving_amount: 0,
        commission: 0
    });

    const [earnings, setEarnings] = useState({
        total_earned: 0,
        total_withdrawn: 0,
        total_balance: 0,
        allowed: false,
        has_error: false,
        error_message: '',
        processing: false,
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value
        });

        if (name === 'amount') {
            setUserData({
                ...userData,
                commission: parseFloat(value) * 0.1,
                receiving_amount: parseFloat(((parseFloat(value) * 0.9) / userData.dsf_price).toFixed(2)),
                amount: value,
            })
        }

    };

    async function fetchEarnings() {
        try {

            const res = await axios.get(
                API_URL.earning_summary,
                {
                    headers: {
                        'x-auth-token': JWT_TOKEN,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                }
            )

            if (res.data.status) {
                let bal = parseFloat((res.data.data.total_earning - res.data.data.withdrawn).toFixed(2))
                setEarnings({
                    total_earned: res.data.data.total_earning,
                    total_balance: bal,
                    total_withdrawn: res.data.data.withdrawn,
                    allowed: bal >= 30
                })
            }

        } catch (e) {
            console.log(e)
        }

    }


    async function withdrawFunction() {
        let _amount = parseFloat(userData.amount)
        if (_amount < 30) {
            setEarnings({
                ...earnings,
                has_error: true,
                error_message: "Min. withdrawal amount is $30.",
            })
            return false;
        }

        if (_amount > earnings.total_balance) {
            setEarnings({
                ...earnings,
                has_error: true,
                error_message: "Insufficient Balance!",
            })
            return false;
        }


        try {
            const newObjAmount = {
                amount: userData.amount
            };
            const response = await axios.post(
                API_URL.withdraw_now,
                newObjAmount,
                {
                    headers: {
                        'x-auth-token': JWT_TOKEN,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.status) {
                showOTP();
            } else {
                setEarnings({
                    ...earnings,
                    has_error: true,
                    error_message: response.data.message,
                })
            }
        } catch (error) {
            setEarnings({
                ...earnings,
                has_error: true,
                error_message: "Connection error. Check your network!",
            })
        }
    }

    async function withdrawOverallFunction() {
        if(earnings.processing) {
            return false;
        }

        let _amount = parseFloat(userData.amount)
        if (_amount < 30) {
            setEarnings({
                ...earnings,
                has_error: true,
                error_message: "Min. withdrawal amount is $30.",
            })
            return false;
        }

        if (_amount > earnings.total_balance) {
            setEarnings({
                ...earnings,
                has_error: true,
                error_message: "Insufficient Balance!",
            })
            return false;
        }

        if ( userData.otp === '' || userData.otp.length !== 6 ) {
            setEarnings({
                ...earnings,
                has_error: true,
                error_message: "Provide valid OTP",
            })
            return false;
        }

        setEarnings({
            ...earnings,
            processing: true,
            error_message: "Withdrawal processing. It may take few seconds. Please wait...",
        })

        await checkOTP()
    }

    async function checkOTP() {
        try {
            const newObjOTP = {
                otp: userData.otp
            };
            const response2 = await axios.post(API_URL.withdraw_otp, newObjOTP, {
                headers: {
                    'x-auth-token': JWT_TOKEN,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });

            if (response2.data.status) {
                setEarnings({
                    ...earnings,
                    has_error: false,
                    error_message: 'Withdrawal process complete. Please check our wallet.',
                    processing: false,
                })
                history.push('/dashboard/withdrawhistory');
            } else {
                setEarnings({
                    ...earnings,
                    has_error: true,
                    error_message: response2.data.message,
                    processing: false,
                })
            }
        } catch (error) {
            setEarnings({
                ...earnings,
                has_error: true,
                error_message: "Connection error. Check your network!",
                processing: false,
            })
        }
    }

    useEffect(async () => {
        await fetchEarnings();
        try {
            const response = await axios.get(API_URL.dsf_price);
            if(response.data.status) {
                setUserData({
                    ...userData,
                    dsf_price: response.data.data.price_in_usd,
                })
            }
        } catch (e) {
            console.error(e)
        }

    }, []);



    return (
        <div>
            <ContentHeader title="Withdraw" />
            <div className="row sa-new d-flex justify-content-center align-items-center sa-withdraw">
                <div className="col-12 col-md-8">
                    <div className="row mt-3">
                        <div className="col-12">
                            <div
                                className="info-box"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <span className="info-box-icon  ">
                                    <img
                                        src="/img/paidblack.png"
                                        alt="paidblack"
                                    />
                                </span>

                                <div className="info-box-content">
                                    <h6 className="sa-earning-color">
                                        ${ earnings.total_earned }
                                    </h6>
                                    <h6 className="">Total Earning</h6>
                                </div>
                                {/*     <!-- /.info-box-content --> */}
                            </div>
                        </div>
                        <div className="col-12">
                            <div
                                className="info-box"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <span className="info-box-icon  ">
                                    <img
                                        src="/img/shoppingcartblack.png"
                                        alt="shopping"
                                    />
                                </span>

                                <div className="info-box-content">
                                    <h6 className="sa-withdraw-color">${ earnings.total_withdrawn }</h6>
                                    <h6 className="">Total Withdrawn</h6>
                                </div>
                                {/*     <!-- /.info-box-content --> */}
                            </div>
                        </div>
                        <div className="col-12">
                            <div
                                className="info-box"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                <span className="info-box-icon  ">
                                    <img
                                        src="/img/accountbalance.png"
                                        alt="accountbalance"
                                    />
                                </span>

                                <div className="info-box-content">
                                    <h6 className="sa-account-color">${ earnings.total_balance }</h6>
                                    <h6 className="">Current Balance</h6>
                                </div>
                                {/*     <!-- /.info-box-content --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <p className=" sa-withdrawheading">Withdrawal form</p>
                    <div className="text-center">
                        <div className="form-group col-sm-12 ">
                            <div className="sa-textOnInput form-inn">
                                <label htmlFor="inputText sa-form-textt">
                                    Enter Amount (in BUSD)
                                </label>
                                <input
                                    className="form-control sa-register-input "
                                    type="text"
                                    style={{background: '#323232'}}
                                    id="amount"
                                    name="amount"
                                    onChange={handleChange}
                                    value={userData.amount}
                                />
                            </div>
                        </div>
                        <div className="col-sm-3" />
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-4">Amount: ${userData.amount}</div>
                        <div className="col-6 col-md-4">
                            Commission (10%): ${userData.commission}
                        </div>
                        <div className="col-12 col-md-4">
                            <p className="text-warning font-weight-bold">
                                You Receive: {userData.receiving_amount} DSF
                            </p>
                        </div>
                    </div>
                    {showConW === true ? (
                        <div className="text-center">
                            <button
                                type="button"
                                className="btn btn-outline-primary sa-withdraw_btn text-center"
                                onClick={withdrawFunction}
                            >
                                Confirm Withdrawal
                            </button>
                            <p className="text-danger py-3">{earnings.error_message}</p>
                        </div>
                    ) : null}
                    {showOtp === true ? (
                        <div>
                            <div className="form-group mt-4 col-sm-12 ">
                                <div className="sa-textOnInput form-inn">
                                    <label htmlFor="inputText sa-form-textt">
                                        Enter OTP
                                    </label>
                                    <input
                                        className="form-control  sa-register-input "
                                        type="text"
                                        style={{background: '#323232'}}
                                        id="otp"
                                        name="otp"
                                        onChange={handleChange}
                                        value={userData.otp}
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    onClick={withdrawOverallFunction}
                                    className="btn btn-outline-primary sa-withdraw_btn2 text-center"
                                >
                                    Submit
                                </button>
                                <p className="text-danger py-3">{earnings.error_message}</p>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default WithdrawNow;
