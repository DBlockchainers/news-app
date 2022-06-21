import React from 'react';
import './QforTranslator.css';

function QforTranslator() {
    return (
        <div>
            <div className="text-center bg-primary p-5">
                <h4 className="mb-3">Role description </h4>
                <p>
                    As a Translator, you will be provided with a 100-150 words
                    news paragraph, you will have to translate that News into
                    your selected native language with proficient grammar and no
                    errors and also proofread other people's work in the same
                    language.
                </p>
            </div>
            <div className="container">
                <div className="my-4">
                    <h4>
                        Select The Languages in which you can Translate /
                        Proofreader
                    </h4>
                    <p>
                        <h6>Note- You can at max select 2 languages</h6>
                    </p>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Hindi
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Bengali
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Marathi
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Tamil
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Gujarati
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Kannada
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Malayalam
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Punjabi
                        </label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="defaultCheckbox"
                            name="example2"
                        />
                        <label for="defaultCheckbox" className="mx-2" style={{fontWeight:"400"}}>
                            Odia
                        </label>
                    </div>
                </div>
                <h4 className="my--4">Screening Questions</h4>
                <div className="my-4">
                    <p>1. What is your level of Fluency in Language A</p>
                    <div>
                        <input type="radio" id="defaultRadio" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Beginner
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Intermediate
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Fluent
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Expert
                        </label>
                    </div>
                </div>
                <div className="my-4">
                    <p>2. What is your level of Fluency in Language B</p>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Beginner
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Intermediate
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Fluent
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Expert
                        </label>
                    </div>
                </div>

                <div className="my-4">
                    <p>3. Can you Translate & Proofread</p>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Yes, I can do both
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            I can only Translate
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            I can only Proofread
                        </label>
                    </div>
                </div>
                <div className="my-4">
                    <p>4. How much experience do you have as a Translator? </p>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            0-1
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            2-3
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            4-5
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="defaultRadio" name="example2" />
                        <label for="defaultRadio" className="mx-2" style={{fontWeight:"400"}}>
                            Above 5
                        </label>
                    </div>
                </div>

                <div className="my-4">
                    <p>
                        5.Can you tell us a little bit about Cryptocurrencies,
                        Blockchain, NFTs etc?
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
                    <p>6.What makes you a good fit at DBCN? </p>
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
                <div className="form-group my-4 ">
                    <label class="form-label" for="customFile" style={{fontWeight:"400"}}>
                        Please Upload Your Resume
                    </label>
                    <input
                        type="file"
                        class="form-control p-2"
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
                        <a href="/paratranslator">
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
    );
}

export default QforTranslator;
