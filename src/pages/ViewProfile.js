/* eslint-disable jsx-a11y/anchor-is-valid */

import {ContentHeader} from '@components';
import React from 'react';
import user from './newsapp-icons/icons/admin profile icons/icons8-user-904.png';
import verified from './newsapp-icons/icons/admin profile icons/icons8-verified-account-30 1.png';
import medium from './newsapp-icons/icons/user profile icons/Medium.png';
import google from './newsapp-icons/icons/user profile icons/icons8-google-60 1.png';
import linkedin from './newsapp-icons/icons/user profile icons/icons8-linkedin-60 1.png';
import facebook from './newsapp-icons/icons/user profile icons/icons8-facebook-60 1.png';

const ViewProfile = () => {
    return (
        <div>
            <ContentHeader title="View Profile" />

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="row mb-3 ">
                            <div className="col-5 ">
                                <div class="bg-info p-2">
                                    <p>UID</p>
                                    <div class="inner text-center">
                                        <img
                                            src={user}
                                            height="50px"
                                            width="50px"
                                        ></img>
                                    </div>
                                    <p className="text-center">Role</p>
                                    <p className="text-center">Translator</p>
                                </div>
                            </div>
                            <div className="col-7">
                                <div class="bg-info p-2">
                                    <div class="inner">
                                        <div>
                                            <h3>23</h3>
                                            <p>Shorts Translated</p>
                                        </div>
                                        <div className="text-right">
                                            <h3>49</h3>
                                            <p>Translations Proofread</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="bg-info p-2">
                                <h4 className="text-center">
                                    Personal Details
                                </h4>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>First Name</p>
                                        <p>John</p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <p>Last Name</p>
                                        <p>Doe</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>Email Id</p>
                                        <p>Johndoe@xmail.com</p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <p>Phone Number</p>
                                        <p>+91 1234567890</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>Current Password</p>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div>************</div>
                                            <div>
                                                <img
                                                    src="https://www.kindpng.com/picc/m/377-3773045_hide-and-show-password-icon-hd-png-download.png"
                                                    height="12px"
                                                    width="12px"
                                                ></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 text-center">
                                        <p>Gender</p>
                                        <p>Male</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        <p>Date of Birth</p>
                                        <p>13/05/1993</p>
                                    </div>
                                    <div className="col-6 text-center">
                                        <p>Country</p>
                                        <p>India</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 text-center">
                                        Languages Known
                                    </div>
                                    <div className="col-6 text-center">
                                        Hindi,English
                                    </div>
                                </div>
                                <div className="text-right mr-5">
                                    <a
                                        href="#"
                                        className="text-white font-weight-600"
                                    >
                                        EDIT
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="bg-info p-3 mb-3">
                            <h5 className="text-center">
                                User Identification Details
                            </h5>
                            <div>
                                <h6>Aadhar Card</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <p>johndoeaadhar.pdf</p>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="d-flex">
                                                    <p>verified</p>
                                                    <img
                                                        src={verified}
                                                        height="20px"
                                                        width="20px"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <a
                                                    href="#"
                                                    className="text-white"
                                                >
                                                    Edit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6>Pan Card</h6>
                                <div className="row">
                                    <div className="col-6">
                                        <p>johndoepan.pdf</p>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="d-flex">
                                                    <p>verified</p>
                                                    <img
                                                        src={verified}
                                                        height="20px"
                                                        width="20px"
                                                    ></img>
                                                </div>
                                            </div>
                                            <div className="col-6 ">
                                                <a
                                                    href="#"
                                                    className="text-white"
                                                >
                                                    Edit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h4>Bank Account Details</h4>
                            <div className='py-3'>
                                <div className="row">
                                    <div className="col-6">Bank Name</div>
                                    <div className="col-6">Bank Name</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        Bank Account Number
                                    </div>
                                    <div className="col-6">
                                        Bank Account Number
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        Confirm Account Number
                                    </div>
                                    <div className="col-6">
                                        Confirm Account Number
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        Account Holder Name
                                    </div>
                                    <div className="col-6">
                                        Account Holder Name
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">IFSC Code</div>
                                    <div className="col-6">IFSC Code</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">UPI ID</div>
                                    <div className="col-6">UPI ID</div>
                                </div>
                            </div>
                            <br></br>
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-flex">
                                        <p>verified</p>
                                        <img
                                            src={verified}
                                            height="20px"
                                            width="20px"
                                        ></img>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <a href="#" className="text-white">
                                                EDIT
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="#" className="text-white">
                                                SAVE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5">
                                <div class="bg-info p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="text-white">
                                            Tasks
                                        </a>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.RYvrN6HFOwje1ZIetR8CNwHaHa?pid=ImgDet&rs=1"
                                            width="15px"
                                            height="15px"
                                        ></img>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="text-white">
                                            Earnings
                                        </a>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.RYvrN6HFOwje1ZIetR8CNwHaHa?pid=ImgDet&rs=1"
                                            width="15px"
                                            height="15px"
                                        ></img>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="text-white">
                                            Dashboard
                                        </a>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.RYvrN6HFOwje1ZIetR8CNwHaHa?pid=ImgDet&rs=1"
                                            width="15px"
                                            height="15px"
                                        ></img>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="text-white">
                                            WorkSpace
                                        </a>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.RYvrN6HFOwje1ZIetR8CNwHaHa?pid=ImgDet&rs=1"
                                            width="15px"
                                            height="15px"
                                        ></img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-7">
                                <div class="bg-info p-2">
                                    <a href="#">
                                        <img src={medium} className="px-2" />
                                        connect
                                    </a>
                                    <br></br>
                                    <a href="#">
                                        <img src={google} className="px-2" />
                                        connect
                                    </a>
                                    <br></br>
                                    <a href="#">
                                        <img src={linkedin} className="px-2" />
                                        connect
                                    </a>
                                    <br></br>
                                    <a href="#">
                                        <img src={facebook} className="px-2" />
                                        connect
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
