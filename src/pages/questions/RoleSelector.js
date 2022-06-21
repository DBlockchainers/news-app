import React from "react";
import "./RoleSelector.css";
import Role1popover from "./Role1popover";
import Role2popover from "./Role2popover";
import Role3popover from "./Role3popover";

function RoleSelector() {
  return (
    <div>
      <div className="bg-primary">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div className="container-xl px-4">
                <div className="row justify-content-center">
                  <div className=" col-lg-7 mb-5 role-padding">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header justify-contnet-center text-center">
                        <h5 className="my-3 text-dark">
                          Select your desired role // What is your expertise?
                        </h5>
                        <p className="my-3 text-dark">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>

                      <div className="card-body p-lg-5 text-center mb-5">
                        <div className="d-inline-flex">
                          <a href="/newsreporter">
                            <div className="mb-3">
                              <button
                                type="button"
                                class="btn btn-labeled btn-info rounded-0 p-3"
                              >
                                News Reporter / Fact Checker
                              </button>
                            </div>
                          </a>
                          <span class="btn-label rounded-0">
                            <Role1popover />
                          </span>
                        </div>
                        <br></br>
                        <div className="d-inline-flex">
                          <a href="/shorter">
                            <div className="mb-3">
                              <button
                                type="button"
                                class="btn btn-labeled btn-info rounded-0 p-3 text-truncate"
                              >
                                Shorts Creator / Summary Writer
                              </button>
                            </div>
                          </a>
                          <span class="btn-label rounded-0">
                            <Role2popover></Role2popover>
                          </span>
                        </div>
                        <br></br>
                        <div className="d-inline-flex">
                          <a href="/translation">
                            <div className="mb-3">
                              <button
                                type="button"
                                class="btn btn-labeled btn-info rounded-0 p-3"
                              >
                                Translator / ProofReader
                              </button>
                            </div>
                          </a>
                          <span class="btn-label ">
                            <Role3popover></Role3popover>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSelector;
