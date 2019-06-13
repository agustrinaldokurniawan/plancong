import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
    render() {
        return (
            <div style={{
                height: "75vh",
                width: "60vh",
                background: "-webkit-linear-gradient(top, #7579ff, #b224ef)",
                borderRadius: "10px"
            }}
                className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Plan</b> your holiday with {" "}
                            <span style={{
                                fontFamily: "monoscape"
                            }}>
                                PLANCONG
                            </span>

                        </h4>
                        <p className="flow-text white-text text-darken-1">
                            Spent your time in fun holiday time
                        </p>
                        <br />
                        <div className="col s6">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Register
                                </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text">
                                Log In
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;