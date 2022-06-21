import React from 'react';
// import './QforNewsReporter.css';

function QforNewsReporter() {
    return (
        <div>
            <div className="text-center bg-primary p-5">
                <h4 className="mb-3">Role description </h4>
                <p>
                    As a News Reporter / Fact checker, you will be responsible
                    to provide the latest, trending and verified news from their
                    official sources at the earliest, We highly consider
                    candidates who have an understanding of the crypto world and
                    knowledge about how the Crypto and blockchain world
                    functions. As a News Reporter, you will have to follow
                    verified Twitter accounts of numerous crypto orgs and
                    entities and also be aware of apps and websites like
                    Coinmarketcap, alien etc. As a Fact Checker, you will be
                    responsible to check the validity/source of truth of the
                    News supplied.
                </p>
            </div>
            <div className="container">
                <h4 className="my-4">Screening Questions</h4>
                <div>
                    <p>
                        1. Do you have any experience as a Reporter /
                        Fact-Checker?
                    </p>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Yes
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            No
                        </label>
                    </div>
                    <div className="form-group my-2">
                        <input
                            type="name"
                            name="name"
                            class="form-control"
                            id="name"
                            placeholder="If yes, Tell us about your experience"
                        />
                    </div>
                </div>
                <div className="my-3">
                    <p>2. Can you Report the News as well as Fact Check?</p>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Yes, I can do both
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            No, I can only Report
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            No, I can only Fact-check
                        </label>
                    </div>
                </div>
                <div className="my-4">
                    <p>3. Can you Report the News as well as Fact Check?</p>
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
                    <p>4. What makes you a good fit at DBCN? </p>
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
                        <label class="form-label" for="customFile">
                            Please Upload Your Resume
                        </label>
                        <input
                            type="file"
                            class="form-control"
                            id="customFile"
                        />
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
                                <button
                                    type="button"
                                    class="btn btn-primary rounded-0"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QforNewsReporter;
