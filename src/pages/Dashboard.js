import React from 'react';
import {ContentHeader} from '@components';
import './Dashboard.css';
import icon1 from './newsapp-icons/icons/user dashboard icons/pencil-icon.png';
import icon2 from './newsapp-icons/icons/user dashboard icons/pencil-check.png';

const Dashboard = () => {
    return (
        <div>
            <ContentHeader title="Dashboard" />
            <div className="row">
                <div className="col-5 scroll p-2 border1 mx-1">
                    <div>
                        <h5 className="text-center"> POOL</h5>
                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Create Shorts
                                    </h5>
                                    <p className="px-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut facilisis tempus
                                        venenatis, adipiscing. Habitant
                                        volutpat, ut molestie dignissim
                                        scelerisque morbi pretium. Viverra
                                        sapien accumsan, purus, non leo posuere
                                        scelerisque urna. Vitae vitae odio
                                        vestibulum ut.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    Accept Task
                                </a>
                            </div>
                        </div>

                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon2}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Proofread Shorts
                                    </h5>
                                    <p className="px-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut facilisis tempus
                                        venenatis, adipiscing. Habitant
                                        volutpat, ut molestie dignissim
                                        scelerisque morbi pretium. Viverra
                                        sapien accumsan, purus, non leo posuere
                                        scelerisque urna. Vitae vitae odio
                                        vestibulum ut.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    Accept Task
                                </a>
                            </div>
                        </div>

                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Create Shorts
                                    </h5>
                                    <p className="px-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut facilisis tempus
                                        venenatis, adipiscing. Habitant
                                        volutpat, ut molestie dignissim
                                        scelerisque morbi pretium. Viverra
                                        sapien accumsan, purus, non leo posuere
                                        scelerisque urna. Vitae vitae odio
                                        vestibulum ut.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    Accept Task
                                </a>
                            </div>
                        </div>

                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon2}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Proofread Shorts
                                    </h5>
                                    <p className="px-2">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Ut facilisis tempus
                                        venenatis, adipiscing. Habitant
                                        volutpat, ut molestie dignissim
                                        scelerisque morbi pretium. Viverra
                                        sapien accumsan, purus, non leo posuere
                                        scelerisque urna. Vitae vitae odio
                                        vestibulum ut.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    Accept Task
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 scroll border1 p-2">
                    <div>
                        <h5 className="text-center fw-bold ">My Tasks</h5>
                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div className=' text-break'>
                                    <h5 className="px-2 font-weight-bold">
                                        Creating Shorts
                                    </h5>
                                    <p className="px-2">
                                        short task descriptionabdcefghigkmmop
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    continue
                                </a>
                            </div>
                        </div>

                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon2}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div className='text-break'>
                                    <h5 className="px-2 font-weight-bold">
                                        Proofreading
                                    </h5>
                                    <p className="px-2 ">
                                        short task descriptionabdcefghigkmmop
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    continue
                                </a>
                            </div>
                        </div>

                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div className='text-break'>
                                    <h5 className="px-2 font-weight-bold">
                                        Creating Shorts
                                    </h5>
                                    <p className="px-2">
                                        short task descriptionabdcefghigkmmop
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    continue
                                </a>
                            </div>
                        </div>

                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon2}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Proofreading
                                    </h5>
                                    <p className="px-2 text-break">
                                        short task descriptionabdcefghigkmmop
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between px-2">
                                <p>10:30, 02/06/2022</p>
                                <a
                                    href="#"
                                    className="font-weight-bold text-white"
                                >
                                    continue
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 scroll border1 p-2 mx-1">
                    <div>
                        <h5 className="text-center">Tasks Completed</h5>
                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Shorts Created
                                    </h5>
                                    <p className="px-2">
                                        Shortened article X at 09:15
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Proofreading
                                    </h5>
                                    <p className="px-2">
                                        proofread short X in lang1 & lang 2 at
                                        09:15
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Shorts Created
                                    </h5>
                                    <p className="px-2">
                                        Shortened article X at 09:15
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Proofreading
                                    </h5>
                                    <p className="px-2">
                                        proofread short X in lang1 & lang 2 at
                                        09:15
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Shorts Created
                                    </h5>
                                    <p className="px-2">
                                        Shortened article X at 09:15
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-1 my-1">
                            <div className="d-flex align-items-center">
                                <div>
                                    <img
                                        src={icon1}
                                        alt="icon-pic"
                                        style={{background: 'white'}}
                                        className="mx-2"
                                    ></img>
                                </div>

                                <div>
                                    <h5 className="px-2 font-weight-bold">
                                        Proofreading
                                    </h5>
                                    <p className="px-2">
                                        proofread short X in lang1 & lang 2 at
                                        09:15
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="font-weight-bold text-right text-white"
                    >
                        Know More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
