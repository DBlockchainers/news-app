import React from 'react';

function Register() {
    return (
        <div className="d-flex align-items-center justify-content-center mt-5">
            <div className="register-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1">
                            <b>Admin</b>LTE
                        </a>
                    </div>
                    <div className="card-body">
                        {/* <p className="login-box-msg">
                            Register a new membership
                        </p> */}
                        <form>
                            {/* <div className="row"> */}
                            {/* <div className="col-6"> */}
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>
                            {/* </div> */}
                            {/* <div className="col-6"> */}
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                            {/* </div> */}
                            {/* </div> */}
                            {/* <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Full Name"
                                />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </div> */}
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-phone"></span>
                                    </div>
                                </div>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-calendar"></span>
                                    </div>
                                </div>
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div>
                                <select
                                    class="form-select"
                                    aria-label="Default select example"
                                >
                                    <option selected>Select Country</option>
                                    <option value="1">India</option>
                                    <option value="2">USA</option>
                                    <option value="3">China</option>
                                </select>
                            </div>

                            <div className="input-group mb-3"></div>
                            {/* <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-venus-mars"></span>
                                    </div>
                                </div> */}

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Retype password"
                                />
                            </div>

                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input
                                            type="checkbox"
                                            id="agreeTerms"
                                            name="terms"
                                            value="agree"
                                        />
                                        <label for="agreeTerms">
                                            I agree to the <a href="#">terms</a>
                                        </label>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* <div className="social-auth-links text-center">
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2"></i>
                                Sign up using Facebook
                            </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2"></i>
                                Sign up using Google+
                            </a>
                        </div> */}
                        <a href="\login" className="text-center">
                            I already have a membership
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
