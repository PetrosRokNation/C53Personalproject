import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            userName: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit_Sucess = this.onSubmit_Sucess.bind(this);
    }

    render() {
        return (
            <div>
                <div className="main-login main-center">
                    <form className="" method="post" action="#">



                        <div className="form-group">
                            <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your Email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>



                        <div className="form-group">
                            <label htmlFor="password" className="cols-sm-2 control-label">Password</label>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your Password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                            <div className="cols-sm-10">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="confirm"
                                        id="confirm"
                                        placeholder="Confirm your Password"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group ">
                            <button
                                type="button"
                                id="button"
                                className="btn btn-primary btn-lg btn-block login-button"
                                onClick={this.onSubmit}
                            >
                                Login
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Login;