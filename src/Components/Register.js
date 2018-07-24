import React from 'react';
import './Register.css';
import RegisterApi from '../api/RegisterApi';

class Register extends React.Component {
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

    handleChange(e) {
        let key = e.target.name;
        let val = e.target.value;
        this.setState({
            ...this.state,
            [key]: val,
        })
    }

    onSubmit(e) {
        const registerData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password
        }
        RegisterApi.Register(registerData, this.onSubmit_Sucess, this.onError);
    }

    onSubmit_Sucess(resp){
        console.log(resp);
    }
    
    onError(err) {
        console.log(err)
    }

    render() {
        return (
            <div className="registerBody">
                <div className="container">
                    <div className="row main">
                        <div className="main-login main-center">
                            <h5>Sign up once and watch any of our accounts live.</h5>
                            <form className="" method="post" action="#">

                                <div className="form-group">
                                    <label htmlFor="firstName" className="cols-sm-2 control-label">First Name</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="firstName"
                                                id="firstName"
                                                placeholder="Enter your first Name"
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name" className="cols-sm-2 control-label">Last Name</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lastName"
                                                id="lastName"
                                                placeholder="Enter your Name"
                                                value={this.state.lastName}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

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
                                    <label htmlFor="username" className="cols-sm-2 control-label">Username</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="userName"
                                                id="userName"
                                                placeholder="Enter your Username"
                                                value={this.state.userName}
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
                                        Register
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
