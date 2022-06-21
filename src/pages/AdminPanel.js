import React, {useState, useEffect} from 'react';
import {ContentHeader} from '@components';
import icon1 from './newsapp-icons/icons/user dashboard icons/pencil-icon.png';
import icon2 from './newsapp-icons/icons/user dashboard icons/pencil-check.png';

const Workspace = () => {
    const [showTab, setshowTab] = useState(false);
    const showTAB = (value) => {
        setshowTab(value);
        console.log('val', value);
    };
    return (
        <div>
            <ContentHeader title="Workspace" />
            <div className="container">
                <div>
                    <div className="row">
                        <div className="col-5 scroll border1 p-2">
                            <div>
                                <h5 className="text-center fw-bold ">
                                    My Tasks
                                </h5>
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
                                        <div className=" text-break">
                                            <h5 className="px-2 font-weight-bold">
                                                Creating Shorts
                                            </h5>
                                            <p className="px-2">
                                                short task
                                                descriptionabdcefghigkmmop
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between px-2">
                                        <p>10:30, 02/06/2022</p>
                                        <a
                                            className="font-weight-bold text-white"
                                            onClick={() => {
                                                showTAB(true);
                                            }}
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
                                        <div className="text-break">
                                            <h5 className="px-2 font-weight-bold">
                                                Proofreading
                                            </h5>
                                            <p className="px-2 ">
                                                short task
                                                descriptionabdcefghigkmmop
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
                                        <div className="text-break">
                                            <h5 className="px-2 font-weight-bold">
                                                Creating Shorts
                                            </h5>
                                            <p className="px-2">
                                                short task
                                                descriptionabdcefghigkmmop
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
                                                short task
                                                descriptionabdcefghigkmmop
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
                        {showTab ? (
                            <div className="col-7 border1">
                                <div className="border border-1 my-1 p-2">
                                    <div className="d-flex align-items-center">
                                        <div className=" text-break ">
                                            <div className="d-flex  align-items-center justify-content-between px-2">
                                                {/* <nav aria-label="breadcrumb">
                                                    <ol class="breadcrumb">
                                                        <li class="breadcrumb-item">
                                                            Create Shorts
                                                        </li>
                                                        <li class="breadcrumb-item">
                                                            Proofread Shorts
                                                        </li>
                                                    </ol>
                                                </nav> */}
                                                <h5 className="fw-bold">
                                                    creating shorts /
                                                    proofreadshorts
                                                </h5>
                                                <img
                                                    src={icon1}
                                                    alt="icon-pic"
                                                    style={{
                                                        background: 'white'
                                                    }}
                                                    className="mx-2"
                                                ></img>
                                            </div>
                                            <p className="">
                                                long task description. Lorem
                                                ipsum dolor sit amet,
                                                consectetur adipiscing elit. Ut
                                                facilisis tempus venenatis,
                                                adipiscing. Habitant volutpat,
                                                ut molestie dignissim
                                                scelerisque morbi pretium.
                                                Viverra sapien accumsan, purus,
                                                non leo posuere scelerisque
                                                urna. Vitae vitae odio
                                                vestibulum ut. Lorem ipsum dolor
                                                sit amet, consectetur adipiscing
                                                elit. Ut facilisis tempus
                                                venenatis, adipiscing. Habitant
                                                volutpat, ut molestie dignissim
                                                scelerisque morbi pretium.
                                                Viverra sapien accumsan, purus,
                                                non leo posuere scelerisque
                                                urna. Vitae vitae odio
                                                vestibulum ut.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between px-2">
                                        <p>10:30, 02/06/2022</p>
                                        <a className="text-white" href="#">
                                            source
                                        </a>
                                    </div>
                                </div>
                                <div className="border border-1 my-1">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <img src="" alt="tags" />
                                        </div>
                                        <small>Select Tags</small>
                                        <div className="row">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small>Tag A</small>
                                                <small>Tag B</small>
                                                <small>Tag C</small>
                                                <small>Tag D</small>
                                                <small>Tag E</small>
                                                <small>Tag F</small>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <small>Tag G</small>
                                                <small>Tag H</small>
                                                <small>Tag I</small>
                                                <small>Tag J</small>
                                                <small>Tag K</small>
                                                <small>Tag L</small>
                                            </div>
                                        </div>
                                        <div>
                                            <img
                                                src="https://icon-library.com/images/white-search-icon-png/white-search-icon-png-19.jpg"
                                                width="20px"
                                                height="20px"
                                                alt="search"
                                            />
                                        </div>
                                        <small>Search for Tags</small>
                                    </div>
                                </div>
                                <div className="border border-1 my-1">
                                    <div className="d-flex align-items-center text-center p-3">
                                        Editor
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Workspace;
