import React from 'react';
import './QforShorter.css';

function QforShorter() {
    return (
        <div>
            <div>
                <div className="text-center bg-primary p-5">
                    <h4 className="mb-3">Role description </h4>
                    <p>
                        as a Shorts Creator / Summary Writer, you will be
                        provided with News articles about 1000 words long and
                        you will have to summarize the article and create a
                        comprehensive summary of that news in around 100-150
                        words with all the facts, details and most of the
                        information staying relevant.
                    </p>
                </div>
                <div className="container">
                    <h4 className="my-4">Screening Questions</h4>
                    <div className="my-4">
                        <p>
                            1. Do you have any experience as a Shorts Creator /
                            Summary Writer?
                        </p>
                        <div>
                            <input
                                type="radio"
                                id="defaultRadio"
                                name="example2"
                            />
                            <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                                Yes
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="defaultRadio"
                                name="example2"
                            />
                            <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                                No
                            </label>
                        </div>
                    </div>

                    <div className="my-4">
                        <p>
                            2. Do you have any experience as a Shorts Creator /
                            Summary Writer?
                        </p>
                        <div className="form-group">
                            <input
                                type="name"
                                name="name"
                                class="form-control"
                                id="name"
                                placeholder="Type here"
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <p>3.What makes you a good fit at DBCN? </p>
                        <div className="form-group">
                            <input
                                type="name"
                                name="name"
                                class="form-control"
                                id="name"
                                placeholder="Type here"
                            />
                        </div>
                        <div className="form-group my-4 ">
                            <label class="form-label" for="customFile" style={{fontWeight:"400"}}>
                                Please Upload Your Resume
                            </label>
                            <input
                                type="file"
                                class="form-control"
                                id="customFile"
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <a href="/role">
                                    <button
                                        type="button"
                                        class="btn btn-primary rounded-0"
                                    >
                                        Back
                                    </button>
                                </a>
                            </div>
                            <div>
                                <a href="/parashorts">
                                    <button
                                        type="button"
                                        class="btn btn-primary rounded-0"
                                    >
                                        Next
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QforShorter;
